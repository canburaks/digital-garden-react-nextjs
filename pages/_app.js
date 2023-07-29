import App from "next/app"
import "../public/stylesheets/global.css"

import { EuiProvider } from "@elastic/eui"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
