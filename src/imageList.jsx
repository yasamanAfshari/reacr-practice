import {Component} from "react";
import {Image} from "./image";
export class ImageList extends Component{
    state={
        images:[
            {url:'image/p1.jpg', rate:2},
            {url:'image/p3.png', rate:4},
            {url:'image/p4.png', rate:2},
            {url:'image/p2.png', rate:5}
        ]
    }
    render() {
        return(
            <div>
                {
                    this.state.images.map(image=> <Image image={image}/>)
                }
            </div>
        )
    }
}