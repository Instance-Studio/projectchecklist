import { useLocalStorage } from '@uidotdev/usehooks';
import Category from '../components/category';
import PageHeading from '../components/page-heading';
import data from '../data/wordpress.json';

export default function WordPress() {
    const [localState, setLocalState] = useLocalStorage<string[]>(
        'wordpress',
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

    return (
        <div className="text-white">
            <PageHeading title="WordPress Project" subtitle="Checklist" />

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
                        category={category}
                        key={category.name}
                        onClick={onClick}
                        state={localState}
                    />
                ))}
            </div>
        </div>
    );
}
