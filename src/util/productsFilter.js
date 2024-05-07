
const filter = (db, searchquery, filterState) => {
    const { car, mode, category, sort } = filterState;
    const splitQuery = searchquery.split('-');

    let filtered = db;
    
    if (car !== 'Carro') filtered = filtered.filter( el => el.make === car);

    switch (mode){
        
        case 'Nombre':
            filtered = filtered.filter(el => 
                splitQuery.every(word => 
                    el.name.includes(word) ||
                    el.name.trim().split(/\s+/).some( name => word.includes(name) && name.length >= 2)
                )
            )
            break;

        case 'Codigo':
            filtered = filtered.filter(el => 
                el.partNo.includes(splitQuery[0])
            )
            break;
        
        case 'Descripcion':
            filtered = filtered.filter(el => 
                splitQuery.every(word => 
                    el.desc?.includes(word) ||
                    el.desc?.trim().split(/\s+/).some( name => word.includes(name) && name.length >= 3) 
                )
            )
        
        case 'Categoria':
            filtered = filtered.filter(el => 
                splitQuery.every(word => 
                    el.properties.category?.includes(word) ||
                    el.properties.category?.trim().split(/\s+/).some( name => word.includes(name) && name.length >= 3) 
                )
            )
        default:
            break;
    }
    
    if (category !== 'Todos') filtered = filtered.filter(el => el.properties.category === category)

    switch (sort){
        case 'Alfabetico (A-Z)':
            filtered.sort((a,b) => {
                if (a.name > b.name) return 1
                else return -1
            });
            break;

        case 'Alfabetico (Z-A)': 
        filtered.sort((a,b) => {
            if (a.name < b.name) return 1
            else return -1
        });

        case 'Mas Barato':
            filtered.sort( (a,b) => +b.price-+a.price);

        case 'Mas Caro':
            filtered.sort( (a,b) => +a.price-+b.price);

        default:
            break;
    }
    return filtered
};

export default filter