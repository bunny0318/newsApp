import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/react';
import {FC, useState, useEffect } from 'react';
import axios from 'axios';

// newsapi.org API Key
const API_KEY = 'ac90d2bc71084896a7e4692d843fe305';
// newsapi.org url
const URL = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=${API_KEY}`;

// fetch all articles
const fetchArticles = () => {
  return axios({
    url: URL,
    method: 'get'
  }).then(response => {
    console.log(response);
    return response.data;
  })
};

const Home: FC = () => {

  const [ articles, setArticles ] = useState([]);
  // const items: any[] = [];

  useEffect(() => {
    fetchArticles().then(data => setArticles(data.articles));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PH News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {
            articles.map((a, index) => {
              return(
                <IonItem key={index}>
                  {a['title']}
                  <IonButton href={a['url']} color="primary" slot="end">Read</IonButton>
                </IonItem>
              )
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
