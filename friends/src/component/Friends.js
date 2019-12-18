import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./Auth/axiosWithAuth";
import FriendsCard from "./FriendsCard";

const Friends = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends').then(response => {
            setData(response.data);
        })
    }, [])

    return (
        <div>
            {data.map(element => {
                console.log(element)
                return <FriendsCard name={element.name} age={element.age} key={element.id} email={element.email} />
            })}
        </div>
    )
}

export default Friends;