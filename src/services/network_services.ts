async function postData(url: string, requestData: any, apiTag: String) {
  try {
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add other headers if needed
      },
      body: requestData,
    });

    const finalResp: ApiResponseType = {
      response: await response.json(),
      status: response.ok,
      statusCode: response.status.toString(),
    };

    debugger
    return finalResp;
  } catch (error) {
    console.log("error : ", error);
  }
}

async function getData(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.log("error : ", error);
    //   throw new Error('Error occurred: ' + error.message);
  }
}

export { postData, getData };
