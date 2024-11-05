import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex-1 bg-background">
      <main className="container py-8">
        <Card className="mx-auto">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-4" /> {/* Title */}
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" /> {/* Author avatar */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" /> {/* Author name */}
                <Skeleton className="h-4 w-24" /> {/* Date */}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-40 w-full" /> {/* Image placeholder */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
