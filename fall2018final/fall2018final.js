$(".top").click(function () {
    $(this).next(".list").slideToggle("slow");
});

let place = ("article0.txt");
$("form").val(place);
$("article").load(place);

$("form").change(function () {
    place = $(this).val();
    $("article").load(place);
});
