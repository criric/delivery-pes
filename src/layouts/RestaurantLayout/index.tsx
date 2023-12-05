import { Outlet } from "react-router-dom";
import { HeaderRestaurant } from "../../components/HeaderRestaurant";

export function RestaurantLayout(){
    return (
        <div>
            <HeaderRestaurant />
            <Outlet />
        </div>
    )
}