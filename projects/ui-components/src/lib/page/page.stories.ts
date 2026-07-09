import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PageComponent } from './page.component';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { AlertComponent } from '../alert/alert.component';

const meta: Meta<PageComponent> = {
  title: 'Components/Page',
  component: PageComponent,
  decorators: [
    moduleMetadata({ imports: [PageComponent, CardComponent, ButtonComponent, AlertComponent] })
  ],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    hasSidebar: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<PageComponent>;

export const Basic: Story = {
  render: () => ({
    template: `
      <ui-page title="Dashboard" subtitle="Welcome back, David">
        <ui-card title="Getting Started" [elevated]="true">
          This is your main content area. Drop any components here.
        </ui-card>
      </ui-page>
    `
  })
};

export const WithActions: Story = {
  render: () => ({
    template: `
      <ui-page title="Projects" subtitle="Manage your active projects">
        <div slot="actions">
          <ui-button variant="primary" size="sm">New Project</ui-button>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px;">
          <ui-card title="Alpha" badge="Active" [elevated]="true" [interactive]="true">
            Frontend redesign for the main product suite.
          </ui-card>
          <ui-card title="Beta" badge="Review" [elevated]="true" [interactive]="true">
            API gateway migration to gRPC.
          </ui-card>
          <ui-card title="Gamma" badge="Draft" [elevated]="true" [interactive]="true">
            Design system consolidation across all teams.
          </ui-card>
        </div>
      </ui-page>
    `
  })
};

export const WithSidebar: Story = {
  render: () => ({
    template: `
      <ui-page title="Settings" subtitle="Manage your account preferences" [hasSidebar]="true">
        <div slot="sidebar">
          <ui-card title="Quick Info" [elevated]="true">
            Use the sidebar for navigation, filters, or contextual info.
          </ui-card>
        </div>
        <ui-card title="Profile" [elevated]="true">
          Update your name, email and avatar here.
        </ui-card>
      </ui-page>
    `
  })
};

export const WithAlert: Story = {
  render: () => ({
    template: `
      <ui-page title="Billing" subtitle="Your current plan and usage">
        <div slot="actions">
          <ui-button variant="primary" size="sm">Upgrade</ui-button>
        </div>
        <div style="display:flex; flex-direction:column; gap:16px;">
          <ui-alert variant="warning">Your trial ends in 3 days. Upgrade to keep access.</ui-alert>
          <ui-card title="Current Plan" badge="Free" [elevated]="true">
            You are on the free plan with limited storage and no priority support.
          </ui-card>
        </div>
      </ui-page>
    `
  })
};

export const NoHeader: Story = {
  render: () => ({
    template: `
      <ui-page>
        <ui-card title="Content-only page" [elevated]="true">
          A page with no title or subtitle — the header is hidden entirely.
        </ui-card>
      </ui-page>
    `
  })
};
