import React, { Component } from "react";
import '../index.css';
import axios from "axios";


import { Card } from 'react-bootstrap';




class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ' ',
            email: '',
            password: ''
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state);
        axios.post('http://localhost:4000/postData', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { name, email, password } = this.state;


        return (
            <Card style={{ width: '25rem' }} className="card">

                <Card.Body>


                    <form method="POST" onSubmit={this.submitHandler}>
                        <h3>Sign Up </h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} required onChange={this.changeHandler}></input>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email} required onChange={this.changeHandler}></input>
                           

                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" name="password" value={password} required onChange={this.changeHandler}></input>
                        </div>


                        <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                        <p className="forgot-password text-right" >
                            Already have an account <a href="/sign-in">Sign in?</a>
                        </p>

                    </form>
                </Card.Body>
            </Card>
        );
    }
}
export default SignUp;