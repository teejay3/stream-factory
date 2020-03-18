import IStreamFactory from './i-stream-factory';
import IStream from './i-stream';
import utils from './utils';

class StreamFactory implements IStreamFactory {
  
  createFifthStream(fileName: string): IStream<string> {
    let res : IStream<string> = {
      async read():Promise<string>{
        return await utils.readFile(fileName, [utils.switchCase, utils.shuffleString]);
      },
      async write(data: string): Promise<void>{
        return await utils.writeFile(fileName, data, [utils.sortString, utils.oddToUpper]);
      }
    }
    return res;
  }

  createFirstStream(fileName: string): IStream<string> {
    let res : IStream<string> = {
      async read():Promise<string>{
          return await utils.readFile(fileName);
      },
      async write(data: string): Promise<void>{
        return await utils.writeFile(fileName, data);
      }
    }
    return res;
  }

  createFourthStream(fileName: string): IStream<string> {
    let res : IStream<string> = {
      async read():Promise<string>{
        return await utils.readFile(fileName, [utils.shuffleString, utils.switchCase]);
      },
      async write(data: string): Promise<void>{
        return await utils.writeFile(fileName, data, [utils.oddToUpper, utils.sortString]);
      }
    }
    return res;
  }

  createSecondStream(fileName: string): IStream<string> {
    let res : IStream<string> = {
      async read():Promise<string>{
        return await utils.readFile(fileName, [utils.switchCase]);
      },
      async write(data: string): Promise<void>{
        return await utils.writeFile(fileName, utils.oddToUpper(data));
      }
    }
    return res;
  }
  
  createThirdStream(fileName: string): IStream<string> {
    let res : IStream<string> = {
    async read():Promise<string>{
      return await utils.readFile(fileName, [utils.shuffleString]);
    },
    async write(data: string): Promise<void>{
      return await utils.writeFile(fileName, utils.sortString(data));
    }
  }
  return res;
  }
}

export default StreamFactory;