// import { Catalog } from './components/catalog/Catalog'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { AdminTable } from './components/admin/AdminTable'
import { CreateItem } from './components/catalog/CreateItem'
import 'bootstrap/dist/css/bootstrap.min.css' 
import UserProfile from './components/user/UserProfile'
import { Login } from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute'
import LootsList from './components/catalog/LootsList'
import Footer from './components/navbar/Footer'


function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loots' element={<LootsList endpointSuffix={""} />} />
          <Route path='/loots/create' element={<PrivateRoute><CreateItem /></PrivateRoute>} />
          <Route path='/me' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path='/users/:id' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path='/admin' element={<PrivateRoute><AdminTable /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
