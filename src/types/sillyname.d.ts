declare module 'sillyname' {
  type ZeroToOneGenerator = () => number;

  function generateName(generator?: ZeroToOneGenerator): string;

  export function randomNoun(generator?: ZeroToOneGenerator): string;
  export function randomAdjective(generator?: ZeroToOneGenerator): string;
  export default generateName;
}
