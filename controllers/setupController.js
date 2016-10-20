'use strict'
const Roles = require('../models/role');

module.exports = function(app){
    app.get('/api/setupRoles', function(req, res){
        var starterRoles = [{
            roleName: 'Admin',
            description: 'Admin Role'
        },
        {
            roleName: 'Manager',
            description: 'Manager Role'
        },
        {
            roleName: 'User',
            description: 'User Role'
        }
        ];
        Roles.create(starterRoles, function(err, results){
            res.send(results);
        });
    });
}