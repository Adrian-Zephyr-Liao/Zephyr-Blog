'use client'
import Container from '@/components/Container'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Home() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'while (true) {\n  console.log("永远相信美好的事情即将发生");\n}',
        'try {\n  追逐梦想();\n} catch (err) {\n  继续努力();\n}',
        'if (坚持 > 放弃) {\n  return Success;\n}',
        'function 人生() {\n  return "代码改变世界";\n}',
        'Promise.resolve("星光不负赶路人").then(coder => 未来);',
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
      cursorChar: '_',
      showCursor: true,
      smartBackspace: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div className="relative">
        <Image
          src="https://bu.dusays.com/2024/12/03/674df1c233164.png"
          width={1920}
          height={1080}
          alt="Image"
          className={cn(
            'w-full object-cover',
            'h-[40vh] md:h-[50vh] lg:h-[60vh]',
            'bg-cover bg-center bg-no-repeat',
            'bg-[url("https://bu.dusays.com/2024/12/03/674deab4259df.png")]',
            'after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-background/10',
          )}
        />
        <div
          ref={el}
          className={cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'text-2xl md:text-3xl lg:text-4xl font-bold text-white',
            'drop-shadow-lg',
            '[-webkit-text-stroke:1px_rgba(0,0,0,0.1)]',
          )}
        />
      </div>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  )
}
