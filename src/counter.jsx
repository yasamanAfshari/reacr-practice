import {Component} from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css"
export class Counter extends Component{
    state={
        counter:this.props.value??0

    }
    add=()=>{
        let c=this.state.counter;
        c=c+(this.props.step??1);
        this.setState({counter:c});
        console.log(c)
    }
    sub=()=>{
        let c=this.state.counter;
        c=c-(this.props.step??1);
        this.setState({counter:c})
        console.log(c)

    }

    css=()=>{
        if(this.state.counter>0)
            return "badge bg-success"
        if(this.state.counter<0)
            return "badge bg-danger"
        return "badge bg-warning"
    }
    render() {
        return(
            <>
                <h3>{this.props.name}</h3>
                <h1 className={this.css()}>{this.state.counter}</h1>
                <br/>
                <button className="btn btn-success" onClick={this.add}>add</button>
                <button className="btn btn-danger" onClick={this.sub}>sub</button>
            </>
        )
    }
}