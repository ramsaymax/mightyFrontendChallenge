import './search.html'

Template.search.onCreated(() => {
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

Template.search.helpers({
    searching() {
        return Template.instance().searching.get();
    },
    query() {
        return Template.instance().searchQuery.get();
    }
});

Template.search.events({
    'keyup [name="search"]' (event, template) {
        let value = event.target.value.trim();

        template.searchQuery.set(value)
        if (value !== '') {
            template.searching.set(true);

            template.searchQuery.set(value);
        }
    }
});