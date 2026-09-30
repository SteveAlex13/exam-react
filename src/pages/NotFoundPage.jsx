import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function NotFoundPage(){useEffect(()=>{document.title='Halaman Tidak Ditemukan — CineScope'},[]);return <section className="not-found container"><span>404</span><h1>Halaman tersesat di layar lebar.</h1><p>Alamat yang kamu buka tidak tersedia atau sudah dipindahkan.</p><Link className="primary" to="/"><ArrowLeft/> Kembali ke beranda</Link></section>}
