import { useEffect } from 'react';
import '../App.sass';

function Home() {
    useEffect(() => {
        document.title = 'Главная - IceMail';
    }, []);
    
    return (
        <div className="Home">
        </div>
    );
}

export default Home;