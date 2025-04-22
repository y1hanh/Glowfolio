import React from "react";
import { Link } from "react-router";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { menu } from "../data";

const NavBar = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "var(--nav-bg)",
  backdropFilter: "blur(8px)",
  borderBottom: "1px solid var(--border)",
  zIndex: 100,
});

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

export function Navigation() {
  return (
    <NavBar>
      <Link to="/">
        <Logo src="/logo.png" alt="Logo" />
      </Link>
      <MenuContainer>
        {menu.map((item) => (
          <Link key={item.path} to={`/${item.path}`}>
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </MenuContainer>
    </NavBar>
  );
}
