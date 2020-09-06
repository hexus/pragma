import { Component, Element, Method, Prop, h } from '@stencil/core';
import { Field } from "../../types";
import { HTMLStencilElement } from '@stencil/core/internal';

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
  @Element() element: HTMLStencilElement;

  /**
   * The path to the subset of fields to render.
   *
   * This prop is informational for parent `<pragma-form>` elements, so that
   * they know which fields to provide to the `setFields()` setter method.
   */
  @Prop() path: string;

  /**
   * The set of fields to render.
   */
  @Prop() fields: Array<Field> = [];

  /**
   * Set the set of fields to render.
   *
   * @param {Array<Field>} fields - The set of fields to render.
   */
  @Method()
  async setFields(fields: Array<Field>) {
    this.fields = fields;
    this.element.forceUpdate();
  }

  render() {
    if (!this.fields.length)
      return;

    console.log('pragma-fields render()');

    // TODO: Functional component that renders an array of fields
    return (
      this.fields.map((child) => {
        if (!child || !child.tag || !child.visible)
          return;

        const ChildTag = child.tag;

        // Force stencil to update the child component
        // TODO: Is there a better way?
        child = { ...child };

        return <ChildTag key={child.path} field={child}/>;
      })
    );
  }
}
