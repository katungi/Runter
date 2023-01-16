import type { ThemeData } from './ThemeData';

interface MaterialAppProps {
  // home takes a react component
  home: React.ComponentType;
  theme: ThemeData;
  title: string;
}

export type { MaterialAppProps };