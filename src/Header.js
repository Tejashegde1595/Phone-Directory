import React from 'react';
import './Header.css'
const Header = function(props){
    const HeaderStyle = {textAlign:'center',padding:20,background:'#000',color:'#fff',textTransform:'uppercase'}
    return(
        <div className="header">
            {props.heading}
        </div>
    )
}

export default Header;