class Sorter {
  constructor() {
      //this.name = name;
      this.arr = [];

  }

  add(element) {
  this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
   return this.arr;
  }

  sort(indices) {
    this.arr2 = [];
    for (let i = 0; i < indices.length; i++) {
        this.arr2.push(this.arr[indices[i]])
    }
    this.defaultSortingAlghrothm(this.arr2);
      console.log(this.arr2);

      for( let i = 0; i<this.arr2.length; i++) {
          this.arr[[indices[i]]] = this.arr2[i];
      }
  }

   defaultSortingAlghrothm(){
           let n = this.arr2.length;
           for (let i = 0; i < n-1; i++) {
             for (let j = 0; j < n-1-i; j++){
               if (this.arr2[j+1] < this.arr2[j]){
                    let t = this.arr2[j+1];
                     this.arr2[j+1] = this.arr2[j];
                      this.arr2[j] = t;
               }
             }
           }
           return this.arr2;
       }

  setComparator(compareFunction) {
      this.arr.sort(compareFunction);
  }
}



module.exports = Sorter;


