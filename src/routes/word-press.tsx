import Category from '../components/category';
import PageHeading from '../components/page-heading';
import data from '../data/wordpress.json';

export default function WordPress() {
    return (
        <div className="text-white">
            <PageHeading title="WordPress Project" subtitle="Checklist" />

            <div className="container my-12">
                {data.items.map((category) => (
                    <Category category={category} key={category.name} />
                ))}
            </div>
        </div>
    );
}
