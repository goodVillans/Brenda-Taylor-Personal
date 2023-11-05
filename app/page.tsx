'use client'
import { useState, useEffect } from "react"
import Navbar from "./Scenes/navbar"
import Home from "./Scenes/home"
import { SelectedPage } from "./Shared/types"


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [pageTop, setPageTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY == 0) {
            setPageTop(true);
            setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setPageTop(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [])
  
  return (
    // app class routed @ globals.css
    <main className="app bg-white-main">
      <Navbar 
        pageTop={pageTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage} 
      />
    </main>
  )
}

export default App;
