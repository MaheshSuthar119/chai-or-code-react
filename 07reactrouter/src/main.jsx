import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import User from './Componenets/User/User.jsx'
import Github, { githubInfoLoder } from './Componenets/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact-us' element={<Contact/>}/>     
      <Route path='user/:userid' element={<User/>}/> 
      <Route 
      loader={githubInfoLoder}
      path='github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
