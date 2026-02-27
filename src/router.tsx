import {createBrowserRouter} from  'react-router-dom'
import Layout from './layouts/Layout'
import Products, {loader as productsLoader, action as updateAvailabilityAction} from './views/Products'
import NewProduct, {action as newProductAction} from './views/NewProduct'
import NotFoundPage from './views/NotFound'
import EditProduct, {loader as editProductLoader, action as editProductAction} from './views/EditProduct'
import ErrorPage from './views/ErrorPage'
import { action as deleteProductAction } from './components/ProductDetail'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        //Lo que hace children es que las paginas que esten en chldren o el arreglo seran hijos de Layout
        children:[
            {
                index: true,
                element: <Products />, //Aqui se renderiza el componente Product
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />, //Aqui se renderiza el componente Product
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', //ROA Pattern - Resource-oriented design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar', //ROA Pattern - Resource-oriented design
                action: deleteProductAction
            },
            {
                path: '*',
                element: <NotFoundPage />, //Aqui se renderiza el componente Product
            }
        ]
    }

    //Se hace otro grupo igual con el objeto si queremos otro component si se requiere mas layout
])