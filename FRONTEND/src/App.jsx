import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Director from './components/Director'
import Classes from './components/Classes'
import Home from './components/Home'
import About from './components/About'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (  
    <div>
      
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
          <Navbar />
            <Home />
            <About />
            <Classes />
            <Director />
            <Contact />
            <Footer />
          </>
        } />
        {/* Admin page route */}
      
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />


      </Routes>
      
    </div>  
  )
}

export default App
