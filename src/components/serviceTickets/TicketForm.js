import React, { useState, } from "react"
import { useHistory } from "react-router-dom"
export const TicketForm = () => {
    // const [ticket, update] = useState();
    const history = useHistory()
    const saveTicket = (event) => {
        event.preventDefault()
    }

   <div>
        <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
    </div> 

    return (
        <>
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text" id="description"
                        className="form-control" />
                        // placeholder="Brief description of problem" 
                        // onChange={} /
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox" />
                        // onChange={} /
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
        </>
    )
}

