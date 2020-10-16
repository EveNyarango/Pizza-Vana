$(document).ready(function () {
    $("#order").click(function () {
        $("#receipt").show("slow");
    });
    $("#del").click(function () {
        $("#delivery").show("slow");
    });

});


// $(document).ready(function () {
//     $("#checkout").click(function () {
//         $("#checkout").hide();
//         $("addlist").hide();
//         $("#deliver").slideDown(1000);
//         $("#pizzatotal").append("Your bill is ksh. " + checkoutTotal);
//       })
//     });