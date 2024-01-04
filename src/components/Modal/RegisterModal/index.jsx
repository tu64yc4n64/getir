

import Dialog from '@mui/material/Dialog';

import { useDispatch, useSelector } from 'react-redux';
import { RegisterModalClose } from '../../../stores/modal';
import ModalTitle from '../ModalTitle';
import FlagSelect from "../../Select/FlagSelect"
import ShortInput from "../../Inputs/ShortInput"

import ModalFooter from '../ModalFooter';
import { LoginModalOpen } from '../../../stores/modal';
import LongInput from '../../Inputs/LongInput';
import Checkbox from '../../CheckBox';
import RegisterFormButton from '../../Buttons/RegisterFormButton';
import CloseModalButton from '../../Buttons/CloseModalButton';

const RegisterModal = () => {
    const dispatch = useDispatch()
    const registerModalOpen = useSelector(item => item.modal.registerModalOpen)

    const handleCloseRegisterModal = () => {
        dispatch(RegisterModalClose(false));
    };
    const handleLoginModalOpen = () => {
        dispatch(LoginModalOpen(true));
    };
    return (
        <div>
            <Dialog open={registerModalOpen} onClose={handleCloseRegisterModal}>
                <ModalTitle>
                    Kayıt Ol


                    <CloseModalButton onClick={handleCloseRegisterModal} />

                </ModalTitle>
                <div className='pt-[16px] pb-0 px-[16px]'>
                    <div className='flex mb-[8px] flex-col'>
                        <div className='flex mb-4'>


                            <FlagSelect>

                            </FlagSelect>
                            <ShortInput content="Telefon Numarası">

                            </ShortInput>
                        </div>
                        <LongInput content="Ad Soyad" />
                        <LongInput content="E-Posta" />
                        <Checkbox content="Getir'in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum."></Checkbox>
                    </div>
                    <p className='text-[#a2a2a2] text-[12px] mt-[4px]'>Kişisel verilere dair Aydınlatma Metni için
                        <a className='text-[#5d3ebc] font-[600] underline-offset-1'> tıkla</a>. Üye olmakla
                        <a className='text-[#5d3ebc] font-[600] underline-offset-1'>  Kullanım Koşulları </a>
                        hükümlerini kabul etmektesin.
                    </p>
                    <RegisterFormButton>
                        Kayıt Ol
                    </RegisterFormButton>

                </div>
                <ModalFooter>
                    <p>
                        Getir'e üyeyseniz
                        <button className='text-[#5d3ebc] pl-1 font-[600]' onClick={handleLoginModalOpen}> Giriş yap</button>
                    </p>
                </ModalFooter>
            </Dialog>
        </div>
    )
}

export default RegisterModal
