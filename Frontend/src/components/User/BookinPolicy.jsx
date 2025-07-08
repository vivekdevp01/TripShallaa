import React from "react";

export default function BookingPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-[#333] font-sans">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8 tracking-tight leading-tight">
        Booking Policy & Cancellation Terms
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        Before making the payment, you are agreeing to our <strong>Regular Terms & Conditions</strong> and <strong>Booking Cancellation Terms</strong>.
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-base leading-relaxed">
        <li>Call us at <strong className="text-orange-500">8393928065</strong> and confirm the camp's availability before transferring an advance amount.</li>
        <li>Deposit a minimum of <strong>30% of the total package cost</strong> to reserve your slots (Camp/Tent/Cottage/Tour).</li>
        <li>Advance can be submitted via Paytm, PhonePe, Google Pay, or bank transfer.</li>
        <li>After payment and confirmation, a mail or WhatsApp message will be shared with booking details including camp address, manager contact, payment status, check-in/check-out dates, etc.</li>
        <li>Booking details will also be forwarded to the camp manager.</li>
      </ol>

      <h2 className="text-2xl font-bold text-orange-500 mt-10 mb-4">Child Policy</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Children between <strong>6 to 11 years</strong> are charged 50% of adult rate and must stay with a parent.</li>
        <li>Children below <strong>5 years</strong> can stay with a parent at no extra cost.</li>
      </ul>

      <h2 className="text-2xl font-bold text-orange-500 mt-10 mb-4">Cancellation Terms</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Cancellation terms apply to your <strong>advance booking amount</strong>.</li>
        <li><strong>No refund</strong> for cancellations due to natural calamities.</li>
        <li>More than 15 days prior to arrival: <strong>Full refund minus ₹500</strong> cancellation fee.</li>
        <li>Less than 15 days before arrival: <strong>No refund</strong>.</li>
        <li>Refund (if applicable) will be processed within <strong>7 working days</strong>.</li>
      </ol>

      <h2 className="text-2xl font-bold text-orange-500 mt-10 mb-4">Additional Terms & Highlights</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>No refund if guests choose not to stay for personal reasons. Camps are provided as listed on the website.</li>
        <li>No discounts for early check-in or late check-out.</li>
        <li>No refund if activities are canceled due to weather or natural causes.</li>
        <li>Package cost remains unchanged if group size reduces.</li>
        <li>Booking is not confirmed until <strong>100% payment</strong> is received.</li>
        <li><strong>30% advance</strong> is required to confirm your booking.</li>
        <li>The remaining balance must be paid in <strong>cash at check-in (11:00 AM)</strong>.</li>
        <li>If the balance is not paid by <strong>12:00 PM</strong>, booking is canceled by guest, no refund.</li>
        <li>If a guest refuses to pay full amount at check-in, booking is canceled and <strong>no refund</strong> is issued.</li>
        <li>Guests should thoroughly read all terms and package details on our website or contact us for clarification.</li>
        <li>For any queries regarding booking or package inclusion, contact us via call or email.</li>
      </ol>
    </section>
  );
}
