import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { CityPage } from './pages/CityPage'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { PaintingServices } from './pages/PaintingServices'
import { ServiceAreas } from './pages/ServiceAreas'
import { ServiceDetail } from './pages/ServiceDetail'
import { Services } from './pages/Services'
import { towns } from './data'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="service-areas" element={<ServiceAreas />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="painting-services" element={<PaintingServices />} />
        <Route path="contact" element={<Contact />} />
        {towns.map((t) => (
          <Route key={t.path} path={t.path} element={<CityPage townPath={t.path} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
