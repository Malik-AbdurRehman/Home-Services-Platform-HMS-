// import { handleServiceTypeAction } from "@/app/actions/serviceTypeAction";
export default function AvailableServicesPage() {
  return (
    <div>
        <h1 className="text-3xl mb-4">Available Services</h1>
        <p>Here you can view and request available services.</p>
        {/* <div className='flex justify-center gap-6 mt-4'>
            <form action={handleServiceTypeAction}>
                <input type="hidden" name="serviceType" value="Electrician" />
                <button type="submit">Electrition</button>
            </form>
            <form action={handleServiceTypeAction}>
                <input type="hidden" name="serviceType" value="Plumber" />
                <button type="submit">Plumber</button>
            </form>
            <form action={handleServiceTypeAction}>
                <input type="hidden" name="serviceType" value="Carpenter" />
                <button type="submit">Carpenter</button>
            </form>
            <form action={handleServiceTypeAction}>
                <input type="hidden" name="serviceType" value="Painter" />
                <button type="submit">Painter</button>
            </form>
        </div> */}
    </div>
    );
}