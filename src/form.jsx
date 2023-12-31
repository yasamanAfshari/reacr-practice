import {Component} from "react";

export class Form extends Component{
    state={
        fname:'',
        lname:'',
        city:''
    }
    updateValue=e=>{
       // const value=e.target.value;
       // const name=e.target.name;
        const {name,value}=e.target;
        const clone={...this.state}
        clone[name]=value;
        this.setState(clone);
    }

    render() {
        return(
            <>
                <form action="">
                    <input type="text" name={'fname'} onInput={e=>this.updateValue(e)} placeholder={"first name"}/> {this.state.fname}
                    <br/>
                    <input type="text" name={'lname'} onInput={e=>this.updateValue(e)} placeholder={"first name"}/>{this.state.lname}
                    <br/>
                    <label htmlFor="" >city</label>
                    <br/>
                    <select name='city' id="">{this.state.city}
                        <option value="">kashan</option>
                        <option value="">Isfahan</option>
                        <option value="">rasht</option>
                        <option value="">mashhad</option>
                    </select>
                </form>
            </>
        )
    }
}