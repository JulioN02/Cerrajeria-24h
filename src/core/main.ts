import { servicesData } from "../infrastructure/data/servicesData";
import { testimonialsData } from "../infrastructure/data/testimonialsData";
import { businessConfig } from "../infrastructure/config/businessConfig";

import { getAllServices } from "../application/servicesUsecases";
import { getAllTestimonials } from "../application/testimonialsUsecases";
import { getCoverageAreas } from "../application/coverageUsecases";

import { renderHero } from "../ui/render/renderHero";
import { renderServices } from "../ui/render/renderServices";
import { renderTestimonials } from "../ui/render/renderTestimonials";
import { renderCoverage } from "../ui/render/renderCoverage";

import { registerServicesFilterHandler } from "../ui/handler/servicesHandlers";
import { registerFloatingWhatsApp } from "../ui/handler/contactHandlers";

const init = (): void => {
  const services = getAllServices(servicesData);
  const testimonials = getAllTestimonials(testimonialsData);
  const coverage = getCoverageAreas(businessConfig);

  renderHero(businessConfig);
  renderServices(services);
  renderTestimonials(testimonials);
  renderCoverage(coverage);

  registerServicesFilterHandler(services);
  registerFloatingWhatsApp(businessConfig);
};

document.addEventListener("DOMContentLoaded", init);
