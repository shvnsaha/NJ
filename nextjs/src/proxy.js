import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const currentCookie = request.cookies.get("nextjs-token")
    // console.log(currentCookie);
    const dummyUserData = {
        role: "client",
        email: "test@admin.com"
    }
    let isServicesPage = request.nextUrl.pathname.includes("/services")
    let isAdmin = dummyUserData.role === 'admin';
    if(isServicesPage && !isAdmin){
        return NextResponse.redirect(new URL('/',request.url))
    }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }