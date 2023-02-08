export type ScaffoldProps = {
  // Path: Types/ScaffoldProps.ts

  body: React.ReactElement;
  primary?: boolean;
  backgroundColor?: string | '#fff';
  // Scaffold takes a few components as props
  // TODO: Build these components with reasonable defaults
  appBar?: React.ReactElement;
  bottomNavigationBar?: React.ReactElement;
  // BottomSheet?: React.ReactElement;
  floatingActionButton?: boolean
};
