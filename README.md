# viimane

> Last-call for public transports of Tallinn

A simple PWA to display your last ride home in Tallinn.

## TODO
- ~Make API endpoint dynamic and store it in env variable~
- Ask for vehicle type (save to state)
- Get stop_id by:
  - ~Having user select a stop from provided list~
  - Query user location to provide a new list of stops to choose from
  - Have user enter a stop (& add search suggestions)
- Ask for route number for that stop & vehicle
- Displaying N number of route times (1 <> N of last route times?)
- Unify pages components for vehicles to 1 dynamic route (pass vehicle and stop both as route params)
- Save first-visit data to indexDB and always serve from there first (via SW), only then query the API for fresh data.
- Once new data is fetched, overwrite indexedDB contents (but don't update data on the page?)
- Visual:
  - ~Fix content jump during route transition (make sections absolute)~
  - Remove nav background and only add it if `.headroom--not-top.headroom--pinned`
  - Dark theme
- Refactor to vue-cli@3 base?
- Reconsider the need for vuex (no deeply nested components atm, etc)
  - App could simply query stops (find out query size), write GTFS structure to indexedDB and use vue-localForage instead.
  - Strip vuex


## Build Setup

Using vue-cli@2 and the PWA template as a base

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
