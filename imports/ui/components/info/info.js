import { Links } from '/imports/api/links/links.js';
import { Accounts } from '/imports/api/links/links.js';

import { Meteor } from 'meteor/meteor';
import './info.html';

import '/imports/ui/components/totalRevenue/totalRevenue.js';
import '/imports/ui/components/inputForm/inputForm.js';



Template.info.onCreated(function() {
    Meteor.subscribe('links.all');
    Meteor.subscribe('accounts.all')
});

Template.info.helpers({
    accounts() {
        accounts = Accounts.find({}, { sort: { date: -1 } }).fetch();
        for (var i = 0; i < accounts.length; i++) {
            accounts[i].date = moment(accounts[i].date).format('MMMM Do YYYY')
            accounts[i].amount = numeral(accounts[i].amount).format('$0,0.00')
        }
        return accounts
    },

});

Template.info.events({

    'click .btn-remove' (event) {
        event.preventDefault();
        id = $(event.target).attr("data");

        Meteor.call('accounts.remove', id, (error) => {

        });
    }
});
