import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, monokai } from "react-syntax-highlighter/dist/styles";
import { code, profile } from "../data";
import { TypedText } from "../components/typingEffect";
import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { Box, Typography } from "@mui/material";

export default function Welcome() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <Box className="welcome-page min-h-screen w-full text-white flex flex-col items-center justify-center px-4">
      <Box
        className=" rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full"
        sx={{
          backgroundColor: "var(--card-content-bg)",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d]"
          sx={{ backgroundColor: "var(--card-title-bg)" }}
        >
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <Typography
            className="ml-4 text-sm text-gray-300"
            sx={{ color: "var(--text-primary)" }}
          >
            ~/boot.ts
          </Typography>
        </Box>

        <Box
          className="px-6 py-4 font-mono text-sm"
          sx={{ backgroundColor: "var(--card-content-bg)" }}
        >
          <div className="text-green-400">// boot.ts</div>
          <TypedText fullText={profile.welcomeMessage} />

          <SyntaxHighlighter
            language="typescript"
            style={theme === "dark" ? monokai : docco}
            customStyle={{
              background: "var(--card-content-bg)",
              padding: "1rem 0 0 0",
              margin: 0,
              fontSize: "0.9rem",
              border: "none",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </Box>
      </Box>

      <Box
        sx={{ color: "var(--text-primary)", cursor: "pointer" }}
        onClick={() => navigate("/experience")}
        className="mt-8 text-sm animate-bounce"
      >
        {"->"} check out
      </Box>
    </Box>
  );
}
