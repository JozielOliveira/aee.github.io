export const dynamicSort = property => {
    let sortOrder = 1;
  
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
  
    return (a,b) => {
      return sortOrder === -1 ? b[property].localeCompare(a[property]) : a[property].localeCompare(b[property]);
    }
}