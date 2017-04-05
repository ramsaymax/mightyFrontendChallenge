// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import { Accounts } from '../links.js';


Meteor.publish('links.all', function() {
    return Links.find();
});

Meteor.publish('accounts.all', function() {
    return Accounts.find();
});