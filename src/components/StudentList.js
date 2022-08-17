import React from 'react'
import Student from './Student'
 const StudentList = (props) => {
  return (
    <div><ul>
        {
            props.studentListVar.map(
                (stud,index)=>
               { return (<Student
                setStudentList={props.setStudentList}
                setStudentId={props.setStudentId}
                setStudentEmail={props.setStudentEmail}
                setStudentName={props.setStudentName}
                setStudentPhone={props.setStudentPhone}
                
                student={stud} />)
            }
            )
        }
        
        </ul></div>
  )
}
export default StudentList