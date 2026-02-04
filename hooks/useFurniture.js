import { FurnitureContext } from "../context/FurnitureContext";
import { useContext } from "react";

export function useFurniture(){
    const context=useContext(FurnitureContext)

if(!context){
    throw new error("must be inside the UserProvider")
}

    return context
}