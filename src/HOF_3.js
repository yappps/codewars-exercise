const isRubyComing = list =>
  list.filter(dev => dev.language === "Ruby").length === 0 ? false : true;

module.exports = isRubyComing;
