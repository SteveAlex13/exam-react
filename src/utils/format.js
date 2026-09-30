export const yearOf=date=>date?.slice(0,4)||'—'
export const ratingOf=value=>Number(value||0).toFixed(1)
export function runtimeOf(minutes){if(!minutes)return'Durasi tidak tersedia';const hours=Math.floor(minutes/60);const rest=minutes%60;return hours?`${hours}j ${rest}m`:`${rest}m`}
