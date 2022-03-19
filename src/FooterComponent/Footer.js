import React from 'react';

const Footer = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <footer className="main-footer" >

            <strong>Copyright © {date} <a target="_blank" href="http://kudotech.in/">Kudo Tech </a>.</strong> All rights reserved.
        </footer >
    );
}

export default Footer;
