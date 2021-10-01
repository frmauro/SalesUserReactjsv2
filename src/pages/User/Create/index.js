import React, { useState } from "react";

export default function Create(){

    const [status, setStatus] = useState('Active'); 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function submitForm(){
        let vName = name;
        let vPassword = password;
        let vEmail = email;
            alert('submit form!!!   -  ' + vName + ' - ' + vPassword + ' - ' + vEmail);
    }

    return(
        <div>
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
                        <select defaultValue={status}>
                            <option value="" >Choose your option</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <label>Status</label>
                    </div>
                </div>    
                <div className="row">
                    <div className="input-field col s12">
                        <input type="submit" value="Enviar" className="waves-effect waves-light btn" />
                    </div>    
                </div>
             </form>
        </div>
        </div>
    );
}
