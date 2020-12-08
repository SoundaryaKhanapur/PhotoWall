import React, { Component } from 'react'
import Title from './Title';
import PhotoWall from './PhotoWall'


const posts = [{
    id: "0",
    description: "beautiful",
    imageLink: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjooinn.com%2Fimages%2Fbeautiful-landscape-18.jpg&imgrefurl=https%3A%2F%2Fjooinn.com%2Fbeautiful-landscape-5.html&tbnid=o1nkxRiJHIBClM&vet=12ahUKEwjZquzJ9pjtAhXQA3IKHR3pDW8QMygvegUIARDKAg..i&docid=zSkjiirXYTWkQM&w=1920&h=1200&q=beautiful%20landscape&ved=2ahUKEwjZquzJ9pjtAhXQA3IKHR3pDW8QMygvegUIARDKAg"
},

{ id: "1",
description: "beautiful",
imageLink: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjooinn.com%2Fimages%2Fbeautiful-landscape-18.jpg&imgrefurl=https%3A%2F%2Fjooinn.com%2Fbeautiful-landscape-5.html&tbnid=o1nkxRiJHIBClM&vet=12ahUKEwjZquzJ9pjtAhXQA3IKHR3pDW8QMygvegUIARDKAg..i&docid=zSkjiirXYTWkQM&w=1920&h=1200&q=beautiful%20landscape&ved=2ahUKEwjZquzJ9pjtAhXQA3IKHR3pDW8QMygvegUIARDKAg"},
{ id: "2",
description: "beautiful",
imageLink: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjooinn.com%2Fimages%2Fbeautiful-landscape-18.jpg&imgrefurl=https%3A%2F%2Fjooinn.com%2Fbeautiful-landscape-5.html&tbnid=o1nkxRiJHIBClM&vet=12ahUKEwjZquzJ9pjtAhXQA3IKHR3pDW8QMygvegUIARDKAg..i&docid=zSkjiirXYTWkQM&w=1920&h=1200&q=beautiful%20landscape&ved=2ahUKEwjZquzJ9pjtAhXQA3IKHR3pDW8QMygvegUIARDKAg"}]

class Main extends Component{
    render(){
        return <div>
            <Title title={'Photowall'}/>
           <PhotoWall posts = {posts}/>
        </div>
    }
}

export default Main