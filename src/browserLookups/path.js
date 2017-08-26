export default {
  name: 'path',

  lookup(options) {
    let found;
    let mapping = options.pathMapping;
    let path = window.location.pathname;    

    Object.keys(mapping).forEach(function (key) {
      let searchFor = `/${key}/`;
      if (path.includes(searchFor)) {
        found = mapping[key];
        return;
      }
    });

    return found;
  }
};
