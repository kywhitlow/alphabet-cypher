const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const Cypher = {
  encode: (key, message) => {
    let encodedMessage = [];
    const lowercaseMessage = message.toLowerCase().trim();
    // make the key as long as the message
    const repeatedKey = key.repeat((message.length - key.length) % message.length );

    // iterate over letters in message
    for (let index = 0; index < message.length; index++) {
      let encodedLetterIndex = (alphabet.indexOf(repeatedKey[index]) + alphabet.indexOf(message[index])) % 26;
      encodedMessage.push(alphabet[encodedLetterIndex]);
    }
    return encodedMessage.join("");
  },
  encode2: (key, message) => {
    let encodedMessage = [];

    // iterate over letters in message
    for (let index = 0; index < message.length; index++) {
      let encodedLetterIndex = ((alphabet.indexOf(key[(index % key.length)]) + alphabet.indexOf(message[index])) + 26) % 26;
      encodedMessage.push(alphabet[encodedLetterIndex]);
    }
    return encodedMessage.join("");
  },
  decode: (key, encodedMessage) => {
    let decodedMessage = [];
    // iterate over letters in message
    for (let index = 0; index < encodedMessage.length; index++) {
      let decodedLetterIndex = ((alphabet.indexOf(key[(index % key.length)]) - alphabet.indexOf(encodedMessage[index])) - 26) % 26;
      decodedMessage.push(alphabet[Math.abs(decodedLetterIndex)]);
    }
    return decodedMessage.join("");
  },
  
  decypher: (encodedMessage, message) => {
    let cypherKey = [];

    for (let index = 0; index < encodedMessage.length; index++) {
      let one = alphabet.indexOf(encodedMessage[index]);
      let two = alphabet.indexOf(message[index]);
      cypherKey.push(alphabet[(one - two + 26) % 26]);
    }

    const stringCypherKey = cypherKey.join("");
    for (let index = 0; index < stringCypherKey.length; index++) {
      
    }

    return stringCypherKey;
  }
}

export default Cypher