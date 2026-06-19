import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({ imports: [AlertComponent] })
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      description: 'Conveys the nature of the alert'
    },
    title: { control: 'text' },
    dismissible: { control: 'boolean' },
    dismissed: { action: 'dismissed' }
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-alert [variant]="variant" [title]="title" [dismissible]="dismissible" (dismissed)="dismissed()">
        This is the alert message body providing more details to the user.
      </ui-alert>
    `
  })
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Info: Story = {
  args: { variant: 'info', title: 'Heads up', dismissible: false }
};

export const Success: Story = {
  args: { variant: 'success', title: 'All done!', dismissible: false }
};

export const Warning: Story = {
  args: { variant: 'warning', title: 'Watch out', dismissible: false }
};

export const Danger: Story = {
  args: { variant: 'danger', title: 'Something went wrong', dismissible: false }
};

export const Dismissible: Story = {
  args: { variant: 'info', title: 'Dismissible Alert', dismissible: true }
};

export const NoTitle: Story = {
  args: { variant: 'success', title: '', dismissible: false },
  render: (args) => ({
    props: args,
    template: `
      <ui-alert [variant]="variant" [dismissible]="dismissible">
        Your file has been saved successfully.
      </ui-alert>
    `
  })
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:12px; padding:16px; max-width:560px;">
        <ui-alert variant="info" title="Information">
          Your session will expire in 15 minutes. Save your work to avoid losing changes.
        </ui-alert>
        <ui-alert variant="success" title="Payment successful">
          Your subscription has been activated. Enjoy all premium features!
        </ui-alert>
        <ui-alert variant="warning" title="Storage almost full" [dismissible]="true">
          You've used 90% of your storage. Consider upgrading or deleting old files.
        </ui-alert>
        <ui-alert variant="danger" title="Account suspended">
          Your account has been temporarily suspended. Please contact support.
        </ui-alert>
      </div>
    `
  })
};
