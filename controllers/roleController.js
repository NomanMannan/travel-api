'use strict'
const Roles = require('../models/role');
const bodyParser = require('body-parser');

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/roles', function(req, res){
        Roles.find({}, function(err, roles){
            if(err) throw err;
            res.send(roles);
        });
    });

    app.post('/api/role', function(req, res){
        if(req.body.id){
            Roles.findByIdAndUpdate(req.body.id, {
                roleName: req.body.roleName,
                description: req.body.description
            }, function(err, role){
                if(err) throw err;
                res.send('Successfully Updated!');
            });
        }
        else{
            var newRole = Roles({
                roleName: req.body.roleName,
                description: req.body.description
            });

            newRole.save(function(err){
                if(err) throw err;
                res.send('Successfully Added!');
            });
        }
    });

    app.delete('/api/role', function(req, res){
        Roles.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Successfully Deleted!');
        });
    });
}