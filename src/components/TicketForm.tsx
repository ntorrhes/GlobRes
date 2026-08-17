import type { ChangeEvent } from 'react';

import { ACCENT_SWATCHES, MARKS, THEMES, TIERS } from '../constants/ticket';

import type {
  SaveResult,
  SaveState,
  TicketErrors,
  TicketMark,
  TicketTier,
  ThemeKey
} from '../types/ticket';

import { Field } from './Field';
import { SaveFooter } from './SaveFooter';

import '../styles/styles.scss';

interface TicketFormProps {
  eventName: string;
  holderName: string;
  date: string;

  tier: TicketTier;

  themeKey: ThemeKey;

  accent: string;

  mark: TicketMark;

  errors: TicketErrors;

  saveState: SaveState;
  saveError: string;

  saveResult: SaveResult | null;

  copied: boolean;

  onEventNameChange: (event: ChangeEvent<HTMLInputElement>) => void;

  onHolderNameChange: (event: ChangeEvent<HTMLInputElement>) => void;

  onDateChange: (event: ChangeEvent<HTMLInputElement>) => void;

  onAccentChange: (event: ChangeEvent<HTMLInputElement>) => void;

  onTierChange: (tier: TicketTier) => void;

  onThemeChange: (theme: ThemeKey) => void;

  onMarkChange: (mark: TicketMark) => void;

  onAccentSelect: (color: string) => void;

  onSave: () => void;

  onCopy: () => void;
}

export function TicketForm({
  eventName,
  holderName,
  date,
  tier,
  themeKey,
  accent,
  mark,
  errors,
  saveState,
  saveError,
  saveResult,
  copied,

  onEventNameChange,
  onHolderNameChange,
  onDateChange,
  onAccentChange,

  onTierChange,
  onThemeChange,
  onMarkChange,
  onAccentSelect,

  onSave,
  onCopy
}: TicketFormProps) {
  return (
    <aside className="ticket-form">
      <header className="ticket-form__header">
        <h1 className="ticket-form__title">New ticket</h1>

        <p className="ticket-form__description">
          Edits render live in the preview →
        </p>
      </header>

      <Field label="Event name" error={errors.eventName}>
        <input
          type="text"
          value={eventName}
          onChange={onEventNameChange}
          placeholder="Neon Nights"
          className={`ticket-form__input ${
            errors.eventName ? 'ticket-form__input--error' : ''
          }`}
        />
      </Field>

      <Field label="Holder name" error={errors.holderName}>
        <input
          type="text"
          value={holderName}
          onChange={onHolderNameChange}
          placeholder="A. Rivera"
          className={`ticket-form__input ${
            errors.holderName ? 'ticket-form__input--error' : ''
          }`}
        />
      </Field>

      <Field label="Date" error={errors.date}>
        <input
          type="date"
          value={date}
          onChange={onDateChange}
          className={`ticket-form__input ${
            errors.date ? 'ticket-form__input--error' : ''
          }`}
        />
      </Field>

      <div className="ticket-form__group">
        <span className="ticket-form__label">Tier</span>

        <div className="ticket-form__tier-control">
          {TIERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onTierChange(item)}
              className={`ticket-form__tier-button ${
                tier === item ? 'ticket-form__tier-button--active' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="ticket-form__group">
        <label className="ticket-form__label" htmlFor="ticket-accent">
          Accent color
        </label>
        <div className="ticket-form__accent-control">
          <div className="ticket-form__accent-control">
            <div
              className="ticket-form__accent-preview"
              style={{
                backgroundColor: accent
              }}
            />

            <input
              id="ticket-accent"
              value={accent}
              onChange={onAccentChange}
              className="ticket-form__input ticket-form__input--color-value"
            />
          </div>

          <div className="ticket-form__swatches">
            {ACCENT_SWATCHES.map((color) => {
              const isSelected = accent.toLowerCase() === color.toLowerCase();

              return (
                <button
                  key={color}
                  type="button"
                  aria-label={`Use accent ${color}`}
                  aria-pressed={isSelected}
                  onClick={() => onAccentSelect(color)}
                  className={`ticket-form__swatch ${
                    isSelected ? 'ticket-form__swatch--active' : ''
                  }`}
                  style={
                    {
                      backgroundColor: color,
                      '--swatch-color': color
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="ticket-form__group">
        <span className="ticket-form__label">Mark</span>

        <div className="ticket-form__marks">
          {Object.entries(MARKS).map(([key, Icon]) => {
            const markKey = key as TicketMark;

            return (
              <button
                key={key}
                type="button"
                aria-label={key}
                aria-pressed={mark === markKey}
                onClick={() => onMarkChange(markKey)}
                className={`ticket-form__mark ${
                  mark === markKey ? 'ticket-form__mark--active' : ''
                }`}
              >
                <Icon size={16} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="ticket-form__group">
        <span className="ticket-form__label">Theme</span>

        <div className="ticket-form__themes">
          {Object.entries(THEMES).map(([key, theme]) => {
            const currentKey = key as ThemeKey;

            return (
              <button
                key={key}
                type="button"
                aria-pressed={themeKey === currentKey}
                onClick={() => onThemeChange(currentKey)}
                className={`ticket-form__theme ${
                  themeKey === currentKey ? 'ticket-form__theme--active' : ''
                }`}
              >
                <span
                  className="ticket-form__theme-preview"
                  style={{
                    backgroundColor: theme.surface,

                    borderBottomColor: theme.accent
                  }}
                />

                <span className="ticket-form__theme-name">{theme.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <SaveFooter
        saveState={saveState}
        saveError={saveError}
        saveResult={saveResult}
        copied={copied}
        onSave={onSave}
        onCopy={onCopy}
      />
    </aside>
  );
}
