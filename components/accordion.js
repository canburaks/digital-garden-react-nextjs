import React from "react"
import Link from "next/link"
import { styled, keyframes } from "../styles/stitches.config"
import { violet, blackA, mauve } from "@radix-ui/colors"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { createParser, ErrorCode, TagType } from "htmljs-parser"
import parse from "html-react-parser"
import { Text, FlexBox } from "../styles/atoms"

const slideDown = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
})

const slideUp = keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
})

const StyledAccordion = styled(AccordionPrimitive.Root, {
    borderRadius: 6,
    width: 300,
    backgroundColor: mauve.mauve6,
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
})

const StyledItem = styled(AccordionPrimitive.Item, {
    overflow: "hidden",
    marginTop: 1,

    "&:first-child": {
        marginTop: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    "&:last-child": {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },

    "&:focus-within": {
        position: "relative",
        zIndex: 1,
        boxShadow: `0 0 0 2px ${mauve.mauve12}`,
    },
})

const StyledHeader = styled(AccordionPrimitive.Header, {
    all: "unset",
    display: "flex",
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
    all: "unset",
    fontFamily: "inherit",
    backgroundColor: "transparent",
    padding: "0 20px",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 1px 0 ${mauve.mauve6}`,
    '&[data-state="closed"]': { backgroundColor: "white" },
    '&[data-state="open"]': { backgroundColor: "white" },
    "&:hover": { backgroundColor: mauve.mauve2 },
})

const StyledContent = styled(AccordionPrimitive.Content, {
    overflow: "hidden",
    fontSize: 15,
    color: mauve.mauve11,
    backgroundColor: mauve.mauve2,

    '&[data-state="open"]': {
        animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
        animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
})

const StyledContentText = styled("div", {
    padding: "15px 20px",
})

const StyledChevron = styled(ChevronDownIcon, {
    color: violet.violet10,
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    "[data-state=open] &": { transform: "rotate(180deg)" },
})

// Exports
export const Accordion = StyledAccordion
export const AccordionItem = StyledItem
export const AccordionTrigger = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <StyledHeader>
            <StyledTrigger {...props} ref={forwardedRef}>
                {children}
                <StyledChevron aria-hidden />
            </StyledTrigger>
        </StyledHeader>
    )
)
export const AccordionContent = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <StyledContent {...props} ref={forwardedRef}>
            <StyledContentText>{children}</StyledContentText>
        </StyledContent>
    )
)

export const AccordionUI = (props) => {
    function traverse(node, index) {
        var ix = -1
        function getAnchorText(mynode) {
            console.log("Searching anchor text")
            // Brings the innter text of first
            let text = null
            if (mynode && mynode.children) {
                const anchor = mynode?.children?.find((x) => x.name === "a")
                if (anchor) {
                    text = anchor?.children[0]?.data
                    console.log("anchor found", anchor.children[0].data)
                    return anchor.children[0].data
                } else {
                    for (let i = 0; i < mynode.children.length; i++) {
                        const c = mynode.children[i]
                        const ch = getAnchorText(c)
                        if (ch && ch.length) return ch
                    }
                }
            }
        }
        function recurse(domNode) {
            console.log("DOMNODE: ", domNode.name)
            if (
                !domNode.children ||
                domNode.children.length === 0 ||
                domNode.type === "text"
            ) {
                if (domNode.data === "\n") {
                    return "\n"
                } else if (domNode.name === "h3") {
                    return (
                        <Text as={"h3"} color="light">
                            {domNode.data}
                        </Text>
                    )
                } else return <div>{domNode.data}</div>
            } else if (domNode.name === "li") {
                const hasInnerList = (el) => el.name === "ul"
                console.log("éINNNER", domNode?.next)
                const innerList = domNode?.next?.children?.find(hasInnerList)
                console.log("INNERLIST", innerList)
                if (innerList) {
                    const text = getAnchorText(innerList)
                    console.log("TEXT", text)
                    if (innerList) {
                        return (
                            <AccordionItem value={`item-${ix}`}>
                                <AccordionTrigger>
                                    {domNode?.children[0]?.children[0]?.data}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {innerList.children.map((c) => recurse(c))}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    } else
                        return (
                            <div as={"li"} color="light">
                                {domNode.children.map((c) => recurse(c))}
                            </div>
                        )
                }
            } else if (domNode.name === "ul") {
                if (domNode?.parent?.name === "li") {
                    ix += 1
                    console.log("ACCC")
                    return <ul>{domNode.data}</ul>
                } else
                    return (
                        <ul>
                            {domNode.children.map((childNode) => {
                                return recurse(childNode)
                            })}
                        </ul>
                    )
            } else {
                return (
                    <Text as={"h3"} color="light">
                        {domNode.children.map((c) => recurse(c))}
                    </Text>
                )
            }
        }
        return recurse(node, index)
    }
    const parsed = parse(props.data[0], {
        replace: (domNode) => {
            console.log("domNode", domNode)
            return traverse(domNode)
            // if (domNode.attribs && domNode.name === "h3") {
            //     return (
            //         <li>
            //             <Text as={"h3"} color="light">
            //                 replaced
            //             </Text>
            //         </li>
            //     )
            // }
            // if (domNode.attribs && domNode.name === "li") {
            //     for (const child of domNode.children) {
            //         console.log("child", child)
            //     }

            //     //console.log("children", domNode.children)
            //     //console.log("parent", domNode.parent)
            //     return (
            //         <Text as={"h3"} color="light">
            //             replaced
            //         </Text>
            //     )
            // }
        },
    })
    console.log("data", props.data[0], parsed)
    return (
        <Accordion
            type="single"
            defaultValue="item-0"
            collapsible
            css={{ marginRight: -100 }}
        >
            {parsed[1]}
        </Accordion>
    )
}

// Your app...
export const AccordionDemo = () => (
    <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look
                and feel.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)

export default AccordionDemo

/*
    function traverse(domNode, firstTag, secondTag) {
        function recurse(domNode, tag) {
            for (const child of domNode.children) {
                if (child.name === tag) {
                    if (child.children.length) {
                        for (const child2 of child.children) {
                            if (child2.name === secondTag) {
                                return true
                            } else {
                                recurse
                            }
                        }
                    }
                }
            }
        }
    }
*/
