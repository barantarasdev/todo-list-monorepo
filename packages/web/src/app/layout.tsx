import type { Metadata } from 'next'
import { Suspense } from 'react'

import StoreProvider from '@/store/StoreProvider'
import ThemeProvider from '@/common/themes/ThemeProvider'
import Header from '@/components/Header'
import Snackbar from '@/components/common/Snackbar'
import { Main } from '@/styles'
import Loading from '@/app/loading'

export const metadata: Metadata = {
  title: 'TodoList',
  description: 'Create your own todo list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StoreProvider>
          <ThemeProvider>
            <Header />

            <Suspense fallback={<Loading />}>
              <Main>{children}</Main>
            </Suspense>

            <Snackbar />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
