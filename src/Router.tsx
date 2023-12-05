import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Bag } from "./pages/Bag";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Profile } from "./pages/Profile";
import { StatusPedido } from "./pages/StatusPedido";
import { RestaurantLayout } from "./layouts/RestaurantLayout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="employee" element={<RestaurantLayout />}>
                <Route path="menu" element={<Home />}/>
            </Route>
            <Route path="client" element={<DefaultLayout />}>
                <Route path="menu" element={<Home />} />
                <Route path="bag" element={<Bag />} />
                <Route path="status" element={<StatusPedido />} />
            </Route>
        </Routes>
    )
}