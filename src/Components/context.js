import React, { useReducer, useEffect } from "react";
import { useContext } from "react";
import myReducer from './reducer';
import axios from "axios";

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: "",
    services: []
}
const AppContextProvider = ({ children }) => {
    const updateHome = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "Pratyay",
                    image: "./images/hero_image.jpg"
                }
            }
        )
    }
    const updateAbout = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "Prit",
                    image: "./images/aboutus.jpg"
                }
            }
        )
    }
    const getCars = async () => {
        
        try{
            const result = await axios.get("./car_api.json");
            const res = await result.data
            dispatch({
                type:"GET_SERVICES",
                payload:{
                    res,
                    name: "Pratyay",
                    image: "./images/hero_image.jpg"
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        return () => {
            getCars()
        }
    },[])


    const [state, dispatch] = useReducer(myReducer, initialState);
    return <AppContext.Provider value={{ ...state, updateAbout, updateHome}}>
        {children}
    </AppContext.Provider>
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppContextProvider, GlobalContext }