import { styled } from "@mui/system";

export const ActionButton = styled("button")({
  backgroundColor: "transparent",
  border: "2px solid var(--highlighting)",
  color: "var(--highlighting)",
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "0.9rem",
  fontWeight: 500,
  justifyContent: "center",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "var(--highlighting)",
    color: "var(--text-primary)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(66, 214, 84, 0.2)",
  },
  "&:before": {
    fontSize: "0.8rem",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(66, 214, 84, 0.3)",
  },
});

export const DemoButton = styled(ActionButton)({
  "&:before": {
    content: '"▶"',
  },
});

export const WebsiteButton = styled(ActionButton)({
  "&:before": {
    content: '"🔗"',
  },
});
