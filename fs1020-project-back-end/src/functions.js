/*
* Validates the properties/data (Invalid properties/data will be pushed in the aryInvalidPropAndData array)
* @param txtDbName - name of the database (in text format) ie. "users", "entries"
* @param aryRequiredProp - array which hold the required properties (pre-defined)
* @param dataToValidate - request body
* @return aryInvalidPropAndData - array which hold all the invalid properties/data
*/
const validateData = (txtDbName, aryRequiredProp, dataToValidate) => {

    const aryInvalidPropAndData = []; // array to hold all the invalid properties/data
    let regX = ""; // holds the regex expression to be used for format validation
    
    // Get all the missing properties in the body and push them in the aryInvalidPropAndData array
    const aryPropInReqBody = Object.getOwnPropertyNames(dataToValidate); // get all the properties (req body)
    const aryMissingProp = aryRequiredProp.filter(item => !aryPropInReqBody.includes(item)); // missing properties
    if (aryMissingProp.length > 0) { // push all missing properties in aryInvalidPropAndData array
        Array.prototype.push.apply(aryInvalidPropAndData, aryMissingProp);
    }

    // Get all the fields in the body with blank data then push them in the aryInvalidPropAndData array
   for(const key in dataToValidate) {
       if(!dataToValidate[key]) {
           aryInvalidPropAndData.push(key);
       };
   };

    // Validate password format (only for users object) then push the invalid one in the aryInvalidPropAndData array 
    // Password MUST be at least 8 chars
    if (txtDbName == "users") { 
        if (!aryInvalidPropAndData.includes("password")) { // only if it's not in the aryInvalidPropAndData array
            regX = /^[\w@-]{8,20}$/; // didnt make as a function as it will consume about the same amount of lines
            if (!regX.test(dataToValidate.password)) {
                aryInvalidPropAndData.push("password"); 
            }
        };
    };

    // Validate email format then push the invalid one in the aryInvalidPropAndData array 
    // MUST be in correct e-mail address format
    if (!aryInvalidPropAndData.includes("email")) {  // only if it's not in the aryInvalidPropAndData array
        regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/; 
        if (!regX.test(dataToValidate.email)) {
            aryInvalidPropAndData.push("email");
        }
    };

    // Validate phone number format (only for entries object) then push the invalid one in the aryInvalidPropAndData array 
    // Phone MUST be 10 digits in this format: 9999999999
    if (txtDbName == "entries") { 
        if (!aryInvalidPropAndData.includes("phoneNumber")) { // only if it's not in the aryInvalidPropAndData array
            regX = /^\d{10}$/; 
            if (!regX.test(dataToValidate.phoneNumber)) {
                aryInvalidPropAndData.push("phoneNumber");
            }
        };
    };
    return aryInvalidPropAndData;
}

export default validateData;