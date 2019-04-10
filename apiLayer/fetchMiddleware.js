
const fetchMiddleware = store => next => action => { 

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




const fetchOptions=
  {
    method:config.method || "GET", // *GET, POST, PUT, DELETE, etc.
    mode: config.mode || "no-cors", // no-cors, cors, *same-origin
    cache: config.cache || "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: headers,
    referrer: config.referrer || "no-referrer", // no-referrer, *client
    body:body, // body data type must match "Content-Type" header

}
var url = config.url + queryParamString;







fetch(url, fetchOptions).then((response) => {
  debugger;
  console.log(response)
  if (response.ok) {
    debugger;
    response.json().then(data => {
      console.log(data)
      dispatch(successHandler(data, config));
    })
  }
  else{
    response.json().then(data => {
      console.log(data)
      dispatch(failureHandler(data.message || data,config));
    })
  }
})
.catch(error => {
  console.log("error", error);
  dispatch(failureHandler(error, config));

  });
  
    }


    export default fetchMiddleware;