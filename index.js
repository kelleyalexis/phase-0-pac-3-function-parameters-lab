function introductionWithLanguage(firstName, language) {
    return(`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
}
function introduction(firstName) {
    return(`Hi, my name is ${firstName}.`);
}
function introductionWithLanguageOptional(firstName = "User", language = "JavaScript") {
    return(`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
}