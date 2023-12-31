import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import {useState} from "react";
import joi from 'joi'
import Joi from "joi";
import {messages} from "./joi-translate";
import {useNavigate} from "react-router-dom"

export const NewProducts =(props)=>{


    const [product,setProduct]=useState({
        id:0,
        name:'',
        price:0,
        discount:0,
        quantity:0,
        image:'',
        code:'',
        description:''
    })
    const updateValues=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        const p={...product}
        p[name]=value;
        setProduct(p)
    }

    const navigate= useNavigate();

    const save=(e)=>{
        e.preventDefault();

        const validateResult=validate();
        if(validateResult==false)
            return



        navigate('/')

    }
    const schema=Joi.object({
        code:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label('کد'),

        name:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label('نام'),


        quantity:Joi.number()
            .integer()
            .required()
            .label('تعداد'),

        price:Joi.string()
            .pattern(/^\d+$/)
            .min(0)
            .required()
            .label('قیمت'),

        description:Joi.string()
            .alphanum()
            .max(500)
            .required()
            .label('توضیحات'),

    })


   const validate=()=>{
        const result=schema.validate(product,{abortEarly:false , allowUnknown:true, messages:messages, errors:{language:"fa"}})
       console.log(result)

        let validation=true;
       if (result.error && result.error.details && result.error.details.length>0){
           validation=false;
           const detail=result.error.details;
           const errorMessage=detail.map(err=>({message:err.message,path:err.path[0]}));
           setErrors(errorMessage)
       }
           return validation
   }


   const [errors,setErrors]=useState([]);

    const get=name=>{
        let value='';
        for (let i=0;i<errors.length;i++){
            if (errors[i].path==name){
                value=errors[i].message;
                break;
            }

        }
        return value;

    }
    return(
        <>
            <div className={"card"}>
                <div className={"card-header"}>
                    <h3 className={"card-title"}>new product</h3>
                </div>
                {
                    errors && errors.length>0 &&
                        <div className={"alert alert-danger"}>

                            <ul>
                                {errors.map(error=><li key={error.message}>{error.message}</li>)}
                            </ul>

                        </div>
                }
                <div className={"card-body"}>
                    <form action="#" method={"post"} onSubmit={save}>
                        <div className={"form-group"}>
                            <label >code</label>
                            <input onInput={e=>updateValues(e)}  className={"form-control"}  type="text" name={"code"} value={product.code}/>
                            <small className={"text-danger d-block"}>
                                {
                                    get('code')
                                }
                            </small>

                            <label >name</label>
                            <input onInput={e=>updateValues(e)}  className={"form-control"}  type="text" name={"name"} value={product.name}/>
                            <small className={"text-danger d-block"}>
                                {
                                    get('name')
                                }
                            </small>

                            <label >price</label>
                            <input onInput={e=>updateValues(e)}  className={"form-control"}  type="number" name={"price"} value={product.price}/>
                            <small className={"text-danger d-block"}>
                                {
                                    get('price')
                                }
                            </small>

                            <label >discount</label>
                            <input onInput={e=>updateValues(e)}  className={"form-control"}  type="text" name={"discount"} value={product.discount}/>

                            <label >quantity</label>
                            <input onInput={e=>updateValues(e)}  className={"form-control"}  type="number" name={"quantity"} value={product.quantity}/>

                            <label >description</label>
                            <textarea onInput={e=>updateValues(e)} className={"form-control"} name={"description"} rows={5} cols={80} value={product.description}></textarea>

                            <label >image</label>
                            <input onInput={e=>updateValues(e)}  className={"form-control"}  name={"image"}/>

                            <div className={"form-group"}>
                                <button type="submit" className={"btn btn-primary"}>save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}