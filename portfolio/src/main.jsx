import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root.jsx';
import NewHome from './routes/NewHome.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    id:'root',
    children:[
      {index: true,
      element:<NewHome/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
