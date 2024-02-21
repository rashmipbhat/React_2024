import React, {createContext, useState} from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext =createContext();


const PhotoContextProvider = props =>{
const [images,setImages]=useState([]);
const [loading,setLoading]=useState(true);

const runsearch=(query)=>{
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
        setImages(response.data);
        setLoading(false);
    })
    .catch(error =>{
        console.log("Encountered an error with fetching and p[arsing data",error);
    })
};
return(
    <PhotoContext.Provider value={{images,loading,runsearch}}>
        {props.children}
    </PhotoContext.Provider>
);
}
export default PhotoContextProvider;

