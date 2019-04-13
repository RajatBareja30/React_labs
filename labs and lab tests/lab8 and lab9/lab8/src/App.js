import React, { Component } from 'react';
//import Student from './myComponent/student';
//import College from './myComponent/college';
import StudentList from './myComponent/studentList'
import AddStudent from './myComponent/addStudent'



class App extends Component {
  render() {
    return (
      <div>
      
      {/* <Student name="Rick rude" number="11111" enrolled="1" />
      <Student name="Shawn Michaels" number="22222" enrolled="2" />
      <Student name="Breat Hart" number="33333" enrolled="3" />
      <College name="George Brown" location="Casa Loma" /> */}
      <AddStudent/>
      <StudentList/>
      
      </div>
    )
  }
}



export default App;
