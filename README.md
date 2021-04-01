## Aerials Project
An API server for keeping track of various aerial exercises and the moves for each exercise type. 

### To Run: 
Use Node version 10.23.3
Download or clone project files and then run `npm install` to install the required dependencies. 
Run `npm start` to run the program. View in the browers at the given endpoints
Run `npm run test` to run the unit tests.

### Endpoints
| Endpoint               | Description                                      | Method |
| ---------------------- | ------------------------------------------------ | ------ |
| '/aerials'             | Reads list of exercise types                     | GET    |
| '/aeriels'             | Creates a new exercise type                      | POST   |
| '/aerials/:id'         | Reads the moves for a specific exercise type     | GET    |

### Features
- Read and create exercises/moves with api routes
- Data rendered using PUG 
- Uses SQLite and Sequelizer

### Next Steps: 
- Routes for the reading and updating individual exercise moves details.
- Move the Seed data out of the app.js file for cleaner organization. 
- Make the lists on '/aerials' and '/aerials/:id' links with all-around improved front end. 
- Add users so that multiple people can keep track of their move achievements. 


