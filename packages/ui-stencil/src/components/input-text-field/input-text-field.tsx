import { Component, Event, EventEmitter, Method, Prop, h } from '@stencil/core';
interface IInputTextField {
  el: HTMLInputElement;
  placeHolder?: string;
  setValue: (value: string) => Promise<void>;
  getValue: () => Promise<string>;
  clear: () => Promise<void>;
}

@Component({
  tag: 'app-input-text-field',
  styleUrl: 'input-text-field.css',
  scoped: true,
})
export class InputTextField implements IInputTextField {
  el: HTMLInputElement;
  @Prop() placeholder?: string;

  @Method()
  async setValue(value: string): Promise<void> {
    this.el.value = value;
    this.el.dispatchEvent(new window.Event('input'));
  }

  @Method()
  async getValue(): Promise<string> {
    return this.el.value;
  }

  @Method()
  async clear(): Promise<void> {
    await this.setValue('');
  }

  @Method()
  async isEmpty(): Promise<boolean> {
    if (await this.getValue()) {
      return false;
    }
    return true;
  }

  @Event({ eventName: 'textInputChangeEvent' })
  changeEvent: EventEmitter<{ value: string; ev: globalThis.Event }>;

  onInputEventHandler = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.changeEvent.emit({ value: target.value, ev: event });
  };

  render() {
    return (
      <input
        type="text"
        class="p-2 border-b focus:outline-none focus:ring focus:ring-blue-500 w-full"
        ref={node => (this.el = node)}
        placeholder={this.placeholder}
        onInput={this.onInputEventHandler}
      />
    );
  }
}
