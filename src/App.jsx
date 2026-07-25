import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

import AuthLayout from './components/AuthComps/AuthLayout'
import Login from './components/AuthComps/Login'
import Signup from './components/AuthComps/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-on-surface">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App