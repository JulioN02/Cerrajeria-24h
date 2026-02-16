import { dom } from "../dom";

export const renderCoverage = (areas: string[]): void => {
  if (!dom.coverageContainer) return;

  dom.coverageContainer.innerHTML = `
    <ul>
      ${areas.map(area => `<li>${area}</li>`).join("")}
    </ul>
  `;
};
