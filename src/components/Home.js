import React, { useState } from 'react';
import './Home.css'
import Product from './Product';
import Modal from 'react-modal';


const Home = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const styleHandle = {
        style : {
            overlay: {
                backgroundColor: 'rgba(17,17,17,0.9)'
            },
            content: {
                background: 'rgba(52,58,64,0.9)'
            }
        }
    }
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__image" src="https://images.unsplash.com/photo-1482775907821-a56ec43344fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80" alt="" />
                <Modal isOpen={modalOpen} {...styleHandle}>
                    <div className="modal">
                        <h1>This is a demo web app so payments are disabled, or use 42424242424242 for all card details.
                        Thanks for your understanding</h1>

                        <button onClick={() => setModalOpen(false)} >CLOSE</button>
                    </div>

                </Modal>
            <div className="home__row">
                <Product 
                    title='Omega Seamaster Aqua Terra' 
                    price={17000}  
                    id={1412} 
                    image="https://mediastorage.richemont.com/damdatastore/PrD/als/14/66/1466501.png?impolicy=cropresize&width=320&cropheight=600&cropwidth=370&type=normal"
                    />
                <Product 
                    title='MASTER PILOT gold 14.7 ctw' 
                    price={16000} 
                    id={2223} 
                    image="https://m.media-amazon.com/images/I/71dboSa7QLL._AC_UL320_.jpg"
                    />
                <Product 
                    title='Omega Speedmaster Broad Arrow' 
                    price={12300} 
                    id={3222} 
                    image="https://m.media-amazon.com/images/I/412FPTI8U3L._AC_UL320_.jpg"
                    />
                
            </div>
            <div className="home__row">
                <Product 
                    title='Gevril Men Avenue of Americas Serenade Steel and 18K Gold' 
                    price={25000} 
                    id={4222} 
                    image="https://m.media-amazon.com/images/I/81YhWwMpggL._AC_UL320_.jpg"
                    />
                <Product 
                    title='Joe Rodeo Diamond Men Watch' 
                    price={15000} 
                    id={5222} 
                    image="https://m.media-amazon.com/images/I/7116dIv740L._AC_UL320_.jpg"
                    />
                <Product 
                    title='Omega Deville Ladies Watch' 
                    price={13000} 
                    id={6222} 
                    image="https://m.media-amazon.com/images/I/613T1kmVXxL._AC_UL320_.jpg"
                    />
                <Product 
                    title='ORPHELIA Women Analogue Quartz' 
                    price={11800} 
                    id={7222} 
                    image="https://m.media-amazon.com/images/I/81ABovEVpLL._AC_UL320_.jpg"
                    />
            </div>
            <div className="home__row">
                <Product 
                    title='Tag Heuer Carrera Black Dial Black Leather Mens Watch' 
                    price={16500} 
                    id={8222} 
                    image="https://m.media-amazon.com/images/I/91gyDc2k6jL._AC_UL320_.jpg"
                    />
                <Product 
                    title='Gevril Men Avenue of Americas White Gold Automatic Self Winder Watch with Leather' 
                    price={10350} 
                    id={9222} 
                    image="https://m.media-amazon.com/images/I/81pptMhmPDL._AC_UL320_.jpg"
                    />
                <Product 
                    title='Omega Constellation 18kt Rose Gold Brown Dial Ladies Watch' 
                    price={10320} 
                    id={9322} 
                    image="https://m.media-amazon.com/images/I/51KS+5yUiZL._AC_UL320_.jpg"
                    />
            </div>
            <div className="home__row">
                <Product 
                    title='Omega Speedmaster 57 Mens Watch' 
                    price={16600} 
                    id={2255} 
                    image="https://m.media-amazon.com/images/I/81gvOstlLrL._AC_UL320_.jpg"
                    />
                <Product 
                    title='White Diamond Dial Stainless Steel White Alligator Ladies Watch' 
                    price={9000} 
                    id={2256} 
                    image="https://m.media-amazon.com/images/I/713KplrsmgL._AC_UL320_.jpg"
                    />
                <Product 
                    title='Orphelia Men Quartz Watch mon-7060 with Metal Strap' 
                    price={8250} 
                    id={2257} 
                    image="https://m.media-amazon.com/images/I/814KINMi4WL._AC_UL320_.jpg"
                    />
                <Product 
                    title='Omega Speedmaster Ladies Diamond MOP Dial Watch' 
                    price={8000} 
                    id={2258} 
                    image="https://m.media-amazon.com/images/I/81IF5oA7H9L._AC_UL320_.jpg"
                    />
            </div>
            </div>
        </div>
    )
}

export default Home;
