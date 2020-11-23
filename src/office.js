class Office {

  constructor(){
    this.available = true;
    this.name = 'Boardroom 1';
    this.rooms = [];

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

  addRoom(title, availability = true){
    this.rooms.push({roomName: this.title, vacant: this.availability})
  }
}
