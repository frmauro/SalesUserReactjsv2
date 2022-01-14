import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import UserService from '../../../services/userService';

export default function Create(){

    const history = useHistory();


    const [status, setStatus] = useState(''); 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState(''); 

    let itemsStatus = ["Active", "Inactive"];
    let itemsType = ["administrator", "client"];

    function submitForm(){
        
            const user = JSON.stringify({
                name: name,
                password: password,
                email: email,
                status: status,
                userType: type
              });

         UserService.getUserServiceInstance()
         .insertUser(user)
         .then(item =>  { 
            if (item === "OK"){
                alert("Operação realizada com sucesso!!");
                history.push("/user/users");
              }else{
                alert("Operação não realizada!!");
              }
          });
        
    }

    function handleStatus(e){
        setStatus(e.target.value);
        //alert(e.target.value);
    }
    function handleType(e){
        setType(e.target.value);
        //alert(e.target.value);
    }

    useEffect(() => {
        // code to run on component mount
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });

      }, [])

    return(
            <div className="row">
                <form className="col s12" onSubmit={submitForm}>
                <h1>Create</h1>
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Name" id="name" type="text" className="validate" onChange={e => setName(e.target.value)} />
                    <label>Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate" onChange={e => setPassword(e.target.value)} />
                    <label>Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={e => setEmail(e.target.value)} />
                    <label>Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <label>Status</label>
                    <select className="browser-default" onChange={handleStatus}>
                        <option value="" disabled selected>Choose your option</option>
                        {
                            itemsStatus.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                    </div>
                </div>    
                <div className="row">
                    <div className="input-field col s12">
                    <label>Type</label>
                    <select className="browser-default" onChange={handleType}>
                        <option value="" disabled selected>Choose your option</option>
                        {
                            itemsType.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                    </div>
                </div>    
                <div className="row">
                    <div className="input-field col s12">
                        <input type="submit" value="Enviar" className="waves-effect waves-light btn" />
                    </div>    
                </div>
             </form>
        </div>
    );
}
