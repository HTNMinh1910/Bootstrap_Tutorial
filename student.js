module.exports=class Student_new {
   constructor(name, id) {
      this.name = name;
      this.id = id;
   }

   getInfor = function () {
      return `${this.name} - ${this.id} - ${this.getScore()}`;;
   }

   getScore = function () {
      let score = 5 + Math.floor(Math.random() * 6);
      return score;
   }

   getServery = function () {

   }
}