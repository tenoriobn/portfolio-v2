export interface ThemeToggleProps {
  themes: Theme[];
}

export interface Theme {
  id: string;
  linkName: string;
  icon: {
    url: string;
  };
}