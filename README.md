# Vue.js map using MapLibre GL JS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A quick way to start a web map application with Vue.js using MapLibre GL JS.

A simple fullscreen map application is used to showcase how to utilize MapTiler maps together with Vue.js and MapLibre GL JS for your Vue.js app.

## Screenshot

![vue maplibre template](/assets/vue-maplibre-template.png "Vue MapLibre template")

<p align="right">(<a href="#top">back to top</a>)</p>

## Demo

Online demo: https://labs.maptiler.com/vue-template-maplibre-gl-js/

<p align="right">(<a href="#top">back to top</a>)</p>

## Build With

* [Vue.js](https://v3.vuejs.org/)
* [MapLibre GL JS](https://maplibre.org/)
* [MapTiler](https://www.maptiler.com/)

This project was generated with [Vue CLI](https://cli.vuejs.org/) version 4.5.15.

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular CLI
  ```sh
  npm install -g @vue/cli
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Create an app

Clone the repo to create a new Vue.js project. Run in your command-line:

```
  git clone https://github.com/maptiler/vue-template-maplibre-gl-js.git my-vue-map
```

Navigate to the newly created project folder **my-vue-map**

```
  cd my-vue-map
```

Install the NPM packages dependencies. Run in your command-line:

```
  npm install
```

### API KEY

Rename or copy the `.env.example` file to `.env`

```
  cp .env.example .env
```

Open the `.env` file, :warning: you will need to replace **YOUR_MAPTILER_API_KEY** with your own MapTiler API key.

Your MapTiler account access key is on your MapTiler [Cloud](https://cloud.maptiler.com/account/keys/) account page. 

:information_source: If you don't have an API KEY, you can create it for free at https://www.maptiler.com/cloud/

### Run

To start your local environment, run: 

```
  npm run serve
``` 

You will find your app on address http://localhost:8080/.

Now you should see the app in your browser.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Instead of using or developing a custom map component, you can use the [Vue.js binding of maplibre-gl-js](https://github.com/razorness/vue-maplibre-gl).

