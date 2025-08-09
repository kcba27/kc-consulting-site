
import * as React from 'react'
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className='w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-300' {...props} />
}
