// Methods related to links

import {
    Meteor
} from 'meteor/meteor';
import {
    check
} from 'meteor/check';

import {
    Accounts
} from '../links.js';

Meteor.methods({
    'accounts.insert' (title, amount, date) {
        // check(url, String);
        // check(title, String);

        return Accounts.insert({
            name: title,
            amount: amount,
            date: new Date(date),
        });
    },
    'accounts.remove' (id) {
        // check(url, String);
        // check(title, String);

        return Accounts.remove({
            _id: id
        });
    },
    'accounts.aggregate' () {
        var aggregateArr = Accounts.aggregate([{
            "$project": {
                "amount": 1,
                "month": {
                    "$month": "$date"
                },
                "year": {
                    "$year": "$date"
                }
            }
        }, {
            "$group": {
                "_id": {
                    "year": "$year",
                    "month": "$month"
                },
                "total": {
                    "$sum": "$amount"
                }
            }
        }, {
            "$sort": {
                "_id": 1
            }
        }])
        if (aggregateArr) {
            for (const key in aggregateArr) {
                // aggregateArr[key].
                monthDict = {
                    1: "January",
                    2: "February",
                    3: "March",
                    4: "April",
                    5: "May",
                    6: "June",
                    7: "July",
                    8: "August",
                    9: "September",
                    10: "October",
                    11: "November",
                    12: "December"
                }
                // aggregateArr[key]._id.month = monthDict[aggregateArr[key]._id.month]
                aggregateArr[key].month = monthDict[aggregateArr[key]._id.month]
                aggregateArr[key].year = aggregateArr[key]._id.year
                aggregateArr[key].total = numeral(aggregateArr[key].total).format('$0,0.00')
                aggregateArr[key]._id = ""
                // console.log(monthDict[aggregateArr[key]._id],aggregateArr[key]._id);
                // console.log(moment(new Date()))
            }
        }

        return aggregateArr
    },
    'accounts.aggregateTotal' () {
        balance = 0

        var aggregateArr = Accounts.aggregate([{
            "$project": {
                "amount": 1,
                "month": {
                    "$month": "$date"
                },
                "year": {
                    "$year": "$date"
                }
            }
        }, {
            "$group": {
                "_id": {
                    "year": "$year",
                    "month": "$month"
                },
                "total": {
                    "$sum": "$amount"
                }
            }
        }, {
            "$sort": {
                "_id": 1
            }
        }])
        if (aggregateArr) {
          console.log(aggregateArr);
            balance = 0
            for (const key in aggregateArr) {
                // aggregateArr[key].
                monthDict = {
                    1: "January",
                    2: "February",
                    3: "March",
                    4: "April",
                    5: "May",
                    6: "June",
                    7: "July",
                    8: "August",
                    9: "September",
                    10: "October",
                    11: "November",
                    12: "December"
                }
                balance = balance + aggregateArr[key].total
                console.log(balance);
                // console.log(monthDict[aggregateArr[key]._id.month], aggregateArr[key]._id.year, balance);
                aggregateArr[key].balance = balance
                aggregateArr[key].month = monthDict[aggregateArr[key]._id.month]
                aggregateArr[key].year = aggregateArr[key]._id.year
                aggregateArr[key].total = numeral(balance).format('$0,0.00')
                aggregateArr[key]._id = ""

            }
        }

        return aggregateArr
    }
});
