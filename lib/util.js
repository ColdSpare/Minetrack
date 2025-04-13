const config = require('../config');

function getPlayerCountOrNull(resp) {
  if (
    resp &&
    resp.players &&
    typeof resp.players.online === 'number'
  ) {
    const count = resp.players.online;
    return count > config.maxPlayerCount ? null : count;
  } else {
    return null;
  }
}
module.exports = {
  getPlayerCountOrNull
}
