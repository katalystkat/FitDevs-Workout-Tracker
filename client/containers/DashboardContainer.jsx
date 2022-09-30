import React, { Component } from 'react';
import LoginComponent from '../components/LoginComponent.jsx';
import WorkoutLogger from '../components/WorkoutLogger.jsx';

export class dashboardContainer extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Your Fitness Dashboard</h1>
        <LoginComponent/>
        <WorkoutLogger/>
      </div>
    )
  }
}

export default dashboardContainer

