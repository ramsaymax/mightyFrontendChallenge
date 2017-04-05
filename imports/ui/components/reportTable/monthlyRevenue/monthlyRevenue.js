import './monthlyRevenue.html'

import { Accounts } from '/imports/api/links/links.js';




Template.monthlyRevenue.helpers({
    aggregate() {

        // Meteor.call('accounts.aggregate', (error,results) => {
        //   console.log(results);
        // });
        aggregateArray = ReactiveMethod.call("accounts.aggregateTotal");
        // for (var i = 0; i < aggregateArray.length; i++) {
        //   aggregateArray[i]._id = moment().month(aggregateArray[i]._id).format("MMMM");
        // }
        return aggregateArray
    }
});
