import { Component, Method, Prop, h } from '@stencil/core';
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
  }

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
