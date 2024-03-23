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
import JobDetails from './Component/JobDetails/JobDetails';



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
        element : <AppiledJobs></AppiledJobs>,
        loader : () => fetch("../jobs.json")
      },
      {
        path : '/blog' ,
        element : <Blog></Blog>
      },
      {
        path : '/jobs' ,
        element : <Jobs></Jobs>
      },
      {
        path : '/job/:id' ,
        element : <JobDetails></JobDetails>,
        loader : () => fetch("../jobs.json")
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
