class Office {

  constructor(){
    this.available = true;
  };

  occupyRoom(){
    this.available = false;
  };

  vacateRoom(){
    this.available = true;
  };

  inUse(){
    if(this.available === true){
      return false;
    } else {
      return true;
      throw 'Room currently in use!';
    };
  };
}
