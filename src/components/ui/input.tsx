
import * as React from 'react'
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className='w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-300' {...props} />
}
