import { Metadata } from 'next'
import { viewport as studioViewport } from 'next-sanity/studio'

export const metadata: Metadata = {
  title: 'BPON CMS - Sanity Studio',
}

export const viewport = studioViewport

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      {children}
    </div>
  )
}
