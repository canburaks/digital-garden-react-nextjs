import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { siteTitle, Layout } from "../components/layout"
import { getSinglePost, getGraphData } from "../lib/post"
import { Network } from "../components/graph"
import { css, styled } from "../styles/stitches.config"
import { motion } from "framer-motion"
import { DIMENSIONS } from "../settings/dimensions"
//import Layout from "../../components/app-shell"
// import Layout from "../components/app-shell"

export default function Home({
    content,
    graphdata,
    filenames,
    sidebar,
    ...props
}) {
    //console.log("Index Page Props: ", content /* backlinks, filenames*/)
    const ref = useRef(null)
    const router = useRouter()
    const routeQuery = router.query.id
    const routeHandler = (r) => router.push(r)
    //console.log("route", router)
    //var G = jsnx.binomialGraph(filenames.length, 1)
    //var G = jsnx.completeGraph(filenames.length);
    useEffect(() => {
        if (ref && ref.current) {
            const G = Network({
                el: ref.current,
                graphdata,
                current: "index",
                routeQuery,
                routeHandler,
                allNodes: false, // If true then shows every markdown file as node
            })
        }
    }, [])

    return (
        <Layout home sidebar={sidebar}>
            <Head>
                <meta
                    name="google-site-verification"
                    content="7iZ3AXo66Mm1qElIrjOAcUD6pqBeDQGC63zZfwiGhbE"
                />
                {content.title && <meta name="title" content={content.title} />}
                {content.canonical && (
                    <meta name="canonical_url" content={content.canonical} />
                )}
                {content.description && (
                    <meta name="description" content={content.description} />
                )}
            </Head>
            <ContentBox>
                <InnerContent
                    initial="open"
                    animate={"open"}
                    variants={variants}
                >
                    <img src="https://cbsofyalioglu.fra1.digitaloceanspaces.com/cbs/digital-garden.jpg" />
                    <section>
                        <div
                            dangerouslySetInnerHTML={{ __html: content.data }}
                        />
                    </section>
                    <hr />

                    <div id="graph-box" ref={ref}></div>
                </InnerContent>
            </ContentBox>
        </Layout>
    )
}
const variants = {
    open: { opacity: 1, x: DIMENSIONS.MAIN_CONTENT_OFFSET },
    closed: { opacity: 1, x: 0 },
}

const ContentBox = styled(motion.div, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
})

const InnerContent = styled(motion.div, {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    width: "65ch",
    "& a": {
        textDecoration: "underline",
    },
})

export function getStaticProps() {
    const contentData = getSinglePost("index")
    const sidebar = getSinglePost("sidebar")
    const graphdata = getGraphData()
    return {
        props: {
            sidebar,
            content: contentData,
            graphdata: graphdata,
            //filenames:JSON.parse(filenamesRaw)
            //sidebar:sidebarData
        },
    }
}
