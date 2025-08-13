declare module 'typewriter-effect' {
  interface TypewriterOptions {
    delay?: number;
    cursor?: string;
    cursorClassName?: string;
  }

  class Typewriter {
    pauseFor(ms: number): Typewriter;
    typeString(text: string): Typewriter;
    start(): Typewriter;
  }

  interface TypewriterComponentProps {
    onInit?: (typewriter: Typewriter) => void;
    options?: TypewriterOptions;
  }

  const TypewriterComponent: React.ComponentType<TypewriterComponentProps>;
  export default TypewriterComponent;
}
