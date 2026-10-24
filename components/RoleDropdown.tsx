'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import filtersJson from '../app/datavals/filters.json';
import React from "react";

export default function RoleDropdown() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleRoleFilter(
        event: React.ChangeEvent<HTMLSelectElement>
    ) {
        const params = new URLSearchParams(searchParams.toString());
        const roleName = event.target.value;

        if (roleName === 'all') {
            params.delete('role');
        } else {
            params.set('role', roleName);
        }

        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname);
    }

    return (
        <select
            className="glass w-auto"
            value={searchParams.get('role') ?? 'all'}
            onChange={handleRoleFilter}
        >
            <option value="all">All</option>
            {filtersJson.roles.map((role) => (
                <option value={String(role.name)} key={role.id}>
                    {role.name}
                </option>
            ))}
        </select>
    );
}