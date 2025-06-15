//this file contains all the functions necessary to calculate the basic calculations of my page
function calculateBMI() {
    // let b = document.getElementsByClassName("box-button")[0];
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    if (weight <= 0 || height <= 0) {
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementsByClassName("result")[0].textContent = "Result";
        alert("Please enter valid weight and height values.");

        return;
    }
    let bmi = weight / (height * height);
    let result = document.getElementsByClassName("result")[0];
    result.innerHTML = bmi.toFixed(2);
    switch (true) {
        case (bmi < 18.5):
            showDialogue(
                "Underweight",
                `Your BMI: ${bmi.toFixed(2)}<br>
                <strong>Diet Plan:</strong>
                <ul>
                    <li>Eat more frequently: 5-6 small meals/day</li>
                    <li>Add healthy, calorie-dense foods (nuts, seeds, avocados, dried fruits)</li>
                    <li>Include full-fat dairy, whole grains, and healthy oils (olive oil, ghee)</li>
                    <li>Add protein shakes or smoothies</li>
                    <li>Resistance training to gain muscle mass</li>
                </ul>`, "underweight.jpg");
            break;
        case (bmi >= 18.5 && bmi < 25):
            showDialogue(
                "Normal",
                `Your BMI: ${bmi.toFixed(2)}<br>
                <strong>Diet plan:</strong>
                <ul>
                    <li>Include plenty of fruits and vegetables (5 servings/day)</li>
                    <li>Stick to balanced meals: carbs, protein, healthy fats & fiber</li>
                    <li>Prioritize protein: eggs, lentils, paneer, chicken, tofu</li>
                    <li>Choose low-fat dairy or calcium-rich foods</li>
                </ul>`, "normalweight.jpg");
            break;
        case (bmi >= 25 && bmi < 30):
            showDialogue(
                "Overweight",
                `Your BMI: ${bmi.toFixed(2)}<br>
                <strong>Diet plan:</strong>
                <ul>
                    <li>Create a calorie deficit by eating slightly less than you burn</li>
                    <li>High-protein meals keeps you full longer and supports metabolism</li>
                    <li>Cut down on refined carbs (white rice, bread, sweets)</li>
                    <li>Avoid sugary drinks; opt for water, green tea, or lemon water</li>
                    <li>Prefer home-cooked meals; avoid fried/packaged foods</li>
                </ul>`, "overweight.jpg");
            break;
        case (bmi >= 30):
            showDialogue("Obesity",
                `Your BMI: ${bmi.toFixed(2)}<br>
                <strong>Diet plan:</strong>
                <ul>
                <li>Focus on a low-calorie, nutrient-rich diet</li>
                <li>Fiber-rich foods: leafy greens, oats, whole grains, fruits</li>
                <li>Add lean proteins: tofu, paneer, pulses, grilled chicken, eggs</li>
                <li>Avoid: sugar, deep-fried items, sweets, processed foods, cold drinks</li>
                <li>Hydrate well: water > juices or sodas</li>
                <li>Eat smaller, more frequent meals to avoid overeating</li>
                </ul>`, "obesity.jpg");
                break;
                default:
                    alert("please enter correct details");
    }
}
function showDialogue(title, content, image) {
    document.getElementsByClassName("modal-heading")[0].textContent = title;
    document.getElementsByClassName("modal-content")[0].innerHTML = content;
    document.getElementsByClassName("bmi-image")[0].src = image;
    document.getElementsByClassName("modal")[0].style.display = "flex";
}

//to close using the cross button
function hideDialogue() {
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementsByClassName("result")[0].textContent = "Result";
}

function billCalculator(){
    if (parseFloat(document.getElementById("units").value) <= 0 || parseFloat(document.getElementById("price/unit").value) <= 0){
        document.getElementById("units").value = "";
        document.getElementById("price/unit").value = "";
        document.getElementsByClassName("result")[1] = "Result";
        alert("Enter correct bill details");
    }
    let units = parseFloat(document.getElementById("units").value);
    let pricePerUnit = parseFloat(document.getElementById("price/unit").value);
    let result = units * pricePerUnit;
    let priceLogo = "\u20B9";
    document.getElementsByClassName("result")[1].textContent = priceLogo + " " + result;
}

function celsiusToFarenhite(){
    if (parseFloat(document.getElementById("c").value) <= 0){
        document.getElementById("c").value = "";
        document.getElementsByClassName("result")[2].textContent = "Result";
        alert("enter valid distance details!");
    }
    else{
        celsius = parseFloat(document.getElementById("c").value);
        let Farenhite = 9/5*celsius + 32;
        document.getElementsByClassName("result")[2].textContent = `${Farenhite.toFixed(2)} Farenhite`;
    }
}

function kmToMiles(){
    if (parseFloat(document.getElementById("km").value) <= 0){
        document.getElementById("km").value = "";
        document.getElementsByClassName("result")[3].textContent = "Result";
        alert("enter valid distance details!");
    }
    else{
        km = parseFloat(document.getElementById("km").value);
        let miles = 0.618*km;
        document.getElementsByClassName("result")[3].textContent = `${miles} miles`;
    }
}

function calculateInterest(){
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rateOfInterest").value);
    let t = parseFloat(document.getElementById("Time").value);
    
    let si = (p*r*t) / 100;
    let priceLogo = "\u20B9";
    document.getElementsByClassName("result")[4].textContent = priceLogo + " " + si;
}
