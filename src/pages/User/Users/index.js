import React, { useState, useEffect } from 'react';

import UserService from '../../../services/userService';

export default function Users(){

    const [items, setItems] = useState([]);


    function getItems(){
        UserService.getUserServiceInstance()
        .getUsers()
        .then(items =>  { 
            setItems(items)
         });
     }

     useEffect(() => {
         getItems();
     }, []);

    return(
        <div class="collection">
            {
                items.map((item, index) =>  <a key={index} href="/User/Edit/{item._id}" class="collection-item">{item.name}</a>)
            }
        </div>
    );

}