import {
    Meteor
} from 'meteor/meteor';
import {
    Accounts
} from '../accounts.js';


Meteor.publish('accounts.all', function(search) {
    check(search, Match.OneOf(String, null, undefined));

    let query = {},
        projection = {
            limit: 10,
            sort: {
                title: 1
            }
        };
    if (search) {
        let regex = new RegExp(search, 'i');

        query = {
            "name": regex
        };

        projection.limit = 100;
    }
    return Accounts.find(query, projection);
});