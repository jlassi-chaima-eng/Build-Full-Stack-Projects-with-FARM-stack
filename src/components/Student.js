import React from 'react'
import axios from 'axios'
const Student = (props) => {
    const getAllStudent=()=>{
        axios.get('http://127.0.0.1:8000/students').then(
          response=>{
          
           props.setStudentList(response.data)
            
          }
        ).catch((error)=>{
          console.log(error)
        
        })
        
      }
    const deleteStudent=(studentId)=>
    {
        axios.delete(`http://127.0.0.1:8000/students/${studentId}`).then(
            resonse=>{
                alert("Student deleted successfully!" +Response.data);
                getAllStudent()
            }
        )
    }
    const editStudent =(student)=>{
        // debugger
props.setStudentId(student.id)
props.setStudentEmail(student.email)
props.setStudentName(student.name)
props.setStudentPhone(student.phone)
    }
  return (
    <div><p>
        <span className='fw-bold mx-2'>
            {props.student.name}:{props.student.email}:{props.student.phone}

        </span>
        <button onClick={()=>editStudent(props.student)} className="bt btn-warning mx-2">edit</button>

        <button onClick={()=>deleteStudent(props.student.id)}className="bt btn-danger">x</button>
        </p></div>
  )
}

export default Student