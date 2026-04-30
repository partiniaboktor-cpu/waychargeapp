import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Coffee.css';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Coffee = () => {
    const navigate = useNavigate();
    
    // State
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState('All Drinks');
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const SearchIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
    const StarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
    const CoffeeIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>;
    const IcedIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4H7z"></path><path d="M7 3v18"></path><path d="M17 3v18"></path><path d="M3 13h18"></path><circle cx="12" cy="8" r="1" fill="currentColor"></circle><circle cx="9" cy="10" r="1" fill="currentColor"></circle><circle cx="15" cy="10" r="1" fill="currentColor"></circle></svg>;

    useEffect(() => {
        async function fetchMenu() {
            try {
                const { data, error } = await supabase
                    .from('CAFÉS_MENU')
                    .select('*')
                    .order('id', { ascending: true });
                
                if (error) throw error;
                if (data) {
                    const mappedDrinks = data.map(item => ({
                        id: item.id,
                        name: item.Item,
                        desc: item.Description,
                        price: item.Price === 'FREE' ? 0 : parseFloat(item.Price.replace('$', '')),
                        category: 'Hot', // Default since not in table
                        isFree: item.Price === 'FREE'
                    }));
                    setDrinks(mappedDrinks);
                }
            } catch (err) {
                console.error('Error fetching menu:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchMenu();
    }, []);

    const categories = ['All Drinks', 'Hot', 'Iced', 'Specialty'];

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const total = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

    return (
        <div className="container14">
            <header className="header14">
                <button className="backBtn14" onClick={() => navigate(-1)}><BackIcon /></button>
                <h1>WayCharge Café</h1>
                <button className="searchBtn14"><SearchIcon /></button>
            </header>

            <div className="promoBanner14">
                <StarIcon />
                <span className="promoText14">Free drink with your charging session!</span>
            </div>

            <div className="tabsScroll14">
                {categories.map((cat) => (
                    <button 
                        key={cat} 
                        className={`tabChip14 ${category === cat ? 'active' : ''}`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="drinkList14">
                {drinks.filter(d => category === 'All Drinks' || d.category === category).map((drink) => (
                    <div className="drinkCard14" key={drink.id}>
                        <div className="drinkIconBox14">
                            {drink.category === 'Iced' ? <IcedIcon /> : <CoffeeIcon />}
                        </div>
                        <div className="drinkInfo14">
                            <div className="drinkTitleRow14">
                                <span className="drinkName14">{drink.name}</span>
                                {drink.isFree && <span className="freeBadge14">Free</span>}
                            </div>
                            <span className="drinkDesc14">{drink.desc}</span>
                            <span className="drinkPrice14">${drink.price.toFixed(2)}</span>
                        </div>
                        <button className="addBtn14" onClick={() => addToCart(drink)}>Add</button>
                    </div>
                ))}
            </div>

            {/* <footer className="footerCart14">
                <div className="cartSummary14">
                    <div className="cartCountRow14">
                        <div className="countCircle14">{cart.length}</div>
                        <span className="cartLabel14">Items in cart</span>
                    </div>
                    <span className="cartTotal14">${total}</span>
                </div>
                <button 
                    className={`confirmBtn14 ${cart.length > 0 ? 'active' : ''}`}
                    onClick={() => cart.length > 0 && navigate('/Coffeedetail')}
                >
                    Confirm
                </button>
            </footer> */}

            <Nav />
        </div>
    );
}

export default Coffee;