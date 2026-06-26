import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import CeremonyPage from './pages/CeremonyPage'
import DetailsPage from './pages/DetailsPage'
import DoorCountyPage from './pages/DoorCountyPage'
import HomePage from './pages/HomePage'
import PartyPage from './pages/PartyPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="ceremony" element={<CeremonyPage />} />
          <Route path="party" element={<PartyPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="doorcounty" element={<DoorCountyPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
