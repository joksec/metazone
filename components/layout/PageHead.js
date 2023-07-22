import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "MetaZ - Agence Innovante"}
                </title>
            </Head>
        </>
    )
}

export default PageHead