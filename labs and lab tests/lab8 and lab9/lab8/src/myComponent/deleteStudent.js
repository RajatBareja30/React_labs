import React from "react"
import axios from "axios"

class deleteStudent extends React.Component {
    state = { 
        id:""
     }

     handleDeleteClick = event =>{
        event.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`).then(res =>{
            console.log(res)
            console.log(res.data)
        })
     }

    render() { 
        return ( 
            <div>
                <button type="submit" onClick={this.handleDeleteClick}>Delete</button>
            </div>
         );
    }
}
 
export default deleteStudent;