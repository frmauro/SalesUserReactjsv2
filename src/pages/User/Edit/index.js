import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import UserService from '../../../services/userService';

export default function Edit(){

    const { id } = useParams();
    //console.log(id);
    const history = useHistory();


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


    useEffect(() => {

            async function getUserById(id){
                    await UserService.getUserServiceInstance()
                    .getUserById(id)
                    .then(item => {
                                if (item !== undefined){
                                    // trying navigate with id not exists
                                    setName(item.name);
                                    setPassword(item.password);
                                    setEmail(item.email);
                                    setStatus(item.status);
                                }else{
                                    history.replace('/');
                                    return;
                                }
                            });
            }

            getUserById(id);

    }, [history, id]);


        return(
            <div className="row">
                <form className="col s12" onSubmit={submitForm}>
                <h3>Edit User - (id):  {id}</h3>
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Name" id="name" type="text" className="validate" onChange={e => setName(e.target.value)} value={name}  />
                    <label>Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate" onChange={e => setPassword(e.target.value)} value={password} />
                    <label>Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={e => setEmail(e.target.value)} value={email} />
                    <label>Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <label>Status</label>
                    <select className="browser-default" onChange={handleStatus} value={status} >
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
