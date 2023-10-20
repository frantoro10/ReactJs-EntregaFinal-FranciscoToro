import React, { useState } from 'react'
import Modal from 'react-modal';
import stlyes from './LoginModal.module.scss'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// sweetalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




const LoginModal = ({ onLogin }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [username, setUserName] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const loginSuccess = () => {

        if (username.trim() === '') {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: 'Error',
                text: 'Ingresa tu nombre de usuario',
                icon: 'error',
                showCloseButton: true,
            });
        } else {
            onLogin(username);
            console.log(onLogin)
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: 'Iniciaste sesión con exito!',
                icon: 'success',
                showCloseButton: true,
            })

            closeModal();
        }
    };


    return (
        <div>
            <button onClick={openModal} className={stlyes.loginButton}>Inicar sesión</button>
            <Modal
                className={stlyes.modalContainer}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Inicar sesión"
                appElement={document.getElementById('root')}
            >
                <h2>Iniciar sesión</h2>
                <form action="">
                    <div>
                        <label htmlFor="username">Usuario:</label>
                        <input type="text" id="username" placeholder="Nombre de usuario" value={username} onChange={handleUserNameChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="text" id="password" placeholder="Contraseña" />
                    </div>
                    <button onClick={closeModal}>
                        Cerrar
                    </button>
                    <button type="button" onClick={loginSuccess}>
                        Iniciar sesión
                    </button>

                </form>
            </Modal>
        </div>
    )
}

export default LoginModal;