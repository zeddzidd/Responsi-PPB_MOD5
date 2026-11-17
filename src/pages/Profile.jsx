function Profile() {
  return (
    <div>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">SY</div>
          <h1 className="profile-name">Shiddiq Yazid Nurhakim</h1>
          <div className="profile-nim">NIM: 21120124140120</div>
          <div className="profile-group-badge">Kelompok 41</div>
        </div>

        <div className="profile-details-list">
          <div className="detail-row">
            <span className="detail-label">Nama Lengkap</span>
            <span className="detail-val">Shiddiq Yazid Nurhakim</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Nomor Induk Mahasiswa (NIM)</span>
            <span className="detail-val">21120124140120</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Kelompok Praktikum</span>
            <span className="detail-val">Kelompok 41</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Program Studi</span>
            <span className="detail-val">S1 Teknik Komputer</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Departemen / Fakultas</span>
            <span className="detail-val">Departemen Teknik Komputer - Fakultas Teknik</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Universitas</span>
            <span className="detail-val">Universitas Diponegoro</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Mata Kuliah Praktikum</span>
            <span className="detail-val">Pemrograman Perangkat Bergerak (PPB)</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Judul Tugas Akhir</span>
            <span className="detail-val" style={{ color: 'var(--primary)' }}>
              ZedConsign: Aplikasi Katalog Sepatu Berbasis Mobile (PWA)
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Tech Stack</span>
            <span className="detail-val">
              React 19 &bull; Vite &bull; vite-plugin-pwa &bull; Workbox &bull; JavaScript
            </span>
          </div>
        </div>

        {/* Syarat Praktikum & PWA Checklist Card */}
        <div className="checklist-card">
          <div className="checklist-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Status Pemenuhan Syarat Tugas Akhir Praktikum PWA
          </div>
          <ul className="checklist-items">
            <li>
              <span style={{ color: 'var(--success)' }}>&#10004;</span>
              <strong>Minimal 3 Halaman Navigasi:</strong> Tersedia 4 halaman aktif (Katalog Sepatu, Kelola Sepatu/CRUD, Titip Jual, Profil).
            </li>
            <li>
              <span style={{ color: 'var(--success)' }}>&#10004;</span>
              <strong>Halaman Profil:</strong> Berisi Nama (Shiddiq Yazid Nurhakim), NIM (21120124140120), Kelompok (41).
            </li>
            <li>
              <span style={{ color: 'var(--success)' }}>&#10004;</span>
              <strong>Halaman CRUD Fungsional:</strong> Tambah, Baca, Edit, dan Hapus data sepatu tersimpan di penyimpanan lokal offline.
            </li>
            <li>
              <span style={{ color: 'var(--success)' }}>&#10004;</span>
              <strong>PWA Installable &amp; Offline Ready:</strong> Menggunakan Web App Manifest, Service Worker caching via Workbox, dan tombol Install PWA.
            </li>
            <li>
              <span style={{ color: 'var(--success)' }}>&#10004;</span>
              <strong>Siap Deploy ke Vercel:</strong> Dilengkapi berkas <code>vercel.json</code> untuk routing SPA dan build terverifikasi tanpa error.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
