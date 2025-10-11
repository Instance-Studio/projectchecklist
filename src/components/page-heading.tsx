interface Props {
    title: string;
    subtitle: string;
}

export default function PageHeading({ title, subtitle }: Props) {
    return (
        <div className="container py-8">
            <h1 className="text-4xl leading-relaxed  text-center">{title}</h1>
            <h2 className="text-2xl text-center">{subtitle}</h2>
        </div>
    );
}
