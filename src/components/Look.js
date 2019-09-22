import React, { Component } from 'react'
import Axios from 'axios'

class Look extends Component {
    state= {
      posts:[]
    }

    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        Axios.get(url)
        .then(res =>{
            console.log(res)
            this.setState({
                posts: res.data
            })
        })
        .catch(err =>{
            return err
        })
    }
    render() {
        const {posts} = this.state
        return (
            <div className="container">
               <h1>List of post</h1> 
                {
                    posts.length ?
                     posts.map(post => <div key={post.id}>{post.title}</div>) :
                     null
                }
            </div>
        )
    }
}

export default Look

