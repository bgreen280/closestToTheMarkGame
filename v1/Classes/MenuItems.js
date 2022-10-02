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