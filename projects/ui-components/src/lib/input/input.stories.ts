import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({ imports: [InputComponent] })
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    errorMessage: { control: 'text', description: 'Non-empty string triggers error state' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    required: { control: 'boolean' }
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width:360px; padding:16px;">
        <ui-input
          [label]="label"
          [type]="type"
          [placeholder]="placeholder"
          [hint]="hint"
          [errorMessage]="errorMessage"
          [prefix]="prefix"
          [suffix]="suffix"
          [required]="required"
        ></ui-input>
      </div>
    `
  })
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: { label: 'Full name', placeholder: 'John Doe' }
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    hint: 'Only letters, numbers and underscores.'
  }
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
    errorMessage: 'Please enter a valid email address.'
  }
};

export const Required: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    required: true
  }
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="max-width:360px; padding:16px;">
        <ui-input label="Read-only field" [value]="'Cannot edit this'" [isDisabled]="true"></ui-input>
      </div>
    `
  })
};

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    placeholder: 'yoursite.com',
    prefix: 'https://'
  }
};

export const WithSuffix: Story = {
  args: {
    label: 'Price',
    type: 'number',
    placeholder: '0.00',
    suffix: 'CHF'
  }
};

export const WithPrefixAndSuffix: Story = {
  args: {
    label: 'Amount',
    type: 'number',
    placeholder: '0.00',
    prefix: '$',
    suffix: 'USD'
  }
};

export const SearchInput: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search components…',
    prefix: '🔍'
  }
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:20px; max-width:360px; padding:16px;">
        <ui-input label="Default" placeholder="Enter text"></ui-input>
        <ui-input label="With hint" placeholder="Enter username" hint="Letters and numbers only"></ui-input>
        <ui-input label="With error" placeholder="Enter email" errorMessage="This field is required"></ui-input>
        <ui-input label="Required field" placeholder="Enter value" [required]="true"></ui-input>
        <ui-input label="With prefix" placeholder="domain.com" prefix="https://"></ui-input>
        <ui-input label="With suffix" placeholder="0.00" suffix="CHF" type="number"></ui-input>
      </div>
    `
  })
};
