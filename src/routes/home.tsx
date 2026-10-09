import { NavLink } from 'react-router';
import { checklists } from '../checklists';

export default function Home() {
    return (
        <main className="container home">
            <title>Instance checklist</title>
            <h1 className="home-title">Select a checklist</h1>

            <nav className="project-types" aria-label="Checklists">
                {checklists.map(({ slug, label }) => (
                    <NavLink key={slug} to={slug}>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </main>
    );
}
