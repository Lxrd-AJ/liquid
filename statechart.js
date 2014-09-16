Liquid.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Liquid.ReadyState'),
  loginState: SC.State.plugin('Liquid.LoginState'),
  welcomeState: SC.State.plugin('Liquid.welcomeState')
});
