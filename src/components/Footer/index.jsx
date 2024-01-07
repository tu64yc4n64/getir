import GetirIndir from "./Indir"
import GetirIsOrtagi from "./IsOrtagi"
import GetirKesfet from "./Kesfet"
import GetirYardim from "./Yardim"
import Etbis from "./Etbis"
import FooterBottom from "./FooterBottom"


const Footer = () => {
    return (
        <footer>
            <nav className="md:pb-5 md:px-0 px-4 md:px-8 xl:px-0  flex flex-col">
                <div className="md:pt-10 pt-4 md:flex w-full mx-auto max-w-[1232px] ">
                    <GetirIndir />
                    <GetirKesfet />
                    <GetirYardim />
                    <GetirIsOrtagi />
                    <Etbis />
                </div>
            </nav>
            <div className=" flex w-full mx-auto max-w-[1232px] md:py-6 bg-[#f5f5f5] p-4 border-t border-[#f3f0fe]">
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
