// Chart

const ctx =
document.getElementById('myChart');

new Chart(ctx, {

    type:'line',

    data:{

        labels:[
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],

        datasets:[{

            label:'Machine Temperature',

            data:[
                65,
                72,
                80,
                76,
                92,
                105
            ],

            borderWidth:3

        }]
    },

    options:{
        responsive:true
    }

});


// Pump Prediction

function predictPump(){

    let temp =
    document.getElementById("pumpTemp").value;

    let rpm =
    document.getElementById("pumpRPM").value;

    let vibration =
    document.getElementById("pumpVibration").value;

    let result =
    document.getElementById("pumpPrediction");

    if(temp > 90 || vibration > 1.5){

        result.innerHTML = `
        ⚠ Failure Probability: 88% <br>
        Estimated Failure Time: 3 Days <br>
        Recommended Action:
        Replace Bearing
        `;

        result.style.color = "red";

    }

    else{

        result.innerHTML = `
        ✅ Failure Probability: 8% <br>
        Estimated Failure Time: 120 Days <br>
        Recommended Action:
        No Immediate Action
        `;

        result.style.color = "lightgreen";

    }

}


// Motor Prediction

function predictMotor(){

    let air =
    document.getElementById("motorAir").value;

    let process =
    document.getElementById("motorProcess").value;

    let rpm =
    document.getElementById("motorRPM").value;

    let torque =
    document.getElementById("motorTorque").value;

    let result =
    document.getElementById("motorPrediction");

    if(process > 310 || torque > 50){

        result.innerHTML = `
        ⚠ Failure Probability: 91% <br>
        Estimated Failure Time: 2 Days <br>
        Recommended Action:
        Inspect Cooling System
        `;

        result.style.color = "red";

    }

    else{

        result.innerHTML = `
        ✅ Failure Probability: 10% <br>
        Estimated Failure Time: 100 Days <br>
        Recommended Action:
        Machine Stable
        `;

        result.style.color = "lightgreen";

    }

}


// Dataset Upload

function uploadDataset(){

    let file =
    document.getElementById("dataset").files[0];

    if(!file){

        alert("Please select CSV file");

        return;
    }

    document.getElementById("uploadStatus")
    .innerText =
    "Uploaded: " + file.name;

    alert("Dataset Uploaded Successfully");

}