import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import CeremonyPage from './pages/CeremonyPage'
import DetailsPage from './pages/DetailsPage'
import HomePage from './pages/HomePage'
import PartyPage from './pages/PartyPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="ceremony" element={<CeremonyPage />} />
          <Route path="party" element={<PartyPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
