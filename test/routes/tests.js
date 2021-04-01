const assert = require('assert'); 
const request = require('supertest'); 
const app = require('../../app'); 

const { models } = require('../../db');
const { AerialType, Moves } = models; 


describe('Routes: ', () => {
    before(function(done) {
        this.timeout(6000);
        setTimeout(done, 5000); //wait for database to initialize
    });

    describe('GET /aerials', () => {
        it('should list out exercise_types from the AerialType Model', () => {
            return request(app)
                .get('/aerials')
                .expect(200) 
                .then(async (res) => {
                    const exerciseList = await AerialType.findAll(); 
                    const exercises = exerciseList.map(exercises => exercises.exercise_type)
                    // console.log(exercises); 
                    // console.log(exercisesList)
                    assert(exercises.every(substring=>res.text.includes(substring))); 
                })
        }); 
    }); 

    describe('#GET /aerials/id', () => {
        it('Should list the moves for a specific exercise type', () => {
            return request(app)
                .get('/aerials/1')
                .expect(200) 
                .then(async (res) => {
                    const exerciseList = await Moves.findAll({
                        where: {
                            exerciseTypeId: 1,
                        }
                    }); 
                    const aerialMoves = exerciseList.map(move => move.move)
                    // console.log(aerialMoves); 
                    // assert(aerialMoves.some(substring=>res.text.includes(substring)))
                    assert(aerialMoves.every(substring=>res.text.includes(substring)))
                })
        }); 
    }); 

    describe('#POST /aerials', () => {
        it('should add an exercise type', () => {
            return request(app)
                .post('/aerials')
                .send({ "exercise_type": "Bouldering" })
                .expect(302) //Since it redirects you to the new exercises blank page
                .then( async (res) => {
                    const exerciseList = await AerialType.findAll(); 
                    const exercises = exerciseList.map(exercises => exercises.exercise_type)
                    assert(exercises.includes("Bouldering")); 
                })
                
               
        }); 
    }); 


}); 