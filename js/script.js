"use strict";
    
    while (true){
    let height = prompt("Please enter your height in centimeters:");
    height = parseFloat(height);

    let weight = prompt("Please enter your weight in kilograms");
    weight = parseFloat(weight);



    if(isNaN(height) || height <= 0){
        alert("Please enter a valid height.");
        continue;
    }

    if(isNaN(weight) || weight <= 0){
        alert("Please enter a valid weight.");
        continue;
    }
    else{
        const bmi = weight / (height / 100) **2;

        let category;
        if (bmi < 16){
            category = "Severly underweight";
        }
        else if (bmi >= 16 && bmi <= 18.4){
            category = "Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            category = "Normal weight";
        }
        else if (bmi >= 25 && bmi <= 29.9){
            category = "overweight";
        }
        else if (bmi >= 30 && bmi <= 34.9){
            category = "Moderately Obese";
        }
        else if (bmi >= 35 && bmi <= 39.9){
            category = "Severely Obese";
        }
        else {
            category = "Morbidly Obese";
        }

        alert(`Your bmi is ${bmi.toFixed(2)}, making you ${category}.`);
    }
}

