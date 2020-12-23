import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful",
                imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg"
            },

            {
                id: "1",
                description: "beauty",
                imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg"
            },

            {
                id: "2",
                description: "beautiful",
                imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg"
            }
            ],
            screen: 'photos'

        }
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
        
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    navigate(){
        this.setState({
            screen: 'addPhoto'
        })
    }

    componentDidMount() {


    }

    componentDidUpdate(prevProps, prevState) {

        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {

        return <div>
            {
                this.state.screen === 'photos' && (
                    <div>
                        <Title title={'Photowall'} />
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                    </div>
                )
            }
            {
                this.state.screen === 'addPhoto' &&(
                    <div>
                        <AddPhoto />
                    </div>
                )

            }
        </div>
    }
}


export default Main