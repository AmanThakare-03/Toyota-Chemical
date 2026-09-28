import { useEffect } from "react";
import { useLocation } from "react-router";

import { SITE_NAME, SITE_URL } from "../config/site";
import { resolveSeo } from "./seoConfig";

const MANAGED = "data-seo-managed";

function applyTags(tags) {
  const head = document.head;
  const wanted = new Set();

  for (const tag of tags) {
    if (!tag.value) continue;
    const selector = tag.attr === "rel" ? `link[rel="${tag.key}"]` : `meta[${tag.attr}="${tag.key}"]`;
    wanted.add(selector);

    let el = head.querySelector(selector);
    if (!el) {
      el = document.createElement(tag.attr === "rel" ? "link" : "meta");
      el.setAttribute(tag.attr, tag.key);
      el.setAttribute(MANAGED, "");
      head.appendChild(el);
    }
    el.setAttribute(tag.attr === "rel" ? "href" : "content", tag.value);
  }

  // Drop tags this hook wrote on a previous route but that the current route
  // no longer needs (e.g. og:article:published_time).
  for (const el of head.querySelectorAll(`[${MANAGED}]`)) {
    const selector = el.tagName === "LINK" ? `link[rel="${el.getAttribute("rel")}"]` : `meta[${el.getAttribute("name") ? "name" : "property"}="${el.getAttribute("name") || el.getAttribute("property")}"]`;
    if (!wanted.has(selector)) el.remove();
  }
}

export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);
    const canonical = seo.canonicalPath ? `${SITE_URL}${seo.canonicalPath}` : null;

    document.title = seo.title;

    applyTags([
      { attr: "name", key: "description", value: seo.description },
      { attr: "name", key: "robots", value: seo.noindex ? "noindex, follow" : "index, follow" },
      { attr: "rel", key: "canonical", value: canonical },
      { attr: "property", key: "og:site_name", value: SITE_NAME },
      { attr: "property", key: "og:type", value: seo.ogType },
      { attr: "property", key: "og:title", value: seo.title },
      { attr: "property", key: "og:description", value: seo.description },
      { attr: "property", key: "og:url", value: canonical },
      { attr: "property", key: "og:image", value: seo.ogImage },
      { attr: "property", key: "article:published_time", value: seo.publishedTime },
      { attr: "name", key: "twitter:card", value: "summary_large_image" },
      { attr: "name", key: "twitter:title", value: seo.title },
      { attr: "name", key: "twitter:description", value: seo.description },
      { attr: "name", key: "twitter:image", value: seo.ogImage },
    ]);
  }, [pathname]);
}
