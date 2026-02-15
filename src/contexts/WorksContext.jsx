import React, {useState, createContext, useContext, useEffect} from "react";

const initWorks = {
    works: [],
};

export const WorksContext = createContext();

const WorksContextProvider = (props) => {
    const [works,setWorks] = useState(initWorks);
    useEffect(() => {
    localStorage.setItem("works", JSON.stringify(works));
    },[works])
    
    const addWorks = (work) => 
        setWorks((prev) => ({
            ...prev,
            works:[...prev.works, work],
    }));
    
    return(
        <WorksContext.Provider value={{ works: works.works, addWorks }}>
            {props.children}
        </WorksContext.Provider>
    );
};
export default WorksContextProvider;