import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import update from "../assets/empress/Group 13.png"

const Users = () => {
    const loaderData = useLoaderData()
    const [users, setUsers] = useState(loaderData)
    const handelUser=(id)=>{
        fetch(`http://localhost:5000/user/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            const deleteUser=users.filter(user=>user._id !==id)
            setUsers(deleteUser)
            console.log(data)
        })
        console.log(id)
    }
    return (
        <div>
            <h3>{users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>CreationTime</th>
                            <th>lastSignInTime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>{user.email}</th>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td><button onClick={()=>handelUser(user._id)}><img className="w-[20px] mt-3" src={update} alt="" /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;