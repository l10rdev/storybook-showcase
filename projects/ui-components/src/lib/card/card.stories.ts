import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';
import { ButtonComponent } from '../button/button.component';
import { BadgeComponent } from '../badge/badge.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({ imports: [CardComponent, ButtonComponent, BadgeComponent] })
  ],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    badge: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    elevated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    hasFooter: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Basic: Story = {
  render: () => ({
    template: `
      <ui-card title="Getting Started" style="max-width:360px; display:block;">
        Learn how to build beautiful UIs with our component library.
        Start with the basics and work your way up to complex patterns.
      </ui-card>
    `
  })
};

export const WithBadge: Story = {
  render: () => ({
    template: `
      <ui-card title="Premium Plan" badge="Popular" [elevated]="true" style="max-width:360px; display:block;">
        Everything in the free plan plus unlimited storage, priority support, and advanced analytics.
      </ui-card>
    `
  })
};

export const WithImage: Story = {
  render: () => ({
    template: `
      <ui-card
        title="Mountain Retreat"
        badge="Featured"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        [elevated]="true"
        style="max-width:360px; display:block;"
      >
        A stunning retreat nestled in the Swiss Alps, offering breathtaking views and total tranquility.
      </ui-card>
    `
  })
};

export const WithFooter: Story = {
  render: () => ({
    template: `
      <ui-card title="Upgrade Your Plan" [elevated]="true" [hasFooter]="true" style="max-width:360px; display:block;">
        Unlock advanced features and take your workflow to the next level.
        <div slot="footer">
          <ui-button variant="primary" size="sm">Upgrade Now</ui-button>
          <ui-button variant="ghost" size="sm">Learn More</ui-button>
        </div>
      </ui-card>
    `
  })
};

export const Interactive: Story = {
  render: () => ({
    template: `
      <ui-card title="Click Me" [interactive]="true" [elevated]="true" style="max-width:360px; display:block; cursor:pointer;">
        Hover over this card to see the interactive state. It lifts up on hover
        to indicate it's clickable.
      </ui-card>
    `
  })
};

export const CardGrid: Story = {
  render: () => ({
    template: `
      <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; padding:16px;">
        <ui-card title="Design System" badge="New" [elevated]="true" [interactive]="true">
          Build consistent UIs with our comprehensive design system and component library.
        </ui-card>
        <ui-card title="Documentation" badge="Updated" [elevated]="true" [interactive]="true">
          Full API docs, usage examples and best practices for every component.
        </ui-card>
        <ui-card title="Accessibility" badge="A11y" [elevated]="true" [interactive]="true">
          Every component is built with accessibility in mind — WCAG 2.1 AA compliant.
        </ui-card>
      </div>
    `
  })
};

export const Flat: Story = {
  render: () => ({
    template: `
      <ui-card title="Flat Card" style="max-width:360px; display:block;">
        This card has no elevation — useful for content areas that already sit
        on a light background.
      </ui-card>
    `
  })
};
