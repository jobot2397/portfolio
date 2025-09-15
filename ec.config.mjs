import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ["vitesse-dark"],
  plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
  defaultProps: {
    frame: "code",
    showLineNumbers: false,
    wrap: false,
  },
  styleOverrides: {
    borderRadius: "0.5rem",
    borderWidth: "1px",
    borderColor: "var(--color-border-primary)",
    codeFontFamily:
      "ui-monospace, SFMono-Regular, 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace",
  },
  useDarkModeMediaQuery: false,
});
