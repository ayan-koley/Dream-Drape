import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 12,
          "& .product-img": { transform: "scale(1.06)" },
        },
      }}
    >
      <Box sx={{ overflow: "hidden", aspectRatio: "1 / 1", bgcolor: "action.hover" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          loading="lazy"
          className="product-img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip label={product.category} size="small" sx={{ mb: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2, fontWeight: 800 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          endIcon={<LaunchIcon />}
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          sx={{ borderRadius: 999, textTransform: "none", fontWeight: 600 }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}