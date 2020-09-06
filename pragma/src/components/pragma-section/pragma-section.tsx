import { Component, Prop, h } from '@stencil/core';

/**
 * TODO: Flesh out @Prop to field mappings
 * TODO: Add slot?
 *
 * @slot - Section content.
 */
@Component({
  tag: 'pragma-section',
  shadow: false
})
export class PragmaSection {
  @Prop() field: any = {};

  render() {
    if (!Array.isArray(this.field.children)) {
      this.field.children = [];
    }

    let children = this.field.children.slice();

    return <fieldset name={this.field.path} title={this.field.description}>
      <legend>{ this.field.label }</legend>
      <pragma-fields fields={children}/>
      <slot/>
    </fieldset>
  }
}
