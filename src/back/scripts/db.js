/*jshint esversion: 6 */
'use strict';

const url = 'http://ec2-15-188-56-148.eu-west-3.compute.amazonaws.com/pulpo/read.php';

function getData() {
    let diary = [];
    fetch(url)
        .then(function(response) {
            response.json()
                .then(function(json) {
                    JSON.parse(json[0].diario).forEach(element => {
                            diary.push(element);
                        })
                    }).catch(err => {
                        console.log('error en la insercción de datos en el array :', err);
                }).catch(err => {
                    console.log('error en la obtención de datos :', err);
                })
        });

    return diary;
}

module.exports = getData();