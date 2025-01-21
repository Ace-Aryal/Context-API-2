import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './context/theme'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lighttheme = () => {
    setThemeMode("light")
  }

  const darktheme = () => {
    setThemeMode("dark")
  }

 /* useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
    
  }, [themeMode]) */
  
  

  return (
    <ThemeProvider value={{ themeMode, lighttheme, darktheme}}>
        <div className='w-full'>
            
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

          </div>

          <div className="w-full max-w-sm mx-auto">

          </div>
          



        </div>
        </ThemeProvider>
  )
}

export default App
