import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-list',
  styleUrl: 'list.css',
  scoped: true,
})
export class List {
  render() {
    return (
      <ul class="p-0 m-0 mt-1 w-full">
        <slot />
      </ul>
    );
  }
}
