import React from "react"
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomersList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { TicketList } from "./serviceTickets/TicketList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>  

            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}