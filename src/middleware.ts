import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const publicRoutes = ['/signin', '/signup'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = !publicRoutes.includes(path);
    const userId = cookies().get('userId')?.value;

    if (isProtectedRoute && !userId) {
        return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }

    if (!isProtectedRoute && userId && !req.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)'],
};
