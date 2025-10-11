import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './routes/home.tsx';
import WordPress from './routes/word-press.tsx';
import PayloadCMS from './routes/payload-cms.tsx';
import './global.css';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/wordpress" element={<WordPress />} />
                <Route path="/payloadcms" element={<PayloadCMS />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
