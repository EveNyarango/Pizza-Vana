// business logic
// constructor
function Orderpizza (flavour,size,crust,topping,number1){
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number1 = number1;
}

function Checkprice (size_price, crust_price, topping_price, number1 ){
   this.size_price = size_price;
   this.crust_price = crust_price;
   this.topping_price = topping_price;
   this.number1 = number1
}

Orderpizza.prototype.totalprice=function(){
    return (size_price + crust_price + topping_price)*number1
}

















$(document).ready(function () {
    $("#order").click(function () {
        $("#receipt").show("slow");
    });
    $("#del").click(function () {
        $("#delivery").show("slow");
    });

});

$(document).ready(function(){

    $("#myform").submit(function(event){
        event.preventDefault();
        var flavour =$("#flavour").val();
        // alert(flavour);
    
        var size =parseInt($("#size").val());
        // alert(size);
        console.log(size);
        var crust =parseInt($("#crust").val());
        var topping =parseInt($("#topping").val());
        var quantity =parseInt($("#number1").val());
        productAddToTable()
        allClear() 
});
});

function productAddToTable() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
    // Append product to the table
    $("#productTable tbody").append("<tr>" +
        "<td>" + $("#flavour").val() + "</td>" +
        "<td>" + $("#size").val() + "</td>" +
        "<td>" + $("#crust").val() + "</td>" +
        "<td>" + $("#topping").val() + "</td>" +
        "<td>" + $("#number1").val() + "</td>" +
        "<td></td>" +
        "<td>" +
        "<button type='button' onclick='rowDelete(this);' class='btn btn-default text-danger'>" +
        "<i class='fas fa-trash-alt'></i>" +
        "</button>" +
        "</td>" +
        "</tr>");
}
function rowDelete(ctl) {
    $(ctl).parents("tr").remove();
}
function allClear() {
    $("#flavour").val("");
    $("#size").val("");
    $("#crust").val("");
    $("#topping").val("");
    $("#number1").val("");
}
