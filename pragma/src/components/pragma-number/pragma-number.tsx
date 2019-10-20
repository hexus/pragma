import { Component, Prop, Watch, h } from '@stencil/core';
import { parseJson } from '../../utils/utils';

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
    this.property = parseJson(newValue);
  };

  render() {
    console.log(this.property);

    return <input type="number" name={this.property.path}/>;
  }
}
