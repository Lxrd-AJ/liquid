Liquid.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Liquid.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Liquid.getPath('mainPage.mainPane').remove();
  }

});

