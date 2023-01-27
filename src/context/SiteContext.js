import { createContext , useState } from "react";

export const Context = createContext();

const Provider = ( {children} ) => {

    const [theme,setTheme] = useState("light");

    const values = {
        theme,
        setTheme
    }

    return (
        <Context.Provider value={values}>
            { children }
        </Context.Provider>
    )
}

export default Provider;