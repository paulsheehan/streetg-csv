# Docker
Use Docker to run React app and CherryPy API with **'docker-compose up --build'**

If this works:


React app: http://localhost:3000/


CherryPy API: http://localhost:8080/

# create-react-app
_npm start_ will start the app locally (outside of docker container) in dev mode, but this will run without the api and you will get a network error

# Build
npm run build

(not needed as already built and copied to docker) but if code updates added you can build the app and run 'docker-compose up --build' again and it will copy the React build into the docker container. Same goes for any CherryPy updates.

# Jest testing
npm run test


# App Structure
Api written in Python's lightweight CherryPy framework. app.py acts as the main controller and handles get requests. DataProcessor script imported to handle CSV data. It uses the 'nameparser' Python library to do all the heavy lifting with parsing the names. I created my own function called 'splitNames()', for handling rows with x and y names.


