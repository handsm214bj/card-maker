import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const onLogin = Event =>{
        authService //
        .login(Event.currentTarget.textContent)
        .then(console.log);
    };
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                 <li className={styles.item}>
                    <botton className={styles.button}>Google</botton>
                 </li>
                 <il className={styles.item}>
                    <botton className={styles.botton}>Github</botton>
                 </il>
                </ul>                   
            </section>
            <Footer />
        </section>
    );
}; 

export default Login;