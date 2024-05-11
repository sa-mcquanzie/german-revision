import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
//   let { user, response, supabase } = await updateSession(request)
//   let { data: session} = await supabase.auth.getSession()

//   if (!user) {
//     response = NextResponse.redirect('http://localhost:3000/login')

//     return response
//   }

// response = NextResponse.next()

// return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}