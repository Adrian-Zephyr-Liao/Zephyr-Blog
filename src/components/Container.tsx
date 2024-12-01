import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        // 基础样式
        'mx-auto w-full',
        // 响应式内边距
        'px-4 sm:px-6 lg:px-8',
        // 最大宽度限制
        'max-w-screen-xl',
        // 内容间距
        'py-20',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
