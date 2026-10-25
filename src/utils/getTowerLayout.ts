import { towerStages } from "../data/towerStages";

export default function getTowerLayout(index: number) {
  // index variable is 0-based
  const layouts = towerStages.flatMap((season) => season.layouts);
  const layout = layouts[index + 1];

  if (!layout) return null;

  return {
    name: layout.name,
    stages: layout.stages,
  };
}
