import React from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export const Restaurants = () => {

    const RESTAURANTS_ARRAY = [
        {
            "id": 1,
            "name": "Trattoria Pizzeria",
            "description": "lorem ipsum etc etc etc",
            "logo": "/img/resto_logo.png",
            "cover": "/img/trattoria_cover.jpg",
            "address": ""

        }, 
        {
            "id": 2,
            "name": "Soul Coffe",
            "description": "lorem ipsum etc etc etc",
            "logo": "/img/resto_logo.png",
            "cover": "/img/soul_cover.jpg",
            "address": ""

        },
        {
            "id": 3,
            "name": "RestoWave",
            "description": "lorem ipsum etc etc etc",
            "logo": "/img/resto_logo.png",
            "cover": "/img/restowave_cover.jpg",
            "address": ""

        }, 
        {
            "id": 4,
            "name": "Iō",
            "description": "lorem ipsum etc etc etc",
            "logo": "/img/resto_logo.png",
            "cover": "/img/io_cover.jpg",
            "address": ""

        },
        {
            "id": 5,
            "name": "Oparach",
            "description": "lorem ipsum etc etc etc",
            "logo": "/img/resto_logo.png",
            "cover": "/img/oparach_cover.jpg",
            "address": ""

        },
        {
            "id": 6,
            "name": "Blue Resto",
            "description": "lorem ipsum etc etc etc",
            "logo": "/img/resto_logo.png",
            "cover": "/img/blueresto_cover.jpg",
            "address": ""

        }
    ];

    return (
        <div className="">
            <Navbar/>
            
            <div className="my-3 text-center mb-5 relative">
                <h1 className=" text-5xl text-white absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 overflow-hidden font-bold">RESTAURANTES</h1>
                <img className="object-cover" src="/img/restaurants-hero.png" alt="restaurants-banner" width={2000}/>
            </div>
            <main className="container mx-auto mt-10 text-center mb-20">

                <div className="grid grid-cols-3 mx-auto gap-8 gap-x-14 mb-10">
                    
                    {RESTAURANTS_ARRAY.map((restaurant) => (
                        <Card 
                            key={restaurant.id}
                            name={restaurant.name}
                            description={restaurant.description}
                            logo={restaurant.logo}
                            cover={restaurant.cover}
                        />
                    ))}
                    
                </div>

            </main>
          
            <Footer/>
        </div>
    
    );
};

export default Restaurants;