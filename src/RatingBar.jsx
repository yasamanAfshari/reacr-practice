import {Component} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './rating.css'
export class RatingBar extends Component{
    state={
        rateCount:this.props.count??5,
        rate:this.props.rate??0,
        readonly:this.props.readonly??false
    }
    setRate=rate=>{
    /*    if(this.state.readonly===true)
            return*/

        const clone={...this.state}
        clone.rate=rate;
        this.setState(clone);
    }
    makeRate=()=>{
        let array=[];
        for(var i=0; i<this.state.rateCount; i++){
           array.push(i+1);
        }
        return(
            <>
                {array.map(star=><i onClick={()=>this.setRate(star)}
                                    className={(star<=this.state.rate?"fa fa-star":"fa-regular fa-star") + " starColor " }></i>)}{/* + (this.state.readonly?"disable":"")*/}
            </>
        )
    }

    render() {
        return(
            <>
                {this.makeRate()}

            </>
        )
    }
}