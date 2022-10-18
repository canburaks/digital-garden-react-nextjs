import Head from "next/head"
import { useRouter } from "next/router"
import { forwardRef } from "react"
import clsx from "clsx"

function ArrowLeftIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export function Prose({ children, className }) {
    return (
        <div className={clsx(className, "prose dark:prose-invert")}>
            {children}
        </div>
    )
}
export function ArticleLayout({ children, meta, isRssFeed = false }) {
    let router = useRouter()

    if (isRssFeed) {
        return children
    }

    return (
        <>
            <Container className="mt-16 lg:mt-32">
                <div className="xl:relative">
                    <div className="mx-auto max-w-2xl">
                        <article>
                            <Prose className="mt-8">{children}</Prose>
                        </article>
                    </div>
                </div>
            </Container>
        </>
    )
}

const OuterContainer = forwardRef(function OuterContainer(
    { className, children, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={clsx("sm:px-8 min-h-screen", className)}
            {...props}
        >
            <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
        </div>
    )
})

const InnerContainer = forwardRef(function InnerContainer(
    { className, children, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
            {...props}
        >
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
    )
})

export const Container = forwardRef(function Container(
    { children, ...props },
    ref
) {
    return (
        <OuterContainer ref={ref} {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
