// import React, { useState } from "react";
// import { Link } from "react-router";


// const faqs = [
//   {
//     question: "What is the minimum order quantity?",
//     answer:
//       "Our minimum order quantity is 25 litres, and we supply from 25 litres up to bulk quantities with no upper limit.",
//   },
//   {
//     question: "How quickly will I get a response?",
//     answer:
//       "We reply to enquiries by email or WhatsApp, usually the same working day. Once a grade is confirmed, typical time from enquiry to dispatch is about a week.",
//   },
//   {
//     question: "Can you match the resin I currently run?",
//     answer:
//       "Yes. Send the grade and operating conditions you run today and we will confirm the matching Toyota grade and attach its technical data sheet.",
//   },
//   {
//     question: "Do you provide a technical data sheet?",
//     answer:
//       "Yes. Every grade is supplied with a technical data sheet covering bead size, total exchange capacity, sieve analysis and operating limits.",
//   },
//   {
//     question: "Do you deliver, or do I collect from the plant?",
//     answer:
//       "Both. We deliver to your plant, or you can collect from the factory at GIDC Vapi — whichever suits you.",
//   },
//   {
//     question: "Which areas do you serve?",
//     answer:
//       "Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat, and we supply to plants across India.",
//   },
// ];

// const resinOptions = [
//   "Cation Exchange Resin",
//   "Anion Exchange Resin",
//   "Mixed Bed Resin",
//   "Water Softener Resin",
//   "DM Plant Resin",
//   "Not sure — please advise",
// ];

// function SectionLabel({ children, light = false }) {
//   return (
//     <div
//       className={`mb-3 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
//         light ? "text-[#DF9B42]" : "text-[#B27B34]"
//       }`}
//     >
//       <span
//         className={`h-px w-8 ${
//           light ? "bg-[#DF9B42]" : "bg-[#B27B34]"
//         }`}
//       />
//       <span>{children}</span>
//     </div>
//   );
// }

// function Arrow() {
//   return <span className="text-[#DF9B42]">→</span>;
// }

// function ContactInfoCard({
//   number,
//   label,
//   title,
//   children,
//   accent = false,
// }) {
//   return (
//     <div
//       className={`group relative border p-6 transition-all duration-300 hover:-translate-y-1 ${
//         accent
//           ? "border-[#B27B34] bg-[#061729] text-white"
//           : "border-[#DAE7F1] bg-white"
//       }`}
//     >
//       <div className="mb-6 flex items-center justify-between">
//         <div
//           className={`font-mono text-[10px] tracking-[0.18em] ${
//             accent ? "text-[#DF9B42]" : "text-[#B27B34]"
//           }`}
//         >
//           {number} / {label}
//         </div>

//         <div
//           className={`flex h-8 w-8 items-center justify-center border ${
//             accent
//               ? "border-[#49677F] text-[#DF9B42]"
//               : "border-[#DAE7F1] text-[#B27B34]"
//           }`}
//         >
//           <span className="text-lg">+</span>
//         </div>
//       </div>

//       <h3
//         className={`mb-3 font-serif text-2xl font-semibold ${
//           accent ? "text-white" : "text-[#0A2C4B]"
//         }`}
//       >
//         {title}
//       </h3>

//       <div
//         className={`text-sm leading-7 ${
//           accent ? "text-[#B8C9D8]" : "text-[#52667D]"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// function DetailBlock({ title, children }) {
//   return (
//     <div className="border-l-2 border-[#B27B34] bg-white p-6">
//       <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#0A2C4B]">
//         {title}
//       </h3>

//       <div className="text-sm leading-7 text-[#52667D]">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Contact() {
//   const [formSent, setFormSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSent(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#F6F9FC] text-[#1B2740]">

//       {/* =====================================================
//           STYLES
//       ====================================================== */}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           margin: 0;
//           font-family: "Plus Jakarta Sans", sans-serif;
//         }

//         .font-display {
//           font-family: "EB Garamond", serif;
//         }

//         .font-tech {
//           font-family: "JetBrains Mono", monospace;
//         }

//         .blueprint-grid {
//           background-color: #F6F9FC;
//           background-image:
//             linear-gradient(rgba(24,104,168,.055) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(24,104,168,.055) 1px, transparent 1px);
//           background-size: 28px 28px;
//         }

//         .technical-lines {
//           background-color: #061729;
//           background-image:
//             linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
//           background-size: 30px 30px;
//         }

//         .marquee-track {
//           animation: marquee 38s linear infinite;
//         }

//         .marquee-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .marquee-track {
//             animation: none;
//           }
//         }
//       `}</style>


//       {/* =====================================================
//           HERO
//           HEADER REMOVED
//       ====================================================== */}

//       <main>

//         <section className="blueprint-grid border-b border-[#DAE7F1]">
//           <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">

//             {/* Breadcrumb */}
//             <div className="mb-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#71849A]">
//               <Link to="/" className="hover:text-[#B27B34]">
//                 Home
//               </Link>

//               <span>/</span>

//               <span className="text-[#0A2C4B]">
//                 Contact Us
//               </span>
//             </div>


//             <div className="grid items-center gap-10 lg:grid-cols-7 xl:gap-14">

//               {/* LEFT */}
//               <div className="lg:col-span-4">

//                 <SectionLabel>
//                   Contact // Toyota Chemical Industries
//                 </SectionLabel>

//                 <h1 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-[#0A2C4B] sm:text-5xl lg:text-[64px]">
//                   Contact Ion Exchange Resin{" "}
//                   <span className="font-display italic font-medium text-[#1868A8]">
//                     Manufacturers.
//                   </span>
//                 </h1>

