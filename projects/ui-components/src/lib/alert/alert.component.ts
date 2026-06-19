import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ui-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="visible" role="alert" [class]="alertClasses">
      <span class="alert-icon" aria-hidden="true">{{ icon }}</span>
      <div class="alert-content">
        <strong *ngIf="title" class="alert-title">{{ title }}</strong>
        <span class="alert-message"><ng-content></ng-content></span>
      </div>
      <button *ngIf="dismissible" class="alert-close" aria-label="Dismiss" (click)="dismiss()">✕</button>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .alert {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 8px;
      border: 1px solid transparent;
      font-size: 14px;
      line-height: 1.5;
    }

    .alert-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }

    .alert-content { flex: 1; min-width: 0; }

    .alert-title {
      display: block;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .alert-close {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
      line-height: 1;
      padding: 2px 4px;
      border-radius: 4px;
      opacity: 0.6;
      transition: opacity 0.15s;
      flex-shrink: 0;
    }
    .alert-close:hover { opacity: 1; }

    /* Variants */
    .alert-info    { background: #eff6ff; border-color: #bfdbfe; color: #1e40af; }
    .alert-success { background: #f0fdf4; border-color: #bbf7d0; color: #166534; }
    .alert-warning { background: #fffbeb; border-color: #fde68a; color: #92400e; }
    .alert-danger  { background: #fef2f2; border-color: #fecaca; color: #991b1b; }
  `]
})
export class AlertComponent {
  @Input() variant: AlertVariant = 'info';
  @Input() title = '';
  @Input() dismissible = false;
  @Output() dismissed = new EventEmitter<void>();

  visible = true;

  get alertClasses(): string {
    return `alert alert-${this.variant}`;
  }

  get icon(): string {
    const icons: Record<AlertVariant, string> = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      danger: '🚨'
    };
    return icons[this.variant];
  }

  dismiss(): void {
    this.visible = false;
    this.dismissed.emit();
  }
}
