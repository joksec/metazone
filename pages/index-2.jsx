import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Blog2 from "@/components/sections/Blog2"
import Brand1 from "@/components/sections/Brand1"
import Contact1 from "@/components/sections/Contact1"
import Counter1 from "@/components/sections/Counter1"
import Pricing1 from "@/components/sections/Pricing1"
import Project2 from "@/components/sections/Project2"
import Services2 from "@/components/sections/Services2"
import Testimonial2 from "@/components/sections/Testimonial2"
import Work1 from "@/components/sections/Work1"
export default function Home2() {

    return (
        <>
            <div className="black-background" >
                <Layout footerStyle={2} headercls="menu-style-two" nf3>
                    <Banner2 />
                    <Brand1 />
                    <About2 />
                    <Counter1 />
                    <Services2 />
                    <Project2 />
                    <Pricing1 />
                    <Work1 />
                    <Testimonial2 />
                    <Blog2 />
                    <Contact1 />
                </Layout>
            </div>
        </>
    )
}