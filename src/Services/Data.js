const Data = async() => {
    
    let data = await fetch('https://fakestoreapi.com/products')
    
    return await (data.json());
}

export default Data
