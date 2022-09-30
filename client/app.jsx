import  React, { Component } from 'react';
import { render } from 'react-dom';
import DashboardContainer from "./containers/dashboardContainer.jsx"
import LoginComponent from "./components/LoginComponent.jsx";

class App extends Component {
    render(){
        return(
            <div>
                <DashboardContainer/>
            </div>
        )
    }
}

export default App;