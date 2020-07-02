import React from 'react';
import classes from './menu.module.css';
import MenuButton from './MenuButton/menuButton';
import MenuBlock from './Menu/menuBlock';
import Shadow from './Shadow/shadow'

class Menu extends React.Component {
    state = {
        isOpen: false
    }
    toggleMenu = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        const state = this.state;
        return(
        <div className={classes.menu}>
            <MenuButton isOpen={state.isOpen}
                        toggleMenu={this.toggleMenu}/>
            <MenuBlock isOpen={state.isOpen}
                       toggleMenu={this.toggleMenu}/>
            {state.isOpen
            ? <Shadow toggleMenu={this.toggleMenu}/>
            : null}
                  
        </div>
        )
    }   
}

export default Menu