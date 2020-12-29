import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
  } = card;

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = Event => {
    if (Event.currentTarget == null) {
      return;
    }
    Event.preventDefault();
    updateCard({
      ...card,
      [Event.currentTarget.name]: Event.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input className={styles.input} 
      type="text" 
      name="name"
      ref={nameRef} 
      value={name} 
      onChang={onchange} 
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        value={company}
        onChang={onchange}
      />
      <select className={styles.select} 
      name="theme" 
      ref={themeRef}
      value={theme} 
      onChang={onchange}

      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} 
      type="text" 
      name="title" 
      ref={titleRef} 
      value={title} 
      onChang={onchange} 
      />
      <input className={styles.input} 
      type="text" 
      name="email" 
      ref={emailRef} 
      value={email} 
      onChang={onchange} 
      />
      <textarea className={styles.textarea} 
      name="message"
       ref={messageRef} 
      value={message} 
      onChang={onchange} 
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange = {onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
