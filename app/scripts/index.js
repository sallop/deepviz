import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

//import App from './components/App';
import App from './containers/App';
//import MemberTable from './components/MemberTable';
import rootReducer from './reducers'

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

let store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)


// const render = (Component) => {
// //const render = (Component, props) => {
//   //console.log(JSON.stringify(props));
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   );
// };
// 
// //render(<div>Hello World</div>, document.getElementById('root'));
// //render(connected, document.getElementById('root'));
// //render(MemberTable);
// //render(MemberTable, members);
// 
// render(App)
// //// home module replacement API
// if (module.hot) {
//   //module.hot.accept('./components/App', () => {
//   module.hot.accept('./containers/App', () => {
//     render(App)
//   });
// }
