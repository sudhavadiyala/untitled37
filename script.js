/**
 * Created by sudha on 09-May-16.
 */

var app = angular.module('myApp',[]);
app.controller('mycontroller',function($scope,$http){


    $scope.weatherinfo = function(zipcode)
    {

        $http.get('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&appid=f0263edb94fda4b613a7ea01190954e9').
        then(function(response){

            $scope.place = response.data.name;
            $scope.description = response.data.weather[0].description;
            if($scope.description.indexOf('cloud')>-1)
            {
                $scope.image = 'partly_cloudy.png';
            }
            else if($scope.description.indexOf('clear')>-1)
            {
                $scope.image = 'sun.jpg';
            }
            else if($scope.description.indexOf('shin')>-1)
            {
                $scope.image = 'thunderstorms.png';
            }
            else if($scope.description.indexOf('rain')>-1)
            {
                $scope.image = 'rain_light.png';
            }

            $scope.temperature = response.data.main.temp;
            $scope.temp_celsius = $scope.temperature-273.15-2;
            $scope.temp_kelvin = $scope.temperature-459.67;
            $scope.wind = response.data.wind.speed;
            $scope.myValue = true;

        });
    }



});