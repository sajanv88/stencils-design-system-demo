import { Component, EventEmitter, h, Event, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'button.css',
  scoped: true,
})
export class AppButton {
  @Event({ eventName: 'clickEvent' }) clickEvent: EventEmitter<{ ev: globalThis.Event }>;

  @Prop() size: 'sm' | 'lg';

  render() {
    const textSize = this.size === 'sm' ? 'text-sm' : 'text-lg';
    return (
      <button
        onClick={ev => this.clickEvent.emit({ ev })}
        class={`p-2 bg-blue-700 text-white transition duration-150 ease-out hover:ease-in hover:bg-blue-800 focus:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-500 ${textSize}`}
      >
        <slot />
      </button>
    );
  }
}
