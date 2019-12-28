import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AyatContainer from './components/AyatContainer';
import './App.css';
import {getContracts, getContractDetails} from './services/nameRegistryEthService';


class App extends Component {


    getAllContracts = async () => {
        let details = [];
        let d = await getContracts();
        for(let i=0; i<d.length; i++) {
            let conDetails = await getContractDetails(d[i]);
            details.push(conDetails);
        }
        console.log(details);
        sessionStorage.setItem('contractDetails', JSON.stringify(details));
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/search" component={AyatContainer} />
                    </Switch>
                </div>
            </Router>
        )
    }



    componentDidMount() {
        this.getAllContracts();
    }

}


export default App;

