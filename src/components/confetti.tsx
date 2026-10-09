import { useEffect, useRef, useState } from 'react';
import ReactConfetti from 'react-confetti';

interface Props {
    start: boolean;
}

export default function Confetti({ start }: Props) {
    const [isRunning, setIsRunning] = useState(false);
    const [isEmitting, setIsEmitting] = useState(false);
    const wasComplete = useRef(start);

    useEffect(() => {
        let timeout = null;

        if (
            start &&
            !wasComplete.current &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setIsRunning(true);
            setIsEmitting(true);

            // Stop new pieces; the rest fall out before unmounting
            timeout = setTimeout(() => {
                setIsEmitting(false);
            }, 4000);
        } else {
            setIsRunning(false);
        }
        wasComplete.current = start;

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [start]);

    if (!isRunning) {
        return null;
    }

    return (
        <ReactConfetti
            className="completion-confetti"
            style={{ position: 'fixed' }}
            aria-hidden="true"
            numberOfPieces={100}
            recycle={isEmitting}
            onConfettiComplete={() => setIsRunning(false)}
        />
    );
}
