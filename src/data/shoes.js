export const DEFAULT_SHOES = [
  {
    id: 'shoe-1',
    name: 'Air Jordan 1 High OG Chicago Lost & Found',
    brand: 'Jordan',
    category: 'Basketball',
    size: 'US 9 / EU 42.5',
    condition: 'Brand New In Box (BNIB)',
    price: 4850000,
    image: '/shoes/jordan-retro.svg',
    description:
      'Ikonik sneaker legendaris dengan siluet high-top klasik colorway Chicago merah putih. Dilengkapi vintage aged midsole, crackled leather collar, dan receipt retro 1986. 100% Original Authentic verified by ZedConsign legit check.',
    consignor: 'Zed Store Official',
    stock: 2,
    isFeatured: true,
  },
  {
    id: 'shoe-2',
    name: 'Nike Dunk Low Retro White Black Panda',
    brand: 'Nike',
    category: 'Sneakers',
    size: 'US 8.5 / EU 42',
    condition: 'Brand New In Box (BNIB)',
    price: 1850000,
    image: '/shoes/dunk-low.svg',
    description:
      'Siluet paling populer dan versatile untuk daily wear. Kombinasi warna clean monochrome hitam dan putih dengan premium leather upper dan outsole karet berdaya cengkeram tinggi.',
    consignor: 'Consignor #4102',
    stock: 5,
    isFeatured: true,
  },
  {
    id: 'shoe-3',
    name: 'Yeezy Boost 350 V2 Beluga Reflective',
    brand: 'Adidas',
    category: 'Running',
    size: 'US 9.5 / EU 43',
    condition: 'Like New (VNDS 9.8/10)',
    price: 3600000,
    image: '/shoes/yeezy-boost.svg',
    description:
      'Desain futuristik dari lini Yeezy dengan Primeknit upper berbenang reflective, pull-tab oranye khas Beluga, dan midsole Boost berbalut ribbed cage TPU yang sangat empuk.',
    consignor: 'Consignor #1401',
    stock: 1,
    isFeatured: false,
  },
  {
    id: 'shoe-4',
    name: 'New Balance 990v5 Made in USA Grey',
    brand: 'New Balance',
    category: 'Casual',
    size: 'US 9 / EU 42.5',
    condition: 'Brand New In Box (BNIB)',
    price: 3950000,
    image: '/shoes/new-balance.svg',
    description:
      'Definisi kenyamanan dan kemewahan understated sneaker dad shoe. Dibuat di Amerika Serikat dengan material pigskin suede premium, breathable mesh, dan teknologi bantalan ENCAP.',
    consignor: 'Zed Vault',
    stock: 3,
    isFeatured: true,
  },
  {
    id: 'shoe-5',
    name: 'Adidas Samba OG Cloud White Core Black',
    brand: 'Adidas',
    category: 'Casual',
    size: 'US 8 / EU 41',
    condition: 'Brand New In Box (BNIB)',
    price: 2150000,
    image: '/shoes/samba-og.svg',
    description:
      'Klasik sepak bola era 1950 yang kini menjadi siluet street-style paling dicari di dunia. Suede T-toe overlay, 3-stripes hitam kontras, dan sol karet gum bernuansa vintage.',
    consignor: 'Consignor #4108',
    stock: 4,
    isFeatured: false,
  },
  {
    id: 'shoe-6',
    name: 'Travis Scott x Air Jordan 1 Low Mocha',
    brand: 'Jordan',
    category: 'Sneakers',
    size: 'US 10 / EU 44',
    condition: 'Brand New In Box (BNIB)',
    price: 18500000,
    image: '/shoes/travis-scott.svg',
    description:
      'Holy Grail kolaborasi Travis Scott x Jordan Brand. Menampilkan reverse oversized Swoosh warna sail, suede nubuck cokelat mocha kaya serat, dan signature Cactus Jack embroidery merah di tumit.',
    consignor: 'Zed Collector Consignment',
    stock: 1,
    isFeatured: true,
  },
]

export const CATEGORIES = ['Semua', 'Sneakers', 'Basketball', 'Running', 'Casual']

export const BRANDS = ['Semua', 'Jordan', 'Nike', 'Adidas', 'New Balance']

export function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(number)
}
