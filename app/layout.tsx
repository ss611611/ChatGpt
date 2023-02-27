import '../styles/globals.css'


export const metadata = {
  title: 'ChatGPT Clone',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <head/>

      <body>
        <div className="flex">
          {/* Sidebar */}

          {/* ClientProvider - Notification */}
          
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
