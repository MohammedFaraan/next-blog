import { cn } from '@/lib/utils'

interface ContainerInterface {
    children: React.ReactNode,
    className?: string
}

export default function Container({children, className} : ContainerInterface) {
  return (
    <div className={cn("container mx-auto px-4", className)}>
      {children}
    </div>
  )
}
