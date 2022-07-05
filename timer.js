const beepsAt = process.argv.slice(2);


for (let i = 0; i < beepsAt.length; i++){
    beepsAt[i] = Number(beepsAt[i])
    if (beepsAt[i] !== NaN && beepsAt[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beepsAt[i] * 1000);
    }
}


