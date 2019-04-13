import React from 'react'
import Course from './course'



const student = props =>{
    const elements = [];
    for(var i=0; i <props.enrolled; i++){
        elements.push(i)
    }
    
    return(        
       <p>    
        Student <b>{props.name}</b> with student number <b>{props.number}</b> <Course/>
        {elements.map((value, index) => {
        return <i key={index}><b>Course: {value}</b></i>
         })}
    </p>
    )
    
    
};

export default student;