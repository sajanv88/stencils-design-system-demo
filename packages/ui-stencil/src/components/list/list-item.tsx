import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-list-item',
  styleUrl: 'list.css',
  scoped: true,
})
export class ListItem {
  render() {
    return (
      <li class="w-full mt-2">
        <div class="border-b pb-1 pl-2 w-full flex items-center">
          <slot />
        </div>
      </li>
    );
  }
}
