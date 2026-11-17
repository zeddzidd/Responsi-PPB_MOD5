import { useState } from 'react'
import { formatRupiah } from '../data/shoes.js'

function ConsignInfo({ onNavigateManage }) {
  const [askingPrice, setAskingPrice] = useState(2500000)
  const feeRate = 0.05 // 5% fee
  const feeAmount = askingPrice * feeRate
  const payoutAmount = askingPrice - feeAmount

  return (
    <div>
      <section className="hero-banner" style={{ background: 'linear-gradient(135deg, #1e1b4b, #0f172a)' }}>
        <span className="hero-tag" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
          Layanan Titip Jual (Consignment)
        </span>
        <h1 className="hero-title">Titip Jual Sepatu Koleksi Anda dengan Aman &amp; Cepat</h1>
        <p className="hero-subtitle">
          Punya sneakers authentic yang jarang dipakai atau deadstock? Titipkan di platform ZedConsign.
          Kami yang menangani otentikasi fisik, foto profesional, katalog digital, dan pengiriman ke pembeli.
        </p>
      </section>

      {/* 4 Steps Grid */}
      <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>
        4 Langkah Mudah Titip Jual
      </h2>
      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Submit Data Sepatu</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Input spesifikasi sepatu, brand, ukuran, kondisi, dan harga yang Anda inginkan melalui formulir kelola katalog.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Legit Check &amp; Kurasi</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Tim kurator ZedConsign memeriksa keaslian material, jahitan, box, insole, dan label sepatu secara mendalam.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Tampil di Katalog PWA</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Sepatu Anda langsung tayang di katalog online ZedConsign dan dapat diakses pembeli bahkan saat offline.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Terjual &amp; Dana Cair</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Setelah sepatu terkirim dan diterima pembeli, dana hasil penjualan otomatis ditransfer ke rekening consignor.
          </p>
        </div>
      </div>

      {/* Interactive Calculator */}
      <div className="calculator-card">
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
          Kalkulator Estimasi Hasil Titip Jual
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          Biaya jasa titip jual di ZedConsign flat 5% dari harga jual. Transparan tanpa biaya tersembunyi.
        </p>

        <div className="form-group">
          <label className="form-label">Masukkan Rencana Harga Jual (Rp):</label>
          <input
            type="number"
            step="50000"
            className="form-input"
            value={askingPrice}
            onChange={(e) => setAskingPrice(Math.max(0, Number(e.target.value)))}
          />
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            padding: '16px',
            marginTop: '16px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
            <span style={{ color: 'var(--text-dim)' }}>Harga Listing di Katalog:</span>
            <strong>{formatRupiah(askingPrice)}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
            <span style={{ color: 'var(--text-dim)' }}>Biaya Jasa ZedConsign (5%):</span>
            <span style={{ color: 'var(--danger)' }}>- {formatRupiah(feeAmount)}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-color)',
              fontSize: '16px',
            }}
          >
            <span style={{ fontWeight: '700' }}>Estimasi Dana yang Anda Terima:</span>
            <strong style={{ color: 'var(--success)', fontSize: '18px' }}>
              {formatRupiah(payoutAmount)}
            </strong>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            className="btn-primary"
            onClick={onNavigateManage}
          >
            Mulai Titip Jual Sepatu Sekarang
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsignInfo
