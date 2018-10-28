import React from "react"
import logo from "./logo.svg"
import './App.css'

export class TopBar extends React.Component{
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="App-title">Around</div>
                </header>
            </div>
        );
    }
}


