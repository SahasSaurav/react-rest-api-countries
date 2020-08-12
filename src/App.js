import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./assets/main.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import DetailsPage from "./component/DetailsPage";
import NotFoundPage from "./component/NotFoundPage";

class App extends Component {
  state = {
    all: [],
    countries: [],
    noMatch: false,
    isLoading: true,
    isDarkMode: true,
  };
  componentDidMount() {
    this.fetchCountry();
  }
  componentDidUpdate() {
    this.searchHandler();
    this.lazyLoad();
  }

  fetchCountry = async () => {
    try {
      const url = "https://restcountries.eu/rest/v2/all";
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        all: [...data],
        countries: [...data],
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
    }
  };
  searchHandler = async (name = "") => {
    //search
    if (name === "") {
      return;
    }
    let filteredCountries = this.state.all.filter((country) =>
      country.name.toLowerCase().includes(name)
    );
    // console.log(filteredCountries)
    if (filteredCountries.length) {
      this.setState({
        countries: [...filteredCountries],
        noMatch: false,
      });
    } else {
      this.setState({
        countries: [],
        noMatch: true,
      });
    }
  };
  selectHandler = (value) => {
    let allCountries = this.state.all;
    if (value === "all") {
      this.setState({
        countries: allCountries,
      });
    } else {
      this.setState({
        countries: allCountries.filter((country) =>
          country.region.toLowerCase().includes(value)
        ),
      });
    }
  };
  lazyLoad() {
    const countries = document.querySelectorAll(".country");

    const countryOption = {
      thersold: 0,
      rootMargin: "0px 0px 50px 0px",
    };

    const countriesObserver = new IntersectionObserver(
      (entries, countriesObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {

            return;
          } else {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1) translateY(0%)";
            countriesObserver.unobserve(entry.target)
          }
        });
      },
      countryOption
    );

    countries.forEach((country) => {
      countriesObserver.observe(country);
    });
  }

  render() {
   
    return (
      <div className="bg-gray-900">
        <Router>
          <Navbar darkMode={this.state.isDarkMode} />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  isLoading={this.state.isLoading}
                  countries={this.state.countries}
                  error={this.state.error}
                  match={this.state.noMatch}
                  search={this.searchHandler}
                  select={this.selectHandler}
                />
              )}
            />
            <Route exact path="/details/:alphaCode" component={DetailsPage} />
            <Route exact path="/error" component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
