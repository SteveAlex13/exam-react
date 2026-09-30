import { Heart } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
export default function FavoriteButton({movie}){const{isFavorite,toggleFavorite}=useFavorites();const active=isFavorite(movie.id);return <button className={`detail-favorite ${active?'active':''}`} onClick={()=>toggleFavorite(movie)} aria-pressed={active}><Heart fill={active?'currentColor':'none'}/>{active?'Hapus dari favorit':'Tambah ke favorit'}</button>}
