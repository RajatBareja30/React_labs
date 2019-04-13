console.log('== System ==');
console.log(`Process: ${process.platform }`);
console.log(`Architecture: ${process.arch}`);

console.log('== NodeJS ==');
console.log(`Node vesion: ${process.versions['node'] }`);
console.log(`V8 vesion: ${process.versions['v8'] }`);
console.log(`libuv vesion: ${process.versions['zlib'] }`);


console.log('== Process ==');

console.log(`pid: ${process.pid }`);
console.log(`title: ${process.title }`);
console.log(`currten directory: ${process.cwd() }`);