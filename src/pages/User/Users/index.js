import React, { useState, useEffect } from 'react';

import UserService from '../../../services/userService';

export default function Users(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);



     useEffect(() => {

        async function getItems(){
            await UserService.getUserServiceInstance()
            .getUsers()
            .then(items =>  { 
                setItems(items);
                setLoading(false);
             });
         }

        getItems();

     }, []);

     if (loading){
         return(
            <div>
                <h3>Carregando usuários...</h3>
            </div>
         );
     }

    return(
        <div className="collection">
            {
                items.map((item, index) =>  <a key={index} href={`/User/Edit/${item.id}`} class="collection-item">{item.name} - <b>{item.email}</b> - <b>{item.userType}</b></a>)
            }
        </div>
    );

}