import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import * as service from "./dataService"
export class Products extends Component{
    state={
        page:1,
        totalPages:4,
        pageSize:3,
        Products:[
          /*  {id:1,name:'mouse',price:400000,quantity:4},
            {id:2,name:'monitor',price:8000000,quantity:2},
            {id:3,name:'keyboard',price:50000,quantity:5},
            {id:4,name:'motherboard',price:350000,quantity:1},*/
        ]
    }
    getPages=()=>{
        let pages=[];
        for(var i=0;i<this.state.totalPages;i++){
            pages.push(i+1);
        }
        return pages.map(p=> <li onClick={()=>this.setState({page:p})} className={"page-item" + (this.state.page==p?" active":"")}><a className="page-link" href="#">{p}</a></li>)
    }
    nextPage=()=>{
        let page=this.state.page;
        page++;
        if(page<this.state.totalPages)
            return
        this.setState({page: page})
    }
    prevPage=()=>{
        let page=this.state.page;
        page--;
        if(page<1)
            return
        this.setState({page: page})
    }
    componentDidMount() {
        const Products=service.getData(this.state.page);
        const totalPages=service.getTotalPageCount();
        this.setState({Products,totalPages})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.page!=this.state.page){
            const Products=service.getData(this.state.page);
            this.setState({Products})
        }
    }

    render() {
        return(
            <>
            <table className={"table table-bordered table-stripped"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>totalPrice</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.Products.map((Products,index)=><tr key={Products.id}>
                        <td>{(this.state.pageSize*(this.state.page-1))+index+1}</td>
                        <td>{Products.name}</td>
                        <td>{Products.price}</td>
                        <td>{Products.quantity}</td>
                        <td>{(Products.quantity*Products.price)}</td>
                        </tr>

                    )
                }
                </tbody>
            </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item" onClick={this.prevPage}><a className="page-link" href="#">Previous</a></li>
                        {
                            this.getPages()
                        }
                        <li className="page-item" onClick={this.nextPage}><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>


            </>
        )
    }
}