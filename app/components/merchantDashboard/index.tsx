export default async function MerchantDashboard() {
  return (
    <div>
      <p>Welcome to Merchant dashboard</p>
      <div className="flex justify-center gap-6">
        <button>New</button>
        <button>Active</button>
        <button>Completed</button>
        <button>Canceled</button>
      </div>
    </div>
  );
}