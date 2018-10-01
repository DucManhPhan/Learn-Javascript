function List() {
    // data
    this.listSize = 0;
    this.length = 0;
    this.pos = -1;      // current position in list 

    // public methods
    this.clear = clear;
    this.toString = toString;
    this.getElement = getElement;
    this.insert = insert; 
    this.append = append;
    this.remove = remove; 
    
}