class Office {

  constructor(){
    this.available = true;
  };

  occupyRoom(){
    this.available = false;
  };

  vacateRoom(){
    this.available = true;
  }

}
