import {Component} from "react";

export class List extends Component{
    state={
        notes:['red','green','blue','gray'],
        value:'test'
    }
    updateValue= (event)=>{
        let myState={...this.state}
        myState.value=event.target.value
         this.setState(myState)
    }
    add=()=>{
        let myState={...this.state}
        myState.notes.push(myState.value);
        this.setState(myState);
        console.log(myState)
    }
    remove=()=>{
        let myState={...this.state}
        myState.notes.pop(myState.value);
        this.setState(myState);

    }
    render() {
        return(
         <>
             <input type="text" value={this.state.value} onInput={event => this.updateValue(event)}/>
             <br/>
             <button onClick={this.add}>add</button>
             <button onClick={this.remove}>remove</button>
             <ul>
                 {this.state.notes.map(n=><li>{n}</li>)}
             </ul>
         </>
        )
    }
}