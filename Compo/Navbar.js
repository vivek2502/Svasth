import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-8">
                <a className="navbar-brand " href="#page-top">Svasth</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About US</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Blockchain</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
