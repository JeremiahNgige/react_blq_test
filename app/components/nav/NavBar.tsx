import Container from "@/app/components/Container";
import Link from "next/link";
import {Input, Button} from "@nextui-org/react";
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
    return <div className="
    sticky
    top-0
    w-full
    bg-white
    z-30
    shadow-sm
    ">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                items-center
                justify-between
                gap-2
                md:gap-0
                ">
                    <div className="flex items-center gap-8 md:gap-10">
                        <Link href={"/"} style={{color: "green"}}
                              className={"font-bold text-2xl font-sans"}>Testvalley</Link>
                        <div className={"flex flex-row row-auto"}>
                            <Button className={" items-center green m-0"} variant={"light"} isIconOnly
                                    aria-label="Like">
                                <MenuIcon style={{color: "green"}}></MenuIcon>
                            </Button>
                            <h1 style={{color: "green", margin: "m-0"}}> Categories</h1>
                        </div>
                    </div>
                    <div className="flex w-1/4 flex-row  gap-4">
                        <Input type="email" label="" placeholder="Search here"/>
                    </div>
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>User Menu</div>
                        <div>Cart Count</div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
}

export default NavBar;