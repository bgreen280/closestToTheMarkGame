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