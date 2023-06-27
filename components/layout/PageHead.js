import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Xolio - Creative Agency HTML5 Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead