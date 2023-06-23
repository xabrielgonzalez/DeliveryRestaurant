import React from "react";
import { useDataFetch } from "../components/useDataFetch";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export const Restaurants = () => {

    let restaurants = [];

    // Params es un objeto que recibe nuestro custom hook y
    // contiene la URL a la que vamos a realizar la peticion, 
    // la queryKey que es parte de como react-query "catchea"
    // cada peticion, con lo cual debemos darle un array que contiene 
    // el string que va a identificar de forma unica la peticion en la cache.

    // Opcionalmente podemos agregar el numero de pagina como elemento del array, 
    // esto para realizar paginaciones, ademas params puede tener la
    // propiedad options, que es un objeto donde podemos por ejemplo perzonalizar
    // los headers de nuestro fetch para autenticaciones de usuario, o cambiar nuestro method, etc.

    // La propiedad config recibe un objeto con configuraciones adicionales de react-query.
    const params = {
        // ESTOS DATOS SON OBLIGATORIOS!
        url: '/data/restaurants.json',
        queryKey: ["restaurants"],
        // ESTOS DATOS SON OPCIONALES!
        // Si no se especifica una configuracion, 
        // react-query funcionara con los valores default.
        config: {
            staleTime: 60000, // Tiempo de vigencia de los datos en el caché en milisegundos.
            cacheTime: 3600000, // Tiempo de retención de los datos en el caché en milisegundos.
            retry: 3, // Número máximo de reintentos en caso de error.
            refetchOnWindowFocus: false, // Evita que las solicitudes se realicen automáticamente al enfocar la ventana.
            refetchOnMount: false, // Evita que la primera solicitud se realice automáticamente al montar el componente.
            enabled: true, // Indica si la solicitud está habilitada (puedes cambiarlo según tus necesidades).
        },
        // En este caso options no es necesario, solo se encuentra
        // a modo de ejemplo.
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    };
    
    // Usamos el hook con la "api".
    const { data, isLoading, isError, error } = useDataFetch(params);

    // Si el estado de carga es verdadero, muestra un mensaje de carga.
    if(isLoading){
        return <div>Loading...</div>
    }

    // Si hay un error, muestra un mensaje de error con el mensaje especifico.
    if(isError){
        return <div>Error: {error.message}</div>
    }

    // Si los datos son obtenidos con exito se los asigna a una variable para su 
    // manipulacion.
    if(data){
        restaurants = data;
        console.log(data); // VER CONSOLA!
    }

    return (
        <div>
            <Navbar/>
            <div className="my-3 text-center mb-5 relative">
                <h1 className=" text-5xl text-white absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 overflow-hidden font-bold">RESTAURANTES</h1>
                <img className="object-cover" src="/img/restaurants-hero.png" alt="restaurants-banner" width={2000}/>
            </div>
            <main className="container mx-auto mt-10 text-center mb-20">
                <div className="grid grid-cols-3 mx-auto gap-8 gap-x-14 mb-10 p-4">
                    
                    {    
                    
                        restaurants.map((restaurant) => (
                            <Card
                                key={restaurant.id}
                                name={restaurant.name}
                                description={restaurant.description}
                                logo={restaurant.logo}
                                cover={restaurant.cover}
                            />
                        ))
                      
                    }
                     
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Restaurants;