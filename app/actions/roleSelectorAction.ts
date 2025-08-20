'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

export const handleSubmitAction = async (formData: FormData) => {
  const { userId } = await auth();
  if (!userId) throw new Error('User not authenticated');

  const role = formData.get('role-select') as string;

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { role },
  });

  await db.user.upsert({
    where: { clerkUserId: userId },
    update: { role },
    create: {
      clerkUserId: userId,
      role,
      email: (await client.users.getUser(userId)).emailAddresses[0]?.emailAddress || '',
      type: 'N/A',
    }
    })
    redirect('/dashboard');
};
