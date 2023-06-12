import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  // <BrowserRouter basename='/Pawffee'>


  <RouterProvider router={router} />


  // </BrowserRouter>

)
