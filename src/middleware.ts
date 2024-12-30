import { match } from '@formatjs/intl-localematcher'
import { NextResponse, type NextRequest } from 'next/server'
import Negotiator from 'negotiator'

export function middleware(request: NextRequest) {

  const headers = { 'accept-language': 'en-US,en;q=0.5' }
  const languages = new Negotiator({ headers }).languages()
  const locales = ['en-US', 'pt-BR', 'es-ES']
  const defaultLocale = 'pt-BR'

  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = match(languages, locales, defaultLocale)  

  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)

}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}