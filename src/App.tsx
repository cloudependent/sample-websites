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

/* HOME – Enhanced hero with gradient and animations */
function EdenHomeOptionB() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white rounded-3xl px-5 py-12 md:px-10 md:py-16 shadow-2xl">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8dc63f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8dc63f]/10 rounded-full blur-3xl" />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8dc63f]/20 to-[#8dc63f]/10 border border-[#8dc63f]/30 px-4 py-2 text-xs font-medium text-[#f5ffcf] shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[#8dc63f] animate-pulse" />
              Tasmania's Trusted Food Distribution Partner Since 1992
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
              From bakery to confectionery,
              <span className="block mt-2 bg-gradient-to-r from-[#8dc63f] to-[#a4bf5b] bg-clip-text text-transparent">
                we keep Tasmanian shelves full.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 max-w-xl">
              Working with supermarkets, gourmet grocers and hospitality venues across Tasmania,
              Eden Foods connects premium local and international food manufacturers with discerning customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group rounded-full bg-gradient-to-r from-[#8dc63f] to-[#a4bf5b] px-7 py-3.5 text-sm font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Explore Our Categories
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <button className="rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Download Product Catalogue
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-[#8dc63f] to-transparent rounded-full" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#f5ffcf]">At a Glance</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-5 hover:from-[#8dc63f]/20 hover:to-[#8dc63f]/5 transition-all duration-300 border border-white/10 hover:border-[#8dc63f]/30">
                  <div className="text-4xl font-bold text-white mb-2">30+</div>
                  <p className="text-sm text-slate-300">Years of Excellence in Tasmanian Food Distribution</p>
                </div>
                <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-5 hover:from-[#8dc63f]/20 hover:to-[#8dc63f]/5 transition-all duration-300 border border-white/10 hover:border-[#8dc63f]/30">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <p className="text-sm text-slate-300">Premium Products Across All Categories</p>
                </div>
                <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-5 hover:from-[#8dc63f]/20 hover:to-[#8dc63f]/5 transition-all duration-300 border border-white/10 hover:border-[#8dc63f]/30">
                  <div className="text-4xl font-bold text-white mb-2">5</div>
                  <p className="text-sm text-slate-300">Core Categories: Bakery, Frozen, Chilled, Confectionery & Grocery</p>
                </div>
                <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-5 hover:from-[#8dc63f]/20 hover:to-[#8dc63f]/5 transition-all duration-300 border border-white/10 hover:border-[#8dc63f]/30">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <p className="text-sm text-slate-300">Tasmanian Owned & Operated with Local Pride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="-mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl md:-mt-10 md:p-12">
        <div className="flex flex-col items-center gap-3 text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8dc63f]/10 px-4 py-1.5 text-xs font-semibold text-[#8dc63f] border border-[#8dc63f]/20">
            OUR PRODUCT RANGE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">Explore Our Categories</h2>
          <div className="flex items-center gap-3 text-[#8dc63f]">
            <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#8dc63f] rounded-full" />
            <span className="text-2xl">🍽️</span>
            <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#8dc63f] rounded-full" />
          </div>
          <p className="mt-2 max-w-2xl text-base text-slate-600">
            Comprehensive product ranges designed to support Tasmanian supermarkets, gourmet food stores,
            and hospitality venues with quality and reliability.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "Bakery", desc: "Artisan breads, pastries, wraps & specialty baked goods", color: "#e88ba0", icon: "🥖" },
            { name: "Frozen", desc: "Premium ice cream, pastries, fruits & vegetables", color: "#70b7e6", icon: "❄️" },
            { name: "Chilled", desc: "Fresh dairy, gourmet dips & chilled desserts", color: "#a4bf5b", icon: "🧊" },
            { name: "Confectionery", desc: "Fine chocolates, sweets & gift selections", color: "#6bc9b8", icon: "🍫" },
            { name: "Grocery", desc: "Pantry essentials & specialty food lines", color: "#f5c96b", icon: "🛒" },
          ].map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-200 bg-white p-6 text-center shadow-md hover:shadow-xl hover:scale-105 hover:border-[#8dc63f] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundColor: item.color }} />
              <div className="relative">
                <div className="mx-auto mb-4 h-20 w-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: item.color + '20', border: `2px solid ${item.color}` }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <button className="mt-5 inline-flex items-center justify-center gap-1 text-xs font-bold text-[#8dc63f] group-hover:gap-2 transition-all">
                Explore Range
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Eden Section */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-[#8dc63f]/10 to-[#8dc63f]/5 border border-[#8dc63f]/20 p-6 text-center">
            <div className="text-3xl mb-3">🚚</div>
            <h4 className="font-bold text-[#111111] mb-2">Reliable Delivery</h4>
            <p className="text-sm text-slate-600">Consistent, on-time delivery across Tasmania with temperature-controlled logistics</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#8dc63f]/10 to-[#8dc63f]/5 border border-[#8dc63f]/20 p-6 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-bold text-[#111111] mb-2">Partnership Approach</h4>
            <p className="text-sm text-slate-600">Dedicated account management and tailored solutions for your business needs</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#8dc63f]/10 to-[#8dc63f]/5 border border-[#8dc63f]/20 p-6 text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h4 className="font-bold text-[#111111] mb-2">Quality Assured</h4>
            <p className="text-sm text-slate-600">Curated selection of premium local and international brands you can trust</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ABOUT - Enhanced with timeline and values */
function EdenAboutSection() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#111111] to-[#2a2a2a] text-white p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8dc63f]/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8dc63f]/20 border border-[#8dc63f]/30 px-4 py-1.5 text-xs font-semibold text-[#f5ffcf] mb-4">
            OUR STORY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Eden Foods</h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Eden Foods is a family-owned food distribution business established in 1992, proudly serving Tasmania
            for over three decades. We represent a carefully curated mix of premium Tasmanian, Australian and
            imported brands for retailers and hospitality venues across the state.
          </p>
          <p className="text-base text-slate-400 leading-relaxed">
            Our team is dedicated to building long-term partnerships with store owners, buyers and chefs.
            We understand the unique challenges of shelf space, margin management and product availability,
            and we've built our entire operation around delivering solutions that work for your business.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="group rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-[#8dc63f] hover:shadow-xl transition-all duration-300">
          <div className="text-xs font-bold uppercase tracking-wide text-[#8dc63f] mb-2">
            Established
          </div>
          <div className="text-4xl font-bold text-[#111111] mb-2">1992</div>
          <p className="text-sm text-slate-600">
            Over 30 years of excellence in Tasmanian food distribution
          </p>
        </div>
        <div className="group rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-[#8dc63f] hover:shadow-xl transition-all duration-300">
          <div className="text-xs font-bold uppercase tracking-wide text-[#8dc63f] mb-2">
            Coverage
          </div>
          <div className="text-4xl font-bold text-[#111111] mb-2">100%</div>
          <p className="text-sm text-slate-600">
            Statewide delivery across all of Tasmania
          </p>
        </div>
        <div className="group rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-[#8dc63f] hover:shadow-xl transition-all duration-300">
          <div className="text-xs font-bold uppercase tracking-wide text-[#8dc63f] mb-2">
            Categories
          </div>
          <div className="text-4xl font-bold text-[#111111] mb-2">5</div>
          <p className="text-sm text-slate-600">
            Bakery, chilled, frozen, confectionery and grocery ranges
          </p>
        </div>
        <div className="group rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:border-[#8dc63f] hover:shadow-xl transition-all duration-300">
          <div className="text-xs font-bold uppercase tracking-wide text-[#8dc63f] mb-2">
            Focus
          </div>
          <div className="text-4xl font-bold text-[#111111] mb-2">Local</div>
          <p className="text-sm text-slate-600">
            Family-owned, Tasmanian operated with local pride
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-lg">
        <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center">Our Core Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8dc63f]/20 to-[#8dc63f]/10 border-2 border-[#8dc63f]/30 text-3xl mb-4">
              🤝
            </div>
            <h3 className="font-bold text-[#111111] mb-2">Partnership</h3>
            <p className="text-sm text-slate-600">
              We build lasting relationships with suppliers and retailers based on trust, transparency and mutual success
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8dc63f]/20 to-[#8dc63f]/10 border-2 border-[#8dc63f]/30 text-3xl mb-4">
              ⭐
            </div>
            <h3 className="font-bold text-[#111111] mb-2">Quality</h3>
            <p className="text-sm text-slate-600">
              Curated selection of premium brands that meet the highest standards for taste, safety and reliability
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8dc63f]/20 to-[#8dc63f]/10 border-2 border-[#8dc63f]/30 text-3xl mb-4">
              🎯
            </div>
            <h3 className="font-bold text-[#111111] mb-2">Reliability</h3>
            <p className="text-sm text-slate-600">
              Consistent delivery, accurate orders and responsive service you can count on, every single time
            </p>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#8dc63f]/5 to-white p-8 shadow-lg">
          <h2 className="text-xl font-bold text-[#111111] mb-6">How We Work</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8dc63f] flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div>
                <h4 className="font-semibold text-[#111111] mb-1">Partnership Approach</h4>
                <p className="text-sm text-slate-600">Collaborative relationships with both suppliers and retailers for mutual growth</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8dc63f] flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div>
                <h4 className="font-semibold text-[#111111] mb-1">Regular Range Reviews</h4>
                <p className="text-sm text-slate-600">Performance-based analysis and seasonal adjustments to optimize your product mix</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8dc63f] flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div>
                <h4 className="font-semibold text-[#111111] mb-1">Dedicated Account Management</h4>
                <p className="text-sm text-slate-600">Personal service from experienced team members who understand your business</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8dc63f] flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div>
                <h4 className="font-semibold text-[#111111] mb-1">Local Warehousing & Delivery</h4>
                <p className="text-sm text-slate-600">Tasmanian-based operations ensuring fresh products and reliable distribution</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-xl font-bold text-[#111111] mb-6">Who We Serve</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-[#111111] mb-2 flex items-center gap-2">
                <span className="text-xl">🏪</span> Supermarkets & Grocery Stores
              </h4>
              <p className="text-sm text-slate-600">Comprehensive product ranges to keep shelves stocked with customer favorites</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-[#111111] mb-2 flex items-center gap-2">
                <span className="text-xl">🍷</span> Gourmet & Specialty Stores
              </h4>
              <p className="text-sm text-slate-600">Curated premium and artisan products for discerning customers</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-[#111111] mb-2 flex items-center gap-2">
                <span className="text-xl">🍽️</span> Hospitality & Food Service
              </h4>
              <p className="text-sm text-slate-600">Reliable supply for restaurants, cafes, hotels and catering businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CATEGORIES PAGE - Enhanced with detailed product info */
function EdenCategoriesSection() {
  const categories = [
    {
      name: "Bakery",
      desc: "Fresh breads, pastries, wraps & artisan baked goods",
      bg: "#fff0f4",
      icon: "🥖",
      color: "#e88ba0",
      items: [
        { name: "Artisan Breads", detail: "Sourdough, multigrain, specialty loaves" },
        { name: "Pastries & Croissants", detail: "Butter croissants, Danish, sweet treats" },
        { name: "Wraps & Flatbreads", detail: "Tortillas, pita, lavash, naan" },
        { name: "Specialty Baked Goods", detail: "Gluten-free, organic, vegan options" }
      ],
      brands: "Tip Top, Baker's Delight, Local Artisan Bakeries"
    },
    {
      name: "Frozen",
      desc: "Premium ice cream, pastries, fruits & vegetables",
      bg: "#e6f4ff",
      icon: "❄️",
      color: "#70b7e6",
      items: [
        { name: "Premium Ice Cream", detail: "Gelato, sorbet, specialty flavors" },
        { name: "Frozen Pastries", detail: "Puff pastry, filo, ready-to-bake" },
        { name: "Frozen Produce", detail: "Fruits, vegetables, herbs" },
        { name: "Ready Meals", detail: "Prepared dishes, appetizers, sides" }
      ],
      brands: "Streets, Peters, Bulla, McCain"
    },
    {
      name: "Chilled",
      desc: "Fresh dairy, gourmet dips & chilled desserts",
      bg: "#f8fde9",
      icon: "🧊",
      color: "#a4bf5b",
      items: [
        { name: "Dairy Products", detail: "Milk, cheese, yogurt, butter" },
        { name: "Gourmet Dips", detail: "Hummus, tzatziki, specialty dips" },
        { name: "Fresh Desserts", detail: "Cheesecakes, mousses, puddings" },
        { name: "Chilled Beverages", detail: "Juices, smoothies, dairy drinks" }
      ],
      brands: "Dairy Farmers, Bega, Tamar Valley Dairy"
    },
    {
      name: "Confectionery",
      desc: "Fine chocolates, sweets & gift selections",
      bg: "#e6fff9",
      icon: "🍫",
      color: "#6bc9b8",
      items: [
        { name: "Premium Chocolate", detail: "Dark, milk, white, artisan bars" },
        { name: "Sweets & Lollies", detail: "Gummies, hard candy, specialty sweets" },
        { name: "Gift Boxes", detail: "Curated selections, hampers" },
        { name: "Seasonal Treats", detail: "Easter, Christmas, special occasions" }
      ],
      brands: "Cadbury, Lindt, Haigh's, Local Chocolatiers"
    },
    {
      name: "Grocery",
      desc: "Pantry essentials & specialty food lines",
      bg: "#fff7e6",
      icon: "🛒",
      color: "#f5c96b",
      items: [
        { name: "Pantry Staples", detail: "Pasta, rice, canned goods, oils" },
        { name: "Specialty Ingredients", detail: "International foods, gourmet items" },
        { name: "Condiments & Sauces", detail: "Dressings, marinades, cooking sauces" },
        { name: "Snacks", detail: "Chips, crackers, nuts, healthy options" }
      ],
      brands: "SPC, Sanitarium, Kellogg's, Arnott's"
    },
  ];

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#8dc63f]/10 px-4 py-1.5 text-xs font-semibold text-[#8dc63f] border border-[#8dc63f]/20 mb-4">
          PRODUCT CATEGORIES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Our Product Range</h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Browse our comprehensive product categories, each carefully curated to meet the diverse needs
          of Tasmanian retailers and hospitality venues.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-8 lg:gap-10">
        {categories.map((cat, idx) => (
          <div
            key={cat.name}
            className="group rounded-3xl border-2 border-slate-200 p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-[#8dc63f] transition-all duration-300"
            style={{ backgroundColor: cat.bg }}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Icon & Title */}
              <div className="flex-shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-4"
                  style={{ backgroundColor: cat.color + '40', border: `3px solid ${cat.color}` }}
                >
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#111111] mb-2">{cat.name}</h2>
                <p className="text-sm text-slate-600 mb-4">{cat.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8dc63f] bg-white/60 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#8dc63f]" />
                  Category #{idx + 1}
                </div>
              </div>

              {/* Products */}
              <div className="flex-1">
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#111111] mb-4">Product Lines</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {cat.items.map((item) => (
                    <div key={item.name} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white transition-all duration-200">
                      <h4 className="font-semibold text-[#111111] text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Brands */}
                <div className="mt-6 p-4 bg-white/50 rounded-xl border border-white/50">
                  <div className="text-xs font-bold uppercase tracking-wide text-[#8dc63f] mb-2">Featured Brands</div>
                  <p className="text-sm text-slate-700">{cat.brands}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-slate-300/50">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-full font-semibold text-sm hover:bg-[#8dc63f] transition-all duration-300 group-hover:scale-105">
                View Full {cat.name} Range
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-gradient-to-br from-[#111111] to-[#2a2a2a] text-white p-8 md:p-10 text-center">
        <h3 className="text-2xl font-bold mb-3">Need a Custom Product Mix?</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          We work with retailers to create tailored product selections that match your customer base and business goals.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-[#8dc63f] to-[#a4bf5b] text-white rounded-full font-bold hover:scale-105 transition-transform duration-300">
          Contact Our Team
        </button>
      </div>
    </section>
  );
}

/* SEASONAL PAGE - Enhanced with calendar and detailed programs */
function EdenSeasonalSection() {
  const seasons = [
    {
      name: "Christmas",
      period: "November - December",
      icon: "🎄",
      color: "#c41e3a",
      bg: "#fff0f0",
      description: "The biggest trading period of the year with comprehensive festive ranges",
      products: [
        "Premium gift hampers & boxed chocolates",
        "Festive confectionery & seasonal treats",
        "Party food & entertaining essentials",
        "Specialty baking ingredients",
        "Imported delicacies & gourmet items"
      ],
      support: "In-store displays, promotional pricing, extended range availability"
    },
    {
      name: "Easter",
      period: "March - April",
      icon: "🐰",
      color: "#8b4789",
      bg: "#fff0f4",
      description: "Premium chocolate eggs, bunnies and seasonal family favorites",
      products: [
        "Artisan chocolate eggs & bunnies",
        "Easter gift baskets & novelties",
        "Hot cross buns & seasonal bakery",
        "Family-sized chocolate blocks",
        "Baking ingredients for Easter treats"
      ],
      support: "Point-of-sale materials, early ordering programs, display solutions"
    },
    {
      name: "Summer",
      period: "December - February",
      icon: "☀️",
      color: "#f39c12",
      bg: "#fffbf0",
      description: "Ice cream, frozen treats and refreshing summer essentials",
      products: [
        "Premium ice cream & gelato ranges",
        "Frozen fruit & smoothie ingredients",
        "Chilled beverages & dairy drinks",
        "BBQ condiments & entertaining",
        "Light snacks & healthy options"
      ],
      support: "Freezer merchandising, promotional bundles, seasonal displays"
    },
    {
      name: "Winter",
      period: "June - August",
      icon: "❄️",
      color: "#3498db",
      bg: "#f0f8ff",
      description: "Comfort foods, hot beverages and warming winter favorites",
      products: [
        "Soups, stews & ready meals",
        "Hot chocolate & specialty teas",
        "Comfort desserts & puddings",
        "Baking ingredients for winter treats",
        "Hearty breakfast options"
      ],
      support: "Seasonal merchandising, comfort food promotions, recipe cards"
    },
    {
      name: "Back to School",
      period: "January - February",
      icon: "🎒",
      color: "#27ae60",
      bg: "#f0fff4",
      description: "Lunchbox essentials, snacks and family-friendly products",
      products: [
        "Individual snack packs & portions",
        "Healthy lunchbox options",
        "Breakfast cereals & spreads",
        "Juice boxes & drink pouches",
        "Convenient grab-and-go items"
      ],
      support: "Lunchbox displays, family-focused promotions, nutritional information"
    },
    {
      name: "Mother's Day & Father's Day",
      period: "May & September",
      icon: "💝",
      color: "#e91e63",
      bg: "#fff0f8",
      description: "Gift-worthy gourmet selections and premium treats",
      products: [
        "Gourmet gift boxes & hampers",
        "Premium chocolates & confectionery",
        "Specialty teas & coffees",
        "Artisan crackers & cheese accompaniments",
        "Luxury food items"
      ],
      support: "Gift packaging, promotional bundles, gift guide materials"
    }
  ];

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#8dc63f]/10 px-4 py-1.5 text-xs font-semibold text-[#8dc63f] border border-[#8dc63f]/20 mb-4">
          SEASONAL PROGRAMS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Year-Round Seasonal Support</h1>
        <p className="text-base text-slate-600 max-w-3xl mx-auto">
          Eden Foods supports key trading periods throughout the year with tailored product ranges,
          in-store displays, and promotional programs designed to maximize your seasonal sales opportunities.
        </p>
      </div>

      {/* Seasonal Programs Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {seasons.map((season) => (
          <div
            key={season.name}
            className="group rounded-3xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: season.bg }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                style={{ backgroundColor: season.color + '20', border: `2px solid ${season.color}` }}
              >
                {season.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#111111] mb-1">{season.name}</h2>
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/60 border border-slate-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {season.period}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 mb-6 font-medium">{season.description}</p>

            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wide text-[#111111] mb-3">Featured Products</h3>
              <ul className="space-y-2">
                {season.products.map((product, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: season.color }} />
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-300/50">
              <div className="flex items-start gap-2 mb-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: season.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-slate-600 font-medium">{season.support}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Planning Section */}
      <div className="rounded-3xl bg-gradient-to-br from-[#111111] to-[#2a2a2a] text-white p-8 md:p-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Plan Ahead with Eden Foods</h2>
          <p className="text-slate-300 mb-8">
            Our seasonal planning team works months in advance to ensure product availability, competitive pricing,
            and effective merchandising solutions for every key trading period.
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold mb-2">Early Planning</h3>
              <p className="text-sm text-slate-300">Pre-season meetings to discuss range, pricing and promotional opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold mb-2">Guaranteed Supply</h3>
              <p className="text-sm text-slate-300">Advance ordering systems to secure stock during peak demand periods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Marketing Support</h3>
              <p className="text-sm text-slate-300">POS materials, display ideas and promotional planning assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* BRANDS PAGE - Enhanced with categories and featured brands */
function EdenBrandsSection() {
  const brandCategories = [
    {
      category: "Premium Dairy & Chilled",
      icon: "🥛",
      color: "#a4bf5b",
      brands: [
        { name: "Chobani", origin: "Australian", specialty: "Greek Yogurt" },
        { name: "Jalna", origin: "Australian", specialty: "Organic Dairy" },
        { name: "Tamar Valley Dairy", origin: "Tasmanian", specialty: "Premium Yogurt" },
        { name: "Bega", origin: "Australian", specialty: "Cheese & Dairy" },
        { name: "Dairy Farmers", origin: "Australian", specialty: "Fresh Milk" }
      ]
    },
    {
      category: "International Gourmet",
      icon: "🌍",
      color: "#6bc9b8",
      brands: [
        { name: "Bonne Maman", origin: "French", specialty: "Preserves & Spreads" },
        { name: "Ayam", origin: "Malaysian", specialty: "Asian Cuisine" },
        { name: "Walkers", origin: "Scottish", specialty: "Shortbread & Biscuits" },
        { name: "Lindt", origin: "Swiss", specialty: "Premium Chocolate" }
      ]
    },
    {
      category: "Australian Favorites",
      icon: "🦘",
      color: "#f5c96b",
      brands: [
        { name: "Arnott's", origin: "Australian", specialty: "Biscuits & Snacks" },
        { name: "Carmans", origin: "Australian", specialty: "Healthy Snacks" },
        { name: "SPC", origin: "Australian", specialty: "Canned Fruits" },
        { name: "Sanitarium", origin: "Australian", specialty: "Breakfast Cereals" }
      ]
    },
    {
      category: "Artisan & Specialty",
      icon: "✨",
      color: "#e88ba0",
      brands: [
        { name: "Forager", origin: "Australian", specialty: "Organic Foods" },
        { name: "Waterthins", origin: "Australian", specialty: "Gourmet Crackers" },
        { name: "Haigh's", origin: "Australian", specialty: "Artisan Chocolate" },
        { name: "Local Bakeries", origin: "Tasmanian", specialty: "Fresh Bread" }
      ]
    },
    {
      category: "Frozen & Ice Cream",
      icon: "🍦",
      color: "#70b7e6",
      brands: [
        { name: "Streets", origin: "Australian", specialty: "Ice Cream" },
        { name: "Peters", origin: "Australian", specialty: "Ice Cream" },
        { name: "Bulla", origin: "Australian", specialty: "Dairy Desserts" },
        { name: "McCain", origin: "International", specialty: "Frozen Foods" }
      ]
    },
    {
      category: "Confectionery",
      icon: "🍬",
      color: "#c41e3a",
      brands: [
        { name: "Cadbury", origin: "Australian", specialty: "Chocolate" },
        { name: "Lindt", origin: "Swiss", specialty: "Premium Chocolate" },
        { name: "Haigh's", origin: "Australian", specialty: "Artisan Chocolate" },
        { name: "Darrell Lea", origin: "Australian", specialty: "Confectionery" }
      ]
    }
  ];

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#8dc63f]/10 px-4 py-1.5 text-xs font-semibold text-[#8dc63f] border border-[#8dc63f]/20 mb-4">
          BRAND PARTNERS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Trusted Brand Partners</h1>
        <p className="text-base text-slate-600 max-w-3xl mx-auto">
          We represent a carefully curated portfolio of premium Tasmanian producers, leading Australian brands,
          and select international lines across all product categories.
        </p>
      </div>

      {/* Brand Categories */}
      <div className="grid gap-8">
        {brandCategories.map((cat) => (
          <div
            key={cat.category}
            className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                style={{ backgroundColor: cat.color + '20', border: `2px solid ${cat.color}` }}
              >
                {cat.icon}
              </div>
              <h2 className="text-2xl font-bold text-[#111111]">{cat.category}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cat.brands.map((brand) => (
                <div
                  key={brand.name}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-[#8dc63f] hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-[#111111] mb-1">{brand.name}</h3>
                    <p className="text-xs text-slate-600 mb-1">{brand.specialty}</p>
                    <div className="inline-flex items-center gap-1 text-xs text-[#8dc63f] font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {brand.origin}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#8dc63f]/10 to-[#8dc63f]/5 border border-[#8dc63f]/20">
          <div className="text-4xl font-bold text-[#111111] mb-2">50+</div>
          <p className="text-sm text-slate-600">Premium Brand Partners</p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#8dc63f]/10 to-[#8dc63f]/5 border border-[#8dc63f]/20">
          <div className="text-4xl font-bold text-[#111111] mb-2">500+</div>
          <p className="text-sm text-slate-600">Individual Products</p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#8dc63f]/10 to-[#8dc63f]/5 border border-[#8dc63f]/20">
          <div className="text-4xl font-bold text-[#111111] mb-2">Local + Global</div>
          <p className="text-sm text-slate-600">Tasmanian, Australian & International</p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-gradient-to-br from-[#111111] to-[#2a2a2a] text-white p-8 md:p-10 text-center">
        <h3 className="text-2xl font-bold mb-3">Want to See Our Full Product Catalogue?</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          This is a selection of our brand partners. Complete product lists, pricing, and availability
          information are available to registered customers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#8dc63f] to-[#a4bf5b] text-white rounded-full font-bold hover:scale-105 transition-transform duration-300">
            Request Product Catalogue
          </button>
          <button className="px-8 py-3 bg-white/10 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300">
            Become a Customer
          </button>
        </div>
      </div>
    </section>
  );
}

/* CONTACT PAGE - Enhanced with better layout and info */
function EdenContactSection() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#8dc63f]/10 px-4 py-1.5 text-xs font-semibold text-[#8dc63f] border border-[#8dc63f]/20 mb-4">
          GET IN TOUCH
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Contact Eden Foods</h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Ready to discuss becoming a customer, updating your product range, or planning for seasonal activity?
          Our team is here to help.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Contact Form */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-[#111111] mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full h-12 rounded-xl border-2 border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Business Name *</label>
                <input
                  type="text"
                  placeholder="Your Business"
                  className="w-full h-12 rounded-xl border-2 border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f] transition-colors"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="john@business.com.au"
                  className="w-full h-12 rounded-xl border-2 border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(03) 1234 5678"
                  className="w-full h-12 rounded-xl border-2 border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2">Business Type</label>
              <select className="w-full h-12 rounded-xl border-2 border-slate-300 px-4 text-sm outline-none focus:border-[#8dc63f] transition-colors">
                <option>Select your business type</option>
                <option>Supermarket / Grocery Store</option>
                <option>Gourmet / Specialty Store</option>
                <option>Restaurant / Cafe</option>
                <option>Hotel / Accommodation</option>
                <option>Catering Business</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2">How Can We Help? *</label>
              <textarea
                rows={5}
                placeholder="Tell us about your enquiry - new account setup, range review, seasonal planning, product information, etc."
                className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#8dc63f] transition-colors resize-none"
              />
            </div>

            <button className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#8dc63f] to-[#a4bf5b] text-white font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg">
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          {/* Office Details */}
          <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#8dc63f]/10 flex items-center justify-center text-2xl">
                🏢
              </div>
              <h2 className="text-xl font-bold text-[#111111]">Head Office & Warehouse</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#8dc63f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#111111]">6-8 Sunmont Street</p>
                  <p className="text-sm text-slate-600">Derwent Park, TAS 7009</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#8dc63f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0362727999" className="font-semibold text-[#111111] hover:text-[#8dc63f]">(03) 6272 7999</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#8dc63f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@edenfoods.com.au" className="font-semibold text-[#111111] hover:text-[#8dc63f]">sales@edenfoods.com.au</a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-[#8dc63f]/5 to-white p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#8dc63f]/10 flex items-center justify-center text-2xl">
                ⏰
              </div>
              <h2 className="text-xl font-bold text-[#111111]">Business Hours</h2>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Monday - Friday</span>
                <span className="font-semibold text-[#111111]">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Saturday - Sunday</span>
                <span className="font-semibold text-[#111111]">Closed</span>
              </div>
            </div>
          </div>

          {/* Credit Application */}
          <div className="rounded-3xl border-2 border-[#8dc63f]/30 bg-gradient-to-br from-[#f8fde9] to-white p-8 shadow-lg">
            <h3 className="text-lg font-bold text-[#111111] mb-3">Ready to Open an Account?</h3>
            <p className="text-sm text-slate-600 mb-5">
              Download our credit application form or email it directly to our team. We'll guide you through
              the setup process.
            </p>
            <div className="flex flex-col gap-3">
              <button className="px-5 py-3 rounded-full border-2 border-[#8dc63f] bg-white text-[#8dc63f] font-semibold text-sm hover:bg-[#8dc63f] hover:text-white transition-all duration-300">
                📄 Download Credit Application
              </button>
              <button className="px-5 py-3 rounded-full bg-[#8dc63f] text-white font-semibold text-sm hover:bg-[#7ab535] transition-all duration-300">
                ✉️ Email Application to Us
              </button>
            </div>
          </div>
        </div>
      </div>
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
