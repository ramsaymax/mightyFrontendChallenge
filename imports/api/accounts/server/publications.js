import {
    Meteor
} from 'meteor/meteor';
import {
    Accounts
} from '../accounts.js';


Meteor.publish('accounts.all', function(search) {


    return Accounts.find({})
});