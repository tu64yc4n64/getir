
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes';
import 'typeface-open-sans';
import './index.css'
import ModalReducer from "./stores/modal"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: {
    modal: ModalReducer,

  }
})

ReactDOM.createRoot(document.getElementById('root')).render(



  <Provider store={store}>
    <RouterProvider router={routes}>

    </RouterProvider>
  </Provider>



)
