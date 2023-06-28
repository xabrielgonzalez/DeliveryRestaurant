import axios from "axios";

const restaurantsApi = axios.create({
    baseURL: "http://localhost:3000/restaurants"
});

export const getRestaurants = async () => {
    const res = await restaurantsApi.get("/");
    return res.data;
};

export const createRestaurant = (restaurant) => restaurantsApi.post("/", restaurant);

export const deleteRestaurant = id => restaurantsApi.delete(`/${id}`);

export const updateRestaurant = (restaurant) => restaurantsApi.put(`/${restaurant.id}`, restaurant);
