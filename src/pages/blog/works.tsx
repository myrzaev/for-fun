import Head from "next/head"
import Router from "next/router"

export default function Works() {
    return (
        <>
            <Head>
                <title>About page mazafaka</title>
            </Head>
            <h1>About Page</h1>

            <button onClick={() => Router.push('/')}>Go back home</button>
        </>
    )
}