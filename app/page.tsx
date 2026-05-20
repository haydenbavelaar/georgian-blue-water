const services = [
  {
    title: "Water well drilling",
    detail:
      "Residential, commercial, cottage, and agricultural wells planned around local records, site conditions, and long-term aquifer protection.",
    stat: "01",
  },
  {
    title: "Submersible and jet pumps",
    detail:
      "Pump selection, replacement, and service for dependable volume, efficient operation, and the right fit for your water demand.",
    stat: "02",
  },
  {
    title: "Pressure systems",
    detail:
      "Standard and constant pressure systems designed to protect your pump, stabilize flow, and support busy homes or businesses.",
    stat: "03",
  },
  {
    title: "Water purification",
    detail:
      "Water testing, softeners, iron filters, carbon filtration, and UV systems sized for private wells and city water supplies.",
    stat: "04",
  },
  {
    title: "Well inspections and flow rate tests",
    detail:
      "Licensed inspections with printable flow rate documentation for real estate, financing, maintenance, and peace of mind.",
    stat: "05",
  },
  {
    title: "Well extensions and upgrades",
    detail:
      "Bring older wells up to modern standards with casing extensions, water-tight connections, and pit remediation.",
    stat: "06",
  },
  {
    title: "Disinfection and maintenance",
    detail:
      "Well disinfection, UV bulb reminders, filter changes, troubleshooting, and ongoing service for safe water year-round.",
    stat: "07",
  },
  {
    title: "Emergency water service",
    detail:
      "Responsive support for urgent pump, pressure, and water supply issues across Simcoe County and nearby communities.",
    stat: "08",
  },
];

const serviceAreas = [
  "Wasaga Beach",
  "Collingwood",
  "The Blue Mountains",
  "Thornbury",
  "Meaford",
  "Creemore",
  "Singhampton",
  "Midland",
  "Penetanguishene",
  "Port Severn",
  "Barrie",
  "Orillia",
  "Alliston",
];

const testimonials = [
  {
    quote:
      "Clear explanations, fast diagnostics, and a water system that finally feels reliable. The process was professional from the first call.",
    name: "Homeowner",
    location: "Wasaga Beach",
  },
  {
    quote:
      "They understood the needs of a rural property, handled the inspection documentation, and made the next steps simple.",
    name: "Property buyer",
    location: "Collingwood area",
  },
  {
    quote:
      "Knowledgeable service, clean installation work, and practical recommendations for treatment without overselling equipment.",
    name: "Business owner",
    location: "Simcoe County",
  },
];

