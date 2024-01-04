
import FooterListItem from '../FooterListItem'

import FooterListsHeader from '../FooterListsHeader'

const GetirIndir = () => {
    const menu = [
        {
            src: "https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
        },
        {
            src: "https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
        },
        {
            src: "https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
        }


    ]

    return (
        <div className='mr-6 flex-1 flex-shrink-1'>
            <FooterListsHeader>
                Getir'i indir!
            </FooterListsHeader>
            <ol>
                {menu.map((item, i) => (
                    <FooterListItem key={i}>
                        <img src={item.src} alt="" />
                    </FooterListItem>
                ))}

            </ol>
        </div>
    )
}

export default GetirIndir
