let Gadgets = require('../gadgets');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Gadgets', () => {
    beforeEach((done) => {
        Gadgets.remove({}, (err) => {
            done();
        });
    });


    it('it should GET all the gadgets', (done) => {
        var gadget = new Gadgets({
            "Yoo": "Jane",
            "Hoo": "10"
        });
        gadget.save((err, gadget) => {
            chai.request(server)
                .get('/api/gadgets')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    it('it should Delete the Gadget', (done) => {
        var gadget = new Gadgets({
            "_id": "5dc9f4b4e6413e3be48e5f93",
            "Yoo": "Jane",
            "Hoo": "10"
        });
        gadget.save((err, Gadgets) => {
            chai.request(server)
                .delete('/api/gadgets' + Gadgets._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

});