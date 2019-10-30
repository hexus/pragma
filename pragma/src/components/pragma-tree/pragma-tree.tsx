import { Component, Prop, h } from '@stencil/core';

/**
 * A field tree component.
 *
 * Recursively renders components from a Pragma field tree.
 *
 * TODO: Rename to pragma-fields.
 */
@Component({
  tag: 'pragma-tree',
  shadow: false
})
export class Tree {
  /**
   * The children of the root node of the tree.
   */
  @Prop() fields: Array<any> = [];

  render() {
    // TODO: Functional component that renders an array of fields
    return (
        this.fields ? this.fields.map((child) => {
          if (!child || !child.tag || !child.visible)
            return;

          const ChildTag = child.tag;

          return <ChildTag key={child.path} field={child}>
            {child.children
              ? <pragma-tree fields={child.children}/>
              : null
            }
          </ChildTag>;
        }) : null
    );
  }
}
