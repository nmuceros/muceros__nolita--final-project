# FS1020_S21_Project: ContactUs_Form

This project is a backend application consisting of a RESTful JSON API for a Contact Us form where all persistent data is to be stored in a simple JSON file that’s operated on through Node’s fs module. This Contact Us form does not only allows anyone to submit an entries; it also provides a list of the messages which is restricted to authenticated users only.

**Technologies/Packages used:**
    
    NodeJS / Express / Middleware / RESTful JSON API / Nodemon
    UUID / JWT Token / dotenv / Argon2

**Requirements:**

    -Git Bash
    -Visual Studio Code
    -Postman

**Steps to use this project:**

-Open bash terminal then create a folder where to store the repo and cd into it

-Clone the main repo
    
    git clone repoURL

-Change directory to the repo folder

-Checkout and pull the main repo

    git checkout main
    git pull origin main

-Create a new branch

    git checkout -b branchName

-Open VS Code

    code .

-Open the terminal


**Install dependencies**
    
    npm install


**To run the code (dev)**

    npm run dev

**IMPORTANT**

JSON files needed will be created automatically by corresponding modules.
A token is required in order to create a user.


**To start, send a request to create users.json file**

`POST /auth`

 ```json
    {
        "email": "email@address.ca",        
        "password": "password"        
    }
    
  ```
Note: json.file should be created with an empty array



**Add a dummy user in users.json file**
(An existing user is required to generate a token)

```json
    [
        {
            "id": "id", 
            "name": "dummy",
            "password": "passowrd", // MUST be hashed using Argon2
            "email": "email@address.ca"
        }
    ]
    
  ```

  
**Generate a token**

`POST /auth`

 ```json
    {
        "email": "email@address.ca",        
        "password": "password"        
    }
    
  ```
Note: Grab the token and used it requests which require it


**Submit other requests**

 `POST /users`
 `Authorization: Bearer Token required (generated in POST /auth route)`

 ```json
    {
        "name": "name here", // MUST not be empty
        "password": "password", // MUST be at least 8 characters
        "email": "email@address.ca" // MUST be a valid e-mail address        
    }
```
    
  

**All other requests**

`GET /users`
`Authorization: Bearer Token required (generated in POST /auth route)`




`POST /contact_form/entries`

 ```json
    {
        "name": "name here", // MUST not be empty
        "email": "email@address.ca", // MUST be a valid e-mail address
        "phoneNumber": "9999999999", // MUST be 10-digit number
        "content": "message goes here" // MUST not be empty
    }
 ```



`GET /contact_form/entries`
`Authorization: Bearer Token required (generated in POST /auth route)`


`GET /contact_form/entries/:id`
`Authorization: Bearer Token required (generated in POST /auth route)`



