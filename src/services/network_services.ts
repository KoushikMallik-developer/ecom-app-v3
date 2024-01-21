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
  }
}

export { postData, getData };
