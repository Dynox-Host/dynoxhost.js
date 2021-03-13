const DynoxHost = require('../src/DynoxHost');
const dh = new DynoxHost('KwEmZFNhrrAKHI2ynvusq69TfMLk358CHXMfix6kccaciTaA');

dh.setPowerState('b6953645', 'kill').then(console.log);