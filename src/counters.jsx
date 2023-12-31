import {Component} from "react";
import {Counter} from "./counter";

export class Counters extends Component{
    state={
        counters:[
            {count:10},
            {count:30},
            {count:5},
        ],
        counterValue:0
    }
    addCounter=()=>{
        const counters=[...this.state.counters];
        counters.push({count: this.state.counterValue});
        this.setState({counters})
    }
    updateValue=(e)=>{
        const counterValue=e.target.value;
        this.setState({counterValue})
    }

    render() {
        return(
            <>
                <div>
                    <input type="number" value={this.state.counterValue} onInput={(e)=>this.updateValue(e)}/>
                    <button onClick={()=>this.addCounter()}>add counter</button>
                </div>
                <div>
                    {
                        this.state.counters.map(c=><Counter value={c.count}/>)
                    }
                </div>
            </>
        )
    }
}