const metrics = [
  { value: "Reg. 903", label: "Licensed Ontario well work" },
  { value: "7am-5pm", label: "Weekday service hours" },
  { value: "Anytime", label: "Emergency calls welcome" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-screen bg-[#061a31] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-16rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute bottom-[-14rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.20)_0%,rgba(6,26,49,0)_42%),radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_24rem)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6fbff] to-transparent" />
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Georgian Blue Water home">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-300 to-sky-500 shadow-lg shadow-sky-500/30" />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">
                Georgian Blue
              </span>
              <span className="block text-lg font-bold tracking-tight">Water Inc.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#testimonials">
              Testimonials
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="tel:17059944297"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-[#08233f] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-100 lg:inline-flex"
          >
            Call 705-994-4297
          </a>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div className="flex flex-col justify-center">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-cyan-200/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-2xl shadow-sky-950/30 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Licensed well drilling and water systems
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              The clear choice for dependable water from ground to glass.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Georgian Blue Water Inc. delivers modern well drilling, pumps, pressure systems,
              treatment, inspections, and maintenance across Simcoe County and Georgian Bay
              communities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-base font-extrabold text-[#06213d] shadow-2xl shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Request service
                <ArrowIcon />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                View services
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.value} className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
                  <div className="text-2xl font-black text-cyan-200">{metric.value}</div>
                  <div className="mt-2 text-sm leading-5 text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-8 top-12 h-28 w-28 rounded-full border border-cyan-200/20 bg-cyan-200/10 blur-sm" />
            <div className="absolute -right-6 bottom-16 h-40 w-40 rounded-full border border-white/10 bg-white/10 blur-sm" />

            <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-gradient-to-br from-white to-sky-50 p-6 text-[#08233f] shadow-2xl">
                <div className="rounded-[1.5rem] bg-[#06213d] p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        Water systems
                      </p>
                      <h2 className="mt-2 text-3xl font-black tracking-tight">Built for Ontario wells</h2>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300 text-2xl font-black text-[#06213d]">
                      GB
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {["Well drilling", "Pumps and pressure", "Treatment and UV", "Inspections"].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300/20 text-cyan-200">
                          <CheckIcon />
                        </span>
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-lg shadow-sky-900/5">
                    <div className="text-sm font-bold uppercase tracking-[0.24em] text-sky-700">Coverage</div>
                    <div className="mt-3 text-2xl font-black">Simcoe County</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Plus surrounding Georgian Bay communities.</p>
                  </div>
                  <div className="rounded-3xl border border-sky-100 bg-cyan-50 p-5 shadow-lg shadow-sky-900/5">
                    <div className="text-sm font-bold uppercase tracking-[0.24em] text-sky-700">Mission</div>
                    <div className="mt-3 text-2xl font-black">Protect aquifers</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Quality service with responsible groundwater care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f6fbff] px-6 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-sky-700">Services</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#08233f] sm:text-5xl">
              Complete water well service with one accountable team.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              From new well construction to filtration maintenance, Georgian Blue Water designs,
              installs, and services the systems that keep homes, farms, and businesses running.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[2rem] border border-sky-100 bg-white p-6 shadow-xl shadow-sky-900/[0.05] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl hover:shadow-sky-900/[0.09]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-black text-sky-800">
                    {service.stat}
                  </span>
                  <span className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-200 to-sky-500 opacity-80 shadow-lg shadow-sky-300/40 transition group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-[#08233f]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-cyan-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#08233f] p-8 text-white shadow-2xl shadow-sky-950/20">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-cyan-200">About Georgian Blue</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                Local expertise for the water system beneath your property.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                Georgian Blue Water Inc. provides quality, dependable service while helping maintain
                and protect groundwater sources. Their team helps customers understand well
                maintenance, potential hazards, and the right equipment for safe water.
              </p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Licensed by</p>
                <p className="mt-3 text-xl font-black">Ministry of the Environment, Conservation and Parks</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Ontario Regulation 903 water well standards.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-sky-700">Why homeowners choose them</p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#08233f] sm:text-4xl">
              Practical recommendations, responsible construction, and systems built to last.
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Previous well records reviewed to plan smarter drilling projects.",
                "Equipment sized around water quality, demand, minerals, and filtration needs.",
                "Pressure systems tuned to reduce pump strain and improve water delivery.",
                "Education-focused service so property owners know how to maintain safe water.",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-3xl border border-sky-100 bg-sky-50/70 p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#08233f]">
                    <CheckIcon />
                  </span>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-500">Service area</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#eef7fb] px-6 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-sky-700">Testimonials</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#08233f] sm:text-5xl">
                Confidence when water is essential.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              A premium service experience should feel clear, responsive, and technically sound from
              the first conversation through final testing.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={`${testimonial.name}-${testimonial.location}`} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-sky-900/[0.06]">
                <div className="flex gap-1 text-cyan-500" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg key={index} aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="m10 1.5 2.4 5 5.5.8-4 3.9.9 5.5L10 14l-4.9 2.7.9-5.5-4-3.9 5.5-.8L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-6 text-lg font-semibold leading-8 text-[#08233f]">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-sky-100 pt-5">
                  <div className="font-black text-[#08233f]">{testimonial.name}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-500">{testimonial.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.5rem] bg-[#061a31] p-8 text-white shadow-2xl shadow-sky-950/20 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyan-200">Contact</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Ready for clear water and a stronger system?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Call anytime for emergency situations, or send project details and Georgian Blue Water
              can review your well service address before following up.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:17059944297"
                className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/15"
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Phone</span>
                  <span className="mt-1 block text-2xl font-black">705-994-4297</span>
                </span>
                <ArrowIcon />
              </a>
              <a
                href="mailto:info@georgianblue.ca"
                className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/15"
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Email</span>
                  <span className="mt-1 block text-xl font-black sm:text-2xl">info@georgianblue.ca</span>
                </span>
                <ArrowIcon />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Office</p>
                <p className="mt-3 font-semibold leading-7">32 Portugal Path, Wasaga Beach, ON</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Shop</p>
                <p className="mt-3 font-semibold leading-7">5929 Highway 26, Stayner, ON</p>
              </div>
            </div>
          </div>

          <form
            action="mailto:info@georgianblue.ca"
            method="post"
            encType="text/plain"
            className="rounded-[2.5rem] border border-sky-100 bg-sky-50/70 p-6 shadow-2xl shadow-sky-900/[0.07] sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">First name</span>
                <input
                  required
                  name="First name"
                  type="text"
                  className="mt-3 w-full rounded-2xl border border-sky-100 bg-white px-5 py-4 text-[#08233f] outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-4"
                  placeholder="First name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">Last name</span>
                <input
                  required
                  name="Last name"
                  type="text"
                  className="mt-3 w-full rounded-2xl border border-sky-100 bg-white px-5 py-4 text-[#08233f] outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-4"
                  placeholder="Last name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">Phone</span>
                <input
                  required
                  name="Phone"
                  type="tel"
                  className="mt-3 w-full rounded-2xl border border-sky-100 bg-white px-5 py-4 text-[#08233f] outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-4"
                  placeholder="705-000-0000"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">Email</span>
                <input
                  required
                  name="Email"
                  type="email"
                  className="mt-3 w-full rounded-2xl border border-sky-100 bg-white px-5 py-4 text-[#08233f] outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-4"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">Well service address</span>
              <input
                required
                name="Well service address"
                type="text"
                className="mt-3 w-full rounded-2xl border border-sky-100 bg-white px-5 py-4 text-[#08233f] outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-4"
                placeholder="Property address"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">How can we help?</span>
              <textarea
                required
                name="Message"
                rows={6}
                className="mt-3 w-full resize-none rounded-2xl border border-sky-100 bg-white px-5 py-4 text-[#08233f] outline-none ring-cyan-300 transition placeholder:text-slate-400 focus:ring-4"
                placeholder="Tell us about your well, pump, pressure, treatment, inspection, or emergency service needs."
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#08233f] px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-sky-900/15 transition hover:-translate-y-0.5 hover:bg-[#0b3158] sm:w-auto"
            >
              Send inquiry
              <ArrowIcon />
            </button>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              This form opens your email app with the details filled in. For urgent water issues,
              call 705-994-4297.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
