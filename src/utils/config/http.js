
import SDK from "@uphold/uphold-sdk-javascript";

const http = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: "BITRESERVE",
  clientSecret: "secret",
});

export default http;
