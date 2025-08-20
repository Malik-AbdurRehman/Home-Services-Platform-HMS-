import { db } from "@/lib/db";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MerchantProfilePage({ params }: Props) {
  const { id } = await params; // ⬅️ await params here

  const merchant = await db.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, type: true },
  });

  if (!merchant) {
    return <p className="p-4">Merchant not found.</p>;
  }

  return (
    <div >
      <h1>{merchant.name ?? "Unnamed Merchant"}</h1>
      <p>Email: {merchant.email}</p>
      <p>Service Type: {merchant.type}</p>
      <button>Request Service</button>
    </div>
  );
}
