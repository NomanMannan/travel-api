'use strict'
const Users = require('../models/user');
const bodyParser = require('body-parser');

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/users', function(req, res){
        Users.find({}, function(err, users){
            if(err) throw err;
            res.send(users);
        });
    });

    app.post('/api/user', function(req, res){
        if(req.body.id){
            Users.findByIdAndUpdate(req.body.id, {
                email: req.body.email,
                password: req.body.password
            }, function(err, user){
                if(err) throw err;
                res.send('Successfully Updated!');
            });
        }
        else{
            var newUser = Users({
                email: req.body.email,
                password: req.body.password
            });

            newUser.save(function(err){
                if(err) throw err;
                res.send('Successfully Added!');
            });
        }
    });

    app.delete('/api/user', function(req, res){
        Users.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Successfully Deleted!');
        });
    });
}