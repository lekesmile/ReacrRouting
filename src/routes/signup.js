import React, { Component } from 'react'
import Axios from 'axios'

export default class signup extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
     
        
    }
//    this.handleChange = this.handleChange.bind(this)

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    signUpBotton = (e) => {
        e.preventDefault();
        console.log(this.state)
        const url = '/signup'
        Axios.post(url, this.state)

            .then(resp => {
                console.log(resp)
                if (!resp.ok) {
                    if (resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = { errorMessage: data.message };
                            throw err;
                        })
                    } else {
                        let err = { errorMessage: 'pls try again localStorage, server is not responding' }
                        throw err
                    }
                }
                resp.json()
                return this.props.history.push("/login");
            })

    }




    render() {
        // Distruction method that set the valvue entered to the state
        const { firstname, lastname, email, password } = this.state
        return (
            <div>
                <form onClick={this.signUpBotton} className="form-signin">
                    <img className="mb-4" src="https://cdn.onlinewebfonts.com/svg/img_332705.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">sign up</h1>

                    <label htmlFor="firstname" className="sr-only">Firstname</label>
                    <input name="firstname" value={firstname} onChange={this.handleChange} type="text" id="input" className="form-control" placeholder="firstname" required autoFocus />

                    <label htmlFor="lastname" className="sr-only">lastname</label>
                    <input name="lastname" value={lastname} onChange={this.handleChange} type="text" id="input" className="form-control" placeholder="lastname" required autoFocus />

                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input name="email" value={email} onChange={this.handleChange} type="email" id="inputEmail" className="form-control" placeholder="email address" required autoFocus />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input name="password" value={password} onChange={this.handleChange} type="password" id="inputPassword" className="form-control" placeholder="password" required />

                    <button className="btn btn-lg btn-dark btn-block" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
                </form>
            </div>
        )
    }
}
