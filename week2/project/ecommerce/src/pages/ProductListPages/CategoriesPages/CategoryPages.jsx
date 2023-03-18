

function CategoryPages  ({data, className, onClick})  {
    return (
        <div className={`category-item ${className}`} onClick={() => onClick(data)}>{data}</div>
    )
}
export default CategoryPages;
