# muceros__nolita--final-project
This project is a React application which utilizes the backend built from FS1020 and React version of the HTML / CSS frontend built from FS1000.
It is a Portfolio website focusing on the following:

    (1) Contact page - where data are validated both frontend and backend. All persistent data is to be stored
                        in a simple JSON file. Anyone will be able to send a message

    (2) MessageCentre page - a protected page which lists all the messages

    (3) Admin page - a protected page which lists all the authorized users of the website


**Technologies/Packages used:**
    
    NodeJS / Express / Middleware / RESTful JSON API / Nodemon
    UUID / JWT Token / dotenv / Argon2 / React / Reactstrap / Cors

**Requirements:**

    -Git Bash
    -Visual Studio Code
    -Postman

**Steps to use this project:**

Step1: Project Repo Cloning Process

    -Open bash terminal then create a folder where to store the repo

    -Change directory to the newly created folder

    -Clone the main repo
        
        git clone repoURL

    -Change directory to the repo folder "muceros__nolita--final-project"

Step2: Setup Backend

    -Still at the terminal (at the repo folder), change directory to 'fs1020-project-back-end' folder
    
    -Install npm package

            npm install

    -Open Visual Studio Code

            code .

    -Rename the ".env.example" file to ".env" 
            
                            OR 

            create a new ".env" file in the root directory of the "fs1020-project-back-end' folder
            with the following information:

                     PORT=4000
                     JWT_SECRETKEY = somelongrandomphrasegoeshere
                     DB_USERS_LOCATION=./data/users.json
                     DB_ENTRIES_LOCATION=./data/entries.json

                
     -Create a file called "users.json" under the "data" folder of the "fs1020-project-back-end' folder.
        
        This application, requires at least one authorized user to be able to access the protected pages 
        ie. MessageCentre page and Admin page.
        
        To keep going you can add the below data to the "users.json" file
        
            [{
                "id": "e02e3919-f675-44a5-b85c-505414ab6ff5",
                "name": "Admin User",
                "password": "$argon2i$v=19$m=4096,t=3,p=1$sotBHeLLeuDxFn4YMKAeIg$DW37iMQ/3q4zQVcsL2S/++rX7dHtRmikZigYpNVP2wY",
                "email": "sample@user.com"
            }]

    -Run the back-end and leave it running

            npm run dev

Step2: Setup Frontend

    -Go back to terminal (at the repo folder), change directory to 'fs1010-project-front-end' folder

    -Install npm package

                npm install

    -Open Visual Studio Code

                code .

    -Run front-end

        npm start


IMPORTANT: 
To be able to access the protected pages, a sample user data has been provided above.
Please ensure that the "users.json" file is created and data provided were added in the file.
Once done, you can use the below credentials to login.


        Username: sample@user.com
        Password: password


