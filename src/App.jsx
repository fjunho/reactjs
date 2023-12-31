import { Header } from './Components/Header';
import {Post} from './Components/Post';
import { Sidebar } from './Components/Sidebar';
import './global.css';
import styles from './App.module.css';


const posts =[
  {
    id: 1,
    author:{
      avatarUrl:"https://github.com/fjunho.png",
      name: "Flavio Fernandes",
      role: "Developer"

    },
    content: [
        {type:'paragraph', content:'Fala galeraa 👋,'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
         {type: 'link', content: 'jane.design/doctorcare'}  
      ],
      publishedAt: new Date('2023-06-20 18:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl:"https://github.com/diego3g.png",
      name: "Cleo Fernandes",
      role: "Developer"

    },
    content: [
        {type:'paragraph', content:'Fala galeraa 👋,'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',}
           
      ],
      publishedAt: new Date('2023-06-20 18:00:00'),
  },
  {
    id: 3,
    author:{
      avatarUrl:"https://github.com/maykbrito.png",
      name: "Mamae-Papai",
      role: "Developer"

    },
    content: [
        {type:'paragraph', content:'Fala galeraa 👋,'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',}
           
      ],
      publishedAt: new Date('2023-08-01 18:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
              {posts.map(post => {
                  return (
                  <Post 
                  key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                  ) 
              })}
            </main>

        </div>
       
    </div>
  )
}


