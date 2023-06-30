# Use Docker to run React app and CherryPy API
'docker-compose up --build' to run CherryPy API and React frontend webapp.
If this works:
React app: http://localhost:3000/
CherryPy API: http://localhost:8080/

# React project built using create-react-app
npm start to run app in dev mode, but this will run without the api and you will get a network error

# Build React app (not needed as already built and copied to docker, but if additional code updates added)
npm run build

# Run Jest tests
npm run test

(I would love to have written more tests, but unfortunatly could not due to time constraints)

Hopefully that covers everything. Enjoy!
