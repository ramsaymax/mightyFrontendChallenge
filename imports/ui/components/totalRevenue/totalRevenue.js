import './totalRevenue.html'

import {
    Accounts
} from '/imports/api/accounts/accounts.js';


Template.totalRevenue.onCreated(function() {
    Meteor.subscribe('accounts.all')

    
});


Template.totalRevenue.helpers({
    revenueCount() {
        revenueCount = Accounts.find({}).fetch();
        total = 0
        for (var i = 0; i < revenueCount.length; i++) {
            total = total + revenueCount[i].amount
        }

        total = numeral(total).format('$0,0.00');
        return total
    },

});