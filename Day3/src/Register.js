import React,{useState} from "react";
import './Register.css';
export const Register = (props) =>{
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [Name,setName]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(Email);
    }


    return (
        <div className="box">
        <form className="Alertssss" Name="Register-form" onSubject={handleSubmit}>
            <label htmlfor ="Name">FullName</label>
            <input value={Name} Name="Name" id="Name" placeholder="FullName"></input>
            <label htmlfor ="Age">Age</label>
            <input value={Name} Name="Age" id="Age" placeholder="Age"></input>
            <label htmlfor ="Email">Email</label>
            <input value={Email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com" id="Email" name="Email" />
            <label htmlfor ="SetPassword">SetPassword</label>
            <input value={Password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder="**********" id="Password" name="Password" />
            <button type="Submit">Log In</button>
        </form>
        <button className="link-btn"onClick={()=>props.onFormSwitch('Login')}>Already have an account? Login</button>
        </div>
    )
}
