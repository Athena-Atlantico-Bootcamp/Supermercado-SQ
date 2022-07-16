import {Route,Routes} from "react-router-dom"
import Allergy from "../pages/Allergy"
import AboutUs from "../pages/AboutUs"
import App from "../pages/App"
import Login from "../pages/Login/index"
import LoginAdm from "../pages/LoginAdm"
import LoginUser from "../pages/LoginUser/LoginUser"
import ProductDetails from "../pages/ProductDetails"
import SearchScreen from "../pages/SearchScreen"

function Path(){
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/sobre-nos" element={<AboutUs />}/>
            <Route path="/alergias" element={<Allergy />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/perfil-adm" element={<LoginAdm />}/>
            <Route path="/perfil" element={<LoginUser />}/>
            <Route path="/produto/:id" element={<ProductDetails />}/>
            <Route path="/buscar" element={<SearchScreen />}/>
        </Routes>
    )
}
export default Path