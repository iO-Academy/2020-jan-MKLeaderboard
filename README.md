# Academy Mario Kart API

Welcome to the Mayden Academy Mario Kart API, where users can register as a Racer and track their race history against their rivals!

This project contains a React.js front end, Node.js back end, and MongoDB database. From the project root, the front end is contained in `/app/` and the back end in `/api/`.

To install the project, clone it into a directory, and then type `npm install` in your terminal in both the `/app/` and `/api/` directories. 

To run the project, navigate to the `/api/` directory and type `nodemon start.js` in your terminal. This will start the node server. Then, in the `/app/` directory, type `npm start` in your terminal. 

Once you have completed the above steps, you can navigate to `http://localhost:3000` in a web browser to start enjoying the Mario Kart Leaderboard. 


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
/users

    POST - Adds user to database

Request parameters: `name`,`favChar`, `cohort`

Response:
```
{   
    "status": 200,
    "message": "It bloody worked"
}

```
/cohorts

    GET - returns all cohorts in the database

Request parameters: `none`

Response:
```
{
    "status": 200,
    "message": "Success",
    "data": [
        {
            "_id": "5e9db4e68acb8b03654b156c",
            "name": "Micro Hippos"
        },
        {
            "_id": "5e9db511f522ca03659b7403",
            "name": "Naked Molerats"
        }
    ]
}
```

/tracks

    GET - returns all tracks from a JSON file

Request parameters: `none`

Response:
```
{
    "status": 200,
    "message": "Operation successful",
    "data": [
        {
            "id": "1",
            "name": "Luigi Circuit",
            "cup": "Mushroom Cup",
            "img": "./images/Luigi_Circuit.png"
        },
        {
            "id": "2",
            "name": "Moo Moo Meadows",
            "cup": "Mushroom Cup",
            "img": "./images/Moo_Moo_Meadows.png"
        },
        {
            "id": "3",
            "name": "Mushroom Gorge",
            "cup": "Mushroom Cup",
            "img": "./images/Mushroom_Gorge.png"
        }
    ]
}
```

/characters

    GET - returns all characters from a JSON file

Request parameters: `none`

Response:
```
{
    "status": 200,

    "message": "Operation successful",
    "data": [
        {
            "id": "1",
            "name": "Baby Mario",
            "url": "./images/babyMario.png"
        },
        {
            "id": "2",
            "name": "Baby Peach",
            "url": "./images/babyPeach.png"
        }
    ]

}
```
