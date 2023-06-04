import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/NavBar/Index'
import Layout from '../Layout'
import './App.css'

const AppRoutes = () => useRoutes([
  { path: "/", element: <Home /> },
  { path: "/MyAccount", element: <MyAccount /> },
  { path: "/MyOrder", element: <MyOrder /> },
  { path: "/MyOrders", element: <MyOrders /> },
  { path: "/SignIn", element: <SignIn /> },
  { path: "/*", element: <NotFound /> },
]);


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
