import { Card, CardContent } from "@/components/ui/card";

const ProductCardSkeleton = () => {
  return (
    <Card className="bg-card border-border h-full">
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-muted animate-pulse"></div>
      </div>
      <CardContent className="p-4 flex flex-col h-[calc(100%-192px)]">
        <div className="h-4 w-1/4 bg-muted animate-pulse rounded-md mb-2"></div>
        <div className="h-6 w-3/4 bg-muted animate-pulse rounded-md mb-3"></div>
        <div className="flex-grow"></div>
        <div className="space-y-2 mb-4">
          <div className="h-8 w-1/2 bg-muted animate-pulse rounded-md"></div>
          <div className="h-5 w-3/4 bg-muted animate-pulse rounded-md"></div>
          <div className="h-4 w-1/2 bg-muted animate-pulse rounded-md"></div>
        </div>
        <div className="h-9 w-full bg-muted animate-pulse rounded-md mt-auto"></div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;