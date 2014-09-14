Liquid.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Liquid.ReadyState')
  // someOtherState: SC.State.plugin('Liquid.SomeOtherState')

});
