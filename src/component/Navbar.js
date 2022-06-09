import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menuitems } from './Menuitems.js';
import './Navbar.css'

export default class Navbar extends Component{

    state = { clicked: false}

    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className='navbarItem'>
                <h1 className="navbar-logo">CRYPTO TRACKER</h1>
                <div className="menu-icon" onClick = {this.handleClick}>
                    <ion-icon name={this.state.clicked ? "contract-outline": "filter-outline"}></ion-icon>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* new form of map function */}
                    { Menuitems.map((item,ind) => {
                        return(
                        <li key={ind}><Link className={item.cName} to={item.url} >
                            {item.title}
                        </Link></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}