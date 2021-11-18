import React from 'react'

export default function Home(props) {

        return  <div>            
            <h2 className="text-center">Home</h2>
            <button onClick={() => props.history.push("Employees")} className="text-center">Employee List</button>
        </div>
}