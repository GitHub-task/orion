Ext.define('MyApp.view.widget.clock.ClockModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.clock-panel',

    data: {
        currentTime: null
    },

    formulas: {
        formatTime: function (get) {
            const currentTime = get('currentTime');
            if (!currentTime) return null;

            return Ext.Date.format(currentTime, 'd F. Y, H:i:s');
        },

        stylizedTime: function (get) {
            let currentTime = get('currentTime');

            if (!currentTime) return null;

            let msg = '<div class="clock-container" id="clock">';
            msg += '	<div class="clock-item">{0}';
            msg += '	</div>';
            msg += '</div>';
            let clockDiv = Ext.String.format(msg, get('formatTime'));

            return clockDiv;


        }
    }
});
