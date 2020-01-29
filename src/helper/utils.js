const kelvinConstants = {
    first: 273.15,
    second: 1.8,
    third: 32
}

const kelvinToCelcius =(temp) => {
    return (temp - kelvinConstants.first);
}

export const currentWeather = (data, unit) => {
    let value = {
        description: data.weather[0].description,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed
    }
    if (unit == "Celcius") {

    }
};

const currentJson = (data) {
    const value = {
        description: description,
        humidity: humidity,
        pressure: pressure,
        windSpeed: windSpeed
    }
    console.log()
}