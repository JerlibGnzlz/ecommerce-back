const {
  Category,
  Brand,
  Product,
  Country,
  PaymentType,
  User,
  CarItem,
  UserAddress,
  UserPayment,
  Order,
  OrderItem,
  Favorites,
  Coments,
} = require("../db");

//categorias
const categories = [
  { name: "footwear" }, //1
  { name: "handbags" }, //2
  { name: "jackets" }, //3
  { name: "Tshirts" }, //4
  { name: "shirts" }, //5
  { name: "pants" }, //6
  { name: "blouses" }, //7
  { name: "coat" }, //8
  { name: "skirt" }, //9
  { name: "sportswear" }, //10
];

//marcas
const brands = [
  { name: "diesel" }, // 1
  { name: "boss" }, // 2
  { name: "nike" }, // 3
  { name: "adidas" }, // 4
  { name: "calvin klein" }, // 5
  { name: "basement" }, // 6
  { name: "mario hernandez" }, // 7
  { name: "libur" }, // 8
  { name: "fendi" }, // 9
  { name: "ray-ban" }, // 10
  { name: "guess" }, // 11
];

//calzado
const shoes = [
  {
    name: "classic meet for men",
    description: "perfect shoes for formal events",
    model: "16-01",
    price: "55.8" + "usd",
    image: ["https://pixabay.com/images/id-1684700/"],
    categoryId: 1,
    brandId: 5,
  },

  {
    name: "formal shoe for men",
    description: "perfect shoes for any events",
    model: "16-02",
    price: "44.9" + "usd",
    image: ["https://pixabay.com/images/id-4887100/"],
    categoryId: 1,
    brandId: 8,
  },

  {
    name: "modern boots for women",
    description: "perfect boots with a unique design ",
    model: "16-03",
    price: "62.7" + "usd",
    image: ["https://pixabay.com/images/id-181744/"],
    categoryId: 1,
    brandId: 6,
  },
];

//bolsos
const bags = [
  {
    name: "work bag",
    description: "multi-pocket work bag",
    model: "16-04",
    price: "25.3" + "usd",
    image: ["https://pixabay.com/images/id-1854148/"],
    categoryId: 2,
    brandId: 7,
  },

  {
    name: "black bag",
    description: "multi-design bag",
    model: "16-05",
    price: "20.6" + "usd",
    image: ["https://pixabay.com/images/id-1052370/"],
    categoryId: 2,
    brandId: 7,
  },

  {
    name: "red bag",
    description: "multi-design bag",
    model: "16-06",
    price: "21.5" + "usd",
    image: ["https://pixabay.com/images/id-2661412/"],
    categoryId: 2,
    brandId: 9,
  },
];

//chaquetas
const jackets = [
  {
    name: "zip up jacket",
    description: "suitable for any outfit",
    model: "16-07",
    price: "31.23" + "usd",
    image: ["https://pixabay.com/images/id-1283576/"],
    categoryId: 3,
    brandId: 2,
  },

  {
    name: "sport jacket",
    description: "suitable for cold day",
    model: "16-08",
    price: "33.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX522_.jpg"],
    categoryId: 3,
    brandId: 3,
  },

  {
    name: "sport jacket2",
    description: "suitable for cold day",
    model: "16-09",
    price: "33.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/61gFpfJNSBL._AC_UX522_.jpg"],
    categoryId: 3,
    brandId: 3,
  },
];

//camisetas
const tshirt = [
  {
    name: "exclusive line t-shirt",
    description: "T-shirt that adapts to your body",
    model: "16-10",
    price: "25.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/61eibu+hUkL._AC_UX569_.jpg"],
    categoryId: 4,
    brandId: 1,
  },

  {
    name: "comfortable t-shirt",
    description: "unique and delicate lines",
    model: "16-11",
    price: "23.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/618j4k33ROS._AC_UY550_.jpg"],
    categoryId: 4,
    brandId: 2,
  },

  {
    name: "modern t-shirt",
    description: "bright color t-shirt",
    model: "16-12",
    price: "21.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/71pYFYbDiQL._AC_UY550_.jpg"],
    categoryId: 4,
    brandId: 2,
  },
];

//camisas
const shirt = [
  {
    name: "cotton shirt",
    description: "checkered shirt with bright colors",
    model: "16-13",
    price: "23.6" + "usd",
    image: ["https://m.media-amazon.com/images/I/71L1baFFLTL._AC_UY550_.jpg"],
    categoryId: 5,
    brandId: 3,
  },

  {
    name: "elegant shirt",
    description: "long sleeve button down shirt",
    model: "16-14",
    price: "29.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/61lO2wFWxvS._AC_UX569_.jpg"],
    categoryId: 5,
    brandId: 5,
  },

  {
    name: "cowboy shirt",
    description: "denim style shirt with cute cuts",
    model: "16-15",
    price: "27.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/81nUKxgPb-L._AC_UY550_.jpg"],
    categoryId: 5,
    brandId: 8,
  },
];

//pantalones
const pant = [
  {
    name: "dress pants",
    description: "denim style shirt with cute cuts",
    model: "16-15",
    price: "27.0" + "usd",
    image: ["https://m.media-amazon.com/images/I/81nUKxgPb-L._AC_UY550_.jpg"],
    categoryId: 5,
    brandId: 8,
  },
];

//tipoDePago
const PaymentType = [
  { paymentName: "Tarjeta de Crédito" },
  { paymentName: "Tarjeta de Débito" },
  { paymentName: "Mercado Pago" },
];

