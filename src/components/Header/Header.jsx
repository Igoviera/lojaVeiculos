import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className={styles.headerContainer}>
                <div>
                    <h2>Logo</h2>
                </div>
                <div>
                    <nav>
                        <ul>
                            <Link to={'/login'}><li>Login</li></Link>
                            <li>Cadastrar</li>
                            <li>Contato</li>
                        </ul>
                    </nav> 
                </div>
            </div>
        </header>
    )
}

export default Header;