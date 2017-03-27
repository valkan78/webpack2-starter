
/*
    ROOT
    index.js
 */

import $ from 'jquery';

import mainView from 'pages/main';
import state from 'state/index';

const Application = config => {
    $(()=>{

        const $app = $('#app');

        $app.html(
            new mainView(state)
        )

    });
}

Application();

////////////////////////////////////////////////////////////////////////////////

module.exports = Application;
