const welcome = (req, res) => {
  res.json({
    welcome: 'Hello',
  });
};

module.exports = {
  welcome,
};
