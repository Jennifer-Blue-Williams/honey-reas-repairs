import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])
    const [specialties, setSpecial] = useState("")

useEffect(
    () => {
        fetch("http://localhost:8088/employees")
            .then (res => res.json())
            .then((data) => {
                assignEmployees(data)
            })
    },
    []
)

    useEffect(() => {
        const justSpecialities = employees.map(emp => emp.specialty)
        setSpecial(justSpecialities.join(", "))
}, [employees])

return (
    <>
        <div>
            Specialties: { specialties }
        </div>
        {
            employees.map(
                (employee) => {
                    return <p key={`employee--${employee.id}`}>{employee.name}</p>
                }
            )
        }
    </>
)
}