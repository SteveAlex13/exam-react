import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MovieDetailPage from './pages/MovieDetailPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage'
export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<HomePage/>}/><Route path="movie/:id" element={<MovieDetailPage/>}/><Route path="favorites" element={<FavoritesPage/>}/><Route path="*" element={<NotFoundPage/>}/></Route></Routes>}
