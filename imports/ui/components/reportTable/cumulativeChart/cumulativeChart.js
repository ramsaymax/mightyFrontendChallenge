import './cumulativeChart.html'

import {
    Accounts
} from '/imports/api/links/links.js';
import {
    Tracker
} from 'meteor/tracker'

Template.cumulativeChart.onRendered(function() {

    Tracker.autorun(() => {
        aggregateArray = ReactiveMethod.call("accounts.aggregateTotal");
        console.log("HER");
        console.log(aggregateArray);

        TimeArr = [];
        valArr = [];
        if (aggregateArray) {
          for (var i = 0; i < aggregateArray.length; i++) {
            TimeArr.push(moment().month(aggregateArray[i].month).format("MM") + "/" + aggregateArray[i].year)
            valArr.push(aggregateArray[i].balance)
            console.log(aggregateArray[i].totalUnedited);
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
