import React from 'react';
import withRenderer from '../src';

class MyElement extends withRenderer() {
  renderCallback({ name }) {
    return <div>Hello, {name}!</div>;
  }
}
customElements.define('my-element', MyElement);

function testContent(text) {
  return `<div data-reactroot=\"\"><!-- react-text: 2 -->Hello, <!-- /react-text --><!-- react-text: 3 -->${text}<!-- /react-text --><!-- react-text: 4 -->!<!-- /react-text --></div>`;
}

test('renders', () => {
  const el = new MyElement();
  expect(el.innerHTML).toEqual('');
  el.rendererCallback(el, el.renderCallback.bind(el, { name: 'World' }));
  expect(el.innerHTML).toEqual(testContent('World'));
  el.rendererCallback(el, el.renderCallback.bind(el, { name: 'Bob' }));
  expect(el.innerHTML).toEqual(testContent('Bob'));
});
