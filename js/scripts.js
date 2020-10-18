// business logic
// constructor
function Orderpizza(flavour, size, crust, topping, number1) {
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number1 = number1;
}


function Checkprice(size_price, crust_price, topping_price, number1) {
    this.size_price = size_price;
    this.crust_price = crust_price;
    this.topping_price = topping_price;
    this.number1 = number1
}

Checkprice.prototype.totalprice = function () {
    return (this.size_price + this.crust_price + this.topping_price) * this.number1
}
var sizePrice = [700, 1000, 1400]
var sizeName = ["Small", "Medium", "Large"]
var crustPrice = [300, 200, 150]
var crustName = ["Cripsy", "Stuffed", "Glutten - free"]
var toppingPrice = [200, 200, 150, 150]
var toppingName = ["Cheese", "Bacon", "Sausage", "Brocolli"]



$(document).ready(function () {
    $("#order").click(function () {
        $("#receipt").show("slow");
    });
    $("#del").click(function () {
        $("#delivery").show("slow");
    });

});

$(document).ready(function () {

    $("#myform").submit(function (event) {
        event.preventDefault();
        var flavour = $("#flavour").val();
        // alert(flavour);

        var size = parseInt($("#size").val());
        var size_price = sizePrice[size - 1]
        var sizeName1 = sizeName[size - 1]

        // alert(sizeName1);


        var crust = parseInt($("#crust").val());
        var topping = parseInt($("#topping").val());
        var quantity = parseInt($("#number1").val());
        productAddToTable()
        columnTotal()
        allClear()
    });
});

function productAddToTable() {
    var flavour = $("#flavour").val();
    var size = parseInt($("#size").val());
    var sizeName1 = sizeName[size - 1]
    var crust = parseInt($("#crust").val());
    var crustName1 = crustName[crust - 1]
    var topping = parseInt($("#topping").val());
    var toppingName1 = toppingName[topping - 1]
    var number1 = parseInt($("#number1").val());

    var size = parseInt($("#size").val());
    var size_price = sizePrice[size - 1]
    var crust = parseInt($("#crust").val());
    var crust_price = crustPrice[crust - 1]
    var topping = parseInt($("#topping").val());
    var topping_price = toppingPrice[topping - 1]
    var number1 = parseInt($("#number1").val())

    var newCheckprice = new Checkprice(size_price, crust_price, topping_price, number1)
    var total = newCheckprice.totalprice()

    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }


    $("#productTable tbody").append(
        `<tr> 
        <td>${flavour}</td> 
        <td>  ${sizeName1}</td>
        <td>  ${crustName1}</td>
        <td>  ${toppingName1}</td>
        <td>  ${number1}</td>
        <td class="total"> ${total}</td> 
        <td>
        <button type='button' onclick='rowDelete(this);' class='btn btn-default text-danger'>
        <i class='fas fa-trash-alt'></i>
        </button>
        </td>
        </tr>`);
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

function columnTotal() {
    var sum = 0;
    $(".total").each(function () {
        sum += parseFloat($(this).text());
    });
    $('#sum').text(sum);
}

function deliver() {
    var name1 = $("#nem").val();
    var loc = $("#locy").val();
    alert("Thank you "  + name1 + " for ordering at Pizza-vanna."   +  " Your order will be delivered at " + loc +   " within an hour." + " The cost of delivery" + " is sh.200."   +  " Bona petit.")
}