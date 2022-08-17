
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  StudentList  from './components/StudentList';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
function App() {
  const [studentList ,setStudentList]=useState([{}])
  const [studentId,setStudentId]=useState('')
  const [studentName,setStudentName]=useState('')
  const [studentEmail,setStudentEmail]=useState('')
  const [studentPhone,setStudentPhone]=useState('')
useEffect(()=>{
 getAllStudent()
}


,[])
const getAllStudent=()=>{
  axios.get('http://127.0.0.1:8000/students').then(
    response=>{
    
      setStudentList(response.data)
      console.log(studentList)
    }
  ).catch((error)=>{
    console.log(error)
  
  })
  
}
const addNewStudent =(student)=>{
  axios.post('http://127.0.0.1:8000/students',student).then(response=>
  {
    getAllStudent()
    alert("Student added succefully");
  }).catch((error)=>{
    console.log(error)
  
  })
}
const UpdateStudent =(student)=>{
  axios.put(`http://127.0.0.1:8000/students/${studentId}`,student).then(response=>
  {
    getAllStudent()
    alert("Student update succefully");
  }).catch((error)=>{
    console.log(error)
  
  })
}
const addUpdateStudent =()=>{
  const student ={'student_name':studentName,'student_email':studentEmail,'student_phone':studentPhone};
 
  if(studentId !=''){
  UpdateStudent(student)
 }else{
  addNewStudent(student)
 }
}
  return (
    <div className="container">
      <div className='text-center mt-3 list-group-item justify-content-center align-items-center mx-auto' style={{ "width": "70vw", "backgroundColor": "#ffffff" }}>
        <h2 className='card text-white bg-primary mb-1 pb-3'>School Management</h2>
        <h6 className='card text-white bg-primary mb-1 pb-1'>Manage your students</h6>
        <div className='card-body' >
          <h5 className='card text-white bg-dark pb-1'>Add student</h5>
          <span className='card-text'>
            <input value={studentName} onChange={e=>setStudentName(e.target.value)} className='mb-2 form-control stud-name' placeholder='Enter name' />
            <input value={studentEmail}  onChange={e=>setStudentEmail(e.target.value)} className='mb-2 form-control stud-email' placeholder='Enter email' />
            <input value={studentPhone} onChange={e=>setStudentPhone(e.target.value)}className='mb-3 form-control stud-phone' placeholder='Enter phone' />
            <button onClick={addUpdateStudent} className='btn btn-outline-warning mb-4' style={{ "fontweight": "bold" }}> Add Student</button>
          </span>

<h5 className='card text-white bg-dark pb-1'>your Students</h5>
    <div>
      <StudentList
      setStudentList={setStudentList}
      setStudentId={setStudentId}
      setStudentEmail={setStudentEmail}
      setStudentName={setStudentName}
      setStudentPhone={setStudentPhone}
      studentListVar={studentList}/>
    </div>
        </div>
        <h6 className='card text-white bg-warning py-1'>All rights reserved &copy;2021</h6>
      </div>

    </div>
  );
}

export default App;
