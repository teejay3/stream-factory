import {promises as fs} from 'fs';

/* class SimpleReader{
    private _fs: any;
    constructor(fs: any){
        this._fs = fs;
    }
    async read(fileName: string): Promise<string>
    {
        return new Promise<string>((resolve, reject)=>{this._fs.read();});
    }
    async wirte(fileName: string, data: string): Promise<void>
    {
        return new Promise<void>((resolve, reject)=>{this._fs.write();});
    }
}
const sr = new SimpleReader(fs);
sr.read();
export default SimpleReader;*/

// write
async function writeFile(fileName: string, data: string, cbs?: Array<Function>): Promise<void>
{
    let result = data;
    if(cbs)
    {
        for(let i = 0; i < cbs.length; i++)
            result = cbs[i](result);
    }
    return await fs.writeFile(fileName, result);
}

// read
async function readFile(fileName: string, cbs?: Array<Function>): Promise<string>
{
    /*return new Promise<string>(
          (resolve, reject)=>
          {
              fs.readFileSync(fileName, (err, data) => {if(!err) resolve(data); else reject(err);}));
          });*/
    let result: string = (await fs.readFile(fileName)).toString();
    if(cbs)
    {
        for(let i = 0; i < cbs.length; i++)
            result = cbs[i](result);
    }
    return result;
}

// каждый второй элемент в верхний регистр
function oddToUpper(str:string): string
{
  return str.split('').map((val, idx)=>val = idx % 2 != 0 ? val.toUpperCase() : val).join('');
}

// сменить регистр
function switchCase(str: string): string
{
  return str.split('').map((val,idx) => val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()).join('');
}

// рандомизация
function shuffleString(str: string): string
{
  let result = str;
  const len = result.length;
  for(let i = 0; i < len; i++){
    let r = Math.floor(Math.random() * len);
    let tmp = result[i];
    let tmp2 = result[r];
    result = result.substr(0, i) + tmp2 + result.substr(i+1);
    result = result.substr(0, r) + tmp + result.substr(r+1);
  }
  return result;
}

function sortString(str: string): string
{
  return str.split('').sort().join('');
}

export = {writeFile, readFile, oddToUpper, switchCase, shuffleString, sortString}
