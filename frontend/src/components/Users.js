import React, { useState, useEffect } from "react";

export default function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users").then((response) => {
      if(response.ok){
        return response.json()
      }
        }).then(test => setUsers(test.users))

    },[])

  return (<div>
    {users.map(user => <li>{user.name}</li>)}
    </div>)

}


