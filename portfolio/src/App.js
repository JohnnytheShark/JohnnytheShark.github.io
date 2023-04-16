
import styles from "./App.module.scss"
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home/Home';
import {Routes, Route} from 'react-router';

const App=()=>{
  return (
    <div className={styles.App}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/react-gh-pages" element={<Home/>}/>
      </Routes>
    </Layout>

    </div>
  );
}

export default App;
