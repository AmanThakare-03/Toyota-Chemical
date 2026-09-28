import { Navigate, Route, Routes } from "react-router";

import MainLayout from "../../components/layout/MainLayout";

import About from "../../pages/About/About";
import Applications from "../../pages/Applications/Applications";
import BoilerFeedWater from "../../pages/Applications/BoilerFeedWater";
import DealkalisationResin from "../../pages/Applications/DealkalisationResign";
import DMPlantResin from "../../pages/Applications/DMPlantresign";
import MixedBedCondensatePolishing from "../../pages/Applications/MixedBedCondensate";
import ETPWastewaterTreatment from "../../pages/Applications/WasteWater";
import WaterSoftening from "../../pages/Applications/WaterSoftening";
import Blog from "../../pages/Blog/Blog";
import BlogPost from "../../pages/Blog/BlogPost";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import ChemicalIndustries from "../../pages/Industries/Chemical";
import FoodBeverage from "../../pages/Industries/Foodbeverages";
import Industries from "../../pages/Industries/Industries";
import PaperPulp from "../../pages/Industries/Paperpup";
import PowerThermalPlants from "../../pages/Industries/Powerthermalplant";
import SugarProcessing from "../../pages/Industries/Sugar";
import TextileDye from "../../pages/Industries/Textile";
import {
  LegalNotice,
  Partners,
  PrivacyPolicy,
  Resources,
  Sustainability,
} from "../../pages/Info/InfoPages";
import NotFound from "../../pages/NotFound/NotFound";
import Anion from "../../pages/Products/Anion";
import Cationanion from "../../pages/Products/Cationanion";
import Mixedbed from "../../pages/Products/Mixedbed";
import Product from "../../pages/Products/Product";
import Specialty from "../../pages/Products/Specialty";
import Watersoftener from "../../pages/Products/Watersoftener";
import QualityCertificate from "../../pages/Quality/QualityCertificate";
import Servicearea from "../../pages/About/Servicearea";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main pages */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manufacturers-in-india" element={<About />} />
        <Route path="/service-area" element={<Servicearea />} />
        <Route path="/contact" element={<Contact />} />

        {/* Products hub + categories */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/cationanion" element={<Cationanion />} />
        <Route path="/products/anion" element={<Anion />} />
        <Route path="/products/mixedbed" element={<Mixedbed />} />
        <Route path="/products/watersoftener" element={<Watersoftener />} />
        <Route path="/products/specialty" element={<Specialty />} />

        {/* SEO/legacy product slugs used inside existing page content */}
        <Route path="/products/cation-exchange-resins" element={<Cationanion />} />
        <Route path="/products/anion-exchange-resins" element={<Anion />} />
        <Route path="/products/mixed-bed-resins" element={<Mixedbed />} />
        <Route path="/products/water-softener-resins" element={<Watersoftener />} />
        <Route path="/products/specialty-resins" element={<Specialty />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Applications */}
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/water-softener-resin" element={<WaterSoftening />} />
        <Route
          path="/applications/boiler-feed-water-treatment"
          element={<BoilerFeedWater />}
        />
        <Route path="/applications/dm-plant-resin" element={<DMPlantResin />} />
        <Route
          path="/applications/mixed-bed-condensate-polishing"
          element={<MixedBedCondensatePolishing />}
        />
        <Route
          path="/applications/dealkalisation-resin"
          element={<DealkalisationResin />}
        />
        <Route
          path="/applications/etp-wastewater-treatment"
          element={<ETPWastewaterTreatment />}
        />
        <Route path="/applications/ultrapure-water" element={<Applications />} />

        {/* Industries */}
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/chemical" element={<ChemicalIndustries />} />
        <Route path="/industries/chemical-intermediates" element={<ChemicalIndustries />} />
        <Route path="/industries/food-beverage" element={<FoodBeverage />} />
        <Route path="/industries/paper" element={<PaperPulp />} />
        <Route path="/industries/power-thermal" element={<PowerThermalPlants />} />
        <Route path="/industries/sugar-seo-kit" element={<SugarProcessing />} />
        <Route path="/industries/textile" element={<TextileDye />} />

        {/* Information pages */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quality-compliance" element={<QualityCertificate />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Backward-compatible aliases for previously published URLs */}
        <Route path="/product" element={<Navigate to="/products" replace />} />
        <Route path="/Product" element={<Navigate to="/products" replace />} />
        <Route path="/Product/Cationanion" element={<Navigate to="/products/cationanion" replace />} />
        <Route path="/products/Cationanion" element={<Navigate to="/products/cationanion" replace />} />
        <Route path="/Product/Anion" element={<Navigate to="/products/anion" replace />} />
        <Route path="/Product/Mixedbed" element={<Navigate to="/products/mixedbed" replace />} />
        <Route path="/Product/Watersoftener" element={<Navigate to="/products/watersoftener" replace />} />
        <Route path="/Product/Specialty" element={<Navigate to="/products/specialty" replace />} />
        <Route
          path="/applications/boiler-feed-water"
          element={<Navigate to="/applications/boiler-feed-water-treatment" replace />}
        />
        <Route
          path="/applications/mixed-bed-polishing"
          element={<Navigate to="/applications/mixed-bed-condensate-polishing" replace />}
        />
        <Route
          path="/applications/organic-removal"
          element={<Navigate to="/applications/etp-wastewater-treatment" replace />}
        />
        <Route
          path="/applications/deakalistion-resign"
          element={<Navigate to="/applications/dealkalisation-resin" replace />}
        />
        <Route
          path="/applications/wastewater-treatment"
          element={<Navigate to="/applications/etp-wastewater-treatment" replace />}
        />
        <Route
          path="/applications/water-softener-resign"
          element={<Navigate to="/applications/water-softener-resin" replace />}
        />
        <Route path="/industries/textie" element={<Navigate to="/industries/textile" replace />} />
        <Route path="/industries/paper-pulp" element={<Navigate to="/industries/paper" replace />} />
        <Route
          path="/industries/power-thermal-plants"
          element={<Navigate to="/industries/power-thermal" replace />}
        />
        <Route
          path="/industries/sugar-processing"
          element={<Navigate to="/industries/sugar-seo-kit" replace />}
        />
        <Route
          path="/industries/textile-dye"
          element={<Navigate to="/industries/textile" replace />}
        />
        <Route
          path="/oem-dealer-partners"
          element={<Navigate to="/partners" replace />}
        />
        <Route
          path="/quality-certifications"
          element={<Navigate to="/quality-compliance" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
