import { MARKS, TIER_BADGE } from '../constants/ticket';

import type { TicketMark, TicketTheme, TicketTier } from '../types/ticket';

import { formatDate } from '../utils/ticket';

import '../styles/styles.scss';

interface TicketPreviewProps {
  eventName: string;
  holderName: string;
  date: string;
  tier: TicketTier;
  theme: TicketTheme;
  accent: string;
  mark: TicketMark;
  ticketId?: string;
}

export function TicketPreview({
  eventName,
  holderName,
  date,
  tier,
  theme,
  accent,
  mark,
  ticketId
}: TicketPreviewProps) {
  const displayDate = formatDate(date) || 'DD MON YYYY';

  const ticketStyle = {
    background: theme.gradient || theme.surface,
    color: theme.ink,
    '--ticket-ink': theme.ink
  } as React.CSSProperties;
  return (
    <div className="ticket-preview">
      <div className="ticket-preview__ticket" style={ticketStyle}>
        <span className="ticket-preview__notch ticket-preview__notch--top" />

        <span className="ticket-preview__notch ticket-preview__notch--bottom" />

        <span className="ticket-preview__divider" />

        <div className="ticket-preview__main">
          <div className="ticket-preview__main-header">
            <span className="ticket-preview__admit">ADMIT ONE</span>

            <span
              className="ticket-preview__tier-badge"
              style={{
                borderColor: accent,

                color: accent
              }}
            >
              {TIER_BADGE[tier]}
            </span>
          </div>

          <div className="ticket-preview__event">
            <h2 className="ticket-preview__event-name">
              {eventName || 'Event name'}
            </h2>

            <p className="ticket-preview__holder">
              {holderName || 'Holder name'}
            </p>
          </div>

          <div className="ticket-preview__date">
            <span className="ticket-preview__date-label">DATE</span>

            <span className="ticket-preview__date-value">{displayDate}</span>
          </div>
        </div>

        <div className="ticket-preview__stub">
          <div className="ticket-preview__stub-header">
            <span className="ticket-preview__id">{ticketId || '—'}</span>
          </div>

          <span
            className="ticket-preview__mark"
            style={
              {
                '--mark-icon': `url("${MARKS[mark]}")`
              } as React.CSSProperties
            }
          />

          <span className="ticket-preview__tier">{tier}</span>
        </div>
      </div>
    </div>
  );
}
