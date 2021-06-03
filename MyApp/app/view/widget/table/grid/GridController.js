Ext.define('MyApp.view.widget.table.grid.GridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.data-grid',

    control: {
        'data-grid': {
            selectionchange: 'onSelectionChange'
        }
    },

    init: function () {
        let controller = this,
            view = controller.getView(),
            store = view.getStore();

        if (store)
            store.on('load', controller.dataLoaded, controller);
    },

    onSelectionChange: function (sender, selected, eOpts) {
        let controller = this,
            viewModel = controller.getViewModel();
        console.log();
        if (viewModel) {
            viewModel.set('selectedRecords', selected);
        }
    },

    dataLoaded: function () {
        let controller = this,
            view = controller.getView(),
            store = view.getStore(),
            totalCount = store.totalCount,
            viewModel = controller.getViewModel();

        viewModel.set('recordCount', totalCount);
    }
});