//                 <p className="mt-7 max-w-2xl text-sm leading-7 text-[#52667D] sm:text-base">
//                   Have questions about our products or need technical
//                   assistance? Our team is here to help you find the right ion
//                   exchange resin for your plant. Send us the grade and
//                   operating conditions you run today, and we will confirm the
//                   matching Toyota grade — usually the same working day.
//                 </p>

//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">

//                   <a
//                     href="#enquiry"
//                     className="inline-flex items-center justify-center gap-3 bg-[#061729] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1868A8]"
//                   >
//                     Send An Enquiry
//                     <Arrow />
//                   </a>

//                   <a
//                     href="tel:+912602432021"
//                     className="inline-flex items-center justify-center gap-3 border border-[#B27B34] bg-white px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                   >
//                     Call +91 260 2432021
//                   </a>

//                 </div>

//               </div>


//               {/* RIGHT IMAGE */}
//               <div className="lg:col-span-3">

//                 <div className="relative border border-[#B7CBDD] bg-white p-2 shadow-[0_18px_50px_rgba(6,42,94,.10)]">

//                   <div className="relative aspect-[4/3] overflow-hidden bg-[#0A2C4B]">

//                     <img
//                       src="/images/contact-factory.jpg"
//                       alt="Toyota Chemical Industries factory"
//                       className="h-full w-full object-cover"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A2C4B] via-[#1868A8] to-[#061729]">

//                       <div className="text-center">
//                         <div className="font-mono text-[10px] tracking-[0.2em] text-[#DF9B42]">
//                           IMAGE PLACEHOLDER
//                         </div>

//                         <div className="mt-2 font-display text-2xl italic text-white">
//                           Toyota Chemical Industries
//                         </div>

//                         <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[#B8C9D8]">
//                           GIDC Vapi // Gujarat
//                         </div>
//                       </div>

//                     </div>

//                     <div className="absolute left-4 top-4 bg-[#061729]/90 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#DF9B42]">
//                       Direct // Factory Support
//                     </div>

//                     <div className="absolute bottom-4 left-4 right-4 flex justify-between border-t border-white/20 pt-3 font-mono text-[8px] uppercase tracking-[0.12em] text-white">
//                       <span>Toyota Chemical Industries</span>
//                       <span>Vapi // Gujarat</span>
//                     </div>

//                   </div>
//                 </div>

//               </div>

//             </div>


//             {/* STATS */}
//             <div className="mt-10 grid border border-[#DAE7F1] bg-white sm:grid-cols-2 lg:grid-cols-4">

//               {[
//                 ["Heritage", "Since 1972"],
//                 ["Expertise", "Ion Exchange"],
//                 ["Location", "Vapi, Gujarat"],
//                 ["Response", "Direct Support"],
//               ].map(([label, value], index) => (

//                 <div
//                   key={label}
//                   className={`px-6 py-5 ${
//                     index !== 0
//                       ? "border-t sm:border-l sm:border-t-0 lg:border-l"
//                       : ""
//                   } border-[#DAE7F1]`}
//                 >

//                   <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
//                     {label}
//                   </div>

//                   <div className="mt-2 font-display text-xl font-semibold text-[#0A2C4B]">
//                     {value}
//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>
//         </section>


//         {/* =====================================================
//             CONTACT CHANNELS
//         ====================================================== */}

//         <section className="bg-white">

//           <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

//             <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

//               <div>

//                 <SectionLabel>
//                   Contact Channels // Direct Support
//                 </SectionLabel>

//                 <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
//                   Talk directly with our team.
//                 </h2>

//               </div>

//               <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#7B8DA1]">
//                 Sales · Technical · Application · Supply
//               </div>

//             </div>


//             <div className="grid gap-5 md:grid-cols-3">

//               <ContactInfoCard
//                 number="01"
//                 label="Sales"
//                 title="Sales Enquiries"
//               >

//                 <p>
//                   For product enquiries, quotations, grade selection and
//                   commercial requirements.
//                 </p>

//                 <a
//                   href="mailto:info@toyotachemicals.co.in"
//                   className="mt-4 block font-mono text-[11px] font-bold text-[#1868A8]"
//                 >
//                   info@toyotachemicals.co.in
//                 </a>

//                 <a
//                   href="mailto:info@toyotachemicals.co.in"
//                   className="mt-4 inline-flex bg-[#061729] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white"
//                 >
//                   Email Sales →
//                 </a>

//               </ContactInfoCard>


//               <ContactInfoCard
//                 number="02"
//                 label="Technical"
//                 title="Technical Support"
//                 accent
//               >

//                 <p>
//                   Share your feedwater analysis, current resin specification
//                   or plant requirements with our technical team.
//                 </p>

//                 <div className="mt-4 font-mono text-[10px] font-bold text-[#DF9B42]">
//                   APPLICATION SUPPORT
//                 </div>

//                 <a
//                   href="#enquiry"
//                   className="mt-4 inline-flex border border-[#536F85] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white"
//                 >
//                   Discuss Your Application →
//                 </a>

//               </ContactInfoCard>


//               <ContactInfoCard
//                 number="03"
//                 label="Phone"
//                 title="Call Our Team"
//               >

//                 <p>
//                   Speak directly with our team for urgent requirements,
//                   product information or order assistance.
//                 </p>

//                 <a
//                   href="tel:+912602432021"
//                   className="mt-4 block font-mono text-[11px] font-bold text-[#1868A8]"
//                 >
//                   +91 260 2432021
//                 </a>

//                 <a
//                   href="tel:+912602432021"
//                   className="mt-4 inline-flex bg-[#061729] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white"
//                 >
//                   Call Now →
//                 </a>

//               </ContactInfoCard>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             ENQUIRY
//         ====================================================== */}

//         <section
//           id="enquiry"
//           className="blueprint-grid border-y border-[#DAE7F1]"
//         >

//           <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

//             <div className="grid gap-8 lg:grid-cols-7">

//               {/* FORM */}

