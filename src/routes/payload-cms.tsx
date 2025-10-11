import Category from '../components/category';
import PageHeading from '../components/page-heading';
import data from '../data/payloadcms.json';

export default function PayloadCMS() {
    return (
        <div className="text-white">
            <PageHeading title="PayloadCMS Project" subtitle="Checklist" />

            <div className="container my-12">
                {data.items.map((category) => (
                    <Category category={category} key={category.name} />
                ))}
            </div>
        </div>
    );
}
