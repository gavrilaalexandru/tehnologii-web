const formatString = (template, mapping) => {
  let modifiedString = template;

  for (const placeholder in mapping) {
    const replacement = mapping[placeholder];

    const placeholderToReplace = `{${placeholder}}`;

    const replacementText = replacement;

    modifiedString = modifiedString.replaceAll(
      placeholderToReplace,
      replacementText
    );
  }

  return modifiedString;
};

const template = "un {substantiv} este {adjectiv}.";
const mapping = {
  substantiv: "calut",
  adjectiv: "dragut",
};

console.log(formatString(template, mapping));
