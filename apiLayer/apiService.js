import store from '../store/index';
import axios from 'axios';

export function sendAxiosRequest(config){
    var initHandler = config.initHandler,successHandler = config.successHandler, failureHandler = config.failureHandler;
    store.dispatch(initHandler)
    axios({
        method: config.method||"get",
        url: config.url,
        data: config.data
      })
  .then(function (response) {
    console.log(response);
    store.dispatch(successHandler)
  })
  .catch(function (error) {
    store.dispatch(failureHandler)
    console.log(error);
  });
}

export function sendFetchRequest(config){
    var initHandler = config.initHandler,successHandler = config.successHandler, failureHandler = config.failureHandler;
    store.dispatch(initHandler)

    const fetchOptions=
  {
    method:config.method || "GET", // *GET, POST, PUT, DELETE, etc.
    mode: config.mode || "no-cors", // no-cors, cors, *same-origin
    cache: config.cache || "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json",
      ...config.headers
    },
    referrer: config.referrer || "no-referrer", // no-referrer, *client
    body:body, // body data type must match "Content-Type" header

}
fetch(url,fetchOptions)
      .then(res => res.json())
      .then(json => {
        debugger;
         store.dispatch(successHandler(json));
        return json.products;
      })
      .catch(error =>{console.log(error);
        store.dispatch(failureHandler(error));
      })
     
  
    }
