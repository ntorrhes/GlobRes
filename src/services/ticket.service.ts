import type { SaveResult, TicketDesign } from '../types/ticket';

import { slugify } from '../utils/ticket';

const LATENCY_MIN = 400;
const LATENCY_MAX = 1200;
const WRITE_FAILURE_RATE = 0.15;

function delay(): Promise<void> {
  const milliseconds =
    LATENCY_MIN + Math.random() * (LATENCY_MAX - LATENCY_MIN);

  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function saveTicketDesign(
  design: TicketDesign
): Promise<SaveResult> {
  await delay();

  if (Math.random() < WRITE_FAILURE_RATE) {
    throw new Error(
      "Couldn't save your ticket. Check your connection and try again."
    );
  }

  const number = Math.floor(1000 + Math.random() * 9000);

  const slug = slugify(design.eventName);

  return {
    id: `TS-${number}`,
    shareUrl: `ticket.studio/t/${slug}-${number}`
  };
}
