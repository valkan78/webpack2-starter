import state from 'state';


const renderMenuItem = (item) => {
    const template = `<a href="${item.href}">${item.anchor}</a>`
    return template;
}

const reducer = (acc, item) => {
    return acc += item;
}

const renderMenu = (items) => {

    const renderedItems =
        items
            .map(renderMenuItem)
            .reduce(reducer);
    const template = `<nav>${renderedItems}</nav>`
    return template;
}

////////////////////////////////////////////////////////////////////////////////

module.exports = state => renderMenu(state.menu);
