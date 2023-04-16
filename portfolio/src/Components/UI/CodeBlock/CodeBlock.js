import React from 'react';
import styles from './CodeBlock.module.scss'

const CodeBlock = props =>{
    return <code className={`${styles.code} ${props.className}`}>{props.children}</code>
}

export default CodeBlock;