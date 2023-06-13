const rsa = require('./rsa')


encrypted_msg = rsa.encrypt('MjI1NTg4OSw0MjY4MzQ3', "IDONENT")

// console.log(encrypted_msg)

decrypt_msg = rsa.decrypt('MTM5MTY4MSw0MjY4MzQ3', 'ABRhZwAVI6wAJI/fABIGawAYfZsANCJAABOnZQA8masAFSOsAB5bswAwJjoAOiFpAAQMJwAZCUoAH2aRACSP3wAYfZsAPLZMADo3WAAAf+cAPJmrAB9mkQ==')

console.log(decrypt_msg)