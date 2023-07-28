import { Header } from './Components/Header';
import {Post} from './Components/Post';
import { Sidebar } from './Components/Sidebar';
import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
              <Post 
                autor="Flavio Fernandes" 
                content="lorem ipsum dolor sit amet, consectetur adip"
              />
              <Post
                autor="BOMBOM"
                content="muito legal"
              /> 
            </main>

        </div>
       
    </div>
  )
}


