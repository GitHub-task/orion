Ext.define('MyApp.view.widget.table.Table', {
    extend: 'Ext.panel.Panel',
    xtype: 'table-panel',
    alias: 'widget.table-panel',

    layout: 'fit',

    referenceHolder: true,

    items: [
        {
            xtype: 'data-grid',
            reference: 'dataGrid',
        }
    ]
});
