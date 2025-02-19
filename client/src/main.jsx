import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Notes from './Pages/Notes.jsx'
import Github from './Pages/Github.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>}/>
      <Route path='notes' element={<Notes/>}/>
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
