import '../src/shared/ui/theme/GlobalStyle.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'

import { ThemeProvider } from '../src/shared/ui'
import { Layout } from '../src/core/Layout'

import 'antd/dist/antd.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Head>
                <title>Git Search</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
