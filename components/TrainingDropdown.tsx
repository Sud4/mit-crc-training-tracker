'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import trainingsJson from '../app/datavals/filters.json';
import React from "react";

export default function TrainingDropdown() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleTrainingFilter(
        event: React.ChangeEvent<HTMLSelectElement>
    ) {
        const params = new URLSearchParams(searchParams.toString());
        const trainingName = event.target.value;

        if (trainingName === 'all') {
            params.delete('training');
        } else {
            params.set('training', trainingName);
        }

        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname);
    }

    return (
        <select
            className="glass w-auto"
            value={searchParams.get('training') ?? 'all'}
            onChange={handleTrainingFilter}
        >
            <option value="all">All</option>
            {trainingsJson.trainings.map((training) => (
                <option value={String(training.name)} key={training.id}>
                    {training.name}
                </option>
            ))}
        </select>
    );
}
