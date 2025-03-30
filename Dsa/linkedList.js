class Node{
    constructor(val,next=null){
        this.val=val,
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head=null,
        this.size=0 
    }

    insertAtFirst(val){
        this.head = new Node(val,this.head);
        this.size++
    }
insertAtLast(val){

    let node = new Node(val)
    if(!this.head){
        this.head = node
        
    }else{
       let  current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
    }
    this.size++
}
insertAt(val,index){
    if(index<0||index>this.size){
        return 
    }
    if(index===0){
        this.insertAtFirst(val)
        return;
    }
    const node = new Node(val)
    let current=this.head
    let previous
    let count =0
    while(count<index){
        previous= current
        count++
        current = current.next
    }
    node.next=current;
    previous.next= node;
    this.size++
}

    print(){
        let current = this.head;
        while(current){
            console.log(current.val)
            current= current.next
        }
    }
}



const list = new LinkedList()
list.insertAtFirst(20);
list.insertAtFirst(10);
list.insertAtLast(100)
list.insertAt(500,2)
list.print()

