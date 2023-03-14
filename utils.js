

exports.sumTwo = (a, b) => (a + b);

exports.showInfo = (mess) => {
   mess += '';
   var info = 'Thong tin in ra:' + mess.toUpperCase();
   return info;
};

class Car {
   constructor(name, year) {
     this.name = name;
     this.year = year;
   }
   age() {
     let date = new Date();
     return date.getFullYear() - this.year;
   }
 }