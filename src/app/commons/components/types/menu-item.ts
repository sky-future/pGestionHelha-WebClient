//Interface contenanant le contenu de chaque bouton dans le menu
export interface MenuItem {

  label: string;
  icon: string;
  path: string;
  click: any;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}
