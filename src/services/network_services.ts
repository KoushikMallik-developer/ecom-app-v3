async function postData(url: string, requestData: any, apiTag: String) {
  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestData,
    });

    const finalResp: ApiResponseType = {
      response: await response.json(),
      status: response.ok,
      statusCode: response.status.toString(),
    };

    return finalResp;
  } catch (error) {
    console.error("error : ", error);
  }
}

async function getData(url: string, apiTag: String) {
  try {
    var tokens = JSON.parse(localStorage.getItem("tokens") ?? "")
    var token = "Bearer " + tokens['token'];
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });

    var jsonData = await response.json();

    console.log("getData -->", jsonData['data'])
    console.log("GETAPI TAG -->", apiTag)
    debugger
    const finalResp: ApiResponseType = {
      response: jsonData,
      status: response.ok,
      statusCode: response.status.toString(),
    };

    return finalResp;
  } catch (error) {
    console.error("error : ", error);

  }
}

export { postData, getData };
