import MemberCard from '@/components/MemberCard';
import TrainingDropdown from '@/components/TrainingDropdown';
import { createClient } from '@/lib/server';
import { Suspense } from 'react';
import RoleDropdown from "@/components/RoleDropdown";

type PageProps = {
    searchParams: Promise<{
        training?: string;
        role?: string;
    }>;
};

async function MembersData({
                               training,
                               role,
                           }: {
    training?: string;
    role?: string;
}) {
    const supabase = await createClient();

    let query = supabase
        .from('Members')
        .select()
        .order('kerb', { ascending: true });

    if (training) {
        query = query.contains('trainings', [training]);
    }

    if (role) {
        query = query.eq('role', role);
    }

    const { data: members, error } = await query;

    if (error) {
        return <div className="glass mt-3">Could not load members.</div>;
    }

    if (!members?.length) {
        return <div className="glass mt-3">No Members Found</div>;
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
    const { training, role } = await searchParams;

    return (
        <div>
            <div className="glass">
                <Suspense fallback={<span>Loading filter...</span>}>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <h2>Training:</h2>
                            <TrainingDropdown />
                        </div>

                        <div className="flex items-center gap-2">
                            <h2>Role:</h2>
                            <RoleDropdown />
                        </div>
                    </div>
                </Suspense>
            </div>

            <Suspense key={`${training ?? 'all'}-${role ?? 'all'}`} fallback={<div>Loading...</div>}>
                <MembersData training={training} role={role} />
            </Suspense>
        </div>
    );
}