import { AlertCircle, Check, Loader2 } from 'lucide-react';

import type { SaveResult, SaveState } from '../types/ticket';

import '../styles/styles.scss';

interface SaveFooterProps {
  saveState: SaveState;
  saveError: string;
  saveResult: SaveResult | null;
  copied: boolean;

  onSave: () => void;
  onCopy: () => void;
}

export function SaveFooter({
  saveState,
  saveError,
  saveResult,
  copied,
  onSave,
  onCopy
}: SaveFooterProps) {
  const isSaving = saveState === 'saving';

  const isSuccess = saveState === 'success';

  return (
    <div className="save-footer">
      {saveState === 'error' && (
        <div
          className="save-footer__message save-footer__message--error"
          role="alert"
        >
          <AlertCircle size={16} />

          <span>{saveError}</span>
        </div>
      )}

      {isSuccess && saveResult && (
        <div className="save-footer__success">
          <div className="save-footer__message save-footer__message--success">
            <Check size={16} />

            <span>Saved. Your ticket is live.</span>
          </div>

          <div className="save-footer__share">
            <span className="save-footer__url">{saveResult.shareUrl}</span>

            <button
              type="button"
              onClick={onCopy}
              className="save-footer__copy"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onSave}
        disabled={isSaving || isSuccess}
        className={`save-footer__button ${
          isSuccess ? 'save-footer__button--saved' : ''
        }`}
      >
        {isSaving && <Loader2 size={16} className="save-footer__loader" />}

        {isSuccess && <Check size={16} />}

        {saveState === 'saving'
          ? 'Saving…'
          : saveState === 'error'
            ? 'Try again'
            : saveState === 'success'
              ? 'Saved'
              : 'Save ticket'}
      </button>

      {saveState === 'idle' && <p className="save-footer__status"></p>}

      {saveState === 'saving' && (
        <p className="save-footer__status">button disabled · in-progress</p>
      )}
    </div>
  );
}
