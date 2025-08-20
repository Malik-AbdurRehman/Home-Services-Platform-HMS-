import Link from "next/link";

export default async function CustomerDashboard() {
  return (
    <div>
      <p>Welcome to Home Services Platform</p>
      <button>Manage Profile</button>
      <Link href={"/customer/availableServices"}>Available Services</Link>
    </div>
  )
}