Ext.define('MyApp.view.widget.other.Other', {
    extend: 'Ext.panel.Panel',
    xtype: 'other-panel',

    alias: 'widget.other-panel',

    layout: 'fit',

    items: [
        {
            xtype: 'label',
            text: 'Other Panel'
        }
    ]
});
