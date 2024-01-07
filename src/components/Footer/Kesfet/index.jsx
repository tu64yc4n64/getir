
import FooterListItem from '../FooterListItem'

import FooterListsHeader from '../FooterListsHeader'

const GetirKesfet = () => {

    const menu = [
        {
            name: "Hakkımızda"
        },
        {
            name: "Kariyer"
        },
        {
            name: "Teknoloji Kariyerleri"
        },
        {
            name: "İletişim"
        },
        {
            name: "Sosyal Sorumluluk Projeleri"
        },
        {
            name: "Basın Bültenleri"
        }
    ]


    return (
        <div className='mr-6 md:flex-1 md:flex-shrink-1'>
            <FooterListsHeader>
                Getir'i Keşfet
            </FooterListsHeader>
            <ol>
                {menu.map((item, i) => (
                    <FooterListItem key={i}>
                        {item.name}
                    </FooterListItem>
                ))}

            </ol>
        </div>


    )
}

export default GetirKesfet
