import HeaderButton from '../../Buttons/headerButtons'
import { useDispatch, } from 'react-redux';
import { RegisterModalOpen } from '../../../stores/modal';

const Register = () => {
    const dispatch = useDispatch()
    const handleRegisterModalOpen = () => {
        dispatch(RegisterModalOpen(true));
    };


    return (
        <HeaderButton onClick={handleRegisterModalOpen}>
            <div className='w-[24px] h-[24px] flex items-center justify-center'>
                <svg className='color-[#dbdbff] w-[16px] mr-[4px]' data-testid="icon" name="user-add" size="16" color="#DBDBFF" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
                    <path className='fill-[#dbdbff]' d="M12 14c1.187 0 2.347-0.352 3.333-1.011s1.756-1.596 2.21-2.693c0.454-1.096 0.573-2.303 0.342-3.467s-0.803-2.233-1.642-3.072c-0.839-0.839-1.908-1.411-3.072-1.642s-2.37-0.113-3.467 0.341-2.033 1.223-2.693 2.21c-0.659 0.987-1.011 2.147-1.011 3.333 0 1.591 0.632 3.117 1.757 4.243s2.651 1.757 4.243 1.757zM12 18c3.183 0 6.235 1.264 8.485 3.515s3.515 5.303 3.515 8.485h-24c0-3.183 1.264-6.235 3.515-8.485s5.303-3.515 8.485-3.515v0zM28 10c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586c-0.53 0-1.039 0.211-1.414 0.586s-0.586 0.884-0.586 1.414v2h-2c-0.53 0-1.039 0.211-1.414 0.586s-0.586 0.884-0.586 1.414c0 0.53 0.211 1.039 0.586 1.414s0.884 0.586 1.414 0.586h2v2c0 0.53 0.211 1.039 0.586 1.414s0.884 0.586 1.414 0.586c0.53 0 1.039-0.211 1.414-0.586s0.586-0.884 0.586-1.414v-2h2c0.53 0 1.039-0.211 1.414-0.586s0.586-0.884 0.586-1.414c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586h-2v-2z">
                    </path>
                </svg>
            </div>
            Kayıt Ol
        </HeaderButton>
    )
}

export default Register
