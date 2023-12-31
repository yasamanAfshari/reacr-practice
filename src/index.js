import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Test1} from "./test1";
import {Test2} from "./test2";
import {Counter} from "./counter";
import {List} from "./list";
import {RatingBar} from "./RatingBar";
import {Image} from "./image";
import {ImageList} from "./imageList";
import {Counters} from "./counters";
import {Form} from "./form";
import {Products} from "./products";
import {Products2} from "./Products2";
import {NewProducts} from "./newProducts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {Params} from "./Params";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

      {/*  <Counter name={"Counter1"} value={14} step={10}/>
        <br/>
        <br/>
        <Counter name={"Counter2"} value={-10} />
        <br/>
        <br/>
        <Counter name={"Counter3"} step={50}/>*/}
{/*        <ImageList/>*/}
{/*<NewProducts/>*/}
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"counter"} element={<Home><Counter/></Home>}/>
            <Route path={"counters"} element={<Home><Counters/></Home>}/>
            <Route path={"NewProducts"} element={<Home><NewProducts/></Home>}/>
            <Route path={"/parameter/:id"} element={<Home><Params/></Home>}/>
        </Routes>
    </BrowserRouter>


</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
