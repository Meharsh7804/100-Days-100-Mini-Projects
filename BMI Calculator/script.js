document.getElementById("btn").addEventListener("click", function() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = (weight/(height/100 * height/100)).toFixed(2);

    document.getElementById("result").innerHTML = "Your BMI is " + bmi;
});