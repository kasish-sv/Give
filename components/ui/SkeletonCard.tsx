import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="p-4 grid gap-6 grid-cols-2 lg:grid-cols-5 justify-center justify-items-center">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <Skeleton className="aspect-square w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <br />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>

      <Card className="w-full max-w-xs">
        <CardHeader>
          <Skeleton className="aspect-square w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <br />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>

      <Card className="w-full max-w-xs hidden lg:block">
        <CardHeader>
          <Skeleton className="aspect-square w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <br />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>

      <Card className="w-full max-w-xs hidden lg:block">
        <CardHeader>
          <Skeleton className="aspect-square w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <br />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>

      <Card className="w-full max-w-xs hidden lg:block">
        <CardHeader>
          <Skeleton className="aspect-square w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <br />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>
    </div>
  );
}
