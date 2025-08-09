
import * as React from 'react'
export function Card({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['border border-slate-200 bg-white rounded-2xl', className].join(' ')} {...props} />
}
export function CardContent({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4', className].join(' ')} {...props} />
}
