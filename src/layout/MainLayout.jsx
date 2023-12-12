import React from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainLayout.module.scss"


const MainLayout = ( {children}) => {
  return (
    <div>{children}</div>
  )
}

export default MainLayout