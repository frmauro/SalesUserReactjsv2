import React, { useState, useEffect } from "react";

export default function Create(){

    const [status, setStatus] = useState('Active'); 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    let itemsStatus = ["Active", "Inactive"];

    function submitForm(){
        let vName = name;
        let vPassword = password;
        let vEmail = email;
            alert('submit form!!!   -  ' + vName + ' - ' + vPassword + ' - ' + vEmail);
    }

    function handleStatus(e){
        alert(e.target.value);

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
                <h1>Create User</h1>
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
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
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
