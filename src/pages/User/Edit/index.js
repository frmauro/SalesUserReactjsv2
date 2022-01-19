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
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState(''); 

    let itemsStatus = ["Active", "Inactive"];
    let itemsType = ["administrator", "client"];

    const submitForm = () => {
        const user = JSON.stringify({
            id: id,
            name: name,
            password: password,
            token: token,
            email: email,
            status: status,
            userType: type
          });

         UserService.getUserServiceInstance()
          .updateUser(user)
          .then(item =>  { 
                  if (item === "OK"){
                    alert("Operação realizada com sucesso!!");
                    //history.push("/users");
                    history.replace('/user/users');
                  }else{
                    alert("Operação não realizada!!");
                  }
               });
 
      }

    //   window.addEventListener('click', event => {
    //     event.preventDefault();
    //     submitForm();
    // })

      const handleSubmit = (e) => {
         e.preventDefault();
          submitForm();
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
                //function getUserById(id){
                UserService.getUserServiceInstance()
                .getUserById(id)
                .then(item => {
                            if (item !== undefined){
                                // trying navigate with id not exists
                                
                                setName(item.name);
                                setPassword(item.password);
                                setToken(item.token);
                                setEmail(item.email);
                                setStatus(item.status);
                                setType(item.userType);
                            }else{
                                history.replace('/');
                                return;
                            }
                        });
                //};

                //getUserById(id);
        }, [history, id]);





        return(
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit} >
                <h3>Edit - (id):  {id}</h3>
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Name" id="name" type="text" className="validate" onChange={e => setName(e.target.value)} value={name}  />
                    <label>Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" placeholder="password" type="password" className="validate" onChange={e => setPassword(e.target.value)} value={password} />
                    <label>Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" placeholder="Email" type="email" className="validate" onChange={e => setEmail(e.target.value)} value={email} />
                    <label>Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <label>Status</label><br />
                    <select className="browser-default" onChange={handleStatus} value={status} >
                        {
                            itemsStatus.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </select>
                    </div>
                </div>    
                <div className="row">
                    <div className="input-field col s12">
                    <label>Type</label><br />
                    <select className="browser-default" onChange={handleType} value={type}>
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
