const workercode = () => {
  self.onmessage = function (e) {
    console.log("setting token in process", e.data);
    self.postMessage(e.data);
  };
};
let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);
export default worker_script;
