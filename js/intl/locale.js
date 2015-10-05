(function(global) {

if (!global.mozIntl) {
  global.mozIntl = {};
}

global.mozIntl.Locale = {
  isStructurallyValid,
  Canonicalize,
  Resolve,
  Supported,
  PrioritizeAvailable
};

})(this);
