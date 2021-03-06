const { Country } = require("../db");

const countryList = [
  "Anguila",
  "Antigua y Barbuda",
  "Argentina",
  "Aruba",
  "Bahamas",
  "Barbados",
  "Belice",
  "Bermudas",
  "Bolivia",
  "Bonaire",
  "Brasil",
  "Canadá",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Curazao",
  "Dominicana",
  "Ecuador",
  "El Salvador",
  "Estados Unidos",
  "Granada",
  "Groenlandia",
  "Guadalupe",
  "Guatemala",
  "Guayana Francesa",
  "Guyana",
  "Haití",
  "Honduras",
  "Islas Caimán",
  "Islas Malvinas",
  "Islas Turcas y Caicos",
  "Islas Vírgenes Británicas",
  "Islas Vírgenes de los Estados Unidos",
  "Jamaica",
  "Martinica",
  "México",
  "Montserrat",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Domnicana",
  "San Bartolomé",
  "San Cristobal y Nieves",
  "San Martín",
  "San Pedro y Miquelón",
  "San Vicente y las Granadinas",
  "Santa Lucía",
  "Surinam",
  "Trinidad y Tobago",
  "Uruguay",
  "Venezuela",
];

const countryListTotal = countryList.map((country) => {
  return {
    countryName: country,
  };
});

const saveCountries = async () => {
  try {
    await Country.bulkCreate(countryListTotal);
  } catch (e) {}
};

// saveCountries()
// .catch(error=>console.log(error))

module.exports = { saveCountries };
