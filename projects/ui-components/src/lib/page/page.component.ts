import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <header *ngIf="title || subtitle" class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">{{ title }}</h1>
          <p *ngIf="subtitle" class="page-subtitle">{{ subtitle }}</p>
        </div>
        <div class="page-header-actions">
          <ng-content select="[slot=actions]"></ng-content>
        </div>
      </header>

      <div [class]="layoutClass">
        <main class="page-content">
          <ng-content></ng-content>
        </main>
        <aside *ngIf="hasSidebar" class="page-sidebar">
          <ng-content select="[slot=sidebar]"></ng-content>
        </aside>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .page {
      min-height: 100vh;
      background: #f8fafc;
      font-family: system-ui, sans-serif;
    }

    .page-header {
      background: #fff;
      border-bottom: 1px solid #e2e8f0;
      padding: 24px 32px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }

    .page-header-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .page-title {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.2;
    }

    .page-subtitle {
      margin: 0;
      font-size: 14px;
      color: #64748b;
    }

    .page-header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .page-body {
      padding: 32px;
      display: flex;
      gap: 24px;
      align-items: flex-start;
    }

    .page-body--full {
      padding: 32px;
    }

    .page-content {
      flex: 1;
      min-width: 0;
    }

    .page-sidebar {
      width: 280px;
      flex-shrink: 0;
    }
  `]
})
export class PageComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() hasSidebar = false;

  get layoutClass(): string {
    return this.hasSidebar ? 'page-body' : 'page-body--full';
  }
}
