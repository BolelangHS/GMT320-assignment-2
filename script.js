

const csvFileName = '2022_ZA_Region_Mobility_Report.csv';

const csvFilePath = '2022_ZA_Region_Mobility_Report.csv';

// Fetch the CSV file

//store data from csv
let data;
// let retail = [];  //retail

fetch(csvFilePath)
    .then(response => response.text())
    .then(csvData => {
     
         data = csvData;  //save CSv data



    })
    .catch(error => console.error('Error reading CSV file:', error));

function searchByProvince() {
    //console.log(data);

  
        const rows = data.split('\n'); //save rows

        const dropdown = document.getElementById('provinceDropdown');
        const selectedProvince = dropdown.value;
        var rowData ;
        let retail = [];  //retail
        let retail_date = [];  //retail
        let grocery = [];
        let parks = [];
        let transport = [];
        let workplace = [];
        let residential = [];
        let province ;
        

        //console.log(selectedProvince);
        //const header = rows[0].split(',');

     
        for (let i = 1; i < rows.length; i++) {
             rowData = rows[i].split(',');
            if(rowData[5] == selectedProvince){
               
                province = rowData[2];
                retail_date.push(rowData[8]);
                retail.push(rowData[9]);
                grocery.push(rowData[10]);
                parks.push(rowData[11]);
                transport.push(rowData[12]);
                workplace.push(rowData[13]);
                residential.push(rowData[14]);
            }
            
         }
         console.log(retail_date);
         console.log(retail);
         const heading = document.getElementById('heading');
         heading.textContent = province;

         const ctx = document.getElementById('retailChart').getContext('2d');

    
         const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels:retail_date, 
                datasets: [{
                    label: 'Retail and recreation',
                    data:retail, // Your dataset values
                }],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day', // Adjust this based on your needs
                        },
                    },
                    y: {
                        // Other options for the y-axis
                    },
                },
            },
        });

        const ctx2 = document.getElementById('groceryChart').getContext('2d');

        const myChart2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels:retail_date, 
                datasets: [{
                    label: 'grocery and pharmacy',
                    borderColor: 'lightgreen', 
                    data:grocery, // Your dataset values
                }],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day', // Adjust this based on your needs
                        },
                    },
                    y: {
                        // Other options for the y-axis
                    },
                },
            },
        });

    
        
        const ctx3 = document.getElementById('parksChart').getContext('2d');
        const myChart3 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels:retail_date, 
                datasets: [{
                    label: 'parks',
                    borderColor: 'turquoise', 
                    data:parks, // Your dataset values
                }],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day', // Adjust this based on your needs
                        },
                    },
                    y: {
                        // Other options for the y-axis
                    },
                },
            },
        });


        const ctx4 = document.getElementById('transportChart').getContext('2d');

        const myChart4 = new Chart(ctx4, {
            type: 'line',
            data: {
                labels:retail_date, 
                datasets: [{
                    label: 'public transport',
                    borderColor: 'orange', 
                    data:transport, // Your dataset values
                }],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day', // Adjust this based on your needs
                        },
                    },
                    y: {
                        // Other options for the y-axis
                    },
                },
            },
        });
           


        const ctx5 = document.getElementById('workplaceChart').getContext('2d');
        const myChart5 = new Chart(ctx5, {
            type: 'line',
            data: {
                labels:retail_date, 
                datasets: [{
                    label: 'workplaces',
                    borderColor: 'aqua', 
                    data:workplace, // Your dataset values
                }],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day', // Adjust this based on your needs
                        },
                    },
                    y: {
                        // Other options for the y-axis
                    },
                },
            },
        });

        const ctx6 = document.getElementById('residentialChart').getContext('2d');
        const myChart6 = new Chart(ctx6, {
            type: 'line',
            data: {
                labels:retail_date, 
                datasets: [{
                    label: 'residential',
                    borderColor: 'fuchsia', 
                    data:workplace, // Your dataset values
                }],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day', // Adjust this based on your needs
                        },
                    },
                    y: {
                        // Other options for the y-axis
                    },
                },
            },
        });

}










