import HeaderButton from '../../Buttons/headerButtons'
import { useDispatch } from 'react-redux';
import { LoginModalOpen } from '../../../stores/modal';


const Login = () => {
    const dispatch = useDispatch()
    const handleLoginModalOpen = () => {
        dispatch(LoginModalOpen(true));
    };

    return (
        <HeaderButton onClick={handleLoginModalOpen}>
            <div className='w-[24px] h-[24px] flex items-center justify-center'>
                <svg className='color-[#dbdbff] w-[16px] mr-[4px]' data-testid="icon" name="profile" size="16" color="#DBDBFF" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
                    <path className='fill-[#dbdbff]' d="M24 8.846c0 4.39-3.582 7.948-8 7.948s-8-3.559-8-7.948c0-4.39 3.582-7.948 8-7.948s8 3.558 8 7.948z M0.027 28.896c-0.207 1.16 0.83 2.206 2.116 2.206h27.713c1.327 0 2.324-1.048 2.116-2.206-1.204-6.696-7.884-10.511-15.974-10.511s-14.77 3.815-15.972 10.511h-0z" >
                    </path>
                </svg>
            </div>
            <span className='lg:block hidden'>
                Giriş Yap
            </span>

        </HeaderButton>
    )
}

export default Login
