import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "MetaZ - Soyez au sommet du digital"}
                </title>
            </Head>
        </>
    )
}

export default PageHead