//               <div className="lg:col-span-4">

//                 <SectionLabel>
//                   Send An Enquiry // Get In Touch
//                 </SectionLabel>

//                 <h2 className="font-display text-4xl font-semibold leading-tight text-[#0A2C4B] sm:text-5xl">
//                   Tell us what you need.
//                 </h2>

//                 <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52667D]">
//                   Complete the form below and provide as much application
//                   information as possible. This helps our team understand your
//                   requirement and respond more effectively.
//                 </p>


//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-8 border border-[#DAE7F1] bg-white p-5 shadow-[0_14px_40px_rgba(6,42,94,.06)] sm:p-7"
//                 >

//                   <div className="grid gap-5 sm:grid-cols-2">

//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                       >
//                         Name *
//                       </label>

//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         placeholder="Your name"
//                         className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
//                       />
//                     </div>


//                     <div>
//                       <label
//                         htmlFor="company"
//                         className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                       >
//                         Company
//                       </label>

//                       <input
//                         id="company"
//                         name="company"
//                         type="text"
//                         placeholder="Company name"
//                         className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
//                       />
//                     </div>


//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                       >
//                         Email *
//                       </label>

//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         placeholder="you@company.com"
//                         className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
//                       />
//                     </div>


//                     <div>
//                       <label
//                         htmlFor="phone"
//                         className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                       >
//                         Phone / WhatsApp *
//                       </label>

//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         required
//                         placeholder="+91"
//                         className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
//                       />
//                     </div>


//                     <div>
//                       <label
//                         htmlFor="product"
//                         className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                       >
//                         Resin Of Interest
//                       </label>

//                       <select
//                         id="product"
//                         name="product"
//                         defaultValue=""
//                         className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
//                       >

//                         <option value="">
//                           Select a category
//                         </option>

//                         {resinOptions.map((option) => (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         ))}

//                       </select>
//                     </div>


//                     <div>
//                       <label
//                         htmlFor="location"
//                         className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                       >
//                         Plant Location
//                       </label>

//                       <input
//                         id="location"
//                         name="location"
//                         type="text"
//                         placeholder="City / GIDC estate"
//                         className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
//                       />
//                     </div>

//                   </div>


//                   <div className="mt-5">

//                     <label
//                       htmlFor="message"
//                       className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
//                     >
//                       Grade & Operating Conditions *
//                     </label>

//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={6}
//                       placeholder="Tell us the grade you currently run and your operating conditions (flow, capacity, application)."
//                       className="w-full resize-y border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm leading-6 outline-none focus:border-[#B27B34]"
//                     />

//                   </div>


//                   <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#71849A]">

//                     <input
//                       type="checkbox"
//                       required
//                       name="consent"
//                       className="mt-1 accent-[#B27B34]"
//                     />

//                     <span>
//                       I agree to be contacted about this enquiry. See our{" "}
//                       <Link
//                         to="/privacy-policy"
//                         className="font-semibold text-[#1868A8] underline"
//                       >
//                         Privacy Policy
//                       </Link>
//                       .
//                     </span>

//                   </label>


//                   <button
//                     type="submit"
//                     className="mt-6 flex w-full items-center justify-center gap-3 bg-[#061729] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#B27B34]"
//                   >
//                     {formSent
//                       ? "Enquiry Ready ✓"
//                       : "Send Enquiry →"}
//                   </button>


//                   {formSent && (
//                     <div className="mt-4 border border-[#B27B34] bg-[#FFF9F0] px-4 py-3 font-mono text-[9px] uppercase tracking-wider text-[#7A5627]">
//                       Form UI is ready. Connect the submit handler to your
//                       backend or email service.
//                     </div>
//                   )}

//                 </form>

//               </div>


//               {/* DETAILS */}

//               <div className="lg:col-span-3">

//                 <div className="space-y-4">

//                   <div className="border border-[#DAE7F1] bg-white p-6">

//                     <SectionLabel>
//                       Company Information
//                     </SectionLabel>

//                     <h3 className="font-display text-3xl font-semibold text-[#0A2C4B]">
//                       Toyota Chemical Industries
//                     </h3>

//                     <p className="mt-3 text-sm leading-7 text-[#52667D]">
//                       Toyota Chemical Industries Pvt. Ltd. contact information,
//                       factory location, marketing office and direct enquiry
//                       channels.
//                     </p>

//                   </div>


//                   <DetailBlock title="Factory">

//                     <strong className="text-[#0A2C4B]">
//                       Toyota Chemical Industries Pvt. Ltd.
//                     </strong>

//                     <br />

//                     Plot No. 100, Vapi–Silvassa Road,
//                     <br />
//                     GIDC Vapi, Gujarat 396195, India
//                     <br />

//                     <a
//                       href="tel:+912602432021"
//                       className="font-mono text-xs font-bold text-[#1868A8]"
//                     >
//                       +91 260 2432021
//                     </a>

//                     <br />

//                     <a
//                       href="mailto:info@toyotachemicals.co.in"
//                       className="font-mono text-xs font-bold text-[#1868A8]"
//                     >
//                       info@toyotachemicals.co.in
//                     </a>

//                   </DetailBlock>


//                   <DetailBlock title="Marketing Office">

//                     Extn 1.2, Sidhpura Co-Op Ind. Estate,
//                     Gaiwadi,
//                     <br />
//                     S.V. Road, Goregaon (W),
//                     Mumbai 400 104
//                     <br />

//                     <a
//                       href="tel:+912249678234"
//                       className="font-mono text-xs font-bold text-[#1868A8]"
//                     >
//                       022-4967 8234
//                     </a>

//                     <br />

//                     <a
//                       href="mailto:mumbai@toyotachemicals.co.in"
//                       className="font-mono text-xs font-bold text-[#1868A8]"
//                     >
//                       mumbai@toyotachemicals.co.in
//                     </a>

