import { useState } from 'react';
import './App.css';
import FormInput from './component/FormInput';
import axios from "axios";
const App =() => {


const [values,setValues] = useState({
email:"",
mobile:"",
name:"",

});


const inputs = [
{
  id:1,
  name:"email",
  type:"email",
  placeholder:"e-mail",
  errorMessage: "it is not a valid email",
  label:"E-MAIL",
  required: true,
},
{
  id:2,
  name:"mobile",
  type:"text",
  placeholder:"mobile",
  label:"mobile no",
  required: true,
},
{
  id:3,
  name:"name",
  type:"text",
  placeholder:"Full Name",
  label:"Full Name",
  required: true,
},

];


const handleSubmit = (e) => {
  e.preventDefault();
  
 
};


const handleClick = async (e) => {
  e.preventDefault();
  try{
  await axios.post("/api/auth/register", values);
  
  }catch(err){
    console.log("error occured");
  }
};

const onChange =(e) => {
setValues({ ...values, [e.target.name]: e.target.value});
};

console.log(values);
return(
  <div className="app">
  
  <form onSubmit={handleSubmit}>
  <h1>REGISTER</h1>
   {inputs.map((input) => (
  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
   ))}
  <button onClick={handleClick}>SUBMIT</button>
  </form>
  </div>
  
);
};

export default App;
