const Connect = require('./utils')
require('dotenv').config()

var instance = new Connect(
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY,
  process.env.CONTRACT,
  process.env.RPC
)

const main = async () => {
  try {
    const balance = await instance.balanceOf(process.env.PUBLIC_KEY, 1)
    console.log(balance)
  } catch (e) {
    console.log(e)
  }

  process.exit()
}

main()
