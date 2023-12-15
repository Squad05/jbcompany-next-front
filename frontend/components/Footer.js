import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from '../styles/Footer.module.css'

export default function Footer() {

    return (
        <footer className={`mt-5 pt-5 pb-5 text-white ${styles.footer}`}>
            <div className="container">
                <div className="row px-5">
                    <div className="col-lg-6 col-xs-12">
                        <h2>Lorem</h2>
                        <p className="pr-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                            ante mollis quam tristique convallis
                        </p>
                        <p>
                            <Link href="https://pt-br.facebook.com/" target= "_blank" color="inherit">
                                <FacebookIcon />
                            </Link>
                            <Link href="https://www.instagram.com/" target= "_blank" color="inherit">
                                <InstagramIcon />
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-3 col-xs-12">
                        <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                        <ul className="m-0 p-0 list-unstyled">
                            <li>
                                <a href="#" className="text-white">Lorem ipsum</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Nam mauris velit</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Etiam vitae mauris</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Fusce scelerisque</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Sed faucibus</a>
                            </li>
                            <li>
                                <a href="#" className="text-white">Mauris efficitur nulla</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <h4 className="mt-lg-0 mt-sm-4">Lorem</h4>
                        <p>Lorem</p>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col px-5">
                        <p className="text-right">
                            <small>© 2023. All Rights Reserved.</small>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
