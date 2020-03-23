import React from 'react';

import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="col-900">
                <div className="copyright">&copy; 2019 El Duende Rojo</div>
                <ul className="menu">
                    <li className="item"><a href="https://www.facebook.com/Colonia-el-Duende-Rojo-159695604140071/"  rel="noopener noreferrer" target="_blank">Facebook</a></li>
                    <li className="item"><a href="https://www.instagram.com/coloniaelduenderojo/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
                    <li className="item"><a href="https://api.whatsapp.com/send?phone=5492245427854" rel="noopener noreferrer" target="_blank">Whatsapp</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;