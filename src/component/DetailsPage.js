import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import Loader from "./Loader";
import DetailsCountryContent from "./DeatilsCountryContent";

class DetailsPage extends Component {
  state = {
    isLoading: true,
    error: false,
    countryDetail: {},
    borders: [],
  };
  //for fetching the data
  componentDidMount() {
    this.fetchCountryDetails();
  }
  // for fetching the data when border link is clicked
  componentDidUpdate() {
    this.fetchCountryDetails();
  }
  fetchCountryDetails = async () => {
    let url = `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.alphaCode}`;
    let res = await fetch(url);
    let data = await res.json();

    this.setState({
      countryDetail: data,
      borders: data.borders,
      error: data.status === 404 ? true : false,
    });
    // console.log(data)
  };

  render() {
    return (
      <div className="container mx-auto p-4">
        <Link to="/">
          <BackButton name="Back" />
        </Link>
        {this.state.isLoading &&
        !Object.values(this.state.countryDetail).length ? (
          <Loader task="Loading" />
        ) : (
          <DetailsCountryContent
            countryDetail={this.state.countryDetail}
            borders={this.state.borders}
          />
        )}
      </div>
    );
  }
}

export default DetailsPage;
