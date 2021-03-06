import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])
    const [specialties, setSpecial] = useState("")

useEffect(
    () => {
        fetch("http://localhost:8088/employees")
            .then (res => res.json())
            .then((empoyeesFromAPI) => {
                assignEmployees(empoyeesFromAPI)
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
                    return <h3 key={`employee--${employee.id}`}>{employee.name}</h3>
                }
            )
        }
    </>
)
}