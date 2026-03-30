const themeScript = `
(() => {
  const storageKey = "portfolio-theme";
  const root = document.documentElement;
  const savedTheme = window.localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
