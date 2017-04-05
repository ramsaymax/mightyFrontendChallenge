import './monthlyTotals.html'

import {
    Accounts
} from '/imports/api/accounts/accounts.js';




Template.monthlyTotals.helpers({
    aggregate() {

        aggregateArray = ReactiveMethod.call("accounts.aggregate");

        return aggregateArray
    }
});