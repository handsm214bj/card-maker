import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, CardRepository }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({}); 
  const [userId, setUserId] = useState(historyState && historyState.id);
  
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

useEffect(() => {
  if (!userId) {
    return;
  }
  const stopSync = CardRepository.syncCards(userId, cards => {
    setCards(cards);
  });
  return () => stopSync();
}, [userId]);


useEffect(() => {
  authService.onAuthChange(user => {
    if (user) {
      setUserId(user.uid);
      console.log(userId);
    } else {
      history.push('/');
    }
  });
});

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    CardRepository.saveCard(userId, card);    
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    }); 
    CardRepository.removeCard(userId, card);   
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor 
        FileInput={FileInput}
        cards={cards} 
        addCard={createOrUpdateCard} 
        updateCard={createOrUpdateCard} 
        deleteCard={deleteCard} 
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
