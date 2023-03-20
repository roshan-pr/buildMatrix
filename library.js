const getBuildData = (url, Authorization, cb = console.log) => {
  var requestOptions = {
    method: "POST",
    headers: { Authorization },
  };

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then((response) => {
      const data = JSON.stringify(response);
      cb(data);
    });
};

module.exports = { getBuildData };
