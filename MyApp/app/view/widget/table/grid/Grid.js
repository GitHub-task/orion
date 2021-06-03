Ext.define('MyApp.view.widget.table.grid.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'data-grid',
    alias: 'widget.data-grid',

    viewModel: {
        type: 'data-grid'
    },

    controller: 'data-grid',

    enableColumnMove: false,

    selModel: {
        mode: 'MULTI',
        ignoreRightMouseSelection: true
    },

    viewConfig:
    {
        stripeRows: true,
        columnLines: true,
    },

    store: {
        type: 'dataTableStore'
    },

    tbar: {
        xtype: 'pagingtoolbar',
        reference: 'pagingtoolbar',
        displayInfo: false,
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        prependButtons: true,
        items: [
            {
                xtype: 'label',
                bind: {
                    text: 'Кол-во записей: {recordCount}'
                }
            },
            {
                xtype: 'label',
                bind: {
                    text: 'Выделено записей: {selectedCount}'
                }
            },
            {
                xtype: 'label',
                bind: {
                    text: 'Сумма выделенных записей: {selectedSummary} ₽'
                }
            }
        ],

        doRefresh: function () {
            var grid = this.up('grid'),
                store = grid.getStore();
            store.loadRemoteData();
        }
    },

    columns: [
        {
            dataIndex: 'name',
            text: 'Наименование',
            flex: 1
        },
        {
            dataIndex: 'pageCount',
            text: 'Количество страниц',
            xtype: 'numbercolumn',
            format: '1',
            width: 'auto'
        },
        {
            dataIndex: 'date',
            text: 'Дата поступления',
            xtype: 'datecolumn',
            format: 'd.m.Y H:i:s',
            width: 'auto',
            minWidth: 145
        },
        {
            dataIndex: 'summary',
            text: 'Сумма',
            xtype: 'numbercolumn',
            format: '1',
            width: 'auto'
        }
    ]
});