const userPayments = [
  // Métodos de pago del usuario 2
  {
    cardNumber: "4546400034748181",
    expirationDay: "2025-11-30",
    provider: "Visa",
    userId: 2,
    paymentTypeId: 1,
  },
  {
    provider: "Mercado Pago",
    userId: 2,
    paymentTypeId: 3,
  },
  // Métodos de pago del usuario 3
  {
    cardNumber: "5100010000000114",
    expirationDay: "2030-11-25",
    provider: "MasterCard",
    userId: 3,
    paymentTypeId: 1,
  },
  {
    provider: "Mercado Pago",
    userId: 3,
    paymentTypeId: 3,
  },
  // Métodos de pago del usuario 4
  {
    provider: "Mercado Pago",
    userId: 4,
    paymentTypeId: 3,
  },
];

//usuario
const user = [
  {
    email: "neubigin0@4shared.com",
    names: "Lacie lar",
    lastNames: "Neubigin nothi",
    phone: "+5496684645",
    birthDate: "12/10/83",
  },

  {
    email: "rdillicate1@list-manage.com",
    names: "Rivalee ree",
    lastNames: "Dillicate cart",
    phone: "+54962383345",
    birthDate: "23/01/82",
  },

  {
    email: "odunnan2@ow.ly",
    names: "Ofella tee",
    lastNames: "Dunnan cat",
    phone: "+54962383345",
    birthDate: "23/01/79",
    isADmin: true,
  },

  {
    email: "mchilles3@hatena.ne.jp",
    names: "Ofe Meredith",
    lastNames: "Chilles riss",
    phone: "+541262381220",
    birthDate: "16/02/80",
  },

  {
    email: "abudget4@rediff.com",
    names: "Atlanta Mered",
    lastNames: "Chil Budget",
    phone: "+5412625783",
    birthDate: "10/07/81",
    isADmin: true,
  },
];

const countries = [
  { countryName: "Anguila" }, // 1
  { countryName: "Antigua y Barbuda" }, // 2
  { countryName: "Argentina" }, // 3
  { countryName: "Aruba" }, // 4
  { countryName: "Bahamas" }, // 5
  { countryName: "Barbados" }, // 6
  { countryName: "Belice" }, // 7
  { countryName: "Bermudas" }, // 8
  { countryName: "Bolivia" }, // 9
  { countryName: "Bonaire" }, // 10
  { countryName: "Brasil" }, // 11
  { countryName: "Canadá" }, // 12
  { countryName: "Chile" }, // 13
  { countryName: "Colombia" }, // 14
  { countryName: "Costa Rica" }, // 15
  { countryName: "Cuba" }, // 16
  { countryName: "Curazao" }, // 17
  { countryName: "Dominicana" }, // 18
  { countryName: "Ecuador" }, // 19
  { countryName: "El Salvador" }, // 20
  { countryName: "Estados Unidos" }, // 21
  { countryName: "Granada" }, // 22
  { countryName: "Groenlandia" }, // 23
  { countryName: "Guadalupe" }, // 24
  { countryName: "Guatemala" }, // 25
  { countryName: "Guayana Francesa" }, // 26
  { countryName: "Guyana" }, // 27
  { countryName: "Haití" }, // 28
  { countryName: "Honduras" }, // 29
  { countryName: "Islas Caimán" }, // 30
  { countryName: "Islas Malvinas" }, // 31
  { countryName: "Islas Turcas y Caicos" }, // 32
  { countryName: "Islas Vírgenes Británicas" }, // 33
  { countryName: "Islas Vírgenes de los Estados Unidos" }, // 34
  { countryName: "Jamaica" }, // 35
  { countryName: "Martinica" }, // 36
  { countryName: "México" }, // 37
  { countryName: "Montserrat" }, // 38
  { countryName: "Nicaragua" }, // 39
  { countryName: "Panamá" }, // 40
  { countryName: "Paraguay" }, // 41
  { countryName: "Perú" }, // 42
  { countryName: "Puerto Rico" }, // 43
  { countryName: "República Domnicana" }, // 44
  { countryName: "San Bartolomé" }, // 45
  { countryName: "San Cristobal y Nieves" }, // 46
  { countryName: "San Martín" }, // 47
  { countryName: "San Pedro y Miquelón" }, // 48
  { countryName: "San Vicente y las Granadinas" }, // 49
  { countryName: "Santa Lucía" }, // 50
  { countryName: "Surinam" }, // 51
  { countryName: "Trinidad y Tobago" }, // 52
  { countryName: "Uruguay" }, // 53
  { countryName: "Venezuela" }, // 54
];

//direccionDeUsuario
const userAddress = [
  {
    postalCode: "b1123",
    state: "Buenos",
    city: "Anguila",
    address: "calle 12 ",
    annotations: "Esquina Cruz ",
    userId: 1,
    countryId: 1,
  },

  {
    postalCode: "c6784",
    state: "Saint jhon",
    city: "Antigua y Barbuda",
    address: "Osbourn",
    annotations: "a 3 km de la playa",
    userId: 4,
    countryId: 3,
  },

  {
    postalCode: "b3223",
    state: "Buenos Aires",
    city: "Argentina",
    address: "Av. Eva Peron  3234",
    annotations: "Casa blanca de rejas negra",
    userId: 2,
    countryId: 3,
  },

  {
    postalCode: "a3480",
    state: "Orangenstal",
    city: "Aruba",
    address: "Smith boulevar #160",
    annotations: "Mr. Brown",
    userId: 5,
    countryId: 4,
  },

  {
    postalCode: "h4399",
    state: "Orangenstal",
    city: "Bahamas",
    address: "Smith boulevar #160",
    annotations: "Mr. Brown",
    userId: 1,
    countryId: 5,
  },
];
