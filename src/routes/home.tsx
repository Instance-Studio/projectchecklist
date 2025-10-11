import { NavLink } from 'react-router';

export default function Home() {
    return (
        <div className="w-full min-h-screen text-white flex items-center justify-center">
            <div className="container py-10">
                <h1 className="mb-8 text-4xl font-bol text-center">
                    Select Project
                </h1>

                <div className="flex gap-10 items-center justify-center">
                    <NavLink
                        className="py-4 px-10 bg-white text-black text-lg"
                        to="wordpress"
                    >
                        WordPress
                    </NavLink>

                    <NavLink
                        className="py-4 px-10 bg-white text-black text-lg"
                        to="payloadcms"
                    >
                        PayloadCMS
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
