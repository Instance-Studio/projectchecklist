import { useId } from 'react';
import CopyCode from './copy-code';

interface Props {
    category: {
        name: string;
        items: {
            title: string;
            description: string;
            extra?: string;
            command?: string;
        }[];
    };
    onClick: (name: string, done: boolean) => void;
    state: string[];
}

export default function Category({ category, onClick, state }: Props) {
    const id = useId();
    const renderDescription = (description: string) => {
        // `code` = styled text, ``code`` = styled text with copy button
        return description.split(/(``.+?``|`.+?`)/).map((part, index) => {
            if (index % 2 === 0) return part;
            if (part.startsWith('``'))
                return <CopyCode key={index} text={part.slice(2, -2)} />;
            return (
                <code key={index} className="code-snippet inline-code">
                    {part.slice(1, -1)}
                </code>
            );
        });
    };

    const isInState = (title: string) => {
        return state.some((value) => value === title);
    };

    return (
        <details className="category" open>
            <summary className="category-heading">
                <h2>{category.name}</h2>
                <span className="category-count">
                    {
                        category.items.filter((item) => isInState(item.title))
                            .length
                    }{' '}
                    / {category.items.length} completed
                </span>
            </summary>

            {category.items.map((item, index) => (
                <div className="checklist-item" key={item.title}>
                    <div className="item-label">
                        <input
                            id={`${id}-${index}-check`}
                            onChange={(event) =>
                                onClick(item.title, event.currentTarget.checked)
                            }
                            checked={isInState(item.title)}
                            type="checkbox"
                            className="sr-only"
                            aria-describedby={`${id}-${index}`}
                        />
                        <span>
                            <label
                                className="item-title"
                                htmlFor={`${id}-${index}-check`}
                            >
                                {item.title}
                            </label>
                            <span
                                className="item-description"
                                id={`${id}-${index}`}
                            >
                                {renderDescription(item.description)}
                            </span>
                        </span>
                    </div>

                    {(item.extra || item.command) && (
                        <details>
                            <summary>Extra Information</summary>
                            {item.extra && (
                                <p>{renderDescription(item.extra)}</p>
                            )}

                            {item.command && (
                                <pre>
                                    <CopyCode text={item.command} />
                                </pre>
                            )}
                        </details>
                    )}
                </div>
            ))}
        </details>
    );
}
