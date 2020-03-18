import IStreamFactory from './i-stream-factory';
import fs from 'fs';
import StreamFactory from './stream-factory';

const streamFactory: IStreamFactory = new StreamFactory();
const firstStream1 = streamFactory.createFirstStream(__dirname + '/data/first-1.txt');
const firstStream2 = streamFactory.createFirstStream(__dirname + '/data/first-2.txt');

const secondStream1 = streamFactory.createSecondStream(__dirname + '/data/second-1.txt');
const secondStream2 = streamFactory.createSecondStream(__dirname + '/data/second-2.txt');

const thirdStream1 = streamFactory.createThirdStream(__dirname + '/data/third-1.txt');
const thirdStream2 = streamFactory.createThirdStream(__dirname + '/data/third-2.txt');

const fourthStream1 = streamFactory.createFourthStream(__dirname + '/data/fourth-1.txt');
const fourthStream2 = streamFactory.createFourthStream(__dirname + '/data/fourth-2.txt');

const fifthStream1 = streamFactory.createFifthStream(__dirname + '/data/fifth-1.txt');
const fifthStream2 = streamFactory.createFifthStream(__dirname + '/data/fifth-2.txt');

test('11', async () => {
  await firstStream1.write('hello world!');
  const data = fs.readFileSync(__dirname + '/data/first-1.txt', {encoding: 'utf-8'});
  expect(data).toEqual('hello world!');
});

test('12', async () => {
  const data = await firstStream2.read();
  expect(data).toEqual('hello world!');
});

test('21', async () => {
  await secondStream1.write('hello world!');
  const data = fs.readFileSync(__dirname + '/data/second-1.txt', {encoding: 'utf-8'});
  expect(data).toEqual('hElLo wOrLd!');
});

test('22', async () => {
  const data = await secondStream2.read();
  expect(data).toEqual('hEllO wOrLD!');
});

test('31', async () => {
  await thirdStream1.write('hello world!');
  const data = fs.readFileSync(__dirname + '/data/third-1.txt', {encoding: 'utf-8'});
  expect(data).toEqual(' !dehllloorw');
});

test('32', async () => {
  const data = await thirdStream2.read();
  expect(data).not.toEqual(' !dehllloorw');
  expect(data.split('').sort().join('')).toEqual(' !dehllloorw');
});

test('41', async () => {
  await fourthStream1.write('hello world!');
  const data = fs.readFileSync(__dirname + '/data/fourth-1.txt', {encoding: 'utf-8'});
  expect(data).toEqual(' !ELLOdhlorw');
});

test('42', async () => {
  const data = await fourthStream2.read();
  expect(data).not.toEqual(' !DHLORWello');
  expect(data.split('').sort().join('')).toEqual(' !DHLORWello');
});

test('51', async () => {
  await fifthStream1.write('hello world!');
  const data = fs.readFileSync(__dirname + '/data/fifth-1.txt', {encoding: 'utf-8'});
  expect(data).toEqual(' !dEhLlLoOrW');
});

test('52', async () => {
  const data = await fifthStream2.read();
  expect(data).not.toEqual(' !DHLORellow');
  expect(data.split('').sort().join('')).toEqual(' !DHLORellow');
});

