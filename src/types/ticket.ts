export type ThemeKey = 'midnight' | 'sunrise' | 'forest' | 'mono';

export type TicketTier = 'GA' | 'VIP' | 'Backstage';

export type TicketMark = 'sparkle' | 'star' | 'music' | 'moon';

export type SaveState = 'idle' | 'saving' | 'error' | 'success';

export interface TicketTheme {
  name: string;
  surface?: string;
  ink: string;
  accent: string;
  gradient?: string;
}

export interface TicketDesign {
  eventName: string;
  holderName: string;
  date: string;
  tier: TicketTier;
  theme: ThemeKey;
  accent: string;
  mark: TicketMark;
}

export interface SaveResult {
  id: string;
  shareUrl: string;
}

export interface TicketErrors {
  eventName?: string;
  holderName?: string;
  date?: string;
}
