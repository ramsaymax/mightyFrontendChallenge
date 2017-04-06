import {
    Accounts
} from '/imports/api/accounts/accounts.js';

import {
    Meteor
} from 'meteor/meteor';

import './info.html';
import '/imports/ui/components/totalRevenue/totalRevenue.js';
import '/imports/ui/components/inputForm/inputForm.js';



Template.info.onCreated(() => {
    let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching = new ReactiveVar(false);

    template.autorun(() => {
        template.subscribe('accounts.all', template.searchQuery.get(), () => {
            setTimeout(() => {
                template.searching.set(false);
            }, 300);
        });
    });
});

Template.info.helpers({
    accounts(event,template) {

        search =  Template.instance().searchQuery.get()
        if (search) {
        console.log(search)

        let regex = new RegExp(search, 'i');

        query = {
            "name": regex
        };
        accounts = Accounts.find(query, {
            sort: {
                date: -1
            }
        }).fetch();
        for (var i = 0; i < accounts.length; i++) {
            accounts[i].date = moment(accounts[i].date).format('MMMM Do YYYY')
            accounts[i].amount = numeral(accounts[i].amount).format('$0,0.00')
        }
        return accounts 

         }
         else {
            accounts = Accounts.find({}, {
            sort: {
                date: -1
            }
        }).fetch();
        for (var i = 0; i < accounts.length; i++) {
            accounts[i].date = moment(accounts[i].date).format('MMMM Do YYYY')
            accounts[i].amount = numeral(accounts[i].amount).format('$0,0.00')
        }
        return accounts 
         }



        
    },
    searching() {
        return Template.instance().searching.get();
    },
    query() {
        return Template.instance().searchQuery.get();
    },
    //  accounts() {
    //    return Accounts.find({})

    // }

});

Template.info.events({
    'click .btn-remove' (event) {
        event.preventDefault();
        id = $(event.target).attr("data");

        Meteor.call('accounts.remove', id, (error) => {});
    },
    'keyup [name="search"]' (event, template) {
        let value = event.target.value.trim();

        template.searchQuery.set(value)
        if (value !== '') {
            template.searching.set(true);

            template.searchQuery.set(value);
        }
    }
});