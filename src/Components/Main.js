import React, { Component } from 'react'
import Title from './Title';
import PhotoWall from './PhotoWall'
 
class Main extends Component{
    constructor(){
        super()
        this.state={
            posts : [{
                id: "0",
                description: "beautiful",
                imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg"
            },
            
            { id: "1",
            description: "beauty",
            imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg"},
            
            { id: "2",
            description: "beautiful",
            imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg"}
            ]
            
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render(){
        return <div>
            <Title title={'Photowall'}/>
           <PhotoWall posts = {this.state.posts} onRemovePhoto={this.removePhoto}/>
        </div>
    }
}

export default Main