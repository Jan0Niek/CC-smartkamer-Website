const elements = document.getElementsByName("body");
elements.forEach(element => {
  const cssObj = window.getComputedStyle(element, null);
  let fontSize = cssObj.getPropertyValue("font-size");
  if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)) 
  {
    console.log("yep mobile")
    fontSize = "xx-large";
  } else {
    console.log("desktop?")
  }

});



