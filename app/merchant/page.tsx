import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function MerchantDashboard() {
  // Protect the page from users who are not admins
  const isMerchant = await checkRole('merchant') 
  if (!isMerchant) {
    redirect('/')
  }
  console.log('merchant dashboard accessed by an merchant user')

  return <p>This is the protected merchant dashboard restricted to users with the `merchant` role.</p>
}