// This function runs when the button is clicked
function changeText1() {

  // document → represents the whole HTML page

  // getElementById("title1") → selects the element with id="title"
  // (in your HTML, it's the <h1> tag)

  // innerText → changes the visible text inside that element
  document.getElementById("title1").innerText = "Changed using External JS";

}

// Simple understanding:
// You click the button
// The function changeText1() runs
// It finds <h1 id="title1">Hello</h1>
// And changes Hello → Changed using External JS