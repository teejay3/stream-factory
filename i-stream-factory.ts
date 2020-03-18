import IStream from './i-stream';

interface IStreamFactory {
  createFirstStream(fileName: string): IStream<string>;

  createSecondStream(fileName: string): IStream<string>;

  createThirdStream(fileName: string): IStream<string>;

  createFourthStream(fileName: string): IStream<string>;

  createFifthStream(fileName: string): IStream<string>;
}

export default IStreamFactory;