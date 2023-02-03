 

import React from 'react';
import { useEffect } from 'react';

import{useState} from 'react';



const Register = ({submitForm}) => {
    const[values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        password2:""
    })


    const[dataIsCorrect,setDataIsCorrect]=useState(false);

   

    const[errors,setErrors]=useState({})
    const validate=(values)=>{
            let errors={};

            if(!values.username.trim()){
                errors.username="UserName required"
            } 
            if(!values.email){
                errors.email="Email required"
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email="Email Adress is invalid"
            }
            
        if(!values.password){
                errors.password="pasword required"
            } else if(values.password.length<6){
                errors.password="pasword Adress is invalid"
        }

        if(!values.password2){
            errors.password2="pasword required"
        } else if(values.password2!==values.password){
            errors.password2="pasword Adress is invalid"
        }
        return errors;

    }
    
      
    

    const handelChange=(e)=>{
        (setValues({
            ...values,[e.target.name]:e.target.value
           
            
        }))
        console.log(values);
        
    }
    const handelSubmit=(e)=>{

        e.preventDefault();
        setErrors(validate(values));
        setDataIsCorrect(true);
        console.log(errors);
    }


    useEffect(()=>{
        if(Object.keys(errors).length===0&& dataIsCorrect){
            submitForm(true);
        }

    },[errors]);


    



   return (

    
      <div className="register" style={{marginTop:"120px"}}>
            
            <div className="row">
            <form onSubmit={handelSubmit}>
                <div className='container'>
                <div className="mb-3">
                    <label for="name" className="form-label">Username</label>
                    <input type="text" name='username' onChange={handelChange} className="form-control shadow-sm rounded" id="name" aria-describedby="emailHelp"></input>
                    {errors.username&&<p className='error'>{errors.username}</p>}
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  onChange={handelChange} name='email' className="form-control shadow-sm rounded" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    {errors.email&&<p className='error'>{errors.email}</p>}
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={handelChange} name='password' className="form-control shadow-sm rounded" id="exampleInputPassword1"></input>
                    {errors.password&&<p className='error'>{errors.password}</p>}
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">Password</label>
                    <input type="password" onChange={handelChange} name='password2' className="form-control shadow-sm rounded" id="exampleInputPassword2"></input>
                    {errors.password2&&<p className='error'>{errors.password2}</p>}
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            
                </div>
            </form>    
                
                
            </div>
        </div>
        

        
    
     
        
     
     
   );
 }
 
 

export default  Register ;