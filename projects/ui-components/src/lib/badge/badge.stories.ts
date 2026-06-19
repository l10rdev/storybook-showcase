import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({ imports: [BadgeComponent] })
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: 'Color scheme of the badge'
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the badge'
    }
  },
  render: (args) => ({
    props: args,
    template: `<ui-badge [variant]="variant" [size]="size">Badge</ui-badge>`
  })
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: { variant: 'default', size: 'md' }
};

export const Success: Story = {
  args: { variant: 'success', size: 'md' }
};

export const Warning: Story = {
  args: { variant: 'warning', size: 'md' }
};

export const Danger: Story = {
  args: { variant: 'danger', size: 'md' }
};

export const Info: Story = {
  args: { variant: 'info', size: 'md' }
};

export const Small: Story = {
  args: { variant: 'success', size: 'sm' }
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center; padding:16px;">
        <ui-badge variant="default">Default</ui-badge>
        <ui-badge variant="success">Success</ui-badge>
        <ui-badge variant="warning">Warning</ui-badge>
        <ui-badge variant="danger">Danger</ui-badge>
        <ui-badge variant="info">Info</ui-badge>
      </div>
    `
  })
};

export const UsedInContext: Story = {
  render: () => ({
    template: `
      <div style="padding:16px; font-family:sans-serif;">
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid #e2e8f0;">
          <span style="font-size:14px; color:#374151;">Order #1042</span>
          <ui-badge variant="success">Delivered</ui-badge>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid #e2e8f0;">
          <span style="font-size:14px; color:#374151;">Order #1041</span>
          <ui-badge variant="warning">In Transit</ui-badge>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid #e2e8f0;">
          <span style="font-size:14px; color:#374151;">Order #1040</span>
          <ui-badge variant="danger">Cancelled</ui-badge>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0;">
          <span style="font-size:14px; color:#374151;">Order #1039</span>
          <ui-badge variant="info">Processing</ui-badge>
        </div>
      </div>
    `
  })
};
