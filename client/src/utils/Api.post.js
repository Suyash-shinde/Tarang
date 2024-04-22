import axios from "axios";
import { adminRegisterRoute, getDetailsRoute, getEventsRoute, logoutRoute, newEventRoute } from "./APIRoutes.js";
import { refreshTokenRoute,adminLoginRoute } from "./APIRoutes.js";
const api = axios.create({
    baseURL: "http://localhost:5173",
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const logout = ()=> api.post(logoutRoute);
export const adminLogin = (data)=>api.post(adminLoginRoute, data);
export const adminRegister = (data)=>api.post(adminRegisterRoute,data);
export const newEvent = (data)=>api.post(newEventRoute,data);
export const getEvents=()=>api.get(getEventsRoute);
export const getEventDetail=(eventId)=>api.get(`${getDetailsRoute}/${eventId}`);
api.interceptors.response.use(
    (config)=>{
        return config;
    },
    async(error)=>{
        const originalRequest = error.config;
        if(
            error.response.status === 405 &&
            originalRequest &&
            !originalRequest._isRetry
        ){
            originalRequest._isRetry=true;
            try {
                await axios.post(
                    refreshTokenRoute,{},
                    {
                        withCredentials: true,
                    }
                );

                return api.request(originalRequest);
            } catch (error) {
                console.log(error.msg);
            }
        }
        throw error;
    }
)

export default api;