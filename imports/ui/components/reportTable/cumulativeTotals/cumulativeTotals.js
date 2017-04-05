import './cumulativeTotals.html'

import { Accounts } from '/imports/api/accounts/accounts.js';




Template.cumulativeTotals.helpers({
    aggregate() {
        aggregateArray = ReactiveMethod.call("accounts.aggregateTotal");
        return aggregateArray
    }
});
