import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
  template: `
    <div class="field">
      <label *ngIf="label" [for]="inputId" class="field-label">
        {{ label }}<span *ngIf="required" class="required" aria-hidden="true"> *</span>
      </label>
      <div [class]="wrapperClasses">
        <span *ngIf="prefix" class="field-affix field-prefix">{{ prefix }}</span>
        <input
          [id]="inputId"
          [type]="type"
          [placeholder]="placeholder"
          [disabled]="isDisabled"
          [value]="value"
          [attr.aria-invalid]="!!errorMessage || null"
          [attr.aria-describedby]="errorMessage ? inputId + '-error' : (hint ? inputId + '-hint' : null)"
          class="field-input"
          (input)="onInput($event)"
          (blur)="onTouched()"
        />
        <span *ngIf="suffix" class="field-affix field-suffix">{{ suffix }}</span>
      </div>
      <p *ngIf="errorMessage" [id]="inputId + '-error'" class="field-error" role="alert">{{ errorMessage }}</p>
      <p *ngIf="hint && !errorMessage" [id]="inputId + '-hint'" class="field-hint">{{ hint }}</p>
    </div>
  `,
  styles: [`
    .field { display: flex; flex-direction: column; gap: 6px; }

    .field-label {
      font-size: 14px;
      font-weight: 600;
      color: #374151;
    }

    .required { color: #ef4444; }

    .field-wrapper {
      display: flex;
      align-items: stretch;
      border: 1.5px solid #d1d5db;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    .field-wrapper:focus-within {
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
    }

    .field-wrapper.has-error {
      border-color: #ef4444;
    }
    .field-wrapper.has-error:focus-within {
      box-shadow: 0 0 0 3px rgba(239,68,68,0.15);
    }

    .field-wrapper.is-disabled {
      background: #f9fafb;
      border-color: #e5e7eb;
      cursor: not-allowed;
    }

    .field-input {
      flex: 1;
      min-width: 0;
      padding: 10px 12px;
      border: none;
      background: transparent;
      font-size: 14px;
      color: #111827;
      outline: none;
      font-family: inherit;
    }

    .field-input:disabled {
      color: #9ca3af;
      cursor: not-allowed;
    }

    .field-input::placeholder { color: #9ca3af; }

    .field-affix {
      display: flex;
      align-items: center;
      padding: 0 12px;
      background: #f9fafb;
      color: #6b7280;
      font-size: 14px;
      white-space: nowrap;
    }

    .field-prefix { border-right: 1.5px solid #e5e7eb; }
    .field-suffix { border-left: 1.5px solid #e5e7eb; }

    .field-error { margin: 0; font-size: 13px; color: #ef4444; }
    .field-hint  { margin: 0; font-size: 13px; color: #6b7280; }
  `]
})
export class InputComponent implements ControlValueAccessor {
  private static nextId = 0;

  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() errorMessage = '';
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() required = false;

  readonly inputId = `ui-input-${++InputComponent.nextId}`;
  value = '';
  isDisabled = false;

  onChange: (v: string) => void = () => {};
  onTouched: () => void = () => {};

  get wrapperClasses(): string {
    return [
      'field-wrapper',
      this.errorMessage ? 'has-error' : '',
      this.isDisabled ? 'is-disabled' : ''
    ].filter(Boolean).join(' ');
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }

  writeValue(val: string): void { this.value = val ?? ''; }
  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.isDisabled = disabled; }
}
