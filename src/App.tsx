// @ts-nocheck
import { useState } from "react";

// Shared layout with header + footer
function EdenLayout({ currentPage, onNav, children }) {
  const navItem = (key, label) => (
    <button
      onClick={() => onNav(key)}
      className={
        "text-sm font-medium transition-colors " +
        (currentPage === key ? "text-[#111111]" : "text-slate-800 hover:text-[#111111]")
      }
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-md border border-[#b3b3b3] bg-[#111111] px-3 py-1">
              <span className="text-xs font-semibold tracking-[0.25em] text-white">EDEN</span>
            </div>
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#111111]">
                est. 1992
              </p>
              <p className="text-xs text-slate-500">Food distributors for Tasmanian retailers</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItem("home", "Home")}
            {navItem("about", "About")}
            {navItem("categories", "Categories")}
            {navItem("seasonal", "Seasonal")}
            {navItem("brands", "Our Brands")}
            {navItem("contact", "Contact")}
          </nav>
          <button className="rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black">
            Become a Customer
          </button>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-6xl flex-1 px-4 py-10 md:py-14">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-slate-500 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold text-[#111111]">Eden Foods</div>
            <p className="mt-1 max-w-xs">
              Tasmanian wholesale and distribution partner for retailers, hospitality and specialty food
              stores.
            </p>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            <div>
              <div className="text-[0.75rem] font-semibold text-slate-700">Quick links</div>
              <ul className="mt-2 space-y-1">
                <li>About</li>
                <li>Our brands</li>
                <li>Christmas</li>
                <li>Easter</li>
                <li>Credit application</li>
              </ul>
            </div>
            <div>
              <div className="text-[0.75rem] font-semibold text-slate-700">Categories</div>
              <ul className="mt-2 space-y-1">
                <li>Bakery</li>
                <li>Chilled</li>
                <li>Confectionery</li>
                <li>Frozen</li>
                <li>Grocery</li>
              </ul>
            </div>
            <div>
              <div className="text-[0.75rem] font-semibold text-slate-700">Contact</div>
              <p className="mt-2">6-8 Sunmont Street, Derwent Park, TAS 7009</p>
              <p className="mt-1">(03) 6272 7999</p>
              <p className="mt-1">sales@edenfoods.com.au</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 py-3 text-center text-[0.7rem] text-slate-400">
          © {new Date().getFullYear()} Eden Foods. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* HOME – Option B hero + overlapping categories */
function EdenHomeOptionB() {
  return (
    <>
      <section className="bg-[#111111] text-white rounded-3xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#f5ffcf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8dc63f]" />
              Tasmania's dedicated food distribution partner
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              From bakery to confectionery, we keep Tasmanian shelves full.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Working with supermarkets, gourmet grocers and hospitality venues, Eden Foods connects
              local and international food manufacturers with Tasmanian customers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-sm hover:bg-slate-100">
                View Categories
              </button>
              <button className="rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white hover:border-white">
                Download Product List (PDF)
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl bg-white/5 p-4 md:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#f5ffcf]">At a glance</p>
              <div className="mt-4 grid gap-4 text-xs md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-3">
                  <div className="text-2xl font-semibold text-white">30+</div>
                  <p className="mt-1 text-slate-200">years supplying Tasmanian retailers</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <div className="text-2xl font-semibold text-white">5</div>
                  <p className="mt-1 text-slate-200">core categories across chilled & grocery</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <div className="text-2xl font-semibold text-white">Local & imported</div>
                  <p className="mt-1 text-slate-200">
                    mix of Tasmanian, Australian and overseas brands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:-mt-10 md:p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-semibold text-[#111111]">Categories</h2>
          <div className="flex items-center gap-2 text-[#8dc63f]">
            <span className="h-[1px] w-10 bg-[#8dc63f]" />
            <span className="text-lg">🥗</span>
            <span className="h-[1px] w-10 bg-[#8dc63f]" />
          </div>
          <p className="mt-1 max-w-xl text-sm text-slate-600">
            Explore our key ranges supporting Tasmanian supermarkets, gourmet food stores and hospitality
            venues.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            { name: "Bakery", desc: "Bread, pastries, wraps & more.", color: "#e88ba0" },
            { name: "Frozen", desc: "Ice cream, pastry, fruit & veg.", color: "#70b7e6" },
            { name: "Chilled", desc: "Dairy, dips, fresh desserts.", color: "#a4bf5b" },
            { name: "Confectionery", desc: "Chocolate, sweets & gifts.", color: "#6bc9b8" },
            { name: "Grocery", desc: "Pantry staples & speciality lines.", color: "#f5c96b" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <div>
                <div
                  className="mx-auto mb-3 h-14 w-14 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="text-sm font-semibold text-[#8dc63f]">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
              </div>
              <button className="mt-4 inline-flex justify-center text-xs font-semibold text-[#111111]">
                View range
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ABOUT */
function EdenAboutSection() {
  return (
    <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div>
        <h1 className="text-3xl font-semibold text-[#111111]">About Eden Foods</h1>
        <p className="mt-3 text-sm text-slate-600">
          Eden Foods is a family-owned food distribution business established in 1992. We represent a
          mix of Tasmanian, Australian and imported brands for retailers and hospitality venues across
          Tasmania.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Our team focuses on long-term relationships with store owners, buyers and chefs. We understand
          the pressures of shelf space, margin and availability, and build our ranges and service around
          those realities.
        </p>

        <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-[#8dc63f]">
              Established
            </div>
            <div className="mt-1 text-2xl font-semibold text-[#111111]">1992</div>
            <p className="mt-1 text-xs text-slate-500">
              Decades of experience in Tasmanian distribution.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-[#8dc63f]">Focus</div>
            <p className="mt-2 text-xs text-slate-600">
              Tasmanian retailers and hospitality venues needing reliable supply and a curated mix of
              local and international brands.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-[#8dc63f]">
              Categories
            </div>
            <p className="mt-2 text-xs text-slate-600">
              Bakery, chilled, frozen, confectionery and grocery across multiple suppliers.
            </p>
          </div>
        </div>
      </div>

      <aside className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
        <h2 className="text-sm font-semibold text-[#111111]">How we work</h2>
        <ul className="mt-3 space-y-2 text-xs text-slate-600">
          <li>• Partnership approach with suppliers and retailers.</li>
          <li>• Regular range reviews based on performance and seasonality.</li>
          <li>• Dedicated account management for key customers.</li>
          <li>• Tasmanian warehousing and local delivery model.</li>
        </ul>
      </aside>
    </section>
  );
}

/* CATEGORIES PAGE */
function EdenCategoriesSection() {
  const categories = [
    { name: "Bakery", desc: "Bread, pastries, wraps & more.", color: "#e88ba0" },
    { name: "Frozen", desc: "Ice cream, pastry, fruit & veg.", color: "#70b7e6" },
    { name: "Chilled", desc: "Dairy, dips, fresh desserts.", color: "#a4bf5b" },
    { name: "Confectionery", desc: "Chocolate, sweets & gifts.", color: "#6bc9b8" },
    { name: "Grocery", desc: "Pantry staples & speciality lines.", color: "#f5c96b" },
  ];

  return (
    <section>
      <h1 className="text-3xl font-semibold text-[#111111]">Categories</h1>
      <p className="mt-2 max-w-xl text-sm text-slate-600">
        Our ranges are built to support everyday grocery needs, seasonal promotions and specialty lines
        for Tasmanian retailers.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full" style={{ backgroundColor: cat.color }} />
              <div>
                <h2 className="text-sm font-semibold text-[#8dc63f]">{cat.name}</h2>
                <p className="text-xs text-slate-500">{cat.desc}</p>
              </div>
            </div>
            <button className="mt-4 inline-flex text-xs font-semibold text-[#111111]">
              View {cat.name} range
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* SEASONAL PAGE */
function EdenSeasonalSection() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold text-[#111111]">Seasonal programs</h1>
        <p className="mt-2 text-sm text-slate-600">
          Eden supports key trading periods with tailored ranges, displays and offers for Tasmanian
          retailers.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          We work with suppliers to plan ahead for demand, focusing on availability, presentation and
          margin for your store.
        </p>
      </div>

      <div className="grid gap-4 text-xs md:grid-cols-2">
        <div className="rounded-2xl bg-[#fff7e6] p-4">
          <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-amber-700">
            Christmas
          </div>
          <p className="mt-2 text-slate-700">
            Festive confectionery, gifting, entertaining and grocery lines to support the busiest
            trading period of the year.
          </p>
        </div>
        <div className="rounded-2xl bg-[#fff0f4] p-4">
          <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-rose-700">Easter</div>
          <p className="mt-2 text-slate-700">
            Seasonal chocolate, baking ingredients and family treats designed for Easter promotions.
          </p>
        </div>
      </div>
    </section>
  );
}

/* BRANDS PAGE */
function EdenBrandsSection() {
  const brands = [
    "Chobani",
    "Ayam",
    "Bonne Maman",
    "Jalna",
    "Walkers",
    "Waterthins",
    "Forager",
    "Carmans",
  ];

  return (
    <section>
      <h1 className="text-3xl font-semibold text-[#111111]">Our brand partners</h1>
      <p className="mt-2 max-w-xl text-sm text-slate-600">
        We represent a mix of Tasmanian producers, Australian brands and imported lines across chilled,
        frozen, grocery and confectionery categories.
      </p>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5">
        <div className="grid gap-4 text-xs sm:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-12 items-center justify-center rounded-2xl bg-slate-50 px-3 font-semibold text-slate-700"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        This is a selection of brand partners only. Full lists and product details are available on
        request.
      </p>
    </section>
  );
}

/* CONTACT PAGE */
function EdenContactSection() {
  return (
    <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div>
        <h1 className="text-3xl font-semibold text-[#111111]">Contact</h1>
        <p className="mt-2 text-sm text-slate-600">
          Get in touch with the Eden team to discuss becoming a customer, updating your range or planning
          for seasonal activity.
        </p>

        <form className="mt-6 space-y-3 text-sm">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="h-10 rounded-full border border-slate-300 px-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f]"
            />
            <input
              type="text"
              placeholder="Business name"
              className="h-10 rounded-full border border-slate-300 px-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f]"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <input
              type="email"
              placeholder="Email"
              className="h-10 rounded-full border border-slate-300 px-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="h-10 rounded-full border border-slate-300 px-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f]"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Tell us briefly what you'd like to discuss (new account, range review, seasonal planning, etc.)"
            className="w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f]"
          />
          <button className="mt-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black">
            Submit enquiry
          </button>
        </form>
      </div>

      <aside className="space-y-4 text-xs text-slate-600">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-[#111111]">Head office & warehouse</h2>
          <p className="mt-2">6-8 Sunmont Street</p>
          <p>Derwent Park, TAS 7009</p>
          <p className="mt-2">(03) 6272 7999</p>
          <p>sales@edenfoods.com.au</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-[#f8fde9] p-4">
          <h3 className="text-sm font-semibold text-[#111111]">Credit application</h3>
          <p className="mt-2">
            Ready to open an account? Download our credit application form or talk to our team for support
            with the setup process.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <button className="rounded-full border border-slate-300 px-4 py-1.5 text-[0.75rem] font-semibold text-slate-800 hover:border-slate-400">
              Download credit application (PDF)
            </button>
            <button className="rounded-full border border-slate-300 px-4 py-1.5 text-[0.75rem] font-semibold text-slate-800 hover:border-slate-400">
              Email credit application to us
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}

/* Root app – ties nav + pages together */
export default function App() {
  const [page, setPage] = useState("home");

  let content = null;
  if (page === "home") content = <EdenHomeOptionB />;
  else if (page === "about") content = <EdenAboutSection />;
  else if (page === "categories") content = <EdenCategoriesSection />;
  else if (page === "seasonal") content = <EdenSeasonalSection />;
  else if (page === "brands") content = <EdenBrandsSection />;
  else if (page === "contact") content = <EdenContactSection />;

  return (
    <EdenLayout currentPage={page} onNav={setPage}>
      {content}
    </EdenLayout>
  );
}
