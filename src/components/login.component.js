import React, { Component } from "react";
import '../index.css';
import axios from "axios";
import { Card } from 'react-bootstrap';
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
         
            email: '',
            password:''
           
        }
    }


    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:4000/login',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
const{email ,password}=this.state;    
        return (

            <Card style={{ width: '25rem' }} className="card">

                <Card.Body>
 
                    <form onSubmit={this.submitHandle}>
                        <h3>Sign In </h3>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" name="email" required placeholder="Enter Email" value={email} onChange={this.changeHandle}></input>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required name="password" placeholder="Enter Password"  value={password} onChange={this.changeHandle}></input>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"  required id="customcheck1"></input>
                                <label className="custom-control-label" htmlFor="customcheck1">Remember Me</label>
                            </div>

                        </div>

                        <button type="submit" className="btn btn-primary btn-block" >Login</button>
                        <p className="forgot-password" >
                            Not a User?? <a id="forgot" href="/sign-up">Sign Up</a>
                        </p>
                    </form>
                </Card.Body>
            </Card>
        );
    }
}

export default Login;
