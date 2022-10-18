import { MotionConfig } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { useWindowWidth } from "../lib/hooks"
import { css, styled } from "../styles/stitches.config"
import { motion, AnimatePresence } from "framer-motion"
import { AccordionUI } from "./accordion"
import { use } from "cytoscape"
import { DIMENSIONS } from "../settings/dimensions"
import { useStore } from "../lib/state"

const name = "[Can Burak Sofyalioglu]"
export const siteTitle = "Digital Backroom - An Internet Archive"

export function Layout({ children, sidebar }) {
    console.log("sidebar data", sidebar)
    // Permanent Status of sidebar
    const isOpen = useStore((state) => state.sidebarOpen)
    const setIsOpen = useStore((state) => state.setSidebarOpen)
    const closeSidebar = useCallback(() => setIsOpen(false), [])
    const openSidebar = useCallback(() => setIsOpen(true), [])
    const toggle = () => setIsOpen(!isOpen)

    // Temporary status of expand (inactive when sidebar is open)
    const [isExpanded, setIsExpanded] = useState(false)
    const expand = useCallback(() => setIsExpanded(true), [])
    const collapse = useCallback(() => setIsExpanded(false), [])

    const onHoverStartHandler = useCallback(
        () => (isOpen ? null : setIsExpanded(true)),
        [isOpen]
    )
    const onHoverEndHandler = useCallback(
        () => (isOpen ? null : setIsExpanded(false)),
        [isOpen]
    )

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="A Digital Backroom of Can Burak Sofyalioglu"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <MainBox id="layout-main" layout>
                <Sidebar
                    layout
                    sidebar={sidebar}
                    isOpen={isOpen}
                    isExpanded={isExpanded}
                >
                    <motion.div
                        className="relative w-full top-0 left-0 bottom-0 min-h-screen max-h-screen"
                        id="sidebar-overlay"
                    >
                        <LeftColumn>
                            <MenuToggle onClick={toggle} data-ison={isOpen} />
                        </LeftColumn>

                        <motion.div
                            id="sidebar-overlay"
                            className="relative top-0 left-0 bottom-0 right-0 max-w-[30vw] flex w-full !h-full min-h-screen flex-col items-end px-16"
                            exit={{ opacity: 0 }}
                            onHoverStart={onHoverStartHandler}
                            onHoverEnd={onHoverEndHandler}
                        >
                            <AccordionUI data={sidebar.data} />
                        </motion.div>
                    </motion.div>
                </Sidebar>
                <ContentBox id="layout-content">
                    <motion.div
                        style={{
                            width: "100%",
                            maxWidth: "65ch",
                            margin: "0 auto",
                            position: "relative",
                        }}
                    >
                        {children}
                    </motion.div>
                </ContentBox>
            </MainBox>
        </div>
    )
}

const Sidebar = ({ children, isOpen, isExpanded }) => (
    <SidebarBox
        className="sidebar"
        id="sidebar"
        variants={sidebarVariants}
        initial="collapsed"
        animate={isOpen ? "expanded" : "collapsed"}
        layout
    >
        {children}
    </SidebarBox>
)

const sidebarVariants = {
    expanded: {
        width: `${DIMENSIONS.SIDEBAR_WIDTH}px`,
    },
    collapsed: {
        width: `${DIMENSIONS.SIDEBAR_LEFT_PANEL_WIDTH}px`,
    },
}

const LeftColumn = styled(motion.div, {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    minWidth: `${DIMENSIONS.SIDEBAR_LEFT_PANEL_WIDTH}px`,
    maxWidth: `${DIMENSIONS.SIDEBAR_LEFT_PANEL_WIDTH}px`,
    display: "flex",
    paddingTop: "16px",
    flexDirection: "column",
    alignItems: "center",
    height: "100vw",
    background: "#010101",
    zIndex: 2,
})

const MainBox = styled(motion.div, {
    width: "100%",
    maxWidth: "100vw",
    overflowX: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    minHeight: "100vh",
    maxHeight: "100vh",
    padding: 0,
    margin: 0,
})
const SidebarBox = styled(motion.div, {
    position: "sticky",
    left: 0,
    top: 0,
    width: "100%",
    overflowX: "hidden",
    display: "flex",
    minWidth: `${DIMENSIONS.SIDEBAR_LEFT_PANEL_WIDTH}px`,

    boxShadow: "4px 0px 8px rgba(0, 0, 0, 0.25)",
    minHeight: "100vh",
    maxHeight: "100vh",
    overflowY: "hidden",
    paddingTop: "0",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    overflowX: "hidden",
    flexGrow: 0,
    zIndex: 1,
})

const ContentBox = styled(motion.div, {
    width: "100%",
    overflowX: "hidden",
    position: "relative",
    minHeight: "150vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 128px",
    justifyContent: "flex-start",
    flexGrow: 1,
    padding: "0",
})

const MenuToggle = ({ onClick, ...props }) => (
    <svg
        onClick={onClick}
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
            fill="#cecece"
        />
        <path
            d="M12 13C11.44 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.56 13 12 13Z"
            fill="#cecece"
        />
        <path
            d="M16 13C15.44 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.56 13 16 13Z"
            fill="#cecece"
        />
        <path
            d="M8 13C7.44 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.56 13 8 13Z"
            fill="#cecece"
        />
    </svg>
)

const Blur = (props) => (
    <svg
        style={{
            position: "sticky",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: "",
            minHeight: "100%",
        }}
        width={937}
        height={2322}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#a)" filter="url(#b)">
            <path
                d="M366.561 96.58C504.101 196.65 620.614 726.264 626.8 1279.51c6.185 553.24-100.298 920.61-237.839 820.54-137.54-100.07-52.841-523.68-59.027-1076.92C323.749 469.886 229.021-3.49 366.561 96.58Z"
                fill="#5E0CE3"
                fillOpacity={0.4}
            />
            <path
                d="M348.372 2154.38c-18.872-57.89-36.236-129.82-51.518-209.96-37.099-194.3-66.249-575.98-30.427-900.2 4.4-39.85 9.634-76.92 15.372-110.652 22.543-132.279 57.753-187.887 81.383-109.855 18.524 61.189 27.417 187.037 33.849 310.147 6.435 123.21 11.71 254.46 25.863 346.57 10.436 67.86 24.922 108.99 39.43 145.52 17.523 44.12 36.78 84.64 49.481 169.1 16.681 110.9 19.898 316.24-8.077 427.43-9.781 38.87-21.045 57.88-32.02 66.96-44.269 36.78-86.679-22.59-123.336-135.06Z"
                fill="url(#c)"
                fillOpacity={0.5}
            />
        </g>
        <defs>
            <linearGradient
                id="c"
                x1={199.599}
                y1={3468.58}
                x2={-876.607}
                y2={1391.01}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#06F" stopOpacity={0.63} />
                <stop offset={1} stopColor="#0075FF" stopOpacity={0.51} />
            </linearGradient>
            <clipPath id="a">
                <path
                    fill="#fff"
                    transform="translate(44 250)"
                    d="M0 0h893v1822H0z"
                />
            </clipPath>
            <filter
                id="b"
                x={-206}
                y={0}
                width={1393}
                height={2322}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation={125}
                    result="effect1_foregroundBlur_67_7"
                />
            </filter>
        </defs>
    </svg>
)
