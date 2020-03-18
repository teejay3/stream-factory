interface IStream<T> {
  read(): Promise<T>;

  write(data: T): Promise<void>;
}

export default IStream;
