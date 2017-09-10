# skatejs/renderer-react

> SkateJS renderer for React.

## Install

```sh
npm install @skatejs/renderer-react react react-dom skatejs
```

## Usage

The simple use case is if you're using React as a rendering layer.

```js
import { props, withComponent } from 'skatejs';
import { withReact } from '@skatejs/renderer-react';
import React from 'react';

class WcHello extends withComponent(withReact()) {
  static props = {
    yell: props.boolean
  }
  renderCallback({ name }) {
    return <div>Hello, {yell ? <strong>{children}</strong> : children}!</div>;
  }
}

customElements.define('wc-hello', WcHello);
```

A more complex use case is if you have an existing React component that you want to wrap in a web component.

```js
import { props, withComponent } from 'skatejs';
import { withReact } from '@skatejs/renderer-react';
import React, { Component } from 'react';

// React component we want to wrap in the web component.
class ReactHello extends Component {
  render() {
    const { children, yell } = this.props;
    return (
      <div>Hello, {yell ? <strong>{children}</strong> : children}!</div>
    );
  }
}

// Web component that renders using React. This is all you need
// to do to wrap the React component. All props can be passed
// down and {children} becomes <slot />.
class WcHello extends withComponent(withReact()) {
  static props = {
    // Unfortunately we need to declare props on the custom element
    // because it needs to be able to link between observed attributes
    // and properties.
    //
    // You could write a Babel plugin to transform Flow types to
    // property definitions, but we haven't done that yet.
    yell: props.boolean
  }
  renderCallback({ props }) {
    return (
      <ReactHello {...props} />
    );
  }
}

customElements.define('wc-hello', WcHello);
```

For either example, you can now just write HTML:

```html
<wc-hello yell>World</wc-hello>
```
