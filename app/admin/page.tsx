import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  // Protect the page from users who are not admins
  const isAdmin = await checkRole('admin') 
  if (!isAdmin) {
    redirect('/')
  }
  console.log('Admin dashboard accessed by an admin user')

  return(
    <div className="container mx-auto p-4 text-center">
      <p className='text-3xl mb-4'>Admin Dashboard</p>
      <p>Welcome to the admin dashboard. Here you can manage users and other admin tasks.</p>
      <div className='flex justify-center gap-6 mt-4'>
        <button>Manage Merchant Requests</button>
        <button>View Users</button>
        <button>View Reviews</button>
      </div>
    </div>
  )
}