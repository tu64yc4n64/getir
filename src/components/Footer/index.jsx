import GetirIndir from "./Indir"
import GetirIsOrtagi from "./IsOrtagi"
import GetirKesfet from "./Kesfet"
import GetirYardim from "./Yardim"
import Etbis from "./Etbis"
import FooterBottom from "./FooterBottom"


const Footer = () => {
    return (
        <footer>
            <nav className="pb-5 flex flex-col">
                <div className="pt-10 flex w-full mx-auto max-w-[1232px]">
                    <GetirIndir />
                    <GetirKesfet />
                    <GetirYardim />
                    <GetirIsOrtagi />
                    <Etbis />
                </div>
            </nav>
            <div className=" flex w-full mx-auto max-w-[1232px] py-6 border-t border-[#f3f0fe]">
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
