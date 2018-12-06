/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});

let norm = ("content1.txt");
$("#choose-content").val(norm);
$("#content").load(norm);

$("#choose-content").change(function () {
    norm = $(this).val();
    $("#content").load(norm);
});
