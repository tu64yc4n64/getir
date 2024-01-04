import "./style.css"

const Cta = () => {
    return (
        <section className="my-[24px] text-[#fff]">
            <div className='max-w-[1232px] mx-auto flex cta-bg relative'>
                <div className="ml-[48px] flex flex-col justify-center">
                    <h3 className='text-[26px] leading-[34px] font-[700]'>Getir'i indir!</h3>
                    <p className='max-w-[360px] mt-[12px] font-[600] text-[16px]'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                    <ul className='flex cta-list pt-[32px]'>
                        <li>
                            <a href="">
                                <figure>
                                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <figure>
                                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <figure>
                                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                                </figure>
                            </a>
                        </li>
                    </ul>
                </div>

                <figure className="w-[605px] h-[288px] absolute right-0 bottom-[-4px]">
                    <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                </figure>

            </div>
        </section>
    )
}

export default Cta
