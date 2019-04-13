const buffer_array = Buffer.from([8,6,7,5,3,0,9]);

const buffer_string = Buffer.from("I'am a string!","utf-8");

console.log("This is buffer: ",buffer_string);
console.log("This is buffer to string: ",buffer_string.toString());
console.log("This is buffer to hex: ",buffer_string.toString("hex"));
console.log("This is buffer to utf-8: ",buffer_string.toString("utf-8",0,10));

var joyned_buffer = Buffer.concat([buffer_array,buffer_string]);

console.log("Joined buffer: ",joyned_buffer);
console.log("Joined buffer to JSON: ",JSON.stringify(joyned_buffer));