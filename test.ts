type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
} | null;

const myNetState: NetworkSuccessState = null;
console.log(myNetState)
