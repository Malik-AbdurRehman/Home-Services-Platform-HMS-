import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function CustomerDashboard() {
  const isCustomer = await checkRole('customer') 
  if (!isCustomer) {
    redirect('/')
  }
  console.log('Customer dashboard accessed by an Customer user')

  return <p>This is the protected Customer dashboard restricted to users with the `Customer` role.</p>
}