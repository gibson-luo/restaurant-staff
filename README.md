# restaurant-staff
A JS assignment

Author: Zherui (Gibson) Luo

Jump To:
* [Run with docker-compose](#Run-with-docker-compose)
* [Run it locally](#Run-it-locally)

## Getting Started

### Run with docker-compose

The application is built in docker-compose. Install the latest docker version, and run the command:
```bash
dock compose up
```

After the server is up, you can use bowser to access the app. `http://localhost:3000/`

### Run it locally

You can also run the applications locally with local Mongo DB. 

```text
// file: /backend/.env
// set up the mongo db url 

MONGO_URL=mongodb://127.0.0.1:27017/staff 
```

Run make command, it will launch API service and frontend App. 
```bash
# path: /restaurant-staff
make run
```

The URLs for two applications. 
```text
Frontend App - http://localhost:3000
Backend API  - http://localhost:3001
```

Or you can go to `/backend` and `/frontend` folders to run `start.sh`
```bash
# path: /restaurant-staff/backend OR /restaurant-staff/frontend
sh start.sh
```



