import { AlertTriangle, Clapperboard, RefreshCw } from 'lucide-react'
export function LoadingGrid(){return <div className="movie-grid" aria-label="Memuat film" aria-busy="true">{Array.from({length:10},(_,i)=><div className="skeleton-card" key={i}><div/><i/><small/></div>)}</div>}
export function ErrorState({message,onRetry}){return <div className="state"><AlertTriangle/><h2>Film belum berhasil dimuat</h2><p>{message}</p><button className="primary" onClick={onRetry}><RefreshCw/> Coba lagi</button></div>}
export function EmptyState({title='Film tidak ditemukan',description='Coba kata kunci atau filter yang berbeda.',children}){return <div className="state"><Clapperboard/><h2>{title}</h2><p>{description}</p>{children}</div>}
