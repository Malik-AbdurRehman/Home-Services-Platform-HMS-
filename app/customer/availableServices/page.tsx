"use client";

import { useState } from "react";
import Link from "next/link";

type Merchant = {
  id: string;
  name: string | null;
  email: string;
  type: string | null;
};

export default function AvailableServicesPage() {
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [selectedService, setSelectedService] = useState("");

  async function handleServiceClick(serviceType: string) {
    setSelectedService(serviceType);

    const res = await fetch(`/api/merchants?serviceType=${serviceType}`);
    const data = await res.json();
    setMerchants(data);
  }

  return (
    <div>
      <h1>Available Services</h1>
      <p>Here you can view and request available services.</p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button onClick={() => handleServiceClick("Electrician")} className="px-4 py-2">
          Electrician
        </button>
        <button onClick={() => handleServiceClick("Plumber")} className="px-4 py-2">
          Plumber
        </button>
        <button onClick={() => handleServiceClick("Carpenter")} className="px-4 py-2">
          Carpenter
        </button>
        <button onClick={() => handleServiceClick("Painter")} className="px-4 py-2">
          Painter
        </button>
      </div>

      {selectedService && (
        <div>
          <h2>
            Merchants offering {selectedService}:
          </h2>

          {merchants.length > 0 ? (
            <ul>
              {merchants.map((merchant) => (
                <li key={merchant.id}>
                  <Link href={`/merchant/${merchant.id}`} className="block px-2 py-1">
                    {merchant.name ?? "Unnamed"} ({merchant.email})
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No merchants available for this service.</p>
          )}
        </div>
      )}
    </div>
  );
}
