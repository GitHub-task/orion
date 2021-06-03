Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.test-exercise',

    control: {
        'test-exercise panel[reference=exercisePanel] treepanel': {
            select: 'onSelectionChange',
            itemclick: 'onItemClick'
        },
        'test-exercise panel[reference=exercisePanel]': {
            boxready: 'onBoxReady'
        }
    },

    onSelectionChange: function (sender, item, eOpts) {
        let widgetName = item.get('widget'),
            me = this,
            view = me.getView(),
            exercisePanel = view.lookupReference('exercisePanel'),
            contentPanel = exercisePanel.lookupReference('contentPanel');        

        contentPanel.removeAll();

        if (widgetName) {
            try {
                let widget = Ext.create(widgetName, {});
                if(widget)
                    contentPanel.add(widget);
            }
            catch (error) {
                console.error(error);
            }
        }
    },

    onItemClick: function (treeModel, record, item, index, e, eOpts) {
        let iconElClicked = e.getTarget('.x-tree-icon');

        if (iconElClicked) {
            let itemId = record.get('id');
            if(itemId !== undefined && itemId !== null)
                window.open(`http://localhost:1841?itemId=${itemId}`);

            Ext.create('Ext.tip.ToolTip', {
                target: iconElClicked,
                html: MyApp.view.main.Resources.openInNewTabTooltip
            });
        }
    },

    onBoxReady: function (panel) {
        let treePanel = panel.lookupReference('exerciseTreePanel');

        if (treePanel) {
            let params = Ext.urlDecode(location.search.substring(1)),
                param = params["itemId"];

            if(param !== undefined && param !== null)
                treePanel.selectPath(param);
        }
    },

    init: function () {
        Ext.tip.QuickTipManager.init();
    }
});
