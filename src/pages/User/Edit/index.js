import React, { useState, useEffect } from "react";

export default function Edit(){


    const [status, setStatus] = useState(''); 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    let itemsStatus = ["Active", "Inactive"];

    function submitForm(){
        let vName = name;
        let vPassword = password;
        let vEmail = email;
        let vStatus = status;
            alert('submit form!!!   -  ' + vName + ' - ' + vPassword + ' - ' + vEmail + ' - ' + vStatus);
    }

    function handleStatus(e){
        setStatus(e.target.value);
        //alert(e.target.value);
    }


        return(
            <div className="row">
                <form className="col s12" onSubmit={submitForm}>
                <h1>Edit User</h1>
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
                        <input type="submit" value="Enviar" className="waves-effect waves-light btn" />
                    </div>    
                </div>
            </form>
        </div>
    );
}
