import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { Switch, Route } from 'wouter'
import App from './App'
import Login from './components/Login'
import './index.css'
import store from './redux/store'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider  client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>,
)
