console.log('Простое сообщение');
console.log('Простое сообщение с форматированием: %s %s', 'Value', 'Data');

console.info('Информационное сообщение ');
console.warn('Предупреждение');
console.error('Какая-то ошибка');

console.group('Группа 1 ');
console.log('Message 1');
console.log('Message 2');
console.log('Message 3');
console.groupEnd();

console.time('Timer 1');
for (let i = 0; i < 20000000; i++) {
    let a = i + i
}
console.timeEnd('Timer 1');