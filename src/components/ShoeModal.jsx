import { useEffect } from 'react'
import { formatRupiah } from '../data/shoes.js'

function ShoeModal({ shoe, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!shoe) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{shoe.name}</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-img-wrap">
            <img
              src={shoe.image || '/shoes/dunk-low.svg'}
              alt={shoe.name}
              className="modal-img"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/shoes/dunk-low.svg'
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--success)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              &#10003; 100% Verified Legit Check
            </span>
            <span
              style={{
                background: 'rgba(56, 189, 248, 0.15)',
                color: 'var(--primary)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              Stok: {shoe.stock || 1} Pasang
            </span>
          </div>

          <div className="spec-grid">
            <div className="spec-box">
              <div className="spec-label">Brand / Kategori</div>
              <div className="spec-val">
                {shoe.brand} &bull; {shoe.category}
              </div>
            </div>

            <div className="spec-box">
              <div className="spec-label">Ukuran (Size)</div>
              <div className="spec-val">{shoe.size}</div>
            </div>

            <div className="spec-box">
              <div className="spec-label">Kondisi</div>
              <div className="spec-val">{shoe.condition}</div>
            </div>

            <div className="spec-box">
              <div className="spec-label">Harga Consign</div>
              <div
                className="spec-val"
                style={{ color: 'var(--accent)', fontSize: '16px' }}
              >
                {formatRupiah(shoe.price)}
              </div>
            </div>
          </div>

          <div className="spec-box" style={{ marginTop: '12px' }}>
            <div className="spec-label">Consignor / Penjual Terverifikasi</div>
            <div className="spec-val">{shoe.consignor || 'ZedConsign Verified Seller'}</div>
          </div>

          <p className="modal-desc">{shoe.description}</p>

          <div className="modal-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
            >
              Tutup
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                alert(`Tertarik dengan ${shoe.name}? Silakan hubungi admin ZedConsign untuk transaksi aman & inspeksi fisik!`)
              }}
            >
              Hubungi Consignor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoeModal
