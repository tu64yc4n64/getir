

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModalClose } from '../../../stores/modal';

const LoginModal = () => {

    const dispatch = useDispatch()
    const loginModalOpen = useSelector(item => item.modal.loginModalOpen)



    const handleCloseLoginModal = () => {
        dispatch(LoginModalClose(false));
    };
    return (
        <div>

            <Dialog open={loginModalOpen} onClose={handleCloseLoginModal}>
                <DialogTitle>Modal 1</DialogTitle>
                <DialogContent>
                    <DialogContentText>Login Modal</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLoginModal}>Kapat</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LoginModal
