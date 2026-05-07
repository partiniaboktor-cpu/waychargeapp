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
    const StarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
    
    // Custom Outlined Coffee Icons matching the design
    const CoffeeCupIcon = () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
        </svg>
    );

    const IcedCoffeeIcon = () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4H7z"></path>
            <path d="M7 3v18"></path>
            <path d="M17 3v18"></path>
            <path d="M3 13h18"></path>
            <circle cx="10" cy="8" r="0.5" fill="currentColor"></circle>
            <circle cx="14" cy="9" r="0.5" fill="currentColor"></circle>
            <circle cx="12" cy="10" r="0.5" fill="currentColor"></circle>
        </svg>
    );

    const CappuccinoIcon = () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
            <circle cx="10" cy="12" r="2" />
        </svg>
    );

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
                        category: item.Item.toLowerCase().includes('iced') ? 'Iced' : 'Hot',
                        isFree: item.Price === 'FREE' || item.id === 1 || item.id === 3 || item.id === 5 // Mocking "FREE" badges as per design
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

    const addToCart = (e, item) => {
        e.stopPropagation();
        setCart([...cart, item]);
    };

    const total = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

    const getIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('iced')) return <IcedCoffeeIcon />;
        if (lowerName.includes('cappuccino')) return <CappuccinoIcon />;
        return <CoffeeCupIcon />;
    };

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
                {drinks
                    .filter(d => category === 'All Drinks' || d.category === category)
                    .map((drink) => (
                    <div 
                        className="drink-card-new" 
                        key={drink.id}
                        onClick={() => navigate('/Coffeedetail')}
                        style={{cursor: 'pointer'}}
                    >
                        <div className="drink-icon-side">
                            {getIcon(drink.name)}
                        </div>
                        <div className="drink-content-side">
                            <div className="drink-header-row">
                                <h4 className="drink-name-new">{drink.name}</h4>
                                {drink.isFree && <span className="free-badge-new">FREE</span>}
                            </div>
                            <p className="drink-desc-new">{drink.desc}</p>
                            <div className="drink-footer-new">
                                <span className="drink-price-new">
                                    ${drink.price.toFixed(2)}
                                </span>
                                <button className="add-btn-new" onClick={(e) => addToCart(e, drink)}>Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footerCart14">
                <div className="cartSummary14">
                    <div className="cartCountRow14">
                        <div className="countCircle14">{cart.length}</div>
                        <span className="cartLabel14">Items in cart</span>
                    </div>
                    <span className="cartTotal14">${total}</span>
                </div>
                <button 
                    className={`confirmBtn14 ${cart.length > 0 ? 'active' : ''}`}
                    onClick={() => cart.length > 0 && navigate('/Charging')}
                >
                    Confirm
                </button>
            </footer>

            <Nav />
        </div>
    );
}

export default Coffee;