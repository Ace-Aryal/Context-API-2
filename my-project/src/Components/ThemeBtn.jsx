import React from 'react'
import useTheme from "../context/Theme"
function ThemeBtn() {
const {themeMode , lighttheme , darktheme} = useTheme() // the btn is contained inside provider
    // so we can access the value of the context (global in our case) inside any component
    // via our custom useTheme() hook , which is equivalent to importing
    // the context and using useContext(ThemContext) here , so we are basically 
    // making our code modular
    

function handleClick (e){
   if(e.currentTarget.checked){
    darktheme()
    return
   }

   lighttheme()
}



      return (
          <label className="relative inline-flex items-center cursor-pointer">
              <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={handleClick}
                  checked= {themeMode === "dark"} // if current themeMode (global variable : in our case) is "dark" then checked otherwise unchecked 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
          </label>
      );
  }
  

  


export default ThemeBtn
