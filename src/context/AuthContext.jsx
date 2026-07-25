import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'aether:users'
const SESSION_KEY = 'aether:session'

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const email = localStorage.getItem(SESSION_KEY)
    if (email) {
      const found = readUsers().find((u) => u.email === email)
      if (found) setUser({ name: found.name, email: found.email })
    }
    setReady(true)
  }, [])

  const signup = ({ name, email, password }) => {
    const users = readUsers()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('An account with this email already exists.')
    }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, { name, email, password }]))
    localStorage.setItem(SESSION_KEY, email)
    setUser({ name, email })
  }

  const login = ({ email, password }) => {
    const found = readUsers().find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!found) throw new Error('Incorrect email or password.')
    localStorage.setItem(SESSION_KEY, found.email)
    setUser({ name: found.name, email: found.email })
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, ready, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}