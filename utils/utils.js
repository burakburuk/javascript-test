export default class MUtil {
    constructor() {

    }

    static async ajax(url, methodObj) {
        return new Promise((resolve, reject) => {

            methodObj = Object.assign({
                method: 'GET',
                contentType: 'application/json'
            }, methodObj);

            var xhr = new XMLHttpRequest();
            xhr.open(methodObj.method, url);
            xhr.withCredentials = true;
            xhr.setRequestHeader('Content-Type', methodObj.contentType);

            if (methodObj.method == 'GET') {
                xhr.send();
            } else {
                xhr.send(methodObj.data);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        let result = {
                            response: xhr.responseText,
                            responseType: xhr.responseType,
                            responseURL: xhr.responseURL,
                            responseXML: xhr.responseXML,
                            status: xhr.status,
                            statusText: xhr.statusText
                        };
                        reject(result);
                    }
                }
            };
        });
    }
}
