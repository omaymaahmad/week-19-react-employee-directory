import React, {Component} from "react";
import API from "../utils/API"


export default class EmployeeData extends Component {
    state = {
        employees: [{}]
    }

    componentDidMount(){
            API.getUsers().then((response) => {
                console.log(response)
                this.setState({
                    employees: response.data
                })
            })
    }

    render(){
        return (
            <>
                 //A navbar component and a component we pass the employees into [this.state.employees] and render in a table
            </>
        )
    }
}