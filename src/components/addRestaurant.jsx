import React from "react";
import { useReactQuery } from "../components/useReactQuery";
import { useQueryClient } from "@tanstack/react-query";
import { createRestaurant } from "../api/restaurantAPI";

export const AddRestaurant = () => {

    const queryClient = useQueryClient();

    const params = {
        // ESTOS DATOS SON OBLIGATORIOS!
        queryType: "mutation",
        queryFn: createRestaurant,
        config: {
            onSuccess: () => {
                console.log("Restaurante Añadido!");
                queryClient.invalidateQueries("restaurants");
            }  
        }
    };

    const addRestaurantMutation = useReactQuery(params);

    const addRestaurant = () => {
        
        const restaurant = {
            id: "",
            name: "Red Resto",
            description: "lorem ipsum etc etc etc",
            logo: "/img/resto_logo.png",
            cover: "/img/blueresto_cover.jpg",
            address: "Address" 
        };

        addRestaurantMutation.mutate(restaurant);

    };
    
    return (
        <div className="text-center">
            <button className="mb-10 p-4 bg-gray-400" onClick={() => addRestaurant()}>Agregar Restaurante</button>
        </div>
    );
};

export default AddRestaurant;