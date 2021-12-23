// Generate a random color
let color = pick_color();

//Style the page according to the color
style_page(color);

//Button functionality 
document.getElementById("click_button").addEventListener("click", function () {
    color = pick_color();
    style_page(color);
});

//function to generate a color
function pick_color() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

//Function to style the page
function style_page(color) {

    //Change the background color to chosen color
    document.querySelector("body").style.backgroundColor = color;
    
    // Insert text with the color name that was generated
    let text_color = ntc.name(color)[1];
    
    document.getElementById("color_indicator").innerHTML = "Background-color: " +
        `<span style="color:turquoise;">${text_color}</span>`;
    
}