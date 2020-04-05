import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";

import Home from './page-types/Home';
import CreativeCodingProjectsHolder from "./page-types/CreativeCodingProjectsHolder";
import AudioProjectsProjectHolder from "./page-types/AudioProjectsProjectHolder";

class Main extends Component {

  constructor(props) {
    super();
    this.state = {
      siteURL: '',
      isLoading: true,
      totalPosts: 0,
      paginatedPages: 0,
      currentPaginationPage: 1,
      posts: []
    }
  }

  componentDidMount() {
    let siteURL = 'http://mysite.labcat.nz';

    this.setState(
      {
        ...this.state,
        siteURL
      }
    );

    window.addEventListener(
      'load',
      () => {
        this.fetchPosts(this.state.currentPaginationPage);
      }
    );
  }

  fetchPosts(page) {
    let endPoint = this.state.siteURL + '/wp-json/wp/v2/pages?page=' + page;
    fetch(
      endPoint,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(
      (response) => {
        if (this.state.currentPaginationPage < 2) {
          let totalPosts = response.headers.get("X-WP-Total");
          let paginatedPages = parseInt(response.headers.get("X-WP-TotalPages"));

          this.setState(
            {
              ...this.state,
              totalPosts,
              paginatedPages
            }
          );
        }

        response.json().then(
          (responseJson) => {
            const posts = responseJson;
            const currentPaginationPage = this.state.currentPaginationPage + 1;
            this.setState(
              {
                ...this.state,
                posts,
                currentPaginationPage
              }
            );

            if (this.state.currentPaginationPage <= this.state.paginatedPages) {
              this.fetchPosts(this.state.currentPaginationPage);
            }
          }
        );
      }
    )
      .catch((
        error) => {
        console.error(error);
      }
      );
  }

  render() {
    const components = {
      Home: Home,
      CreativeCodingProjectsHolder: CreativeCodingProjectsHolder,
      AudioProjectsHolder: AudioProjectsProjectHolder
    };
    let pages = [];
    let routes = '';

    if (this.state.posts.length) {
      pages = this.state.posts.sort(
        function (a, b) {
          return a.menu_order - b.menu_order;
        }
      );
      
      routes =
        pages.map(
              post => (
                <Route 
                  path={`/${post.slug === 'home' ? '' : post.slug}`}
                  component={components[post.reactComponent]} 
                  key={post.key} 
                />
              )
            );
    }
    
    

    return (
      <main>
        <Navbar 
          links={pages}
        />
        <Switch>
          {routes}
        </Switch>
      </main>
    );
  }
}

export default Main;
