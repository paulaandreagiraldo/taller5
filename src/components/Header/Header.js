import React from 'react';

const Header = () => {
    return (

        <header className="bg-blue-600 p-4 shadow-md">
        <nav className="flex space-x-6">
            <a href="/dashboard" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="/team" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
            <a href="/projects" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="/reports" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
        </nav>
    </header>
    );
};

export default Header;
