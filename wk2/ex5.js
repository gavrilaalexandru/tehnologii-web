const sampleDict = ["este", "minunat", "super"];
const sampleText = "javascript este minunat";

const cenzureazaText = (text, dictionary) => {
  const cenzurat = text
    .split(" ")
    .map((cuvant) => {
      if (dictionary.indexOf(cuvant.toLowerCase()) !== -1) {
        return (
          cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length - 1]
        );
      }
      return cuvant;
    })
    .join(" ");

  return cenzurat;
};

console.log(cenzureazaText(sampleText, sampleDict));
