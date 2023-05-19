
import CreateAccount from "./CreateAccount";
import { useState } from "react";

function AddContact () {

    const [contact, setContact] = useState();
    if(!contact) {
        return (<CreateAccount setContact={setContact} />)
    } else {

    return(
        <div>
            <h1>Create Contact</h1>
            <h1>Create Contact</h1>
            <h1>Create Contact</h1>
            <h1>Create Contact</h1>
            <h1>Create Contact</h1>
        </div>
    )
    }
}
export default AddContact;
