import React from 'react';
import { render } from 'react-dom';

export const withReact = Base =>
  class extends (Base || HTMLElement) {
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
