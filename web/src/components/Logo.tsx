export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        aria-hidden="true"
        className="h-9 w-9"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="10" fill="#EFF0FF" />
        <path
          d="M9 20c0-5.5 4.5-10 9-10s9 4.5 9 10"
          stroke="#5D6BF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M7 20h22" stroke="#5D6BF6" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 10v10" stroke="#5D6BF6" strokeWidth="2" strokeLinecap="round" />
        <circle cx="25" cy="11" r="3.5" fill="#F6D16E" />
      </svg>
      <span className="text-xl font-black tracking-tight text-brand-500">
        Vagas<span className="text-brand-300">UX</span>
      </span>
    </div>
  )
}
