import Cypher from './index'

describe('Alphabet Cypher', () => {
  describe('Encode', () => {
    it('can encode a message with vigilance as a secret keyword', () => {
      const secretKeyword = 'vigilance'
      const message = 'meetmeontuesdayeveningatseven'

      const encodedMessage = Cypher.encode(secretKeyword, message)

      expect(encodedMessage).toBe('hmkbxebpxpmyllyrxiiqtoltfgzzv')
    });
    
    it('can encode a message with scones as a secret keyword', () => {
      const secretKeyword = 'scones'
      const message = 'meetmebythetree'

      const encodedMessage = Cypher.encode(secretKeyword, message)

      expect(encodedMessage).toBe('egsgqwtahuiljgs')
    });
  });

  describe('Encode', () => {
    it('can encode a message with vigilance as a secret keyword', () => {
      const secretKeyword = 'vigilance'
      const message = 'meetmeontuesdayeveningatseven'

      const encodedMessage = Cypher.encode2(secretKeyword, message)

      expect(encodedMessage).toBe('hmkbxebpxpmyllyrxiiqtoltfgzzv')
    });
    
    it('can encode a message with scones as a secret keyword', () => {
      const secretKeyword = 'scones'
      const message = 'meetmebythetree'

      const encodedMessage = Cypher.encode2(secretKeyword, message)

      expect(encodedMessage).toBe('egsgqwtahuiljgs')
    });
  });

  describe('Decode', () => {
    it('can decode a message with vigilance as a secret keyword', () => {
      const secretKeyword = 'vigilance'
      const encodedMessage = 'hmkbxebpxpmyllyrxiiqtoltfgzzv'

      const message = Cypher.decode(secretKeyword, encodedMessage)

      expect(message).toBe('meetmeontuesdayeveningatseven')
    });
    
    it('can decode a message with scones as a secret keyword', () => {
      const secretKeyword = 'scones'
      const encodedMessage = 'egsgqwtahuiljgs'

      const message = Cypher.decode(secretKeyword, encodedMessage)

      expect(message).toBe('meetmebythetree')
    });
  });
  
  describe('Decypher', () => {
    it('can extract the secret keyword given an encrypted message and the original message 1', () => {
      const message = 'meetmeontuesdayeveningatseven'
      const encodedMessage = 'hmkbxebpxpmyllyrxiiqtoltfgzzv'

      const secretKeyword = Cypher.decypher(encodedMessage, message)

      expect(secretKeyword).toBe('vigilance')
    });
    
    it('can extract the secret keyword given an encrypted message and the original message 2', () => {
      const message = 'meetmebythetree'
      const encodedMessage = 'egsgqwtahuiljgs'

      const secretKeyword = Cypher.decypher(encodedMessage, message)

      expect(secretKeyword).toBe('scones')
    });
  });
});
