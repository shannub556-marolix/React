function Fourth(props) {
    const {name,colour,price,fuel}=props.name
    return ( 
        <div>
            <h1>Destructuring of props </h1>
            <p>HEllo this is {name} coming from Fourth Comp</p>
            <p>HEllo this is {colour} coming from Fourth Comp</p>
            <p>HEllo this is {price} coming from Fourth Comp</p>
            <p>HEllo this is {fuel} coming from Fourth Comp</p>

        </div>
     );
}

export default Fourth;