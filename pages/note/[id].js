import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { siteTitle } from "../../components/layout"
import { getPostListData, getSinglePost, getGraphData } from "../../lib/post"
import { Network } from "../../components/graph"
import Cytoscape from "cytoscape"
import { css, styled } from "../../styles/stitches.config"
import { motion } from "framer-motion"
import { DIMENSIONS } from "../../settings/dimensions"
import { Layout } from "../../components/layout"
import { ArticleLayout } from "../../components/article-layout"

export default function Home({ note, graphdata, sidebar, ...props }) {
    var jsnx = require("jsnetworkx")

    //console.log("Note Page: ")
    //console.log("Index Page Props: ", props /* backlinks, filenames*/)

    const backlinks = graphdata.filter((g) => g.data.target === note.id)
    console.log("backlinks", backlinks)

    const ref = useRef(null)
    const router = useRouter()
    const routeQuery = router.query.id
    const routeHandler = (r) => router.push(r)
    //console.log("route", router)

    var G
    useEffect(() => {
        if (ref && ref.current) {
            G = Network({
                el: ref.current,
                graphdata,
                current: note.id,
                routeHandler,
                allNodes: false,
            })
        }
    }, [routeQuery])

    useEffect(() => {
        if (backlinks.length > 0) {
            const sideBox = document.getElementById("graph-box")
            const Backlink = (data) => (
                <div className="backlink-box">
                    <Link href={data.id === "index" ? "/" : `/note/${data.id}`}>
                        <a>{data.title ? data.title : data.id}</a>
                    </Link>
                </div>
            )

            //sideBox
        }
    }, [])

    return (
        <Layout home sidebar={sidebar}>
            <Head>
                {note.title && <meta name="title" content={note.title} />}
                {note.canonical && (
                    <meta name="canonical_url" content={note.canonical} />
                )}
                {note.description && (
                    <meta name="description" content={note.description} />
                )}
            </Head>
            <ArticleLayout>
                <InnerContent>
                    {/* COVER IMAGE */}
                    {note.cover && <img src={note.cover} />}

                    {/* TITLE */}
                    {note.title && <h1>{note.title}</h1>}

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: note.data }}
                    ></div>
                </InnerContent>
            </ArticleLayout>
            <hr />
            <div id="graph-box" ref={ref}></div>
        </Layout>
    )
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
    position: "absolute",
    width: "100%",
    "& a": {
        textDecoration: "underline",
    },
})

export async function getStaticPaths() {
    const allPostsData = await getPostListData()
    const paths = allPostsData.map((p) => ({ params: { id: p } }))
    //console.log("paths", paths)
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    console.log("params1", params.id)
    const note = await getSinglePost(params.id)
    const sidebar = getSinglePost("sidebar")

    //console.log("params2", note)
    const graphdata = getGraphData()
    //console.log("params3", params)

    //console.log("note: ", params)
    return {
        props: {
            sidebar,
            note,
            graphdata: graphdata,
        },
    }
}
