Ext.define('MyApp.view.widget.clock.ClockController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.clock-panel',

    control: {
        'clock-panel': {
            boxready: 'onReady',
            beforedestroy: 'onBeforeDestroy',
        }
    },

    timerId: null,

    onReady: function () {
        let controller = this,
            timerId = controller.timerId,
            viewModel = controller.getViewModel();

        if (timerId)
            clearTimeout(timerId);

        timerId = setInterval(function () {
            try {
                viewModel.set('currentTime', new Date());
            }
            catch (err) {
                clearInterval(timerId);
            }
        }, 500);
    },

    onBeforeDestroy: function () {
        let controller = this,
            timerId = controller.timerId;

        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
    },
});
