import { Component, Element, forceUpdate, Prop, Watch, h } from '@stencil/core';
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
   * they know which fields to provide.
   */
  @Prop({ reflect: true }) path: string = '';

  /**
   * The set of fields to render.
   */
  @Prop() fields: Array<Field> = [];

  /**
   * Force an update when fields are updated.
   */
  @Watch('fields')
  async updateFields() {
    forceUpdate(this.element);
  }

  render() {
    if (!this.fields?.length)
      return;

    // console.log('pragma-fields render()');

    // TODO: Functional component that renders an array of fields
    // TODO: "Render props" for non-pragma elements?
    return (
      this.fields.map((child) => {
        if (!child || !child.tag || !child.visible)
          return;

        const ChildTag = child.tag;

        return <ChildTag key={child.path} field={{ ...child }}/>;
      })
    );
  }
}
