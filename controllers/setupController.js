'use strict'
const Roles = require('../models/role');

module.exports = function(app){
    app.get('/api/setupRoles', function(req, res){
        var starterRoles = [{
            ruleName: 'Admin',
            description: 'Admin Role'
        },
        {
            ruleName: 'Manager',
            description: 'Manager Role'
        },
        {
            ruleName: 'User',
            description: 'User Role'
        }
        ];
        Roles.create(starterRoles, function(err, results){
            res.send(results);
        });
    });
}