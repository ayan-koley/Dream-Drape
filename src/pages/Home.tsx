import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from '../components/Navbar.tsx';
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { products, categories } from "../data/products";

export default function Home() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(prefersDark ? "dark" : "light");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === "dark" ? "#a78bfa" : "#6d28d9" },
          background: {
            default: mode === "dark" ? "#0b0b12" : "#fafaf9",
            paper: mode === "dark" ? "#15151f" : "#ffffff",
          },
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily:
            '"Inter", "SF Pro Display", system-ui, -apple-system, "Segoe UI", sans-serif',
          h3: { fontWeight: 800, letterSpacing: "-0.03em" },
        },
      }),
    [mode],
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar
          search={search}
          onSearchChange={setSearch}
          mode={mode}
          onToggleMode={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
        />

        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Chip label="Curated picks · Updated daily" color="primary" variant="outlined" sx={{ mb: 2 }} />
            <Typography variant="h3" component="h1">
              Gear that just <span style={{ color: theme.palette.primary.main }}>works</span>.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 560, mx: "auto" }}
            >
              Hand-picked tech and lifestyle products. Tap Buy Now to shop on Amazon.
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 4, overflowX: "auto", pb: 1, justifyContent: { md: "center" } }}
          >
            {categories.map((c) => (
              <Chip
                key={c}
                label={c}
                onClick={() => setCategory(c)}
                color={category === c ? "primary" : "default"}
                variant={category === c ? "filled" : "outlined"}
                sx={{ flexShrink: 0 }}
              />
            ))}
          </Stack>

          <Grid container spacing={3}>
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <ProductSkeleton />
                  </Grid>
                ))
              : filtered.map((p) => (
                  <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <ProductCard product={p} />
                  </Grid>
                ))}
          </Grid>

          {!loading && filtered.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6">No products match your search.</Typography>
              <Typography color="text.secondary">Try a different keyword or category.</Typography>
            </Box>
          )}

          <Box
            component="footer"
            sx={{
              mt: 10,
              pt: 4,
              borderTop: 1,
              borderColor: "divider",
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            <Typography variant="caption">
              As an Amazon Associate we earn from qualifying purchases. © {new Date().getFullYear()} LumenShop.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}