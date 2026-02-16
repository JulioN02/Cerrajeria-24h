import type { BusinessConfig } from "../../domain/businessTypes";
import { coverageData } from "../data/coverageData";

export const businessConfig: BusinessConfig = {
  businessName: "Cerrajería Valle Seguro 24h",
  phone: "573001234567",
  whatsapp: "573001234567",
  coverageAreas: coverageData,
  responseTimeMinutes: 20
};
