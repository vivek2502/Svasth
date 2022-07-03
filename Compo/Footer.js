import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <footer className="py-5 bg-black">
            <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Svasth 2022</p></div>
        </footer>
    );
}
