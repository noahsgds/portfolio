'use client';

export function FilterBar() {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 flex items-center gap-4">
      {/* Date Range */}
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-white/80">2023</span>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <span className="text-white/50">Catégorie:</span>
        <select className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-md px-4 py-2 text-white">
          <option value="all">Tous</option>
          <option value="formation">Formation</option>
          <option value="gestion">Gestion</option>
          <option value="recrutement">Recrutement</option>
        </select>
      </div>

      {/* Department Filter */}
      <div className="flex items-center gap-2">
        <span className="text-white/50">Département:</span>
        <select className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-md px-4 py-2 text-white">
          <option value="all">Tous</option>
          <option value="rh">RH</option>
          <option value="formation">Formation</option>
          <option value="gestion">Gestion</option>
        </select>
      </div>

      {/* Search */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-md px-4 py-2 pl-10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Export Button */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 hover:border-white/20 text-white transition-colors">
        <span className="mr-2">Exporter</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </button>
    </div>
  );
}
