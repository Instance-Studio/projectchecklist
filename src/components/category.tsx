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
    const renderDescription = (description: string) => {
        // Replace text between backticks with styled code
        return description.split(/`(.*?)`/).map((part, index) =>
            index % 2 === 1 ? (
                <code
                    key={index}
                    className="bg-gray-800 text-gray-100 border border-gray-600 rounded px-2 py-1 font-mono text-sm mx-2 first:ml-0 last:mr-0 inline-block"
                >
                    {part}
                </code>
            ) : (
                part
            ),
        );
    };

    const isInState = (title: string) => {
        return state.some((value) => value === title);
    };

    return (
        <div key={category.name}>
            <h2 className="text-2xl text-center mb-4 mt-12">{category.name}</h2>

            {category.items.map((item) => (
                <label
                    className="p-4 block border-white border-b has-checked:bg-green-800 has-checked:text-white cursor-pointer"
                    key={item.title}
                >
                    <p className="text-lg mb-2">{item.title}</p>
                    <p className="text-sm leading-relaxed">
                        {renderDescription(item.description)}
                    </p>

                    {(item.extra || item.command) && (
                        <details>
                            <summary>Extra Information</summary>
                            {item.extra && (
                                <p className="text-md text-red-400 leading-relaxed mt-2">
                                    {renderDescription(item.extra)}
                                </p>
                            )}

                            {item.command && (
                                <p className="text-xs leading-relaxed mt-2">
                                    {renderDescription(item.command)}
                                </p>
                            )}
                        </details>
                    )}

                    <input
                        onChange={(e) =>
                            onClick?.(item.title, e.currentTarget.checked)
                        }
                        checked={isInState(item.title)}
                        type="checkbox"
                        className="hidden"
                        name={item.title}
                        id={item.title}
                    />
                </label>
            ))}
        </div>
    );
}
