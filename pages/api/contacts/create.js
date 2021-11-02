import {addContact} from "../../../lib/mongoDBApi";
import {emailValidator, nameValidator} from "../../../tools/validators";

export default async function handler(request, response) {
    const {method: requestMethod, body: incomingRequestData} = request;
    const {email, name, message} = incomingRequestData;

    if (!emailValidator(email) || !nameValidator(name) || !nameValidator(message)) {
        response.status(422).json({message: 'Invalid Contact data inputs'});
        return;
    }

    if (requestMethod === 'POST') {
        let result;
        try {
            result = await addContact(incomingRequestData);
        } catch (error) {
            console.log('error = ', error);
            response.status(500).json({message: 'Inserting the Contact failed'});
            return;
        }
        response.status(201).json({subscriber: result, message: 'Successfully added the Contact!'});
    } else {
        response.status(400).json({message: 'Bad request!'});
    }
}