//                   </DetailBlock>


//                   <DetailBlock title="Business Hours">

//                     <strong className="text-[#0A2C4B]">
//                       Monday – Saturday
//                     </strong>

//                     <br />

//                     9:30 AM – 6:30 PM IST

//                     <br />

//                     <strong className="text-[#0A2C4B]">
//                       Sunday
//                     </strong>{" "}
//                     · Closed

//                   </DetailBlock>


//                   <DetailBlock title="Service Area">

//                     Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat —
//                     and supply across India.

//                   </DetailBlock>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             MAP
//         ====================================================== */}

//         <section className="bg-[#EEF4F9]">

//           <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

//             <div className="mb-8">

//               <SectionLabel>
//                 Factory Location // GIDC Vapi
//               </SectionLabel>

//               <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
//                 Find us in Vapi, Gujarat.
//               </h2>

//               <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52667D]">
//                 Toyota Chemical Industries Pvt. Ltd. factory is located at
//                 Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195,
//                 India.
//               </p>

//             </div>


//             <div className="relative overflow-hidden border border-[#B7CBDD] bg-white p-2">

//               <iframe
//                 title="Toyota Chemical Industries GIDC Vapi"
//                 src="https://maps.google.com/maps?q=20.3594162,72.9252245&z=14&output=embed"
//                 loading="lazy"
//                 className="h-[380px] w-full border-0 sm:h-[460px]"
//               />

//               <div className="pointer-events-none absolute left-6 top-6 bg-[#061729]/95 px-4 py-3">

//                 <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#DF9B42]">
//                   GIDC VAPI
//                 </div>

//                 <div className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white">
//                   Gujarat // India
//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             TECHNICAL CTA
//         ====================================================== */}

//         <section className="technical-lines relative overflow-hidden">

//           <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

//             <div className="grid gap-10 lg:grid-cols-7 lg:items-center">

//               <div className="lg:col-span-4">

//                 <SectionLabel light>
//                   Technical Consultation // Application Support
//                 </SectionLabel>

//                 <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
//                   Have a resin problem to{" "}
//                   <span className="italic text-[#DF9B42]">
//                     solve?
//                   </span>
//                 </h2>

//                 <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B8C9D8]">
//                   Send us the operating conditions you are working with. Our
//                   technical team can help evaluate resin type, ionic form,
//                   capacity and application suitability.
//                 </p>

//               </div>


//               <div className="lg:col-span-3">

//                 <div className="border border-[#49677F] bg-[#061729]/80 p-6">

//                   <div className="border-b border-[#49677F] pb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white">
//                     Application Support
//                   </div>

//                   {[
//                     ["Grade Selection", "Support"],
//                     ["Grade Matching", "Available"],
//                     ["TDS / COA", "Available"],
//                     ["Bulk Requirements", "Direct"],
//                   ].map(([name, value]) => (

//                     <div
//                       key={name}
//                       className="flex items-center justify-between border-b border-[#304B61] py-4 last:border-b-0"
//                     >

//                       <span className="font-mono text-[9px] text-[#B8C9D8]">
//                         {name}
//                       </span>

//                       <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#DF9B42]">
//                         {value}
//                       </span>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             FAQ
//         ====================================================== */}

//         <section id="faq" className="bg-white">

//           <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-20">

//             <div className="text-center">

//               <SectionLabel>
//                 FAQ // Contact Support
//               </SectionLabel>

//               <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
//                 Frequently Asked Questions
//               </h2>

//               <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#71849A]">
//                 Quick answers to common questions about enquiries, resin
//                 matching, minimum order quantity, technical data and delivery.
//               </p>

//             </div>


//             <div className="mx-auto mt-10 max-w-4xl">

//               {faqs.map((faq, index) => (

//                 <details
//                   key={faq.question}
//                   open={index === 0}
//                   className="group border-b border-[#DAE7F1] py-5"
//                 >

//                   <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-semibold text-[#0A2C4B]">

//                     <span>{faq.question}</span>

//                     <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#DAE7F1] font-mono text-sm text-[#B27B34] transition group-open:rotate-45">
//                       +
//                     </span>

//                   </summary>

//                   <p className="max-w-3xl pt-4 text-sm leading-7 text-[#64778D]">
//                     {faq.answer}
//                   </p>

//                 </details>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             CUSTOMERS
//         ====================================================== */}

//         


//         {/* =====================================================
//             FINAL CTA
//         ====================================================== */}

//         <section className="technical-lines relative overflow-hidden border-t border-[#173D5A]">

//           <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">

//             <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

//               <div>

//                 <SectionLabel light>
//                   Start A Conversation // Direct Support
//                 </SectionLabel>

//                 <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
//                   Ready to discuss your requirement?
//                 </h2>

//                 <p className="mt-2 max-w-2xl text-sm text-[#B8C9D8]">
//                   Contact our team for resin selection, technical guidance,
//                   quotations and industrial supply requirements.
//                 </p>

//               </div>


//               <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

//                 <a
//                   href="mailto:info@toyotachemicals.co.in"
//                   className="bg-[#B27B34] px-8 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white"
//                 >
//                   Email Us
//                 </a>

//                 <a
//                   href="tel:+912602432021"
//                   className="border border-[#6A8499] px-8 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white"
//                 >
//                   Call Us
//                 </a>

//               </div>

//             </div>

//           </div>

//         </section>

//       </main>

//       {/* FOOTER REMOVED */}

