
process.stdout.write("Input: ")
process.stdin.on("data", (message) => {
  let output = message.toString().toUpperCase()
  process.stdout.write("Output:" + output)
  process.stdout.write("Input: ")
})

