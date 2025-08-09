
import * as React from 'react'
export function Badge({ className='', children }: { className?: string, children: React.ReactNode }) {
  return <span className={['inline-flex items-center rounded-2xl bg-slate-100 text-slate-700 px-3 py-1 text-xs', className].join(' ')}>{children}</span>
}
