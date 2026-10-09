import { useEffect, useState } from 'react';

export default function CopyCode({ text }: { text: string }) {
    const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

    useEffect(() => {
        if (status === 'idle') return;
        const timeout = window.setTimeout(() => setStatus('idle'), 2000);
        return () => window.clearTimeout(timeout);
    }, [status]);

    async function copy() {
        try {
            await navigator.clipboard.writeText(text);
            setStatus('copied');
        } catch {
            setStatus('error');
        }
    }

    return (
        <span className="code-snippet">
            <code>{text}</code>
            <button
                className="copy-button"
                type="button"
                onClick={copy}
                data-status={status}
                aria-label={`Copy code: ${text}`}
                title={
                    status === 'copied'
                        ? 'Copied'
                        : status === 'error'
                          ? 'Copy failed. Select the text and copy it manually.'
                          : 'Copy to clipboard'
                }
            >
                {status === 'error' ? (
                    'Copy failed'
                ) : (
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        aria-hidden="true"
                    >
                        {status === 'copied' ? (
                            <path d="m5 12 4 4L19 6" />
                        ) : (
                            <>
                                <rect
                                    x="8"
                                    y="8"
                                    width="12"
                                    height="12"
                                    rx="2"
                                />
                                <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                            </>
                        )}
                    </svg>
                )}
            </button>
            <span className="sr-only" aria-live="polite" aria-atomic="true">
                {status === 'copied'
                    ? 'Copied to clipboard.'
                    : status === 'error'
                      ? 'Copy failed. Select the text and copy it manually.'
                      : ''}
            </span>
        </span>
    );
}
