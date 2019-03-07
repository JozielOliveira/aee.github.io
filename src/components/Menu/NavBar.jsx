import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends PureComponent {
  render() {
    const { Component, menu } = this.props;
    return (
        menu.map( item => 
            <NavLink 
                key={item.id} 
                style={{ textDecoration : 'none'}} 
                to={{ 
                    pathname : `/main/${item.path}`,  
                    state: { 
                        name: item.label, 
                        description : item.description }
                }}>
                {Component(item)}
            </NavLink>
        )
    )
  }
}
