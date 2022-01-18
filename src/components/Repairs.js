import React from "react"
import { CustomerList } from "./customers/CustomersList";
import { EmployeeList } from "./employees/EmployeeList";

export const Repairs = () => {
    return (
    <>
        <h1>Honey Rea's Repair Shop</h1>
        <h1>Customer List</h1>
        <CustomerList />
        <h1>Employee List</h1>
        <EmployeeList />
    </>
    )
}