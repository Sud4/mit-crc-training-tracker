import MemberCard from '@/components/MemberCard';
import TrainingDropdown from '@/components/TrainingDropdown';
import { createClient } from '@/lib/server';
import { Suspense } from 'react';

type PageProps = {
    searchParams: Promise<{ training?: string }>;
};

async function MembersData({ trainingName }: { trainingName?: string }) {
    const supabase = await createClient();

    let query = supabase
        .from('Members')
        .select()
        .order('kerb', { ascending: true });

    if (trainingName && trainingName !== 'all') {
        query = query.contains('trainings', [trainingName]);
    }

    const { data: members, error } = await query;

    if (error) {
        return <div className="glass mt-3">Could not load members.</div>;
    }

    if (!members?.length) {
        return (
            <div className="glass mt-3 flex h-auto items-center justify-center">
                <h2>No Members Found</h2>
            </div>
        );
    }

    return (
        <div>
            {members.map((member) => (
                <MemberCard key={member.kerb} {...member} />
            ))}
        </div>
    );
}

export default async function Page({ searchParams }: PageProps) {
    const { training } = await searchParams;

    return (
        <div>
            <div className="glass">
                <h3 className="justify-self-center">Filter</h3>
                <h2 className="inline">Training: </h2>
                <Suspense fallback={<span>Loading filter...</span>}>
                    <TrainingDropdown />
                </Suspense>
            </div>

            <Suspense
                key={training ?? 'all'}
                fallback={
                    <div className="glass mt-3 flex h-auto items-center justify-center">
                        Loading...
                    </div>
                }
            >
                <MembersData trainingName={training} />
            </Suspense>
        </div>
    );
}
