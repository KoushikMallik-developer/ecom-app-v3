import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/header'
import Navbar from './components/common/navbar'
import Home from './components/common/home'
import ProductList from './components/product/product_list'
import ProductDetail from './components/product/product_details'
import Checkout from './components/cart/cart_checkout'
import OrderHistory from './components/orders/order_history'
import OrderDetails from './components/orders/order_details'
import EditProfile from './components/user/edit_profile'
import Login from './components/user/login'
import Register from './components/user/register'
import Footer from './components/common/footer'
import UserProfile from './components/user/UserProfile'
import PageNotFound from './components/page_not_found/page_not_found'
import SellerLanding from './components/seller/seller_home/seller_landing'

function App() {


  return (

    <Router>
      <div className="App bg-light" style={{fontFamily: "Signika"}}>
        <Header />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/order-history" element={<OrderHistory/>} />
          <Route path="/order/:id" element={<OrderDetails/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/edit-profile" element={<EditProfile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/seller-home" element={<SellerLanding/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
