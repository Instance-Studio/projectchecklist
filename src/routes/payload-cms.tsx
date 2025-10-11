import { useLocalStorage } from '@uidotdev/usehooks';
import Category from '../components/category';
import PageHeading from '../components/page-heading';
import data from '../data/payloadcms.json';
import Confetti from '../components/confetti';
import { countItems } from '../util/count-items';
import { useMemo } from 'react';

export default function PayloadCMS() {
    const [localState, setLocalState] = useLocalStorage<string[]>(
        'payloadcms',
        [],
    );

    function onClick(name: string, done: boolean) {
        if (done) {
            setLocalState([...localState, name]);
        } else {
            const newState = localState.filter((value) => value !== name);
            setLocalState(newState);
        }
    }

    const itemCount = useMemo(() => countItems(data), []);

    const completed = itemCount === localState.length;

    return (
        <div className="text-white">
            <PageHeading title="PayloadCMS Project" subtitle="Checklist" />

            <div className="container text-center">
                <button
                    className="border-1 border-white py-2 px-4 cursor-pointer hover:bg-white hover:text-black"
                    type="button"
                    onClick={() => setLocalState([])}
                >
                    Reset
                </button>
            </div>

            <div className="container my-12">
                {data.items.map((category) => (
                    <Category
                        state={localState}
                        category={category}
                        key={category.name}
                        onClick={onClick}
                    />
                ))}
            </div>

            <Confetti start={completed} />
        </div>
    );
}
