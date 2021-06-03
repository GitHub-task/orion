Ext.define("MyApp.view.main.Resources", {
    singleton: true,
    openInNewTabTooltip: "Открыть в новой вкладке",
});

Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    controller: 'test-exercise',
    viewModel: 'test-exercise',

    alias: 'widget.test-exercise',

    layout: 'fit',

    defaults: {
        referenceHolder: true,
    },

    items: [
        {
            xtype: 'panel',
            reference: 'exercisePanel',
            layout: {
                type: 'border',
                align: 'stretch'
            },

            referenceHolder: true,

            items: [
                {
                    xtype: 'treepanel',
                    reference: 'exerciseTreePanel',
                    cls: 'exercise-tree-panel',
                    region: 'west',
                    minWidth: 200,
                    width: 200,
                    rootVisible: false,
                    useArrows: true,
                    store: Ext.create('Ext.data.TreeStore', {
                        root:
                        {
                            children: [
                                {
                                    text: 'Пункт 1',
                                    expanded: true,
                                    children: [
                                        {
                                            text: 'Пункт 1.1',
                                            expanded: true,
                                            children: [{
                                                id: 1,
                                                text: 'Clock',
                                                leaf: true,
                                                iconCls: 'fa-external-link',
                                                widget: 'widget.clock-panel',
                                            }]
                                        }]
                                },
                                {
                                    text: 'Пункт 2',
                                    expanded: true,
                                    children: [{
                                        text: 'Пункт 2.1',
                                        expanded: true,
                                        children: [
                                            {
                                                id: 2, text: 'Table',
                                                leaf: true,
                                                iconCls: 'fa-external-link',
                                                widget: 'widget.table-panel',
                                            },
                                            {
                                                id: 3,
                                                text: 'Other',
                                                leaf: true,
                                                iconCls: 'fa-external-link',
                                                widget: 'widget.other-panel',
                                            }
                                        ]
                                    }]
                                }
                            ]
                        }
                    })
                },
                {
                    xtype: 'panel',
                    reference: 'contentPanel',
                    region: 'center'
                }
            ]
        }
    ]
});
