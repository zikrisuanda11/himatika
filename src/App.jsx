// import Hero from "./layouts/Hero"
// import Navbar from "./layouts/Navbar"
import { Router, Switch } from 'react-router-dom';
import router from './routes/router';

export default function App() {
  return (
    <main>
      <Switch>
        <Router path="/" component={router}/>
      </Switch>
    </main>
  )
}