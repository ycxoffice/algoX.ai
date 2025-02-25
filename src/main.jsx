import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompanyData from "./pages/CompanyData";
import CompanyList from "./pages/CompanyList";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/companies" element={<CompanyList/>} />
        <Route path="/:companyName" element={<CompanyData />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
