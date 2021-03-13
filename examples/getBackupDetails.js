const DynoxHost = require('../src/DynoxHost');
const dh = new DynoxHost('KwEmZFNhrrAKHI2ynvusq69TfMLk358CHXMfix6kccaciTaA');

dh.getBackupDetails('b6953645', 'e6c5137e-4b91-4d91-ac80-bb7d7722a8f1').then(console.log);