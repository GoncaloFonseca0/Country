const country1 = {
  name: "Portugal",
  capital: "Lisboa",
  population: 10310000,
  minimunSalary: 740,
  flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
};
const country2 = {
  name: "Spain",
  capital: "Madrid",
  population: 47350000,
  minimunSalary: 1050,
  flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
};
//buttons

function displayCountryPortugal() {
  document.querySelector(".img-js").src = country1.flag;
  document.querySelector(".CountryName-js").innerHTML = country1.name;
  document.querySelector(".capital-js").innerHTML = country1.capital;
  document.querySelector(".population-js").innerHTML = country1.population;
  document.querySelector(".minium-salary").innerHTML = country1.minimunSalary;
}

function displayCountrySpain() {
  document.querySelector(".img-js").src = country2.flag;
  document.querySelector(".CountryName-js").innerHTML = country2.name;
  document.querySelector(".capital-js").innerHTML = country2.capital;
  document.querySelector(".population-js").innerHTML = country2.population;
  document.querySelector(".minium-salary").innerHTML = country2.minimunSalary;
}
