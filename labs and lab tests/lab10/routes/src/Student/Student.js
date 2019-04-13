import React, { Component } from 'react';

const Student = ({match}) => {
  
    const {studentname,studentno} = match.params;
   
    return (
    <div>
      <p>Student</p>
      <div>
        <div>{`The sudent name is "${studentname},${studentno}"!`}</div>
      </div>
    </div>
    );
  }


export default Student;
