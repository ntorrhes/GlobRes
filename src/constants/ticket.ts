import type {
  TicketMark,
  TicketTheme,
  TicketTier,
  ThemeKey
} from '../types/ticket';

import sparkleIcon from '../assets/sparkle.svg';
import starIcon from '../assets/star.svg';
import noteIcon from '../assets/note.svg';
import moonIcon from '../assets/moon.svg';

import midnightTheme from '../assets/midnight.svg';
import sunriseTheme from '../assets/sunrise.svg';
import monoTheme from '../assets/mono.svg';
import forestTheme from '../assets/forest.svg';

export const THEMES: Record<ThemeKey, TicketTheme> = {
  midnight: {
    name: 'Midnight',
    surface: '#0F172A',
    ink: '#E2E8F0',
    accent: '#6366F1',
    gradient:
      ' radial-gradient(135% 120% at 12% -10%, #243352 0%, #131E36 45%, #0B1120 100%)'
  },
  sunrise: {
    name: 'Sunrise',
    surface: '#FFF7ED',
    ink: '#431407',
    accent: '#F97316',
    gradient:
      'radial-gradient(135% 120% at 12% -10%, #FFE7C6 0%, #FFF2E0 45%, #FFF7ED 100%)'
  },
  forest: {
    name: 'Forest',
    surface: '#052E27',
    gradient:
      'radial-gradient(135% 120% at 12% -10%, #0C5142 0%, #073A30 45%, #04241E 100%)',
    ink: '#D1FAE5',
    accent: '#10B981'
  },
  mono: {
    name: 'Mono',
    surface: '#FAFAFA',
    gradient:
      'radial-gradient(135% 120% at 12% -10%, #FFFFFF 0%, #FAFAFA 45%, #F3F3F3 100%)',
    ink: '#111111',
    accent: '#111111'
  }
};

export const CANVAS_BG = '#EAEAE6';

export const ACCENT_SWATCHES = [
  '#6366F1',
  '#EF4444',
  '#22C55E',
  '#3B82F6',
  '#111111'
];

export const TIERS: TicketTier[] = ['GA', 'VIP', 'Backstage'];

export const TIER_BADGE: Record<TicketTier, string> = {
  GA: 'GA',
  VIP: 'VIP',
  Backstage: 'BSTG'
};

export const MARKS: Record<TicketMark, string> = {
  sparkle: sparkleIcon,
  star: starIcon,
  music: noteIcon,
  moon: moonIcon
};

export const THEME_PREVIEWS: Partial<Record<ThemeKey, string>> = {
  midnight: midnightTheme,
  sunrise: sunriseTheme,
  mono: monoTheme,
  forest: forestTheme
};
