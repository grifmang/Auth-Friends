import React, {useState} from "react";
import { axiosWithAuth } from "./Auth/axiosWithAuth";

const AddFriend = (props) => {

    const [addFriendState, setAddFriendState] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setAddFriendState({
            ...addFriendState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', addFriendState)
        .then(response => {
            alert(`Added Friend: Name: ${response.data.name} Age: ${response.data.age} Email: ${response.data.email}.`)
            props.history.push('/friends')
        })
        .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' value={addFriendState.name} onChange={handleChanges} />
            <label htmlFor='age'>Age: </label>
            <input type='text' value={addFriendState.age} onChange={handleChanges} name='age' />
            <label htmlFor='email'>Email: </label>
            <input type='text' value={addFriendState.email} onChange={handleChanges} name='email' />
            <button>Add Friend</button>
        </form>
    )
}

export default AddFriend;