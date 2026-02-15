import React, {useState, createContext, useContext, useEffect} from "react";

const initWorks = {
    works: [],
};

const getInitialState = () => {
    const works = localStorage.getItem("works")
    return works ? JSON.parse(works) : initWorks;
};

export const WorksContext = createContext();

const WorksContextProvider = (props) => {
    const [works,setWorks] = useState(getInitialState);
    useEffect(() => {
    localStorage.setItem("works", JSON.stringify(works));
    },[works])
    
    const addWorks = (work) => 
        setWorks((prev) => ({
            ...prev,
            works:[...prev.works, work],
    }));
    const getWorksById = (id) => {
        return works.works.find(work => work.id === Number(id));
    };
    const getWorks = () => {
        return works.works;
    };
    const getRecentWorks = () => {
        return works.at(-1);
    };
    const updateWorks = (id, updatedData) => {
    setWorks((prev) => ({
        ...prev,
        works: prev.works.map(work => 
            work.id === id 
                ? { ...work, ...updatedData } 
                : work                          
        )
     }));
    };
    
     return(
        <WorksContext.Provider value={{ 
            works: works.works, 
            addWorks,
            getWorksById,
            getWorks,  
            getRecentWorks, 
            updateWorks    
        }}>
            {props.children}
        </WorksContext.Provider>
    );
};
export default WorksContextProvider;