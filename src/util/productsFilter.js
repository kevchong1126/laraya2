
const filter = (db, searchquery, filterState) => {
    const { car, mode, category, sort } = filterState;
    const splitQuery = searchquery.split('-');

    let filtered = db;
    
    if (car !== 'Marca') filtered = filtered.filter( el => el.make === car);

    switch (mode){
        
        case 'NOMBRE':{
            filtered = filtered.filter(el => 
                splitQuery.every(word => 
                    el.name.includes(word) ||
                    el.name.trim().split(/\s+/).some( name => word.includes(name) && name.length >= 2)
                )
            )
            break;
        }
        case 'CODIGO':{
            filtered = filtered.filter(el => 
                el.partNo.includes(splitQuery[0])
            )
            break;
        }
        case 'DESCRIPCION': {
            filtered = filtered.filter(el => 
                splitQuery.every(word => 
                    el.desc?.includes(word) ||
                    el.desc?.trim().split(/\s+/).some( name => word.includes(name) && name.length >= 3) 
                )
            ) 
            break;
        }
        case 'Buscar por:' : {
            filtered = filtered.filter(el => 
                splitQuery.every(word => 
                    el.name.includes(word) ||
                    el.name.trim().split(/\s+/).some( name => word.includes(name) && name.length >= 2)
                )
            )
            break;
        }
    
        default:
            break;
        
    }
    
    if (category !== 'Categoria') filtered = filtered.filter(el => el.properties.category === category)

    switch (sort){
        case 'Alfabetico (A-Z)':
            filtered.sort((a,b) => {
                return a.name.localeCompare(b.name)
            });
            break;

        case 'Alfabetico (Z-A)': 
            filtered.sort((a,b) => {
                return b.name.localeCompare(a.name)
            });
            break;
        case 'Mas Barato':
            filtered.sort( (a,b) => a.price - b.price);
            break;
        case 'Mas Caro':
            filtered.sort( (a,b) => b.price - a.price);
            break;
        default:
            break;
    }
    return filtered
};

export default filter