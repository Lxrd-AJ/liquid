Liquid.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Liquid.getPath('mainPage.mainPane').append();
  },

  didLoad: function(){
  	if ( Liquid) {};
  },

  exitState: function() {
    Liquid.getPath('mainPage.mainPane').remove();
  }

});

