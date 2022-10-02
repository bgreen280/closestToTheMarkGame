import { MenuItem } from './MenuItem.js';

export class Menu {
  constructor(menuItems) {
    this.menuItems = this.createMenu(menuItems)
  }

  createMenuItem(menuItem) {
    const [name, action, description] = menuItem;
    const newMenuItem = new MenuItem(name, action, description)
    // this.menuItems.push(newMenuItem);
    // console.log(newMenuItem);
    return newMenuItem;
  }

  createMenu(menuItems) {
    const newMenu = [];
    for (let menuItem in menuItems) {
      const newMenuItem = this.createMenuItem(menuItem);
      newMenu.push(newMenuItem);
    }
    this.menuItems = newMenu;
    // console.log(this.menuItems);
    return this.menuItems;
  }

  getMenuItems() {
    if (this.menuItems.length > 0) {
      for (let menuItem in this.menuItems) {
          console.log(menuItem);
        };
    } else {
      console.log('no menu items yet')
    }
    return this.menuItems;
  }

  //TODO: getMenuItem, updateMenuItem, deleteMenuItem
}