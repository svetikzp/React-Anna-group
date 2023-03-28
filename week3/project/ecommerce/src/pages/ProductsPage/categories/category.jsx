export default function Category({ category, onClick, activeCategory }) {
	
    const className = (category === activeCategory) ? 'button active' : 'button'
 
    return <button className={className} onClick={() => { onClick(category) }}>{category}</button>
 }

