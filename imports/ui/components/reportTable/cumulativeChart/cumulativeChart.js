import './cumulativeChart.html'

import {
    Accounts
} from '/imports/api/accounts/accounts.js';

import {
    Tracker
} from 'meteor/tracker'

Template.cumulativeChart.onRendered(function() {

    Tracker.autorun(() => {
        aggregateArray = ReactiveMethod.call("accounts.aggregateTotal");

        TimeArr = [];
        valArr = [];
        if (aggregateArray) {
            for (var i = 0; i < aggregateArray.length; i++) {
                TimeArr.push(moment().month(aggregateArray[i].month).format("MM") + "/" + aggregateArray[i].year)
                valArr.push(aggregateArray[i].balance)
            }
        }


        new Chartist.Line('.ct-chart', {
            labels: TimeArr,
            series: [
                valArr
            ]
        }, {
            fullWidth: true,
            height: '150px',
            chartPadding: {
                right: 40
            }
        });


    });



});