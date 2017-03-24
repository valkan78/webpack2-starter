// import template from './template.html';
// import templateItem from './template-item.html';


module.exports = (state) => {

    const renderMenuItem = (item) => {
        const template = `<a href="${item.href}">${item.anchor}</a>`
        return template;
    }

    const renderMenu = (items) => {
        const reducer = (acc, item) => {
            return acc += item;
        }

        const renderedItems = items
                .map(renderMenuItem)
                .reduce(reducer);
        const template = `<nav>${renderedItems}</nav>`
        return template;
    }

    return () => {
        return renderMenu(state.menu);
    }

}
