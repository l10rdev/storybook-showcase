import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({ imports: [ButtonComponent] })
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    clicked: { action: 'clicked' }
  },
  render: (args) => ({
    props: args,
    template: `<ui-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" (clicked)="clicked($event)">Click me</ui-button>`
  })
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'default', size: 'md', disabled: false, loading: false }
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' }
};

export const Outline: Story = {
  args: { variant: 'outline', size: 'md' }
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' }
};

export const Danger: Story = {
  args: { variant: 'danger', size: 'md' }
};

export const Small: Story = {
  args: { variant: 'default', size: 'sm' }
};

export const Large: Story = {
  args: { variant: 'default', size: 'lg' }
};

export const Disabled: Story = {
  args: { variant: 'default', size: 'md', disabled: true }
};

export const Loading: Story = {
  args: { variant: 'default', size: 'md', loading: true }
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; padding:16px;">
        <ui-button variant="default">Primary</ui-button>
        <ui-button variant="secondary">Secondary</ui-button>
        <ui-button variant="outline">Outline</ui-button>
        <ui-button variant="ghost">Ghost</ui-button>
        <ui-button variant="danger">Danger</ui-button>
      </div>
    `
  })
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:12px; align-items:center; padding:16px;">
        <ui-button variant="default" size="sm">Small</ui-button>
        <ui-button variant="default" size="md">Medium</ui-button>
        <ui-button variant="default" size="lg">Large</ui-button>
      </div>
    `
  })
};

export const States: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:12px; align-items:center; padding:16px;">
        <ui-button variant="default">Default</ui-button>
        <ui-button variant="default" [disabled]="true">Disabled</ui-button>
        <ui-button variant="default" [loading]="true">Loading</ui-button>
      </div>
    `
  })
};
