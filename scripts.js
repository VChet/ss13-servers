const getJSON = function(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const declOfNum = function(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const getServerData = function(url, blockId) {
  getJSON(url, function(error, data) {
    if (error) return console.error({ error });
    const dataBlock = document.querySelector(blockId);
    dataBlock.querySelector(".servers__mode").innerText = `${data.map} (${data.mode})`;
    dataBlock.querySelector(".servers__players").innerText = `${data.players} ${declOfNum(data.players, ["игрок", "игрока", "игроков"])}`;
    dataBlock.querySelector(".servers__roundTime").innerText = `Продолжительность: ${data.roundduration}`;
  });
}

const updateTauServers = function() {
  getServerData("https://taucetistation.org/server/tauceti/json", "#TC1");
  getServerData("https://taucetistation.org/server/tauceti2/json", "#TC2");
  getServerData("https://taucetistation.org/server/tauceti3/json", "#TC3");
}

document.addEventListener("DOMContentLoaded", function() {
  updateTauServers();
  setInterval(() => {
    updateTauServers();
  }, 10 * 60 * 1000); // every 10 minutes
});
