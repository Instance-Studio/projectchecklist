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
