import React, { useState, useEffect } from 'react';

import UserService from '../../../services/userService';

export default function Users(){

    const [items, setItems] = useState([]);



     useEffect(() => {

        async function getItems(){
            await UserService.getUserServiceInstance()
            .getUsers()
            .then(items =>  { 
                setItems(items)
             });
         }

        getItems();

     }, []);

    return(
        <div class="collection">
            {
                items.map((item, index) =>  <a key={index} href={`/User/Edit/${item._id}`} class="collection-item">{item.name}</a>)
            }
        </div>
    );

}