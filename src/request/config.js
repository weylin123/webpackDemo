const devBaseURL = "/api2";
const proBaseURL = "http://123.207.32.32:9001/banner";
export  const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
console.log('BASE_URL: ', BASE_URL);

