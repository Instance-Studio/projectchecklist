import { useLocalStorage } from '@uidotdev/usehooks';
import { useState } from 'react';
import type { Checklist as ChecklistConfig } from '../checklists';
import Category from '../components/category';
import Confetti from '../components/confetti';
import PageHeading from '../components/page-heading';

export default function Checklist({ slug, label, data }: ChecklistConfig) {
    const [localState, setLocalState] = useLocalStorage<string[]>(slug, []);
    // Changing the key remounts the list, so every category opens again
    const [resetCount, setResetCount] = useState(0);

    function onClick(name: string, done: boolean) {
        if (done) {
            setLocalState([...localState, name]);
        } else {
            const newState = localState.filter((value) => value !== name);
            setLocalState(newState);
        }
    }

    const items = data.items.flatMap((category) => category.items);
    const total = items.length;
    const completed = items.filter((item) =>
        localState.includes(item.title),
    ).length;

    return (
        <main>
            <title>{`${label} — Instance checklist`}</title>
            <PageHeading
                title={label}
                completed={completed}
                total={total}
                onReset={() => {
                    setLocalState([]);
                    setResetCount((count) => count + 1);
                }}
            />

            <div className="container checklist-list" key={resetCount}>
                {data.items.map((category) => (
                    <Category
                        state={localState}
                        category={category}
                        key={category.name}
                        onClick={onClick}
                    />
                ))}
            </div>

            <Confetti start={completed === total} />
        </main>
    );
}
