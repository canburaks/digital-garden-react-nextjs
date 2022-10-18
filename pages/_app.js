import App from "next/app"
import "../styles/global.css"
import "../styles/typography.css"
import "../styles/fonts.css"

import { EuiProvider } from "@elastic/eui"

export default function MyApp({ Component, pageProps }) {
    return (
        <EuiProvider colorMode="dark">
            <Component {...pageProps} />
        </EuiProvider>
    )
}
