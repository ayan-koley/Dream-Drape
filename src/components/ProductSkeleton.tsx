import { Card, CardContent, Skeleton, Box } from "@mui/material";

export default function ProductSkeleton() {
  return (
    <Card sx={{ borderRadius: 4, height: "100%" }}>
      <Box sx={{ aspectRatio: "1 / 1" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <CardContent>
        <Skeleton width={60} height={24} sx={{ mb: 1 }} />
        <Skeleton width="80%" height={28} />
        <Skeleton width="100%" />
        <Skeleton width="60%" />
        <Skeleton width={80} height={32} sx={{ mt: 1 }} />
        <Skeleton variant="rounded" width="100%" height={42} sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  );
}