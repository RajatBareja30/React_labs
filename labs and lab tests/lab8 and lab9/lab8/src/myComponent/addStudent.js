import React from "react"
import axios from "axios"

class addStudent extends React.Component {
    state = {
        name:""
      }
      // handles the input
      handleChange = event => {
          this.setState({name:event.target.value})
          console.log(this.state.name)
      };
      //handles the form request
      handleSubmit = event => {
          event.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`,{user:{name:this.state.name}}).then(res =>{
            console.log(res)
            console.log(res.data)
        })
      };

    render() { 
        return ( 
            <div>
                <form method="post" onSubmit={this.handleSubmit} >
                    <label>
                        Person name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
         );
    }
}
 
export default addStudent;