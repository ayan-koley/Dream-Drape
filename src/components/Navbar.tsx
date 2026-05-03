import { AppBar, Toolbar, Typography, IconButton, Box, InputBase, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type NavbarProps = {
  search: string;
  onSearchChange: (v: string) => void;
  mode: "light" | "dark";
  onToggleMode: () => void;
};

export default function Navbar({ search, onSearchChange, mode, onToggleMode }: NavbarProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.8),
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <ShoppingBagIcon color="primary" />
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em", flexShrink: 0 }}
        >
          Lumen<span style={{ opacity: 0.5 }}>Shop</span>
        </Typography>
        <Box
          sx={{
            position: "relative",
            ml: { xs: 1, sm: 4 },
            flexGrow: 1,
            maxWidth: 480,
            borderRadius: 999,
            backgroundColor: (t) => alpha(t.palette.text.primary, 0.06),
            "&:hover": { backgroundColor: (t) => alpha(t.palette.text.primary, 0.1) },
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <SearchIcon fontSize="small" sx={{ opacity: 0.6 }} />
          <InputBase
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products…"
            sx={{ ml: 1, flex: 1, py: 1 }}
            inputProps={{ "aria-label": "search products" }}
          />
        </Box>
        <IconButton onClick={onToggleMode} aria-label="toggle theme">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}