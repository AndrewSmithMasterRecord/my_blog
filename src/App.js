import React from 'react';
import './App.module.css';
import Navigation from "./components/navigation/navigation";
import Content from "./components/content/content";
import Aside from "./components/aside/aside";
import Footer from "./components/footer/footer";
import style from "./App.module.css"

class App extends React.Component {
    render() {
        return <div className={style.app_wrapper}>
            <Navigation/>
            <Content/>
            <Aside/>
            <Footer/>
        </div>
    }
}

export default App;
