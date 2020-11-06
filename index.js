const request = new XMLHttpRequest();

const dataUrl = "https:www.xxx.json";

function getData(dataUrl) {
  request.open('GET', dataUrl, true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        console.log("request.responseText",JSON.parse(request.responseText));
    }
  };
}
getData(dataUrl);
