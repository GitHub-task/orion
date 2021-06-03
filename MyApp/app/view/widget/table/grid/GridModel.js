Ext.define('MyApp.view.widget.table.grid.GridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.data-grid',

    data: {
        recordCount: 0,
        selectedRecords: null,
    },

    formulas: {
        selectedCount: function (get) {
            const records = get('selectedRecords');
            return records ? records.length : 0;
        },
        selectedSummary: function (get) {
            const records = get('selectedRecords');

            if (!records || records.length === 0) return 0;

            let sum = 0;

            records.forEach(function (rec) { sum += rec.get('summary'); });

            return sum;
        }
    }
});
