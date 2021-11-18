import { Button, FormGroup, TextInput } from 'carbon-components-react';
import React, { useEffect, useState } from 'react'
import './AddEmployee.scss'
export default function AddEmployee(props) {

    console.log("props==", props)
    let { isEdit, location } = props;

    useEffect(()=> {

    }, [])

    const [employeeForm, setEmployeeForm] = useState({
        employeeId: location.state.employeeId,
        firstName: "",
        lastName: "",
        dob: "",
        designation: "",
        profilePhoto: "",
        experience: "",
    });

    function onAddEmployee(){

        console.log("employeeForm==", employeeForm);
        props.history.replace({
            pathname: '/Employees',
            state: { isAdded: true, employee: employeeForm }
        });
    }

    function validate(){

    }

    function onValueChange(type, event){

        console.log("type:value==", type, event.target.value);
        switch(type){
            case "firstName":
                setEmployeeForm({ ...employeeForm, firstName: event.target.value});
                break;
            case "lastName":
                setEmployeeForm({ ...employeeForm, lastName: event.target.value });
                break;
            case "dob":
                setEmployeeForm({ ...employeeForm, dob: event.target.value });
                break;
            case "designation":
                setEmployeeForm({ ...employeeForm, designation: event.target.value });
                break;
            case "profilePhoto":
                setEmployeeForm({ ...employeeForm, profilePhoto: event.target.value });
                break;
            case "experience":
                setEmployeeForm({ ...employeeForm, experience: event.target.value });
                break;
        }
    }

    return <div>
        <FormGroup legendText="Add Employee">
            <TextInput onChange={(event) => onValueChange("firstName", event)} value={employeeForm.firstName} id="firstName" labelText="First Name" placeholder="First Name" />
            <TextInput onChange={(event) => onValueChange("lastName", event)} value={employeeForm.lastName} id="lastName" labelText="Last Name" placeholder="Last Name" />
            <TextInput onChange={(event) => onValueChange("dob", event)} event={employeeForm.dob} id="dob" labelText="DOB Name" placeholder="DOB Name" />
            <TextInput onChange={(event) => onValueChange("designation", event)} value={employeeForm.designation} id="designation" labelText="Designation" placeholder="Designation" />
            <TextInput onChange={(event) => onValueChange("profilePhoto", event)} value={employeeForm.profilePhoto} id="profilePhoto" labelText="Profile Photo" placeholder="Profile Photo" />
            <TextInput onChange={(event) => onValueChange("experience", event)} value={employeeForm.experience} id="experience" labelText="Experience" placeholder="Experience" />

            <Button className="bottom-button" onClick={()=> onAddEmployee()}>Add Employee</Button>
        </FormGroup>
    </div>
}