function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (height === "" || weight === "" || height <= 0 || weight <= 0) {
        result.innerText = "Please enter valid height and weight";
        result.style.color = "red";
        return;
    }

    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";

    result.style.color = "green";
    result.innerHTML = `Your BMI: <strong>${bmi}</strong><br>Status: <strong>${status}</strong>`;
}
