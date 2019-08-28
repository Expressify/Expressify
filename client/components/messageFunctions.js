//HEADER
  // const headArr = []; //Initalize empty array to render
  // const hKArr = Object.keys(props.info.header); // Keys of Header
  // const hVArr = Object.values(props.info.header); // Values of Header

  // //loop through each key;
  // hKArr.forEach((key, index) => {
  //   //push into initialize empty array a P TAG that seperates keys and values into a sentence w/ unique keys;
  //   headArr.push(<p key={`${key}` + index} className="header-data">{key} = {hVArr[index]}</p>);
  // });

  // //BODY
  // //Need to parse through due to nested objects and arrays inside body object.
  // const flattenObject = object => {
  //   return Object.assign( {}, ...function _flatten( objectBit, path = '' ) {  
  //     return [].concat(                                                       
  //       ...Object.keys( objectBit ).map(
  //         key => typeof objectBit[ key ] === 'object' ? _flatten( objectBit[ key ], path + '+' ) : 
  //         ( { [ `${ path }+ ${ key }` ]: objectBit[ key ] } )
  //         )
  //     )
  //   }( object ) );
  // };

  // const bodyArr = [];
  // const newObj = flattenObject(props.info.body);
  // const bKArr = Object.keys(newObj);
  // const bVArr = Object.values(newObj);

  // bKArr.forEach((key, index) => {
  //   bodyArr.push(<p key={`${key}` + index} className="body-data">{key} = {bVArr[index]}</p>);
  // })
  // //COOKIES
  // const cookieArr = [];
  // const cKArr = Object.keys(props.info.cookies);
  // const cVArr = Object.values(props.info.cookies);
  // cKArr.forEach((key, index) => {
  //   cookieArr.push(<p key={`${key}` + index} className="cookie-data">Name: {key} | Value: {cVArr[index]}</p>);
  // });

  // /*
  //   Here we have a main message container;
  //   This container is divided into 4 parts (Method-Types, Headers, Body, Cookies);
  // */

  //return: 
//   <div className="method-type">
//         <pre>{props.info.type} Request</pre>
//       </div>
//       <div className="header-info">
//         <pre> 
//           <h3>Header:</h3> 
//           {headArr}
//         </pre>
//       </div>
//       <div className="body-info">
//         <pre>
//           <h3>Body:</h3>
//           {bodyArr}
//         </pre>
//       </div>
//       <div className="cookies-info">
//         <pre>{cookieArr}</pre>
//       </div>
