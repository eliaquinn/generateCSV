const data = `data format`

const generateSchema = (titleString, baseString) => {
    let titles = titleString + ";;"
    let keyValues = "key;value"
    let dataString = baseString.split("\n")
    let arrData = dataString.map((ds) => {
        let doubleQuote = ds.split("|")
        let reformated = doubleQuote.join(";")

        return reformated
    })
    let dataReformated = arrData.join("\n")
    let dataFinal = `${titles}
${keyValues}
${dataReformated}`

    return dataFinal
}

console.log(generateSchema('nome', data))