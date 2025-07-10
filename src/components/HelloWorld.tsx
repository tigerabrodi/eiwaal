export type HelloWorldProps = {
  name?: string;
};

export const HelloWorld = ({ name = "World" }: HelloWorldProps) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is my first React library component.</p>
    </div>
  );
};
