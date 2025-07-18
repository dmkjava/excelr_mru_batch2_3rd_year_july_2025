import { useEffect, useState } from "react";

function UsersListApp(){
    const [usersList, setUsersList] =  useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=>result.json())
    .then(data=>{
      console.log(data);
      setUsersList(data);
    })
  }, [])
    const deleteUser = (user)=>{
        let users = usersList.filter(cuser => cuser.id != user.id);
        setUsersList([...users]);
    }
    return (
        <div>
            <h3>Users List</h3>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>UserName</th>
                        <th>EmailId</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="table-primary">
            {
                usersList.map(user=>{
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger"
                                onClick={()=>deleteUser(user)}
                            >Delete</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
            </table>
        </div>
    )
}

export default UsersListApp;

