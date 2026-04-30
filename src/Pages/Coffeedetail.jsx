import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Coffeedetail.css';
import { supabase } from '../Supabase';

const Coffeedetail = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Customization State
    const [selectedSize, setSelectedSize] = useState('Medium');
    const [milkType, setMilkType] = useState('Whole Milk');
    const [addons, setAddons] = useState(['Extra Shot']);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data, error } = await supabase
                    .from('CAFÉS_MENU')
                    .select('*')
                    .eq('id', 2) // Assuming ID 2 is Latte for this design
                    .single();
                
                if (error) throw error;
                if (data) setPageData(data);
            } catch (err) {
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, []);

    const d = pageData || {
        Item: 'Latte',
        Description: 'Smooth espresso with steamed milk and a light foam layer',
        Price: '$4.75'
    };

    const basePrice = parseFloat(d.Price.replace('$', '')) || 4.75;
    const addonPrices = {
        'Extra Shot': 0.75,
        'Vanilla Syrup': 0.50,
        'Caramel Drizzle': 0.50,
        'Whipped Cream': 0.50
    };

    const calculateTotal = () => {
        let total = basePrice;
        addons.forEach(addon => {
            total += addonPrices[addon] || 0;
        });
        return (total * quantity).toFixed(2);
    };

    const toggleAddon = (addon) => {
        setAddons(prev => 
            prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
        );
    };

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const HeartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
    const CartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
    const ChevronIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
    const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

    return (
        <div className="cd-root">
            <header className="cd-header">
                <button className="cd-icon-btn" onClick={() => navigate(-1)}><BackIcon /></button>
                <button className="cd-icon-btn"><HeartIcon /></button>
            </header>

            <div className="cd-image-container">
                <svg className="cd-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                    <path d="M6 2v2M10 2v2M14 2v2" />
                </svg>
            </div>

            <div className="cd-info-section">
                <h1>{d.Item}</h1>
                <p>{d.Description}</p>
                <div className="cd-price-row">
                    <span className="cd-price">{d.Price}</span>
                    <span className="cd-badge">FREE with charging</span>
                </div>
                <div className="cd-rating">
                    <div className="cd-stars">
                        {[1, 2, 3, 4].map(i => <span key={i} className="cd-star">★</span>)}
                        <span className="cd-star empty">★</span>
                    </div>
                    <span>4.8 (324 reviews)</span>
                </div>
            </div>

            <span className="cd-section-title">Size</span>
            <div className="cd-size-grid">
                {[
                    { label: 'Small', vol: '8 oz' },
                    { label: 'Medium', vol: '12 oz' },
                    { label: 'Large', vol: '16 oz' }
                ].map(size => (
                    <div 
                        key={size.label} 
                        className={`cd-size-card ${selectedSize === size.label ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size.label)}
                    >
                        <b>{size.label}</b>
                        <span>{size.vol}</span>
                    </div>
                ))}
            </div>

            <span className="cd-section-title">Milk Type</span>
            <div className="cd-milk-grid">
                {['Whole Milk', 'Skim Milk', 'Almond Milk', 'Oat Milk'].map(type => (
                    <div 
                        key={type} 
                        className={`cd-option-item ${milkType === type ? 'active' : ''}`}
                        onClick={() => setMilkType(type)}
                    >
                        <div className="cd-radio-circle">
                            {milkType === type && <div className="cd-radio-inner" />}
                        </div>
                        {type}
                    </div>
                ))}
            </div>

            <span className="cd-section-title">Add-ons (Optional)</span>
            <div className="cd-addons-list">
                {Object.keys(addonPrices).map(addon => (
                    <div 
                        key={addon} 
                        className={`cd-addon-item ${addons.includes(addon) ? 'active' : ''}`}
                        onClick={() => toggleAddon(addon)}
                    >
                        <div className="cd-addon-left">
                            <div className="cd-checkbox">
                                {addons.includes(addon) && <CheckIcon />}
                            </div>
                            {addon}
                        </div>
                        <span className="cd-addon-price">+${addonPrices[addon].toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <span className="cd-section-title">Special Instructions (Optional)</span>
            <textarea 
                className="cd-textarea" 
                placeholder="e.g., extra hot, light foam..." 
                rows="3"
            />

            <div className="cd-section-title cd-nutrition-header">
                Nutrition Info <ChevronIcon />
            </div>
            <div className="cd-nutrition-grid">
                <div className="cd-nutri-box">
                    <span className="cd-nutri-val">190</span>
                    <span className="cd-nutri-label">Calories</span>
                </div>
                <div className="cd-nutri-box">
                    <span className="cd-nutri-val">7g</span>
                    <span className="cd-nutri-label">Fat</span>
                </div>
                <div className="cd-nutri-box">
                    <span className="cd-nutri-val">19g</span>
                    <span className="cd-nutri-label">Sugar</span>
                </div>
            </div>

            <footer className="cd-footer">
                <div className="cd-qty-selector">
                    <button className="cd-qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                    <span>{quantity}</span>
                    <button className="cd-qty-btn green" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="cd-add-btn" onClick={() => navigate('/Charging')}>
                    <CartIcon /> Add to Cart • ${calculateTotal()}
                </button>
            </footer>
        </div>
    );
}

export default Coffeedetail;