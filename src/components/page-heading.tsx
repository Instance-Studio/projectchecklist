import { Link } from 'react-router';

interface Props {
    title: string;
    completed: number;
    total: number;
    onReset: () => void;
}

export default function PageHeading({
    title,
    completed,
    total,
    onReset,
}: Props) {
    return (
        <>
            <header className="container page-heading">
                <Link className="back-link" to="/" aria-label="All checklists">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        aria-hidden="true"
                    >
                        <path d="M19 12H5m6-6-6 6 6 6" />
                    </svg>
                </Link>
                <div className="heading-row">
                    <h1>{title}</h1>
                    <button
                        className="reset-button"
                        type="button"
                        onClick={onReset}
                    >
                        Reset
                    </button>
                </div>
            </header>
            <div className="container progress">
                <output className="progress-label">
                    <span>
                        {completed} / {total} completed
                    </span>
                    <span>
                        {total ? Math.round((completed / total) * 100) : 0}%
                    </span>
                </output>
                <progress
                    aria-label="Checklist progress"
                    value={completed}
                    max={total || 1}
                />
            </div>
        </>
    );
}
