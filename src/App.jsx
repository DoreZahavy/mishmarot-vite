// import React from 'react'

// import { useState } from 'react'
import { Navigate, HashRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/styles.css'
// import './App.css'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import SubmissionPage from './pages/SubmissionPage'
import EditorPage from './pages/EditorPage'
import AccountPage from './pages/AccountPage'
import MainHeader from './cmps/MainHeader'
import MainFooter from './cmps/MainFooter'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function RouteGuard({ children }) {
  // const loggedinUser = userService.getLoggedinUser()
  // if (!loggedinUser) return <Navigate to="/userauth" />
  // return <>{children}</>
}

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>


        <CssBaseline />
        <main className="main-layout height-layout">

          <MainHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/submission" element={<SubmissionPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/account" element={<AccountPage />} />

          </Routes>
          <MainFooter />
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
