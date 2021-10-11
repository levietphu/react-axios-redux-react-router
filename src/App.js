import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import './App.css';
import routes from './routes';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  

class App extends Component {

    showContentMenu = (routes) => {
        var result = null;
        if(routes.length >0){
            result = routes.map((route,index) => {
                return <Route key={index}  
                        path={route.path} 
                        exact={route.exact}
                        component={route.main}
                        >
                        </Route>
            })
        }
        return <Switch>{result}</Switch>;
    }

  render () {
    return (
        <Router>
        <div>
            
            <Menu></Menu>
            
            <div className="container">
                
                <div className="row">
                    
                    {this.showContentMenu(routes)}
                </div>
                
            </div>
            
        </div>
        </Router>
    );
  }
  
}

export default App;