//     </div>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router";
import contactQualityLabGenerated from "../../assets/images/generated/contact-quality-lab-generated.png";
 function SectionLabel({ children, light = false }) {
   return (
     <div
       className={`mb-3 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
         light ? "text-[#DF9B42]" : "text-[#B27B34]"
       }`}
     >
       <span
         className={`h-px w-8 ${
           light ? "bg-[#DF9B42]" : "bg-[#B27B34]"
         }`}
       />
       <span>{children}</span>
     </div>
   );
 }

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you. Your technical resin enquiry has been registered. A Toyota Chemical engineer will connect shortly.");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

        /* EXACT COLORS FROM THE ORIGINAL HTML TAILWIND CONFIG */
        .bg-brand-navy { background-color:#0A2C4B !important; }
        .bg-brand-dark { background-color:#051826 !important; }
        .bg-brand-deep { background-color:#03101B !important; }
        .bg-brand-blue { background-color:#1868A8 !important; }
        .bg-brand-lightBlue { background-color:#EFF6FC !important; }
        .bg-brand-gold { background-color:#B27B34 !important; }
        .bg-brand-goldBorder { background-color:#D8B17A !important; }
        .bg-brand-ice { background-color:#F7FAFD !important; }
        .text-brand-navy { color:#0A2C4B !important; }
        .text-brand-dark { color:#051826 !important; }
        .text-brand-blue { color:#1868A8 !important; }
        .text-brand-accent { color:#4A9BD1 !important; }
        .text-brand-gold { color:#B27B34 !important; }
        .text-brand-goldLight { color:#F4E7D2 !important; }
        .border-brand-navy { border-color:#0A2C4B !important; }
        .border-brand-blue { border-color:#1868A8 !important; }
        .border-brand-blueprint { border-color:#DAE7F1 !important; }
        .border-brand-borderDark { border-color:#1E3E5B !important; }
        .border-brand-gold { border-color:#B27B34 !important; }
        .bg-brand-navy\/95 { background-color:rgba(10,44,75,.95) !important; }
        .bg-brand-dark\/90 { background-color:rgba(5,24,38,.90) !important; }
        .bg-brand-dark\/95 { background-color:rgba(5,24,38,.95) !important; }
        .bg-brand-ice\/40 { background-color:rgba(247,250,253,.40) !important; }
        .bg-brand-ice\/60 { background-color:rgba(247,250,253,.60) !important; }
        .border-brand-blueprint\/40 { border-color:rgba(218,231,241,.40) !important; }
        .border-brand-blueprint\/50 { border-color:rgba(218,231,241,.50) !important; }
        .border-brand-blueprint\/60 { border-color:rgba(218,231,241,.60) !important; }
        .border-brand-blueprint\/80 { border-color:rgba(218,231,241,.80) !important; }
        .border-brand-gold\/30 { border-color:rgba(178,123,52,.30) !important; }
        .border-brand-gold\/40 { border-color:rgba(178,123,52,.40) !important; }
        .border-brand-gold\/50 { border-color:rgba(178,123,52,.50) !important; }
        .border-brand-gold\/60 { border-color:rgba(178,123,52,.60) !important; }
        .from-brand-dark\/80 { --tw-gradient-from:rgba(5,24,38,.8) var(--tw-gradient-from-position); --tw-gradient-to:rgba(5,24,38,0) var(--tw-gradient-to-position); }
        .ring-brand-blue { --tw-ring-color:#1868A8 !important; }
        .font-serif { font-family:'EB Garamond',serif !important; }
        .font-sans { font-family:'Inter',sans-serif !important; }
        .font-mono { font-family:'IBM Plex Mono',monospace !important; }
        .shadow-industrial { box-shadow:0 4px 20px -2px rgba(10,44,75,.08) !important; }
        .shadow-hover-gold { box-shadow:0 8px 30px -4px rgba(178,123,52,.18) !important; }
        .shadow-active-navy { box-shadow:0 10px 35px -5px rgba(10,44,75,.25) !important; }

        .corner-brackets { position: relative; }
        .corner-brackets::before, .corner-brackets::after {
          content: ''; position: absolute; width: 9px; height: 9px; pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .corner-brackets::before { top: -1px; left: -1px; border-top: 2px solid #B27B34; border-left: 2px solid #B27B34; }
        .corner-brackets::after { bottom: -1px; right: -1px; border-bottom: 2px solid #B27B34; border-right: 2px solid #B27B34; }
        .corner-brackets:hover::before { width: 14px; height: 14px; }
        .corner-brackets:hover::after { width: 14px; height: 14px; }
        .chamfer-card { clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
        .chamfer-tag { clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%); }
        .blueprint-grid-bg { background-size: 32px 32px; background-image: linear-gradient(to right, rgba(218,231,241,.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(218,231,241,.45) 1px, transparent 1px); }
        .blueprint-dashed { background-image: linear-gradient(to right, #B27B34 40%, rgba(255,255,255,0) 0%); background-position: top; background-size: 8px 1px; background-repeat: repeat-x; }
        .card-transition { transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s cubic-bezier(.16,1,.3,1), border-color .28s ease; }
        .card-transition:hover { transform: translateY(-4px); }
      `}</style>
      <div className="bg-brand-ice text-slate-800 font-sans antialiased selection:bg-brand-gold selection:text-white">
  {/*IN: IndustrialUtilityB*/}
  
  {/*: MainHead*/}
  {/*IN: BreadcrumbNavigati*/}
  <div className="bg-white border-b border-brand-blueprint/80 py-2.5 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-slate-500">
      <nav className="flex items-center space-x-2">
        <Link className="hover:text-brand-navy transition-colors" to="/">
          Home
        </Link>
        <span className="text-slate-300">
          ›
        </span>
        <span className="text-brand-navy font-semibold">
          Contact Us
        </span>
      </nav>
      <span className="hidden md:block text-[11px] text-slate-400">
        SEC_REF // 20.3895° N, 72.9106° E · PLANT 01
      </span>
    </div>
  </div>
  {/*: BreadcrumbNavigati*/}
  <main>
    {/*IN: HeroSecti*/}
    <section className="relative blueprint-grid-bg border-b border-brand-blueprint pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden" data-purpose="contact-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/*t Column: Hero Text Conte*/}
          <div className="lg:col-span-7">
            {/*brow Pill Bad*/}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-gold/60 text-brand-gold text-[11px] font-mono tracking-widest uppercase mb-6 rounded-[2px] shadow-sm">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
              CONTACT // DIRECT FACTORY & TECHNICAL DESK
            </div>
            {/*n Heading with Editorial Serif Emphas*/}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight leading-[1.12] mb-3">
              Contact Us
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-brand-blue mb-6 font-normal">
              Contact Ion Exchange Resin Manufacturers
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Have questions about our products or need technical assistance? Our team is here to help you find the right ion exchange resin for your plant. Send us the grade and operating conditions you run today, and we will confirm the matching Toyota grade — usually the same working day.
            </p>
            {/*ck Reach Callout Str*/}
            <div className="bg-white border border-brand-blueprint p-5 relative corner-brackets shadow-sm max-w-2xl mb-6">
              <div className="text-xs font-mono uppercase text-brand-navy font-semibold tracking-wider mb-3">
                Prefer to talk? Call +91 260 2432021 or WhatsApp us — details on the right.
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-medium rounded-sm shadow-sm transition-colors" href="https://wa.me/912602432021" rel="noopener" target="_blank">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.181-.077.355.101.173.452.746.97 1.207.668.594 1.232.779 1.405.866.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"></path>
                  </svg>
                  WhatsApp Us
                </a>
                <a className="inline-flex items-center px-4 py-2 bg-brand-navy hover:bg-brand-blue text-white text-xs font-mono font-medium rounded-sm shadow-sm transition-colors" href="tel:+912602432021">
                  <svg className="w-3.5 h-3.5 mr-2 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Call +91 260 2432021
                </a>
                <a className="inline-flex items-center px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-brand-blueprint text-xs font-mono font-medium rounded-sm transition-colors" href="mailto:info@toyotachemicals.co.in">
                  <svg className="w-3.5 h-3.5 mr-2 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  info@toyotachemicals.co.in
                </a>
              </div>
            </div>
          </div>
          
          {/* <div className="lg:col-span-5 relative">
            <div className="relative bg-white border border-brand-blueprint p-2.5 shadow-xl corner-brackets">
              
              <div className="relative overflow-hidden bg-slate-900 aspect-square max-h-[380px] w-full">
                <img alt="Toyota Chemical Ion Exchange Resin Spherical Beads under laboratory inspection" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src={contactQualityLabGenerated} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-brand-dark/90 backdrop-blur border border-brand-gold/50 px-2.5 py-1 text-[10px] font-mono text-brand-goldLight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  0.3 – 1.2 MM SIZED BEADS // QC VERIFIED
                </div>
                <div className="absolute bottom-3 right-3 bg-brand-navy/95 border border-brand-blueprint/40 px-3 py-1.5 text-[11px] font-mono text-white flex items-center gap-2">
                  <span className="text-brand-gold font-bold">
                    REPLY:
                  </span>
                  SAME WORKING DAY
                </div>
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-300">
                  <span>
                    RESIN MORPHOLOGY: SPHERICAL GEL / MACRO
                  </span>
                </div>
              </div>
              
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-[11px] font-mono border-t border-brand-blueprint mt-2 text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 border border-brand-gold inline-block"></span>
                  DIRECT VAPI DESPATCH
                </span>
                <span className="text-brand-gold font-semibold uppercase tracking-wider">
                  100% IN-HOUSE VAPI SYNTHESIS
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 hidden sm:block bg-brand-navy text-white text-[10px] font-mono py-1 px-3 border-l-2 border-brand-gold shadow-md">
              FACILITY: GIDC VAPI OWN PLANT
            </div>
          </div> */}
        </div>
      </div>
    </section>
    {/*: HeroSecti*/}
    {/*IN: MainContactConsoleGr*/}
    <section className="py-16 sm:py-20 bg-white" data-purpose="inquiry-and-locations-grid" id="enquiry-console">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/*T COLUMN: Engineering Inquiry Form (7 Col*/}
          <div className="lg:col-span-7 bg-brand-ice border border-brand-blueprint p-6 sm:p-10 corner-brackets shadow-industrial">
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase text-brand-gold tracking-widest font-semibold block mb-1">
                // TECHNICAL TRANSMISSION CONSOLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                Send an enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-mono mt-2">
                Fields marked
                <span className="text-rose-600 font-bold">
                  *
                </span>
                are required. We reply by email or WhatsApp, usually the same working day.
              </p>
            </div>
            {/* Fo*/}
            <form className="space-y-5" id="contact-engineering-form" onSubmit={handleSubmit}>
              {/* 1: Name & Compa*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="full-name">
                    Name
                    <span className="text-rose-600">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="full-name" name="name" placeholder="e.g. Dr. Rajesh Mehta" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="company-name">
                    Company
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="company-name" name="company" placeholder="e.g. Gujarat Power & Chemicals Ltd." type="text" />
                </div>
              </div>
              {/* 2: Email & Pho*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="email-addr">
                    Email
                    <span className="text-rose-600">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="email-addr" name="email" placeholder="name@company.com" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="phone-number">
                    Phone / WhatsApp
                    <span className="text-rose-600">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="phone-number" name="phone" placeholder="+91 98765 43210" type="tel" />
                </div>
              </div>
              {/* 3: Resin of Interest Dropdown & Plant Locati*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="resin-category">
                    Resin of interest
                  </label>
                  <select className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none" id="resin-category" name="resin_category">
                    <option value="">
                      Select a category
                    </option>
                    <option value="cation">
                      Cation Exchange Resin
                    </option>
                    <option value="anion">
                      Anion Exchange Resin
                    </option>
                    <option value="mixed-bed">
                      Mixed Bed Resin
                    </option>
                    <option value="water-softener">
                      Water Softener Resin
                    </option>
                    <option value="dm-plant">
                      DM Plant Resin
                    </option>
                    <option value="not-sure">
                      Not sure — please advise
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="plant-location">
                    Plant location
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="plant-location" name="location" placeholder="e.g. Dahej, Bharuch or Hazira" type="text" />
                </div>
              </div>
              {/* 4: Grade & Operating Conditions Textar*/}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center justify-between" htmlFor="operating-conditions">
                  <span>
                    Grade & operating conditions
                    <span className="text-rose-600">
                      *
                    </span>
                  </span>
                  <span className="text-[10px] text-slate-400 lowercase font-normal">
                    TDS / Flow rates / Water analysis
                  </span>
                </label>
                <textarea className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 p-3.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400 font-sans" id="operating-conditions" name="conditions" placeholder="Mention current competitor grade (e.g. C-20, INDION 225, Amberlite IR-120) or water parameters: TDS, Silica, Hardness, and plant throughput capacity..." rows="4"></textarea>
              </div>
              {/*sent Checkb*/}
              <div className="pt-1">
                <label className="flex items-start cursor-pointer group">
                  <input className="mt-1 h-4 w-4 rounded-none border-brand-blueprint text-brand-blue focus:ring-brand-blue" name="consent" type="checkbox" />
                  <span className="ml-2.5 text-xs text-slate-600 leading-relaxed font-sans">
                    I agree to be contacted about this enquiry. See our
                    <Link className="text-brand-blue hover:underline font-semibold" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
              {/*mit Butt*/}
              <div className="pt-3">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-navy hover:bg-brand-blue text-white text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-md group" type="submit">
                  <span>
                    Send Enquiry
                  </span>
                  <svg className="w-4 h-4 ml-3 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <span className="block sm:inline sm:ml-4 text-[11px] font-mono text-slate-400 mt-2 sm:mt-0">
                  // FAST TRACK RESPONSE PROTOCOL
                </span>
              </div>
            </form>
          </div>
          {/*HT COLUMN: Factory, Offices & Facility Details (5 Col*/}
          <div className="lg:col-span-5 space-y-6">
            {/*d 1: Factory (Primary Manufacturing Hu*/}
            <div className="bg-white border border-brand-blueprint p-6 card-transition corner-brackets relative shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
                    // SYNTHESIS FACILITY
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">
                    Factory
                  </h3>
                </div>
                <span className="chamfer-tag bg-brand-navy text-brand-goldLight text-[10px] font-mono px-2.5 py-1 uppercase font-semibold">
                  OWN SYNTHESIS PLANT
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mb-1 font-sans">
                Toyota Chemical Industries Pvt. Ltd.
              </p>
              <address className="text-xs text-slate-600 not-italic leading-relaxed mb-4 font-sans">
                Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195, India
              </address>
              <div className="border-t border-brand-blueprint pt-3 flex flex-col space-y-1 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    PHONE:
                  </span>
                  <a className="text-brand-navy hover:text-brand-blue font-bold" href="tel:+912602432021">
                    +91 260 2432021
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    EMAIL:
                  </span>
                  <a className="text-brand-blue hover:underline" href="mailto:info@toyotachemicals.co.in">
                    info@toyotachemicals.co.in
                  </a>
                </div>
              </div>
            </div>
            {/*d 2: Marketing Offi*/}
            <div className="bg-white border border-brand-blueprint p-6 card-transition corner-brackets relative shadow-sm">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
                  // COMMERCIAL HEADQUARTERS
                </span>
                <h3 className="text-xl font-bold text-brand-navy">
                  Marketing Office
                </h3>
              </div>
              <address className="text-xs text-slate-600 not-italic leading-relaxed mb-4 font-sans">
                Extn 1.2, Sidhpura Co-Op Ind. Estate, Gaiwadi, S.V. Road, Goregaon (W), Mumbai 400 104, Maharashtra, India
              </address>
              <div className="border-t border-brand-blueprint pt-3 flex flex-col space-y-1 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    PHONE:
                  </span>
                  <a className="text-brand-navy hover:text-brand-blue font-bold" href="tel:02249678234">
                    022-4967 8234
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    EMAIL:
                  </span>
                  <a className="text-brand-blue hover:underline" href="mailto:mumbai@toyotachemicals.co.in">
                    mumbai@toyotachemicals.co.in
                  </a>
                </div>
              </div>
            </div>
            {/*d 3: Business Hours & Dispat*/}
            <div className="bg-white border border-brand-blueprint p-6 card-transition corner-brackets relative shadow-sm">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
                  // DISPATCH & OPERATION
                </span>
                <h3 className="text-xl font-bold text-brand-navy">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between py-1 border-b border-brand-blueprint/60">
                  <span className="text-slate-700 font-medium">
                    Monday – Saturday
                  </span>
                  <span className="text-brand-navy font-bold">
                    9:30 AM – 6:30 PM IST
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 text-slate-400">
                  <span>
                    Sunday
                  </span>
                  <span className="text-rose-600 font-semibold uppercase">
                    Closed
                  </span>
                </div>
              </div>
            </div>
            {/*d 4: Service Ar*/}
            
            <div className="bg-brand-navy text-white p-6 relative corner-brackets shadow-md border-l-4 border-brand-gold">
              <div className="mb-2">
                <span className="text-[10px] font-mono text-brand-goldLight uppercase tracking-widest block">
                  // DISTRIBUTION TERRITORY
                </span>
                <h3 className="text-xl font-bold text-white">
                  Service Area
                </h3>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat — and supply across India.
              </p>
              <div className="mt-4 pt-3 border-t border-brand-borderDark flex items-center justify-between text-[11px] font-mono text-brand-gold">
                <span>
                  DOMESTIC & EXPORT READY
                </span>
                <span>
                  ISO 9001:2015
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#EEF4F9]">

          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

            <div className="mb-8">

              <SectionLabel>
                Factory Location // GIDC Vapi
              </SectionLabel>

              <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
                Find us in Vapi, Gujarat.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52667D]">
                Toyota Chemical Industries Pvt. Ltd. factory is located at
                Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195,
                India.
              </p>

            </div>


            <div className="relative overflow-hidden border border-[#B7CBDD] bg-white p-2">

              <iframe
                title="Toyota Chemical Industries GIDC Vapi"
                src="https://maps.google.com/maps?q=20.3594162,72.9252245&z=14&output=embed"
                loading="lazy"
                className="h-[380px] w-full border-0 sm:h-[460px]"
              />

              <div className="pointer-events-none absolute left-6 top-6 bg-[#061729]/95 px-4 py-3">

                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#DF9B42]">
                  GIDC VAPI
                </div>

                <div className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white">
                  Gujarat // India
                </div>

              </div>

            </div>

          </div>

        </section>
    {/*: MainContactConsoleGr*/}
    {/*IN: CompliancePilla*/}
    <section className="py-16 bg-brand-ice border-y border-brand-blueprint" data-purpose="compliance-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-mono text-brand-gold tracking-widest uppercase font-semibold block mb-2">
            — COMPLIANCE & INTEGRITY —
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3">
            Manufactured to specification, supplied direct
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Over 50 years of dedicated resin synthesis delivering high mechanical bead durability, precise particle size uniformity, and guaranteed operating capacity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                01 / HERITAGE
              </span>
              <span className="text-brand-gold font-semibold">
                EST. 1972
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              Since 1972
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over five decades of dedicated resin manufacturing from Vapi, Gujarat, delivering unmatched batch-to-batch repeatability.
            </p>
          </div>
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                02 / QUALITY SYSTEMS
              </span>
              <span className="text-brand-gold font-semibold">
                AUDITED
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              ISO 9001 & 14001
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Certified quality & environmental management with rigorous multi-point analytical testing for particle uniformity and osmotic shock resistance.
            </p>
          </div>
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                03 / DISPATCH AGILITY
              </span>
              <span className="text-brand-gold font-semibold">
                FLEXIBLE
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              25 L to bulk
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No upper limit; immediate ready-to-ship stock for emergency top-ups or full multi-ton industrial changes.
            </p>
          </div>
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                04 / DATA TRANSPARENCY
              </span>
              <span className="text-brand-gold font-semibold">
                CERTIFIED
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              TDS with every grade
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive Certificate of Analysis (COA) specifying bead size distribution, exchange capacity, and sieve analysis with each dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    {/*: CompliancePilla*/}
    {/*IN: TechnicalKnowledgeBaseF*/}
    <section className="py-16 sm:py-24 bg-white" data-purpose="technical-knowledge-base-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*d*/}
        <div className="text-center mb-12">
          <span className="text-[11px] font-mono text-brand-gold tracking-widest uppercase font-semibold block mb-2">
            — TECHNICAL KNOWLEDGE BASE —
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        {/*ordion Contain*/}
        <div className="space-y-3.5" id="faq-accordion-group">
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 0} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} type="button">
              <span>
                1. What is the minimum order quantity?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 0 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 0 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 0 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Our minimum order quantity is 25 litres, and we supply from 25 litres up to bulk quantities with no upper limit.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 1} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} type="button">
              <span>
                2. How quickly will I get a response?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 1 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 1 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 1 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              We reply to enquiries by email or WhatsApp, usually the same working day. Once a grade is confirmed, typical time from enquiry to dispatch is about a week.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 2} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} type="button">
              <span>
                3. Can you match the resin I currently run?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 2 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 2 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 2 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Yes. Send the grade and operating conditions you run today and we will confirm the matching Toyota grade and attach its technical data sheet.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 3} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} type="button">
              <span>
                4. Do you provide a technical data sheet?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 3 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 3 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 3 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Yes. Every grade is supplied with a technical data sheet covering bead size, total exchange capacity, sieve analysis and operating limits.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 4} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} type="button">
              <span>
                5. Do you deliver, or do I collect from the plant?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 4 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 4 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 4 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Both. We deliver to your plant, or you can collect from the factory at GIDC Vapi — whichever suits you.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 5} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} type="button">
              <span>
                6. Which areas do you serve?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 5 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 5 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 5 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat, and we supply to plants across India.
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*: TechnicalKnowledgeBaseF*/}
    {/*IN: ConsultationCalloutBann*/}
    <section className="bg-brand-dark text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-brand-borderDark" data-purpose="direct-factory-cta">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-semibold block mb-1">
            ■ DIRECT FACTORY QUOTATION & ANALYSIS
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Not sure which grade you need?
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl font-sans">
            Send the grade and operating conditions you run today and we will confirm the right Toyota grade.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <a className="px-6 py-3 bg-brand-gold hover:bg-brand-goldBorder text-brand-dark text-xs font-mono font-bold uppercase tracking-widest transition-colors shadow-sm" href="#enquiry-console">
            Send an enquiry
          </a>
          <a className="px-6 py-3 border border-slate-600 hover:border-white text-slate-200 hover:text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors" href="tel:+912602432021">
            Call +91 260 2432021
          </a>
        </div>
      </div>
    </section>
    {/*: ConsultationCalloutBann*/}
    {/*IN: EnterpriseTrustStr*/}
    
    {/*: EnterpriseTrustStr*/}
  </main>
 
  {/*: MobileStickyQuickDo*/}
  {/*IN: AccordionInteractionScri*/}
  {/*: AccordionInteractionScri*/}
      </div>
    </>
  );
}

