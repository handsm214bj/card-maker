import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChage }) => {
    const inputRef = useRef();
    const onButtonClick = Event => {
        Event.preventDefault();
        inputRef.current.click();
    };

    const onChage = async Event => {
        console.log(Event.targer.files[0]);
        const uploaded = await imageUploader.upload(Event.targer.files[0]);
        console.log(uploaded);
        onFileChage({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };

  return (
    <div className={styles.container}>
    <input 
        ref={inputRef} 
        className={styles.input}
        type="file" 
        accept="image/*" 
        name="file"
        onChange={onChage}
    />
    <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
    </button>
    </div>
  );
};

export default ImageFileInput;
