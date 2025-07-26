import { useEffect } from "react";
const useTitle = (msg)=>{
    useEffect(()=>{
        document.title = "MyZomoto - "+msg;
    }, []);
}   
export default useTitle;
    