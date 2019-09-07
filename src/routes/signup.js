import React, { Component } from 'react'

export default class signup extends Component {
    render() {
        return (
            <div>
                <form class="form-signin">
                    <img class="mb-4" src="https://cdn.onlinewebfonts.com/svg/img_332705.png" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">sign up</h1>
                    <label for="firstname" class="sr-only">Firstname</label>
                    <input name="firstname" type="text" id="input" class="form-control" placeholder="firstname" required autofocus />
                    <label for="lastname" class="sr-only">Lastname</label>
                    <input name="lastname" type="text" id="input" class="form-control" placeholder="Lastname" required autofocus />
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required />

                    <button class="btn btn-lg btn-dark btn-block" type="submit">Sign up</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2019</p>
                </form>
            </div>
        )
    }
}
