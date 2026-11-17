import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import OfflineBanner from './components/OfflineBanner.jsx'
import Catalog from './pages/Catalog.jsx'
import ManageShoes from './pages/ManageShoes.jsx'
import ConsignInfo from './pages/ConsignInfo.jsx'
import Profile from './pages/Profile.jsx'
import { DEFAULT_SHOES } from './data/shoes.js'
import './App.css'

const STORAGE_KEY = 'zedconsign_shoes_catalog_v1'

function App() {
  const [tab, setTab] = useState('catalog')
  const [shoes, setShoes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
        }
      }
    } catch (e) {
      console.warn('Gagal memuat katalog dari localStorage, memuat default.', e)
    }
    return DEFAULT_SHOES
  })

  // Persist shoes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(shoes))
    } catch (e) {
      console.error('Gagal menyimpan ke localStorage:', e)
    }
  }, [shoes])

  // Scroll to top on tab change
  const handleSelectTab = (newTab) => {
    setTab(newTab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // CRUD Actions
  const handleAddShoe = (newShoe) => {
    setShoes((prev) => [newShoe, ...prev])
  }

  const handleUpdateShoe = (updatedShoe) => {
    setShoes((prev) =>
      prev.map((item) => (item.id === updatedShoe.id ? updatedShoe : item))
    )
  }

  const handleDeleteShoe = (shoeId) => {
    setShoes((prev) => prev.filter((item) => item.id !== shoeId))
  }

  const handleResetDefault = () => {
    setShoes(DEFAULT_SHOES)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SHOES))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="app-shell">
      <OfflineBanner />
      <Header activeTab={tab} onSelectTab={handleSelectTab} />

      <main className="main-content">
        {tab === 'catalog' && (
          <Catalog
            shoes={shoes}
            onNavigateManage={() => handleSelectTab('manage')}
          />
        )}
        {tab === 'manage' && (
          <ManageShoes
            shoes={shoes}
            onAddShoe={handleAddShoe}
            onUpdateShoe={handleUpdateShoe}
            onDeleteShoe={handleDeleteShoe}
            onResetDefault={handleResetDefault}
          />
        )}
        {tab === 'consign' && (
          <ConsignInfo onNavigateManage={() => handleSelectTab('manage')} />
        )}
        {tab === 'profile' && <Profile />}
      </main>

      <Footer />
    </div>
  )
}

export default App
