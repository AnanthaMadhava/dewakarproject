import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Navigation from './components/Navigation/Navigation';
import { Provider } from 'react-redux';
import store  from './store';
import { currentUser } from './redux/actions/authActions';

AsyncStorage.getItem('project')
.then(res => {
  if(res) {
    const project = JSON.parse(res)
    store.dispatch(currentUser(project))
  }
})

const App = () => {
  return (
    <Provider store={ store }>
      <Navigation />
    </Provider>
  )
}

export default App
