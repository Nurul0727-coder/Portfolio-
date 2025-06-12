declare module "vanta/dist/vanta.fog.min" {
  const effect: (options: any) => {
    destroy: () => void;
  };
  export default effect;
}

declare module "vanta/dist/vanta.fog.min" {
  export type VantaEffect = {
    destroy: () => void;
  };

  export type VantaInit = (options: {
    el: HTMLElement;
    THREE: typeof import("three");
    [key: string]: any;
  }) => VantaEffect;

  const effect: VantaInit;
  export default effect;
}
