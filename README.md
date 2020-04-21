# Academy Mario Kart API

Welcome to the Mayden Academy Mario Kart API, where users can register as a Racer and track their race history against their rivals!

This project contains a React.js front end, Node.js back end and MongoDB database. From the project root, the front end is contained in `/app/` and the back end in `/api/`.

## API Routes

/users

    GET - returns all users in the database

Request parameters: `none`

Response:
```
{
    "status": 200,
    "message": "Success",
    "data": [
       {
           "_id": "5e9db4488acb8b03654b156b",
           "name": "Matt",
           "favChar": {
               "id": "4",
               "name": "Koopa Troopa",
               "url": "./images/koopaTroopa.png"
           }
            "cohort": {
                "_id": "5e9db4e68acb8b03654b156c",
                "name": "Micro Hippos"
            }
       },
       {
           "_id": "5e9db49ef522ca03659b7400",
           "name": "Mark",
           "favChar": {
               "id": "14",
               "name": "Baby Luigi",
               "url": "./images/babyLuigi.png"
           }
            "cohort": {
                "_id": "5e9db4e68acb8b03654b156c",
                "name": "Micro Hippos"
            }
       },
       ...
    ]
}
```