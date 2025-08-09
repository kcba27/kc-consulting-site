
import * as React from 'react'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline', size?: 'sm'|'md'|'lg', className?: string }
export function Button({variant='default', size='md', className='', ...props}: Props) {
  const base = 'inline-flex items-center justify-center font-medium transition rounded-2xl'
  const sizes = { sm:'px-3 py-1.5 text-sm', md:'px-4 py-2', lg:'px-5 py-3 text-base' }[size]
  const styles = variant==='outline'
    ? 'border border-slate-300 text-slate-900 hover:bg-slate-50'
    : 'bg-slate-900 text-white hover:opacity-95'
  return <button className={[base, sizes, styles, className].join(' ')} {...props} />
}
