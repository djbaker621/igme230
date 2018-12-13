$(".menu").click(function(){
    $(this).next(".submenu").slideToggle("slow");
});

let norm = ("story0.txt");
$("#stories").val(norm);
$("#story").load(norm);

$("#stories").change(function (){
    i = $(this).val();
    $("#story").load(norm);
})

const storyField = document.querySelector("#stories");
const colorSelect = document.querySelector("#colors");
const prefix = "djbaker621-";
const storyKey = prefix + "story";
const colorKey = prefix + "color";
var bgColor = document.querySelector("#source");

const storedColor = localStorage.getItem(colorKey);
bgColor.style.backgroundColor = localStorage.getItem(colorKey);

if (storedColor) {
    colorSelect.querySelector(`option[value='${storedColor}']`).selected = true;
}

colorSelect.onclick = e => {
    localStorage.setItem(colorKey, e.target.value);
    bgColor.style.backgroundColor = localStorage.getItem(colorKey);
    localStorage.setItem(bgColor, e.target.value);
}