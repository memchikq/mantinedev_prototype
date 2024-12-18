import './App.css'
import { Route, Routes } from 'react-router-dom'
import NewTransfer from './pages/NewTransfer/NewTransfer'
import Profile from './pages/Profile/Profile'
import AddNewProduct from './pages/AddNewProduct/AddNewProduct'
import Transfers from './pages/Transfers/Transfers'
import Transfer from './pages/Transfer/Transfer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Transfers/>} />
        <Route path='/new-transfer' element={<NewTransfer/>} />
        <Route path='/transfer' element={<Transfer/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/new-product' element={<AddNewProduct/>} />
      </Routes>
    </>
  )
}

export default App
