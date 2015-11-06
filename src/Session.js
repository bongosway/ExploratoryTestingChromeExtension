function Session(dateTime,BrowserInfo) {
	this.BrowserInfo = BrowserInfo;
	this.StartDateTime = dateTime;

	this.annotations = new Array();
}

Session.prototype.getBrowserInfo = function() {
  return this.BrowserInfo;
};

Session.prototype.getStartDateTime = function() {
  return new Date(this.StartDateTime);
};

Session.prototype.clearAnnotations = function() {
  this.annotations = new Array();
};

Session.prototype.getAnnotations = function() {
  return this.annotations;
};

Session.prototype.getBugs = function() {
  return this.annotations.filter(function(item){
       return (item instanceof Bug);
   });
};

Session.prototype.getNotes = function() {
  return this.annotations.filter(function(item){
         return (item instanceof Note);
     });
};

Session.prototype.getIdeas = function() {
  return this.annotations.filter(function(item){
         return (item instanceof Idea);
     });
};

Session.prototype.getQuestions = function() {
   return this.annotations.filter(function(item){
        return (item instanceof Question);
    });
};


Session.prototype.addBug = function(newBug) {
  this.annotations.push(newBug);
};

Session.prototype.addIdea = function(newIdea) {
  this.annotations.push(newIdea);
};

Session.prototype.addNote = function(newNote) {
  this.annotations.push(newNote);
};

Session.prototype.addQuestion = function(newQuestion) {
  this.annotations.push(newQuestion);
};