import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        firstName: "Enter Email",
        lastName: "Enter Password"
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray})
    }


    render() {
        return (
            <div class="container">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        type="text"
                        onChange={event => this.handleFirstNameChange(event)}
                        value={this.state.firstName}
                    />
                    <input
                        type="password"
                        onChange={event => this.handleLastNameChange(event)}
                        value={this.state.lastName}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default App;
