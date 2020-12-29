import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChage }) => {
    const [loading, setLoading] = useState(false);
    
    const inputRef = useRef();
    const onButtonClick = Event => {
        Event.preventDefault();
        inputRef.current.click();
    };

    const onChage = async Event => {
        setLoading(true);
        const uploaded = await imageUploader.upload(Event.targer.files[0]);
        setLoading(false);
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
    {!loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`}
        onClick={onButtonClick}>
        {name || 'No file'}
    </button>
    )}
    {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
