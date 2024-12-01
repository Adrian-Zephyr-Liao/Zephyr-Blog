import NotFoundIcon from '@/assets/404.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image src={NotFoundIcon} alt="not-found" className="mx-auto h-1024 w-1024 !text-primary"></Image>
        {/* <svg
          className="mx-auto h-24 w-24 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
        </svg> */}
        <h1 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">嗷欧，看起来你在错误的星球上着陆了！</h1>
        <p className="mt-4 text-muted-foreground text-xs sm:text-base">你正在寻找的页面似乎已经飘向了宇宙。但别担心，我们会帮助你回去的！</p>
        <div className="mt-6 flex flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            回到首页
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            prefetch={false}
          >
            探索银河
          </Link>
        </div>
      </div>
    </div>
  )
}
