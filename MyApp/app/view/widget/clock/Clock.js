Ext.define('MyApp.view.widget.clock.Clock', {
    extend: 'Ext.panel.Panel',
    xtype: 'clock-panel',

    viewModel: {
        type: 'clock-panel'
    },

    controller: 'clock-panel',

    alias: 'widget.clock-panel',

    layout: { type: 'vbox' },

    items: [
        {
            xtype: 'displayfield',
            bind: {
                value: '{stylizedTime}'
            }
        }
    ]
});
