import {Link, useLocation} from "react-router-dom";
import './App.css'
export const Home=(props)=>{
    const location=useLocation();
    return(<>
        <ul className={"inline-list"}>
            <li className="list-inline-item">
                <Link to="/" className={location.pathname=='/'?"active":""}>Home</Link>
            </li>
            <li className="list-inline-item">
                <Link to="/counter" className={location.pathname=='/counter'?"active":""}>Counter</Link>
            </li>
            <li className="list-inline-item">
                <Link to="/counters" className={location.pathname=='/counters'?"active":""}>Counters</Link>
            </li>
            <li className="list-inline-item">
                <Link to="/newProducts" className={location.pathname=='/products/new'?"active":""}>New Product</Link>
            </li>
            <li className="list-inline-item">
                <Link to="/parameter/12" className={location.pathname.startsWith("/parameter")?"active":""}>Check Params</Link>
            </li>
        </ul>
        <div>
            {
                props.children
            }
        </div>
    </>)
}