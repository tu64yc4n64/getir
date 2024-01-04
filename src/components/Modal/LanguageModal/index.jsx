import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageModalClose } from '../../../stores/modal';
import ModalTitle from '../ModalTitle';
import RadioButton from '../../Radio';
import RegisterFormButton from '../../Buttons/RegisterFormButton';
import CloseModalButton from '../../Buttons/CloseModalButton';

const LanguageModal = () => {
    const dispatch = useDispatch()
    const languageModalOpen = useSelector(item => item.modal.languageModalOpen)
    const handleCloseLanguageModal = () => {
        dispatch(LanguageModalClose(false));
    };
    return (

        <Dialog open={languageModalOpen} onClose={handleCloseLanguageModal}>
            <ModalTitle>
                Dil Değiştir
                <CloseModalButton onClick={handleCloseLanguageModal} />
            </ModalTitle>
            <div className='py-[36px] px-[32px]'>
                <RadioButton>

                </RadioButton>
                <RegisterFormButton>
                    Güncelle
                </RegisterFormButton>
            </div>


        </Dialog>

    )
}

export default LanguageModal
