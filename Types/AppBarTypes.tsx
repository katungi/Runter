/**
 *
 * @param title - The title of the app bar
 * @param leading - The leading component of the app bar - preferably a string of material icon
 * @param actions - The actions of the app bar - preferably an array of Icon buttons
 *
 *  This is the appbar component, it will act as the basis of the top part of the scaffold.
 *  It will contain the title of the app and the menu button.
 */

type ActionType = {
  icon: string;
  onPress: () => void;
};

export type AppBarProps = {
  title: string;
  leading: string;
  actions: [ActionType];
  backAction: boolean;
};
