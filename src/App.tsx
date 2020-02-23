import React from 'react';
import styles from './App.module.scss';
import './index.css';
import { Generics } from './generics/Generics';

function App() {
    return (
        <div className={styles.root}>
            <span className={styles.title}>Typescript Examples</span>
            <Generics/>
        </div>
    );
}

export default App;
