
export const dynamic = "force-dynamic";
however to be more granular  
async function PostPage({params}: PostPageProps) {
    for big this like <SyntaxHighlighter> don't use
    "use client";
   const response = await fetch(`https://dummyjson.com/posts/${params.id}`, {cache: "no-cache"} or next:  {revalidate: 3600});
   if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
   }
      const data = await response.json();

      return (
        {data.title}
        <SyntaxHighlighter>
        {`function post() { return "Hello Mom"; }`}
        </SyntaxHighlighter>
      )
}

------- bornhappy5   kind
const randomNumber = Math.floor(Math.random() * 10) + 1;

import { NextResponse } from 'next/server'

export function middleware(request) {

  if (request.nextUrl.pathname === '/api/hello') {

    return NextResponse.rewrite(new URL('/hello', request.url))

  }

  return NextResponse.next()

}

// pages/hello.tsx

export default function Hello() {
  return <h1>Hello World!</h1> 
}
