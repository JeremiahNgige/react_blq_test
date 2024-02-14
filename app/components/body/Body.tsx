import Container from "@/app/components/Container";
import TopBannerCarousel from "@/app/components/TopBannerCarousel";
import Shortcuts from "@/app/components/Shortcuts";
import RenderCommodities from "@/app/components/RenderComodities";

const Body = () => {
    return (<section className="min-h-screen bg-slate">
        <Container>
            <div className={"Container h-96"}>
                <TopBannerCarousel></TopBannerCarousel>
            </div>
            <div>
                <Shortcuts></Shortcuts>
            </div>
            <div>
                {/*<RenderCommodities></RenderCommodities>*/}
            </div>
        </Container>
    </section>);
}

export default Body;