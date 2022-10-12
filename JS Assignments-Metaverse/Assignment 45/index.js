
let objCar = 
{
    _manufacturer : "Suzuki",
    _modelName : "Alto",
    _color : "Black",
    _modelType : "VX",
};


function Car(manufacturer, modelName, color, modelType)
{
    objCar._manufacturer = manufacturer;
    objCar._modelName = modelName;
    objCar._color = color;
    objCar._modelType = modelType;

    console.log(objCar)
}

Car("Suzuki", "Alto", "Black" , " VXR")
Car("Honda", "Civic", "Black" , " VTI")
Car("KIA", "Picanto", "Black" , "")