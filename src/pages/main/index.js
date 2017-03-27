/*
    pages/main/index.js
*/


// import template from './template.html';
// import templateItem from './template-item.html';

import Navigation from 'components/menu';


module.exports = state => {


    return () => {
        const nav = Navigation(state);

        const template = `
        ${ nav }
        <content>
            content
        </content>
        <footer>

        </footer>
        `;

        return template;

    }

}
