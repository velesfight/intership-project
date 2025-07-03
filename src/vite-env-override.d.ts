declare module '@fontsource-variable/geologica';

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement> & { title?: string }>;
  export default content;
}
