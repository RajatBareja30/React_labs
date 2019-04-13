import React from "react"
import axios from "axios"
import DeleteStudent from './deleteStudent'




class UserList  extends React.Component {
    state ={
        users:[]
    };

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
            
            var usersName =[]
            for(var i=0; i < res.data.length ; i++){
                usersName.push(res.data[i])
                
            }
            this.setState({users:usersName})
        })
    }
 
    render() { 
        //get users and assign to a const
        return (
            <div>
        
           <p>Students List:</p>
           {this.state.users.map((value, index) => {
             return <ul key={index}><li>{value.name}<DeleteStudent id={value.id}/></li></ul>
         })}
         
        </div>
          );
     
    }
    
}

export default UserList ;