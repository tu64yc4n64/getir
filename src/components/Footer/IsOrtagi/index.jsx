
import FooterListItem from '../FooterListItem'

import FooterListsHeader from '../FooterListsHeader'

const GetirIsOrtagi = () => {

    const menu = [
        {
            name: "Bayimiz Olun"
        },
        {
            name: "Deponu Kirala"
        },
        {
            name: "GetirYemek Restoranı Ol"
        },
        {
            name: "GetirÇarşı İşletmesi Ol"
        },
        {
            name: "Zincir Restoranlar"
        },

    ]


    return (
        <div className='mr-6 md:flex-1 md:flex-shrink-1'>
            <FooterListsHeader>
                İş Ortağımız Ol
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

export default GetirIsOrtagi
