import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'pragma-number',
  shadow: true
})
export class Number {
  /**
   * Property data.
   */
  @Prop() property: any = {};

  componentWillLoad() {
    this.parseProperty(this.property);
  }

  @Watch('property')
  parseProperty(newValue) {
    if (typeof newValue === 'string')
      newValue = JSON.parse(newValue);

    this.property = newValue;
  };

  getPath() {
    return this.property ? this.property.path : '';
  }

  render() {
    console.log(this.property);

    return <input type="number" name={this.getPath()}/>;
  }
}
