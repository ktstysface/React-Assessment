import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Owner from "./owner.jsx"
import Admin from './admin.jsx';
import User from './user.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <App />
    ),
  },
  {
    path: "owner",
    element: <Owner/>,
  },
  {
    path: "user",
    element: <User/>,
  },
  {
    path: "admin",
    element: <Admin/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
