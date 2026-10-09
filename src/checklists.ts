import gdpr from './data/gdpr.json';
import payloadcms from './data/payloadcms.json';
import wordpress from './data/wordpress.json';
import type { Data } from './types/data';

export type Checklist = {
    // URL path and localStorage key for saved progress
    slug: string;
    label: string;
    data: Data;
};

// To add a checklist: create a JSON file in src/data and add it here.
export const checklists: Checklist[] = [
    {
        slug: 'wordpress',
        label: 'WordPress',
        data: wordpress,
    },
    {
        slug: 'payloadcms',
        label: 'PayloadCMS',
        data: payloadcms,
    },
    {
        slug: 'gdpr',
        label: 'GDPR',
        data: gdpr,
    },
];
