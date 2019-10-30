import { Component, Prop, h } from '@stencil/core';

/**
 * @slot - Section content.
 */
@Component({
  tag: 'pragma-section'
})
export class Section {
  @Prop() field: any = {};

  render() {
    return <fieldset name={this.field.path} title={this.field.description}>
      <legend>{ this.field.label }</legend>
      <slot/>
    </fieldset>
  }
}
