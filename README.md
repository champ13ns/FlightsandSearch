    /
    later we will have a dir called as tests(talk about it later)
    when we do the deployement, it will only be done after tests, we will not upload tests dir on the server(to dec load time )
    
    we will have a src folder, here all the project files will be present
        -src    
            index.js // server
            models/
            controllers/
            middlewares/
            services/
            utils/
            config/
            repository/

        -tests/ (later)
        -static/
        -temp/

# PROJECT SETUP
- clone the project into your local machine
- execute `npm install`

# DB Design
- Airline
- City
- Flights
- Airport

- A flight belongs to an airplane, but an airplane belongs to multipe flights (1 : N) 
- A city has many airports but an airport belongs to one city only (1:N)
- An aiport can have multiple flights, but a flight belongs to an aiport only(1:N).