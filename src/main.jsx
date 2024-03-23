import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Statistics from './Component/statistics/Statistics';
import AppiledJobs from './Component/AppliedJobs/AppiledJobs';
import Blog from './Component/Blog/Blog';
import Jobs from './Component/Jobs/Jobs';
import Error from './Component/Error/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<Error></Error> ,
    children : [
      {
        path : '/',
        element :<Home></Home> ,
      },
      {
        path :'/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/appliedjobs' ,
        element : <AppiledJobs></AppiledJobs>
      },
      {
        path : '/blog' ,
        element : <Blog></Blog>
      },
      {
        path : '/jobs' ,
        element : <Jobs></Jobs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
