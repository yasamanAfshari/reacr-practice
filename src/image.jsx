import {Component} from "react";
import {RatingBar} from "./RatingBar";

export class Image extends Component{
    render() {
        return(
            <div className={"imgstyle"}>
                <img src={this.props.image.url} />
                <RatingBar count={5} rate={this.props.image.rate} readonly={false} />
            </div>
        )
    }
}