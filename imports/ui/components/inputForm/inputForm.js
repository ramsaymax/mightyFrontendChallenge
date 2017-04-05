import './inputForm.html'

import { Accounts } from '/imports/api/accounts/accounts.js';

import { Meteor } from 'meteor/meteor';


Template.inputForm.onCreated(function() {
    Meteor.subscribe('accounts.all')
});

Template.inputForm.events({
    'submit .info-link-add' (event) {
        event.preventDefault();

        const target = event.target;
        const title = target.title;
        const amount = target.amount;
        const date = target.date;

        Meteor.call('accounts.insert', title.value, parseInt(amount.value), date.value, (error) => {
            if (error) {
                alert(error.error);
            } else {
                title.value = '';
                amount.value = '';
                date.value = '';
            }
        });
    },
});
