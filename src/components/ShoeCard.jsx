import { formatRupiah } from '../data/shoes.js'

function ShoeCard({ shoe, onSelect }) {
  return (
    <article className="shoe-card">
      <div className="card-image-wrap" onClick={() => onSelect(shoe)}>
        <img
          src={shoe.image || '/shoes/dunk-low.svg'}
          alt={shoe.name}
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/shoes/dunk-low.svg'
          }}
        />
        <span className="card-badge">{shoe.category}</span>
        <span className="card-condition-tag">{shoe.condition.split(' ')[0]}</span>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span>{shoe.brand}</span>
          <span className="card-size">{shoe.size}</span>
        </div>

        <h3 className="card-title" onClick={() => onSelect(shoe)}>
          {shoe.name}
        </h3>

        <div className="card-price-row">
          <div>
            <div className="card-price-label">Harga Consign</div>
            <div className="card-price">{formatRupiah(shoe.price)}</div>
          </div>
          <button
            type="button"
            className="card-view-btn"
            onClick={() => onSelect(shoe)}
          >
            Detail
          </button>
        </div>
      </div>
    </article>
  )
}

export default ShoeCard
