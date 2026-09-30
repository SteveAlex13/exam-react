import { Heart, Trash2 } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import { EmptyState } from '../components/States'
import { useFavorites } from '../context/FavoritesContext'
export default function FavoritesPage(){const{favorites,clearFavorites}=useFavorites();useEffect(()=>{document.title=`Favorit (${favorites.length}) — CineScope`},[favorites.length]);const removeAll=()=>{if(window.confirm('Hapus semua film dari favorit?'))clearFavorites()};return <section className="container page"><div className="page-title"><div><span className="eyebrow">Koleksi pribadi</span><h1>Film favorit <em>kamu.</em></h1><p>{favorites.length} film tersimpan di perangkat ini.</p></div>{favorites.length>0&&<button className="danger" onClick={removeAll}><Trash2/> Hapus semua</button>}</div>{favorites.length?<MovieGrid movies={favorites}/>:<EmptyState title="Belum ada film favorit" description="Tekan ikon hati pada film yang kamu suka. Koleksimu akan muncul di sini."><Link className="primary" to="/"><Heart/> Jelajahi film</Link></EmptyState>}</section>}
