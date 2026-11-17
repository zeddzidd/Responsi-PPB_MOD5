import { useState, useMemo } from 'react'
import ShoeCard from '../components/ShoeCard.jsx'
import ShoeModal from '../components/ShoeModal.jsx'
import { CATEGORIES } from '../data/shoes.js'

function Catalog({ shoes, onNavigateManage }) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [sortBy, setSortBy] = useState('default')
  const [activeShoe, setActiveShoe] = useState(null)

  const filteredShoes = useMemo(() => {
    return shoes
      .filter((shoe) => {
        const matchesCategory =
          selectedCategory === 'Semua' || shoe.category === selectedCategory
        const query = search.toLowerCase()
        const matchesSearch =
          shoe.name.toLowerCase().includes(query) ||
          shoe.brand.toLowerCase().includes(query) ||
          shoe.condition.toLowerCase().includes(query)
        return matchesCategory && matchesSearch
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name)
        return 0
      })
  }, [shoes, search, selectedCategory, sortBy])

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-banner">
        <span className="hero-tag">Official Mobile Consignment PWA</span>
        <h1 className="hero-title">
          Koleksi Sepatu Original &amp; Titip Jual Terpercaya
        </h1>
        <p className="hero-subtitle">
          Temukan sneakers autentik, rilisan terbatas, dan rilisan retro terverifikasi.
          Dapat diakses secara offline dan di-install langsung ke perangkat ponsel pintar Anda.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">{shoes.length}</span>
            <span className="stat-label">Total Unit di Katalog</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Legit Checked</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">PWA Offline</span>
            <span className="stat-label">Ready &amp; Cached</span>
          </div>
        </div>
      </section>

      {/* Controls: Search, Category Pills, Sort */}
      <section className="controls-bar">
        <div className="search-box">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Cari sepatu, brand, model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: '8px 12px', fontSize: '13px' }}
          >
            <option value="default">Urutkan: Bawaan</option>
            <option value="price-asc">Harga: Terendah</option>
            <option value="price-desc">Harga: Tertinggi</option>
            <option value="name-asc">Nama: A - Z</option>
            <option value="name-desc">Nama: Z - A</option>
          </select>

          <button
            type="button"
            className="btn-edit"
            onClick={onNavigateManage}
            title="Buka halaman CRUD"
          >
            + Kelola Sepatu
          </button>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="category-pills" style={{ marginBottom: '24px' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shoes Grid */}
      {filteredShoes.length > 0 ? (
        <div className="shoe-grid">
          {filteredShoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              shoe={shoe}
              onSelect={(item) => setActiveShoe(item)}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
          }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: '12px', fontSize: '16px' }}>
            Tidak ada sepatu yang cocok dengan pencarian Anda.
          </p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setSearch('')
              setSelectedCategory('Semua')
            }}
          >
            Reset Filter Pencarian
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {activeShoe && (
        <ShoeModal shoe={activeShoe} onClose={() => setActiveShoe(null)} />
      )}
    </>
  )
}

export default Catalog
