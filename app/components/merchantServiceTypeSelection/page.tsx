"use client";
import { setMerchantService } from "@/app/actions/setMerchantService";
export default function MerchantServiceTypeSelection() {
  async function handleClick(serviceType: string) {
    await setMerchantService(serviceType);
    window.location.href = "/dashboard";
  }

  return (
    <div>
      <p className="text-xl font-bold mb-4">Select your Service Type</p>
      <div className="flex justify-center gap-6 mt-4">
        <button
          onClick={() => handleClick("Electrician")}
          className="px-4 py-2 "
        >
          Electrician
        </button>
        <button
          onClick={() => handleClick("Plumber")}
          className="px-4 py-2 "
        >
          Plumber
        </button>
        <button
          onClick={() => handleClick("Carpenter")}
          className="px-4 py-2 "
        >
          Carpenter
        </button>
        <button
          onClick={() => handleClick("Painter")}
          className="px-4 py-2"
        >
          Painter
        </button>
      </div>
    </div>
  );
}
