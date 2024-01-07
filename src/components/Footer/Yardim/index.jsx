
import FooterListItem from '../FooterListItem'

import FooterListsHeader from '../FooterListsHeader'

const GetirYardim = () => {

    const menu = [
        {
            name: "Sıkça Sorulan Sorular"
        },
        {
            name: "Kişisel Verilerin Korunması"
        },
        {
            name: "Gizlilik Politikası"
        },
        {
            name: "Kullanım Koşulları"
        },
        {
            name: "Çerez Politikası"
        },
        {
            name: "İşlem Rehberi"
        }
    ]


    return (
        <div className='mr-6 md:flex-1 md:flex-shrink-1'>
            <FooterListsHeader>
                Yardıma mı ihtiyacın var?
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

export default GetirYardim
