import { Html, Head, Main, NextScript } from "next/document"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { getSinglePost } from "../lib/post"
import { getCssText } from "../styles"
import Link from "next/link"

export default function MyDocument() {
    //globalStyles();
    return (
        <Html>
            <Head>
                <script src="https://d3js.org/d3.v3.min.js"></script>

                <link
                    rel="preload"
                    href="/fonts/GeneralSans-Variable.ttf"
                    as="font"
                    type="font/ttf"
                />
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </Head>
            <body className="loading">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
