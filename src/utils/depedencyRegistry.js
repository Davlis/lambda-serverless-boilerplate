const registry = {};

const set = (name, depedency) => { registry[name] = depedency; };

const get = name => registry[name];

module.exports = {
  set,
  get,
};
