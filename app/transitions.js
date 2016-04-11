import { target } from 'liquid-tether';
export default function() {
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