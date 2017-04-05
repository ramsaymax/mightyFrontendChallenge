import {
    Meteor
} from 'meteor/meteor';

import {
    Accounts
} from '../accounts.js';

Meteor.methods({
    'accounts.insert' (title, amount, date) {


        return Accounts.insert({
            name: title,
            amount: amount,
            date: new Date(date),
        });
    },
    'accounts.remove' (id) {

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
                aggregateArr[key].month = monthDict[aggregateArr[key]._id.month]
                aggregateArr[key].year = aggregateArr[key]._id.year
                aggregateArr[key].balance = aggregateArr[key].total
                aggregateArr[key].total = numeral(aggregateArr[key].total).format('$0,0.00')
                aggregateArr[key]._id = ""
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
            balance = 0
            for (const key in aggregateArr) {
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