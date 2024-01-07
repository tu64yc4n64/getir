
import HeroForm from '../../../../Forms/HeroForm'
import ShortInput from "../../../../Inputs/ShortInput"
import FormButton from '../../../../Buttons/formButton'

import FlagSelect from '../../../../Select/FlagSelect'

const RightSide = ({ className }) => {
    return (
        <HeroForm className={`${className} md:w-[400px] w-full p-[24px] md:bg-[#fff] rounded-[8px] `}>
            <h5 className='mb-[15px] text-center text-color text-[16px] font-[600] leading-[22px]'>Giriş yap veya kayıt ol</h5>
            <div className='flex mb-[8px]'>
                <FlagSelect>

                </FlagSelect>
                <ShortInput content="Telefon Numarası">

                </ShortInput>
            </div>

            <FormButton>
                Telefon numarası ile devam et
            </FormButton>
        </HeroForm>
    )
}

export default RightSide
