import { React } from "react"

const ContactValidation = (fieldsToValidate) => {

        let contactErrors = {}
        let regX = ""

        if (!fieldsToValidate.name) {
            contactErrors.name = "Name is required!"
        }

        regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
        if (!fieldsToValidate.email) {
            contactErrors.email = "eMail is required!"
        } else if (!regX.test(fieldsToValidate.email)) {
            contactErrors.email = "eMail is invalid!"  
        }

        regX = /^\d{10}$/
        if (!fieldsToValidate.phoneNumber) {
            contactErrors.phoneNumber = "Phone Number is required!"
        } else if (!regX.test(fieldsToValidate.phoneNumber)) {
            contactErrors.phoneNumber = "Phone Number is invalid!"  
        }        

        if (!fieldsToValidate.content) {
            contactErrors.content = "Message is required!"
        }

        return contactErrors
        
}

export default ContactValidation