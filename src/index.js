
import $ from 'jquery';

import mainView from 'pages/main';

const Application = config => {
    $(()=>{

        const state = {
            menu: [
                {
                    anchor: "Overview",
                    href: "/overview"
                },
                {
                    anchor: "Backlinks",
                    href: "/overview"
                },
                {
                    anchor: "Anchors",
                    href: "/overview"
                },
            ]
        }


        const $app = $('#app');

        $app.html(
            new mainView(state)
        )

    });
}

Application();

module.exports = Application;
