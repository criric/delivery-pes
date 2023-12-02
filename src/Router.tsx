import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Bag } from "./pages/Bag";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Profile } from "./pages/Profile";
import { MenuEmployee } from "./pages/MenuEmployee";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="employee">
                <Route path="menu" element={<MenuEmployee />}/>
            </Route>
            <Route path="client" element={<DefaultLayout />}>
                <Route path="menu" element={<Home />} />
                <Route path="bag" element={<Bag />} />
            </Route>
        </Routes>
    )
}