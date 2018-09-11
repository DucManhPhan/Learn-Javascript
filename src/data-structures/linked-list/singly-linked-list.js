function LinkedListNode(data) {
    this._data = data; 
    this._next = null;
}

function SinglyLinkedList () {
    this._head = null; 
    this._size = 0;
}


SinglyLinkedList.prototype.insertElement = function (newNode) {
    if (this._head === null) {
        this._head = newNode; 
        this._size++;

        return;
    }
    else {
        var tmpNode = this._head; 

        for (; tmpNode._next !== null; ) {
            tmpNode = tmpNode._next;
        }        

        this._size++;
        tmpNode._next = newNode;         
    }
}


SinglyLinkedList.prototype.getSize = function() {
    return this._size;
}


SinglyLinkedList.prototype.getFirst = function () {
    return this._head;
}


SinglyLinkedList.prototype.print = function() {
    var tmpNode = this._head;

    for (; tmpNode !== null; tmpNode = tmpNode._next) {
        console.log (tmpNode._data + " ");
    }

    console.log ("\n");
}


var llk = new SinglyLinkedList();

var ar = [3, 4, 5, 6, 9];

for (let i = 0; i < ar.length; ++i) {
    var tmpNode = new LinkedListNode(ar[i]);

    llk.insertElement(tmpNode);
}

console.log ("Size of list: " + llk.getSize());

llk.print();

