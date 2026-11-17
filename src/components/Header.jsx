import { useState, useEffect } from 'react'

const TABS = [
  { id: 'catalog', label: 'Katalog', icon: 'shoe' },
  { id: 'manage', label: 'Kelola Sepatu', icon: 'crud' },
  { id: 'consign', label: 'Titip Jual', icon: 'tag' },
  { id: 'profile', label: 'Profil', icon: 'user' },
]

function Header({ activeTab, onSelectTab }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [canInstall, setCanInstall] = useState(false)

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setCanInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setCanInstall(false)
    }
    setDeferredPrompt(null)
  }

  return (
    <>
      <header className="app-header">
        <div className="header-container">
          <div className="brand-wrapper" onClick={() => onSelectTab('catalog')}>
            <img src="/icon.svg" alt="ZedConsign Logo" className="brand-logo" />
            <div className="brand-info">
              <span className="brand-name">ZedConsign</span>
              <span className="brand-tagline">Katalog Sepatu Mobile</span>
            </div>
          </div>

          <nav className="desktop-nav">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onSelectTab(tab.id)}
              >
                {tab.id === 'manage' && (
                  <span
                    style={{
                      background: '#38bdf8',
                      color: '#090d16',
                      fontSize: '10px',
                      fontWeight: '800',
                      padding: '1px 5px',
                      borderRadius: '4px',
                      marginRight: '2px',
                    }}
                  >
                    CRUD
                  </span>
                )}
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            {canInstall && (
              <button
                type="button"
                className="pwa-install-btn"
                onClick={handleInstallClick}
                title="Install ZedConsign ke Home Screen"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Install App
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`mobile-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onSelectTab(tab.id)}
          >
            {tab.icon === 'shoe' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3.5 15.5l1.5-6 6-1 2 3 5 .5 3 4.5-1 2-16.5-3z" />
              </svg>
            )}
            {tab.icon === 'crud' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            )}
            {tab.icon === 'tag' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            )}
            {tab.icon === 'user' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}

export default Header
