import { Navbar } from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Adopt } from './pages/Adopt'
import { NotFound } from './pages/NotFound'
import "./style.css"
import "./styles/Store.css"
import "./styles/DrinkCard.css"
import "./styles/CatCard.css"
import "./styles/burgermenu.css"
import "./styles/Adopt.css"
import "./styles/Menu.css"
import "./styles/Cat.css"
import "./styles/ShoppingCart.css"
import { Reviews } from "./pages/Reviews"
import { Store } from "./pages/Store"
import { Cat } from "./pages/Cat"
import { Menu } from "./pages/Menu"
import { Orders } from "./pages/Orders"
function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adopt">
          <Route index element={<Adopt />} />
          <Route path=":id" element={<Cat />} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/store" element={<Store />} />
        <Route path="/profile" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
