
type logger = (...args: any[]) => void;

const info: logger = (...args)=>{
	console.log("INFO: ", ...args);
};

const error: logger = (...args)=>{
	console.log("ERROR: ", ...args);
}
const loggerFuncs: {[func: string]: logger} = { info, error };

export default loggerFuncs;
