 //DesktopNavigation.js

 import NavLinks from "./NavLinks";
 import './NavBar.css';
import Logo from "/src/assets/logo.svg"
 const DesktopNavigation = () =>{
     return( 
        <nav className="DesktopNavigation">
        <img className="logo"  src={Logo}/>
         <NavLinks/>
        </nav> 
        
        
     )
 }

 export default DesktopNavigation;


