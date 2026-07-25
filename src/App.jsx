import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

import AuthLayout from './components/AuthComps/AuthLayout'
import Login from './components/AuthComps/Login'
import Signup from './components/AuthComps/Signup'
import DashboardLayout from './pages/DashboardLayout'
import MissionControl from './pages/MissionControl'
import Telemetry from './pages/Telemetry'
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
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MissionControl />} />
            <Route path="telemetry" element={<Telemetry />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App