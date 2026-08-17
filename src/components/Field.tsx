import type { ReactNode } from 'react';
import '../styles/styles.scss';
interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export function Field({ label, error, children }: FieldProps) {
  return (
    <div className="ticket-field">
      <label className="ticket-field__label">{label}</label>

      <div className="ticket-field__control">{children}</div>

      {error && <p className="ticket-field__error">{error}</p>}
    </div>
  );
}
