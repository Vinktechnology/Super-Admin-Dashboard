class Route {
  constructor(name, parent) {
    this.name = name;
    this.id = null;
    this.parent = parent;
  }

  setId(id) {
    this.id = id;
  }

  toString() {
    return this.name;
  }

  getWithId(id) {
    return this.name + "/" + id;
  }
}

export const DASHBOARD = new Route("/dashboard");
export const PROJECTS = new Route("/projects", DASHBOARD);
export const SUPPORT_THEAD = new Route("/support", PROJECTS);
