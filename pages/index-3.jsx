import Layout from "@/components/layout/Layout"
import Agency1 from "@/components/sections/Agency1"
import Blog3 from "@/components/sections/Blog3"
import Brand2 from "@/components/sections/Brand2"
import Counter2 from "@/components/sections/Counter2"
import Newsletter1 from "@/components/sections/Newsletter1"
import Project3 from "@/components/sections/Project3"
import Services3 from "@/components/sections/Services3"
import Slider1 from "@/components/sections/Slider1"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home3() {

    return (
        <>
        
        <Layout footerStyle={1} headercls="menu-style-two" nf3>
                <Slider1 />
                <Services3 />
                <Agency1 />
                <Project3 />
                <Testimonial3 />
                <Newsletter1 />
            </Layout>
        </>
    )
}