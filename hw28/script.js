const resultText = document.querySelector('.result');

const checkAndGet = () =>  {
    axios.get('/serviceavailable/')
    .then(resp => checkSuccess(resp.data))
    .catch(er => resultText.innerHTML = "Произошла ошибка");
}

const getInfoDesc = async () => {
    let resultInfo = "error", resultDesc = "error";
    try {
        resultInfo = await axios.get('/getinfo/');
    } catch (err) {}
    try {
        resultDesc = await axios.get('/getdescription/');
    } catch (err) {}

    if (resultInfo == "error" || resultInfo.data.isSuccess == false) {
        if (resultDesc == "error" || resultDesc.data.isSuccess == false) {
            console.log("Server error");
            resultText.innerHTML = "";
        }
        else {
            resultText.innerHTML = resultDesc.data.text;
        }
    }
    else {
        if (resultDesc == "error" || resultDesc.data.isSuccess == false) {
            resultText.innerHTML = resultInfo.data.text;
        }
        else{
            resultText.innerHTML = resultInfo.data.text + " " + resultDesc.data.text;
        }
    }
}

function checkSuccess (data) {
    console.log(data);
    console.log(data.isSuccess);
    if (data.isSuccess == false) {
        resultText.innerHTML = "Произошла ошибка";
    }
    else {
        getInfoDesc();
    }
}









