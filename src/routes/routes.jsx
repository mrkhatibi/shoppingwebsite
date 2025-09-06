import { Route, Routes } from "react-router-dom"
import HomePage from "../components/pages/HomePage"
import SoppingCart from "../components/pages/SoppingCart"
import DetailsPage from "../components/pages/DetailsPage"
import NotFound from "../components/pages/NotFound"

function AppRoutes() {
  return (
    <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/shoppingcart" element={<SoppingCart/>} />
        <Route path="/details/:id" element={<DetailsPage />}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRoutes