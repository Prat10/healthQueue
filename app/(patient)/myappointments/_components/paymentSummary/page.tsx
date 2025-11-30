export default function PaymentSummary() {
  return (
    <div className="border p-5 rounded-lg bg-white shadow-sm w-full sm:w-1/2 border-none">
      <p className="font-semibold mb-2">Payment Summary</p>

      <div className="text-sm py-6">
        <div className="flex justify-between mb-4">
          <span className="text-md text-gray-600">Total Spent</span>
          <span className="font-bold">₹2,100</span>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-md text-gray-600">This Month</span>
          <span className="font-bold">₹1,400</span>
        </div>

        <div className="flex justify-between">
          <span className="text-md text-gray-600">Platform Savings</span>
          <span className="font-bold">₹350</span>
        </div>
      </div>
    </div>
  );
}
