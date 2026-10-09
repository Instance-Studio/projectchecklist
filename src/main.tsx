import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import logo from './assets/instance-logo.svg';
import { checklists } from './checklists.ts';
import Checklist from './routes/checklist.tsx';
import Home from './routes/home.tsx';
import './global.css';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <BrowserRouter>
            <header className="site-header">
                <Link to="/" className="site-logo">
                    <img src={logo} alt="Instance" width={92} height={19} />
                    <span>checklist</span>
                </Link>
            </header>
            <Routes>
                <Route index element={<Home />} />
                {checklists.map((checklist) => (
                    <Route
                        key={checklist.slug}
                        path={`/${checklist.slug}`}
                        element={
                            <Checklist key={checklist.slug} {...checklist} />
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
