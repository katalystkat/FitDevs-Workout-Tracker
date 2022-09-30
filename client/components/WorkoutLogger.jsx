import React, { Component } from 'react'

export class WorkoutLogger extends Component {
    constructor(props){
        super(props)
        this.state = {
            usernameInput: 'Katalyst',
            dateInput: '',
            activityNameInput: '',
            activityMetricInput: '',
            activityDescriptionInput: '',
        }
    }
  
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        const post_URL = "http://localhost:3000/api/logWorkout";
        fetch(post_URL, {
            method: 'POST',
            credentials: 'include',
                headers: {
                    'Accept': "application/json, text/plain",
                    'Content-Type': 'application/json',
                    'x-Trigger': 'CORS',
                    'Access-Control-Allow-Origin': 'http://localhost:8080',
    
                  },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then(data => console.log(data))
        //     .then(response => {
        //         if (response){this.setState({login: true})
        //         }
        // })
            .then(data => console.log(this.state))
            .catch(err => console.log(err));
    
      }
  render() {

    const { dateInput, activityNameInput, activityMetricInput, activityDescriptionInput } = this.state;
    return (
            <div>
            <form onSubmit={this.submitHandler}>
            <div>
            <label for="dateInput">Date</label>
            <input name="dateInput" id="dateInput" type="number" value={dateInput} onChange={this.changeHandler}></input>
          </div>
            <div>
            <label for="activityNameInput">Activity </label>
            <input name="activityNameInput" id="activityNameInput" type="text" value={activityNameInput} onChange={this.changeHandler}></input>
          </div>
          <div>
            <label for="activityMetricInput">Activity Metric</label>
            <input name="activityMetricInput" id="activityMetricInput" type="number" value={this.input} onChange={this.changeHandler}></input>
          </div>
          <div>
            <label for="activityDescriptionInput">Reflection</label>
            <input name="activityDescriptionInput" id="activityDescriptionInput" type="text" value={activityDescriptionInput} onChange={this.changeHandler}></input>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
          </form>
          </div>
          )}
  }


export default WorkoutLogger