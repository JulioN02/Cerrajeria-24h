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
import { renderFooter } from "../ui/render/renderFooter";

import { registerServicesFilterHandler } from "../ui/handler/servicesHandlers";
import { registerFloatingWhatsApp } from "../ui/handler/contactHandlers";
import { registerHeaderHandlers } from "../ui/handler/headerHandlers";

import "../styles/main.css";

const init = (): void => {
  const services = getAllServices(servicesData);
  const testimonials = getAllTestimonials(testimonialsData);
  const coverage = getCoverageAreas(businessConfig);

  renderHero(businessConfig);
  renderServices(services);
  renderTestimonials(testimonials);
  renderCoverage(coverage);
  renderFooter(businessConfig);

  registerServicesFilterHandler(services);
  registerFloatingWhatsApp(businessConfig);
  registerHeaderHandlers();
};

document.addEventListener("DOMContentLoaded", init);
