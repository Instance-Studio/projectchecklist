import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

interface Props {
    start: boolean;
}

export default function Confetti({ start }: Props) {
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timeout = null;

        if (start) {
            setIsRunning(true);

            timeout = setTimeout(() => {
                setIsRunning(false);
            }, 20000);
        } else {
            setIsRunning(false);
        }

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
            className="!fixed top-0 left-0 w-full h-full"
            numberOfPieces={100}
        />
    );
}
