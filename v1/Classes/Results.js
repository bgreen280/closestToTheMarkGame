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

export class MenuItem {
  constructor(name, action, module, description) {
    this.id = action,
    this.name = name,
    this.action = action,
    this.module = module,
    this.description = description
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  getAction() {
    console.log(this.action);
    return this.action;
  }

  getModule() {
    console.log(this.module);
    return this.module;
  }
  
  getDescription() {
    console.log(this.description);
    return this.description;
  }

  // TODO: add create, update, delete methods
}

export class MenuItems {
  constructor() {
    this.menuItems = {}
  }

  getMenu(id) {
    console.log(this.menuItems[id]);
    return this.menuItems[id];
  }

  getAction() {
    console.log(this.action);
    return this.action;
  }

  getDescription() {
    console.log(this.description);
    return this.description;
  }

  // TODO: add create, update, delete methods
}