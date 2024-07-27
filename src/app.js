let pronoun = ["the", "our"];
let adjs = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjs.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adjs[j] + noun[k] + "com");
    }
  }
}
