import { MotionConfig } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { useWindowWidth } from "../lib/hooks"
import { css, styled } from "../styles/stitches.config"
import { motion } from "framer-motion"

const name = "[Can Burak Sofyalioglu]"
export const siteTitle = "Digital Backroom - An Internet Archive"

export function Layout({ children, sidebar }) {
    console.log("sidebar data", sidebar)
    const [isOpen, setIsOpen] = useState(null)
    const toggle = () => setIsOpen(!isOpen)

    const sidebarposition = isOpen ? "0px" : "-250px"
    //console.log("effect: ", isOpen, sidebarposition)

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
            <MainBox id="layout-main">
                <Sidebar sidebar={sidebar} />
                <ContentBox id="layout-content">{children}</ContentBox>
            </MainBox>
        </div>
    )
}
const Sidebar = memo(
    ({ sidebar }) => (
        <SidebarBox className="sidebar" id="sidebar">
            <SidebarInner>
                <section className="section sidebar">
                    <div
                        data-w-id="71d5791f-856a-b6c4-e8ee-0ab2729e1de3"
                        className="sidebar"
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sidebar.data,
                            }}
                        />
                    </div>
                </section>
            </SidebarInner>
        </SidebarBox>
    ),
    (prev, next) => true
)

const MainBox = styled(motion.div, {
    width: "100%",
    overflowX: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    minHeight: "100vh",
    padding: 0,
    margin: 0,
})
const SidebarBox = styled(motion.div, {
    position: "relative",
    width: "100%",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minWidth: "25vw",
    maxWidth: "25vw",
    overflowX: "hidden",

    background: "#111",
    flexGrow: 0,
})
const SidebarInner = styled(motion.div, {
    position: "fixed",
    left: 0,
    top: 64,
    right: 0,
    bottom: 0,
    minWidth: "25vw",
    maxWidth: "25vw",
    minHeight: "100%",
    zIndex: 2,
    padding: 16,
    marginTop: 32,
    overflow: "hidden",
    "& > #sidebar": { maxWidth: "100%", padding: 32 },
})

const ContentBox = styled(motion.div, {
    width: "100%",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexGrow: 1,
    padding: "0",
})

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
