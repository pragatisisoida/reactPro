
import axios from 'axios';
const apiMiddleware = store => next => action => { 

  const config = action.config;
  const dispatch = store.dispatch;

if (!action || !action.config) {
  return next(action);
}

//dispatch init function
if(config.initHandler)
dispatch(config.initHandler(config));

const queryParams =config.queryParams || null,
successHandler = config.successHandler,
failureHandler = config.failureHandler;
var headers ={
  "Content-Type": "application/json",
...config.headers
};

var index =0;
var queryParamString ="";
for (const key in queryParams) {
  if (queryParams.hasOwnProperty(key)) {
    index += 1;
   queryParamString +=( index==1 ?"?":"&") +key +"="  +queryParams[key] ;
    
  }
}

var body ;
var dataType = config.dataType ||"json";
if(dataType =="json" && config.body){
body = JSON.stringify(config.body)
}

if(dataType=='formdata'){
  delete headers['Content-Type'];
}





var url = config.url + queryParamString;
const fetchOptions=
  {url: url,
    method:config.method || "GET", // *GET, POST, PUT, DELETE, etc.
    mode: config.mode || "no-cors", // no-cors, cors, *same-origin
    cache: config.cache || "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: headers,
    referrer: config.referrer || "no-referrer", // no-referrer, *client
    body:body, // body data type must match "Content-Type" header

}


axios(fetchOptions)
    .then(response => dispatch(successHandler(response, config)))
    .catch(error => dispatch(failureHandler(error)));

// fetch(url,fetchOptions).then(response => response.json())
// .then(data => dispatch(successHandler(data, config)
//   )).catch(error =>dispatch(failureHandler(error)));
//commented fetch ,for more info visit: https://stackoverflow.com/questions/45696999/fetch-unexpected-end-of-input   
}


    export default apiMiddleware;