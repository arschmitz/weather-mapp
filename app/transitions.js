import { target } from 'liquid-tether';
export default function() {
  this.transition(
  target('application'),
  this.toValue(({index}) => index === 1),
  this.use('explode', {
    pick: '.menu',
    use: ['to-left']
  }, {
    pick: '.menu--modal',
    use: 'fade'
  }),
  this.reverse('explode', {
    pick: '.menu',
    use: ['to-right']
  }, {
    pick: '.menu--modal',
    use: 'fade'
  })
);
  this.transition(
    this.toRoute(() => true),
    this.use('fade', { durration: 1000 })
  );
  this.transition(
    target('dashboard'),
    this.use('tether', ['to-up', {
      duration: 1500,
      easing: 'easeInOutQuint'
    }])
  );
}