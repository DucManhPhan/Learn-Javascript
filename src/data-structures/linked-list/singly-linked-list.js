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
        return;
    }
    else {
        var tmpNode = this._head; 

        for (; tmpNode._next !== null; ) {
            tmpNode = tmpNode._next;
        }        

        tmpNode._next = newNode;         
    }
}


SinglyLinkedList.prototype.getSize = function() {
    return this._size;
}


SinglyLinkedList.prototype.getFirst = function () {
    return this._head;
}


var llk = new SinglyLinkedList();

var ar = [3, 4, 5, 6, 9];

for (let i = 0; i < ar.length; ++i) {
    var tmpNode = new LinkedListNode(ar[i]);

    llk.insertElement(tmpNode);
}


var tmpNode = llk._head;
for (let j = 0; j < llk.getSize(); ++i) {
    console.log("   ")

}