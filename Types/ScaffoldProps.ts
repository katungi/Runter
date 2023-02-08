export type ScaffoldProps = {
  // Path: Types/ScaffoldProps.ts

  body: React.ReactElement;
  primary?: boolean;
  backgroundColor?: string | '#fff';
  // Scaffold takes a few components as props
  // TODO: Build these components with reasonable defaults
  AppBar?: React.ReactElement;
  BottomNavigationBar?: React.ReactElement;
  // BottomSheet?: React.ReactElement;
  FloatingActionButton?: boolean
};
