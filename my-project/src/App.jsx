import React , { useEffect, useState }  from 'react'
import { ThemeProvider } from './context/Theme.js'
import ThemeBtn from './Components/ThemeBtn.jsx'
import Card from './Components/Card.jsx'


function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lighttheme = () => {
    setThemeMode("light")
  }

  const darktheme = () => {
    setThemeMode("dark")
  }

 useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
    
  }, [themeMode]) 
  
  

  return (
  
   <ThemeProvider value={{ themeMode, lighttheme, darktheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                        </div>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            


   
          



        </ThemeProvider>
        
  )
  
}

export default App
