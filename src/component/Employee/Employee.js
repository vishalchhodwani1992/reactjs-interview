import { Button, DataTable, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'carbon-components-react';
import React, { Component, useEffect, useState } from 'react'
import './Employee.scss'
import Employees from '../../Helper/EmployeeData.json'

export default function Employee(props) {

    const [employees, setEmployees] = useState(Employees);
    let { location } = props;

    useEffect(() => {
        console.log("1 Employess==", employees);
        setEmployees(Employees)
    }, [Employees]);


    const tableHeaders = [
        {
            key: 'firstName',
            header: 'First Name',
        },
        {
            key: 'lastName',
            header: 'LastName',
        },
        {
            key: 'dob',
            header: 'DOB',
        },
        {
            key: 'designation',
            header: 'Designation',
        },
        {
            key: 'profilePhoto',
            header: 'Profile Photo',
        },
        {
            key: 'experience',
            header: 'Experience',
        },
    ];

    return <div>
        <div className="header-container">
            <h2>Employee List</h2>
            <Button className="list-button" onClick={() => props.history.push({
                pathname: '/AddEmployee',
                state: { isEdit: false, employeeId: employees.length + 1}
            })}>Add Employee</Button>
        </div>
        

        <div className="table-container">
            <DataTable rows={employees} headers={tableHeaders}>
                {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow key={"header_0"}>
                                {headers.map((header) => (
                                    <TableHeader {...getHeaderProps({ header })}>
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            rows.map((row, index) => (
                                <TableRow key={"body_" + row.id} {...getRowProps({ row })}>
                                    {row.cells.map((cell) => (
                                        <TableCell key={cell.id}>{cell.value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </DataTable>
        </div>
        
    </div>
}