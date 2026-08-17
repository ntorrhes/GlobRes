import { useState, type ChangeEvent } from 'react';
import { TicketForm } from './components/TicketForm';
import { TicketPreview } from './components/TicketPreview';
import { THEMES } from './constants/ticket';
import { saveTicketDesign } from './services/ticket.service';
import { generateTicketId } from './utils/ticket';

import type {
  SaveResult,
  SaveState,
  TicketErrors,
  TicketMark,
  TicketTier,
  ThemeKey
} from './types/ticket';

import './styles/styles.scss';

export default function TicketStudio() {
  const [eventName, setEventName] = useState('Neon Nights');
  const [holderName, setHolderName] = useState('A. Rivera');
  const [date, setDate] = useState('2026-08-15');
  const [tier, setTier] = useState<TicketTier>('VIP');
  const [themeKey, setThemeKey] = useState<ThemeKey>('midnight');
  const [accent, setAccent] = useState(THEMES.midnight.accent);
  const [mark, setMark] = useState<TicketMark>('sparkle');
  const [errors, setErrors] = useState<TicketErrors>({});
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [saveError, setSaveError] = useState('');
  const [saveResult, setSaveResult] = useState<SaveResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [ticketId] = useState<string>(generateTicketId);
  const theme = THEMES[themeKey];
  const resetSaveState = () => {
    if (saveState === 'success' || saveState === 'error') {
      setSaveState('idle');

      setSaveResult(null);

      setSaveError('');
    }
  };

  const handleFieldChange =
    (setter: (value: string) => void, errorKey?: keyof TicketErrors) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
      resetSaveState();

      if (errorKey && errors[errorKey]) {
        setErrors((previous) => ({
          ...previous,

          [errorKey]: undefined
        }));
      }
    };

  const handleTierChange = (nextTier: TicketTier) => {
    setTier(nextTier);
    resetSaveState();
  };

  const handleThemeChange = (key: ThemeKey) => {
    setThemeKey(key);
    setAccent(THEMES[key].accent);
    resetSaveState();
  };

  const handleMarkChange = (nextMark: TicketMark) => {
    setMark(nextMark);
    resetSaveState();
  };

  const handleAccentSelect = (color: string) => {
    setAccent(color);
    resetSaveState();
  };

  const validate = (): boolean => {
    const nextErrors: TicketErrors = {};
    if (!eventName.trim()) {
      nextErrors.eventName = 'Event name is required.';
    }

    if (!holderName.trim()) {
      nextErrors.holderName = 'Holder name is required.';
    }

    if (!date) {
      nextErrors.date = 'Date is required.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSave = async () => {
    if (saveState === 'saving') {
      return;
    }

    if (!validate()) {
      return;
    }

    setSaveState('saving');

    setSaveError('');

    try {
      const result = await saveTicketDesign({
        eventName,
        holderName,
        date,
        tier,
        accent,
        mark,
        theme: themeKey
      });

      setSaveResult(result);

      setSaveState('success');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Couldn't save your ticket. Check your connection and try again.";

      setSaveError(message);

      setSaveState('error');
    }
  };

  const handleCopy = async () => {
    if (!saveResult) {
      return;
    }

    try {
      await navigator.clipboard.writeText(`https://${saveResult.shareUrl}`);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {}
  };

  return (
    <main className="ticket-studio">
      <TicketForm
        eventName={eventName}
        holderName={holderName}
        date={date}
        tier={tier}
        themeKey={themeKey}
        accent={accent}
        mark={mark}
        errors={errors}
        saveState={saveState}
        saveError={saveError}
        saveResult={saveResult}
        copied={copied}
        onEventNameChange={handleFieldChange(setEventName, 'eventName')}
        onHolderNameChange={handleFieldChange(setHolderName, 'holderName')}
        onDateChange={handleFieldChange(setDate, 'date')}
        onAccentChange={handleFieldChange(setAccent)}
        onTierChange={handleTierChange}
        onThemeChange={handleThemeChange}
        onMarkChange={handleMarkChange}
        onAccentSelect={handleAccentSelect}
        onSave={handleSave}
        onCopy={handleCopy}
      />

      <section className="ticket-studio__preview">
        <TicketPreview
          eventName={eventName}
          holderName={holderName}
          date={date}
          tier={tier}
          theme={theme}
          accent={accent}
          mark={mark}
          ticketId={ticketId}
        />
      </section>
    </main>
  );
}
