import { Component, Element, Prop, h } from '@stencil/core';
import { Field } from "../../types";

/**
 * Pragma fields component.
 *
 * Iteratively renders components for a set of Pragma fields.
 */
@Component({
  tag: 'pragma-fields',
  shadow: false
})
export class PragmaFields {
  /**
   * The host element.
   */
  @Element() element: HTMLElement;

  /**
   * The path to the subset of fields to render.
   */
  @Prop({}) path: string;

  /**
   * The set of fields to render.
   */
  @Prop() fields: Array<Field> = [];

  render() {
    if (!this.fields.length)
      return;

    // TODO: Functional component that renders an array of fields
    return (
      this.fields.map((child) => {
        if (!child || !child.tag || !child.visible)
          return;

        const ChildTag = child.tag;

        return <ChildTag key={child.path} field={child}/>;
      })
    );
  }
}
