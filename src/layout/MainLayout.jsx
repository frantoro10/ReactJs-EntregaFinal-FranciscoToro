import React from 'react'
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainLayout.module.scss"


const MainLayout = ( {children}) => {
  return (
    <div>
      <main >
        {children} 
        </main>      
    </div>
  )
}

export default MainLayout