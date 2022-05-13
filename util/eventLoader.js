const dark = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', dark('message'));
};
