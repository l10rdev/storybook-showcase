import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span [class]="badgeClasses"><ng-content></ng-content></span>`,
  styles: [`
    :host { display: inline-block; }

    span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-weight: 600;
      border-radius: 999px;
      letter-spacing: 0.02em;
    }

    .badge-sm { padding: 2px 8px; font-size: 11px; }
    .badge-md { padding: 4px 10px; font-size: 12px; }

    .badge-default  { background: #f1f5f9; color: #475569; }
    .badge-success  { background: #dcfce7; color: #166534; }
    .badge-warning  { background: #fef9c3; color: #854d0e; }
    .badge-danger   { background: #fee2e2; color: #991b1b; }
    .badge-info     { background: #dbeafe; color: #1e40af; }
  `]
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() size: BadgeSize = 'md';

  get badgeClasses(): string {
    return `badge-${this.variant} badge-${this.size}`;
  }
}
