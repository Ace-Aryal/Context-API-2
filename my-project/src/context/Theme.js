import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darktheme: () => {} ,
    lighttheme : () => {}, // alternative to value attribute 
})

export const ThemeProvider = ThemeContext.Provider// sme as previous provider

export default useTheme = () =>{
    return useContext(ThemeContext) // custom hook to access value
}