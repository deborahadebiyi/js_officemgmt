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
  })
})
