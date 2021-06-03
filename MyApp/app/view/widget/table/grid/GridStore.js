Ext.define('MyApp.view.widget.table.grid.StoreModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: "date", type: "date" },
        { name: "name", type: "string" },
        { name: "pageCount", type: "number" },
        { name: "summary", type: "number" },
    ],
});

Ext.define('MyApp.view.widget.table.grid.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dataTableStore',

    pageSize: 20,
    autoLoad: true,
    remoteSort: true,
    remoteFilter: true,

    model: 'MyApp.view.widget.table.grid.StoreModel',

    loadingRemoteData: false,

    constructor: function (config) {
        this.callParent([config]);
        if (this.autoLoad) {
            this.loadRemoteData();
        }
    },

    proxy: {
        type: 'memory',
        url: 'resources/books.json',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'books',
            totalProperty: 'totalCount'
        }
    },

    loadRemoteData: function () {
        if (this.loadingRemoteData) {
            return false;
        }
        this.loadingRemoteData = true;
        Ext.Ajax.request({
            url: this.proxy.url,

            success: function (response, opts) {
                var obj = Ext.decode(response.responseText),
                    proxy = this.getProxy(),
                    reader = proxy.getReader(),
                    data = obj[reader.getRootProperty()];
                this.getProxy().data = data;
                this.reload();
                this.loadingRemoteData = false;
            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            },
            scope: this
        });
    },

    removeAll: function () {
        this.getProxy().data = [];
        this.reload();
        this.callParent([arguments]);
    }
});
