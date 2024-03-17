
document.getElementById("alertstring").onclick = function(){
    alert("Muhammad Bilal")
    let statement = "alert('Muhammad Bilal')"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("alertnumber").onclick = function(){
    alert("123")
    let statement = "alert('123')"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("variablenames").onclick = function(){
let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable can contain only letters, numbers, dollar signs and underscores.</li><li>Though a variable can't be cany of JavaScript's keywords, it can contain keywords. For example,<span class='text-danger'> userAlert</span> and <span class='text-danger'> myVar </span> are legal.</li><li>Capital letter are fine, but be careful. Variable names are case sensitive. A <span class='text-danger'>rose</span> is not a <span class='text-danger'>Rose.</span> If you assign the string floribundas to the variable <span class='text-danger'>rose </span>, and then ask JavaScript for the value assigned to <span class='text-danger'>Rose</span>, you'ill come up empty</li></ul>"

document.getElementById("output").innerHTML = html;
}
document.getElementById("camelCaseExample").onclick = function(){
    let html = "<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById("output").innerHTML = html;
}
document.getElementById("sum2numbers").onclick = function(){
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ sum +"</p>";

    let statement = "let num1 = "+ num1 +"; <br>let num2 =" + num2 + "; <br>let sum =num1 +num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("subtract2numbers").onclick = function(){
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let subtract = num1 - num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ subtract +"</p>";

    let statement = "let num1 = "+ num1 +"; <br>let num2 =" + num2 + "; <br>let subtract =num1 - num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("maltiply2numbers").onclick = function(){
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let multiply = num1 * num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ multiply +"</p>";

    let statement = "let num1 = "+ num1 +"; <br>let num2 =" + num2 + "; <br>let multiply =num1 * num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("divide2numbers").onclick = function(){
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let divide = num1 / num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>"+ divide +"</p>";

    let statement = "let num1 = "+ num1 +"; <br>let num2 =" + num2 + "; <br>let divide =num1 / num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("calculatesumenumbers").onclick = function(){
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    let = 36 / 6 * 3 + 2 ** 4 - (8);
    let = 6 * 3 + 16 - (8);
    let = 18 + 16 - (8);
    let = 34 - (8);
    let = 26;

    document.getElementById("output").innerHTML = "<p class='text-center'>"+ someCalculation +"</p>";

    let statement = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"
    document.getElementById("statement").innerHTML = statement;
}