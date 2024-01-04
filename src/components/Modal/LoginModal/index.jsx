
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModalClose } from '../../../stores/modal';
import "../style.css"
import ModalTitle from '../ModalTitle';
import FlagSelect from "../../Select/FlagSelect"
import ShortInput from "../../Inputs/ShortInput"
import FormButton from "../../Buttons/formButton"
import ModalFooter from '../ModalFooter';
import { RegisterModalOpen } from '../../../stores/modal';
import CloseModalButton from '../../Buttons/CloseModalButton';

const LoginModal = () => {
    const dispatch = useDispatch()
    const handleRegisterModalOpen = () => {
        dispatch(RegisterModalOpen(true));
    };

    const loginModalOpen = useSelector(item => item.modal.loginModalOpen)

    const handleCloseLoginModal = () => {
        dispatch(LoginModalClose(false));
    };
    return (

        <Dialog open={loginModalOpen} onClose={handleCloseLoginModal}>

            <ModalTitle>
                Giriş yap veya kayıt ol
                <CloseModalButton onClick={handleCloseLoginModal} />
            </ModalTitle>
            <div className='p-[32px]'>
                <div className='flex mb-[8px]'>
                    <FlagSelect>

                    </FlagSelect>
                    <ShortInput content="Telefon Numarası">

                    </ShortInput>
                </div>
                <FormButton>
                    Telefon numarası ile devam et
                </FormButton>
                <p className='text-[#a2a2a2] text-[12px] mt-[4px]'>Kişisel verilerine dair Aydınlatma Metni için
                    <a className='text-[#5d3ebc] font-[600] underline-offset-1'> tıklayınız</a>.
                </p>

            </div>
            <ModalFooter>
                <p>

                    Hala kayıt olmadın mı?
                    <button className='text-[#5d3ebc] pl-1 font-[600]' onClick={handleRegisterModalOpen}> Kayıt ol</button>
                </p>
            </ModalFooter>

        </Dialog>

    )
}

export default LoginModal
