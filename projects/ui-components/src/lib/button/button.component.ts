import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || loading"
      (click)="clicked.emit($event)"
    >
      <span *ngIf="loading" class="btn-spinner" aria-hidden="true"></span>
      <span [class.visually-hidden]="loading">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styles: [`
    :host { display: inline-block; }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border: 2px solid transparent;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      font-family: inherit;
      line-height: 1;
      white-space: nowrap;
    }

    button:focus-visible {
      outline: 3px solid #6366f1;
      outline-offset: 2px;
    }

    button:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    /* Sizes */
    .btn-sm { padding: 6px 12px; font-size: 13px; }
    .btn-md { padding: 10px 18px; font-size: 14px; }
    .btn-lg { padding: 14px 24px; font-size: 16px; }

    /* Variants */
    .btn-primary {
      background: #6366f1;
      color: #fff;
      border-color: #6366f1;
    }
    .btn-primary:hover:not(:disabled) { background: #4f46e5; border-color: #4f46e5; }
    .btn-primary:active:not(:disabled) { background: #4338ca; }

    .btn-secondary {
      background: #f1f5f9;
      color: #334155;
      border-color: #e2e8f0;
    }
    .btn-secondary:hover:not(:disabled) { background: #e2e8f0; }
    .btn-secondary:active:not(:disabled) { background: #cbd5e1; }

    .btn-outline {
      background: transparent;
      color: #6366f1;
      border-color: #6366f1;
    }
    .btn-outline:hover:not(:disabled) { background: #eef2ff; }
    .btn-outline:active:not(:disabled) { background: #e0e7ff; }

    .btn-ghost {
      background: transparent;
      color: #475569;
      border-color: transparent;
    }
    .btn-ghost:hover:not(:disabled) { background: #f1f5f9; }
    .btn-ghost:active:not(:disabled) { background: #e2e8f0; }

    .btn-danger {
      background: #ef4444;
      color: #fff;
      border-color: #ef4444;
    }
    .btn-danger:hover:not(:disabled) { background: #dc2626; border-color: #dc2626; }
    .btn-danger:active:not(:disabled) { background: #b91c1c; }

    /* Loading spinner */
    .btn-spinner {
      width: 14px;
      height: 14px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    .visually-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Output() clicked = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    return `btn-${this.variant} btn-${this.size}`;
  }
}
