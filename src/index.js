import React from 'react';
import { render } from 'react-dom';
import { withProps, withRenderer } from 'skatejs/esnext';

export const withReact = Base =>
  class extends withRenderer(withProps(Base || HTMLElement)) {
    get props() {
      // We override props so that we can satisfy most use
      // cases for children by using a slot.
      return {
        ...super.props,
        ...{ children: <slot /> }
      };
    }
    rendererCallback(renderRoot, renderCallback) {
      render(renderCallback(), renderRoot);
    }
  };
