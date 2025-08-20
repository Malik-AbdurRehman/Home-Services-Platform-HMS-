import Link from "next/link";

export default async function AdminDashboard() {
  return(
    <div className="container mx-auto p-4 text-center">
      <p className='text-3xl mb-4'>Admin Dashboard</p>
      <p>Welcome to the admin dashboard. Here you can manage users and other admin tasks.</p>
      <div className='flex justify-center gap-6 mt-4'>
        <button>Manage Merchant Requests</button>
        <Link href="/components/viewUserChoice">View Users</Link>
        <button>View Reviews</button>
      </div>
    </div>
  )
}