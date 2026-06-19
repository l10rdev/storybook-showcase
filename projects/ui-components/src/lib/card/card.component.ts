import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <img *ngIf="imageSrc" [src]="imageSrc" [alt]="imageAlt" class="card-image" />
      <div *ngIf="title || badge" class="card-header">
        <h3 *ngIf="title" class="card-title">{{ title }}</h3>
        <span *ngIf="badge" class="card-badge">{{ badge }}</span>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div *ngIf="hasFooter" class="card-footer">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .card-elevated {
      box-shadow: 0 4px 6px -1px rgba(0,0,0,.08), 0 2px 4px -2px rgba(0,0,0,.06);
    }

    .card-interactive {
      cursor: pointer;
    }
    .card-interactive:hover {
      box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.08);
      transform: translateY(-2px);
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .card-header {
      padding: 16px 20px 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }

    .card-title {
      margin: 0;
      font-size: 17px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.3;
    }

    .card-badge {
      flex-shrink: 0;
      background: #eef2ff;
      color: #4338ca;
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
    }

    .card-body {
      padding: 12px 20px 20px;
      color: #64748b;
      font-size: 14px;
      line-height: 1.6;
    }

    .card-footer {
      padding: 14px 20px;
      border-top: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class CardComponent {
  @Input() title = '';
  @Input() badge = '';
  @Input() imageSrc = '';
  @Input() imageAlt = '';
  @Input() elevated = false;
  @Input() interactive = false;
  @Input() hasFooter = false;

  get cardClasses(): string {
    return [
      'card',
      this.elevated ? 'card-elevated' : '',
      this.interactive ? 'card-interactive' : ''
    ].filter(Boolean).join(' ');
  }
}
