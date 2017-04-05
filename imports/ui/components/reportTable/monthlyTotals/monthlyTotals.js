import './monthlyTotals.html'

import { Accounts } from '/imports/api/links/links.js';




Template.monthlyTotals.helpers({
    aggregate() {

        // Meteor.call('accounts.aggregate', (error,results) => {
        //   console.log(results);
        // });
        aggregateArray = ReactiveMethod.call("accounts.aggregate");
        // for (var i = 0; i < aggregateArray.length; i++) {
        //   aggregateArray[i]._id = moment().month(aggregateArray[i]._id).format("MMMM");
        // }
        return aggregateArray
    }
});

// Template.reportTable.events({
//   "click #foo": function(event, template){
//
//   }
// });