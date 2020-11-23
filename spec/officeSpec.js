describe("Office", function(){
  var office;
  beforeEach(function(){
    office = new Office();
  });
  it("checks if a meeting room is available", function(){
    expect(office.available).toBe(true);
  });
  it("meeting room becomes unavailable when occupied", function(){
    office.occupyRoom();
    expect(office.available).toBe(false);
  });
  it("meeting room becomes available when vacant", function(){
    office.vacateRoom();
    expect(office.available).toBe(true);
  });
  it("throws an error if entering an occupied room", function(){
    var occupied = function(){
      throw new TypeError("Room currently in use!");
    };
    expect(occupied).toThrowError("Room currently in use!");
  });
  it("meeting rooms have a name", function(){
    expect(office.name).toEqual('Boardroom 1');
  });
  it("office manager adds a new meeting room to office", function(){
    office.addRoom(title, availability);
    expect(office.rooms).toContain([{roomName: title, vacant: availability}]);

  })
})
