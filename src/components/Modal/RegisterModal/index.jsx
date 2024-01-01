
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterModalClose } from '../../../stores/modal';

const RegisterModal = () => {
    const dispatch = useDispatch()
    const registerModalOpen = useSelector(item => item.modal.registerModalOpen)



    const handleCloseRegisterModal = () => {
        dispatch(RegisterModalClose(false));
    };
    return (
        <div>
            <Dialog open={registerModalOpen} onClose={handleCloseRegisterModal}>
                <DialogTitle>Modal 2</DialogTitle>
                <DialogContent>
                    <DialogContentText>Merhaba! Ben ikinci modalım.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseRegisterModal}>Kapat</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default RegisterModal
