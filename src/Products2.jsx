import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import * as service from "./dataService"
export const Products2=()=>{
    const [counter,setCounter]=useState(1);
    const [page,setPage]=useState(1);
    const [products,setProducts]=useState([

    ]);
    const [totalPage,setTotalPage]=useState(5);
    const pageSize=4;


    const getPages=()=>{
        let pages=[];
        for (var i=0;i<totalPage;i++)
        {
            pages.push(i+1);
        }

        return pages.map(p=><li key={p} onClick={()=>setPage(p)} className={"page-item" + (page==p?" active":"")}><a className="page-link" href="#">{p}</a></li>)
    }
    const nextPage=()=>{
        let newPage=page;
        newPage++;
        if(totalPage<newPage)
            return
        setPage(newPage)
    }

    const prevPage=()=>{
        let newPage=page;
        newPage--;
        if(newPage<1)
            return
        setPage(newPage)
    }
    useEffect(()=>{
        const products=service.getData(page)
        const totalPage=service.getTotalPageCount()
        setTotalPage(totalPage)
        setProducts(products)
    },[page])
    return(
        <>
            <h1>counter: {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>add</button>
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
                    products &&
                    products.length>0 &&
                    products.map((products,Index)=><tr key={products.id}>
                        <td>{((page-1)*pageSize)+Index+1}</td>
                        <td>{products.name}</td>
                        <td>{products.price}</td>
                        <td>{products.quantity}</td>
                        <td>{products.price*products.quantity}</td>
                    </tr>)
                }
                {
                    (!products ||
                    products.length==0) &&
                    <tr>
                        <td colSpan={5}>No Data</td>
                    </tr>

                }
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" onClick={prevPage}><a className="page-link" href="#">Previous</a></li>
                    {
                        getPages()
                    }
                    <li className="page-item" onClick={nextPage}><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>

        </>
    )
}