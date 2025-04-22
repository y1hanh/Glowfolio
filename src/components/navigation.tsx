import React, { useState } from "react";
import { Link } from "react-router";
import { Box, Drawer, useMediaQuery, useTheme, styled } from "@mui/material";
import { menu } from "../data";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MenuButton } from "./buttons";

const Logo = styled("img")({
  height: "60px",
  "@media (max-width: 600px)": {
    height: "50px",
  },
  width: "auto",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  objectFit: "scale-down",
});

const MenuContainer = styled(Box)({
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  "& a": {
    color: "var(--text-primary)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    "&:hover": {
      color: "var(--accent)",
      transform: "translateY(-2px)",
    },
  },
});

const MobileMenuContainer = styled(Box)({
  padding: "2rem",
  width: "250px",
  height: "100%",
  backgroundColor: "var(--nav-bg)",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "& a": {
    color: "var(--text-primary)",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    "&:hover": {
      color: "var(--accent)",
    },
  },
});

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--nav-bg)",
        zIndex: 100,
      }}
    >
      <Link to="/">
        <Logo src="/logo.png" alt="Logo" />
      </Link>

      {isMobile ? (
        <>
          <MenuButton onClick={toggleMobileMenu} aria-label="Menu">
            <FaBars size={24} />
          </MenuButton>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            PaperProps={{
              sx: {
                backgroundColor: "var(--nav-bg)",
                borderLeft: "1px solid var(--border)",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <MenuButton onClick={toggleMobileMenu} aria-label="Close menu">
                <IoMdClose size={24} />
              </MenuButton>
            </Box>
            <MobileMenuContainer>
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={`/${item.path}`}
                  onClick={handleLinkClick}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </MobileMenuContainer>
          </Drawer>
        </>
      ) : (
        <MenuContainer>
          {menu.map((item) => (
            <Link key={item.path} to={`/${item.path}`}>
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </MenuContainer>
      )}
    </Box>
  );
}
