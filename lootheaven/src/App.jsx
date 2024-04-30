import { Catalog } from './components/catalog/Catalog'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Login } from './components/auth/Login'
import PrivateRoute from './components/navbar/PrivateRoute'
import { AdminTable } from './components/admin/AdminTable'
import { CreateItem } from './components/catalog/CreateItem'
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {

  return (
    <AuthProvider>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
          <Route path='/lots' element={<Catalog/>}></Route>
          <Route path='/lots/create' element={<PrivateRoute><CreateItem/></PrivateRoute>}></Route>
          <Route path='/me' element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
          <Route path='/admin' element={<PrivateRoute><AdminTable/></PrivateRoute>}></Route>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
