const BloodzNFT = artifacts.require('BloodzNFT')

module.exports = async callback => {
    const bdz = await BloodzNFT.deployed()
    console.log('CREATING REQUESTS ON CONTRACT:', bdz.address)
    try {
        const tx = await bdz.requestNewRandomCharacter("THE BLOOD TYPE")
        const tx2 = await bdz.requestNewRandomCharacter("O NEGATIVE BLOOD")
        // const tx3 = await bdz.requestNewRandomCharacter("The Chainlink Wizard")
        // const tx4 = await bdz.requestNewRandomCharacter("The Chainlink Orc")
        callback(tx.tx)
    }
    catch (err) {
        callback(err)
    }
}