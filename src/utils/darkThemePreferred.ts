// Check if browser default theme is dark
export const darkThemePreferred = (): boolean => window.matchMedia("(prefers-color-scheme: dark)").matches;

