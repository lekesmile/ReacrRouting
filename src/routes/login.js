import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
            <div>
                <form className="form-signin">
                    <img className="mb-4" src="https://cdn.onlinewebfonts.com/svg/img_332705.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-dark btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
                </form>
            </div>
        )
    }
}

export default login
