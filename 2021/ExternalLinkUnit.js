// https://www.redditstatic.com/desktop2x/ExternalLinkUnit.3379045f035b84db7de2.js
// Retrieved at 9/15/2021, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ExternalLinkUnit"], {
		"./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less": function(e, t, a) {
			e.exports = {
				RichUnitWrapper: "ke6TKb33anNYB1yQYgsle",
				richUnitWrapper: "ke6TKb33anNYB1yQYgsle",
				ExternalLinkUnit: "_1HQ3ZceWl9xONobvLvCDvy",
				externalLinkUnit: "_1HQ3ZceWl9xONobvLvCDvy",
				dark: "n_VW-p7OBeqSM86OQFvrc",
				Delimiter: "_3FShkFdOCAm64rP7Z5VoyF",
				delimiter: "_3FShkFdOCAm64rP7Z5VoyF",
				Header: "_1evF1xj5FEnb1DQt23ZZAu",
				header: "_1evF1xj5FEnb1DQt23ZZAu",
				HeaderContent: "_rXqtEsRddLRprY6eQRYY",
				headerContent: "_rXqtEsRddLRprY6eQRYY",
				TitleContent: "pH2AB-ti61rLtjEEJzE7g",
				titleContent: "pH2AB-ti61rLtjEEJzE7g",
				Favicon: "_1vWsmQ6fTQVi4keqUVew2m",
				favicon: "_1vWsmQ6fTQVi4keqUVew2m",
				Title: "_1vKmyXdyLuXFx0GGtKPCoD",
				title: "_1vKmyXdyLuXFx0GGtKPCoD",
				Link: "_88j1m-GH1XqFAGMJnm76J",
				link: "_88j1m-GH1XqFAGMJnm76J",
				ContentContainer: "_3CYddbzQBL1JfQCaIzBhFo",
				contentContainer: "_3CYddbzQBL1JfQCaIzBhFo",
				Content: "_3Fh9YOztr9HJwmd2llyk7P",
				content: "_3Fh9YOztr9HJwmd2llyk7P",
				ImageContainer: "_3jeImKxWWGIFqKNRTZeTGe",
				imageContainer: "_3jeImKxWWGIFqKNRTZeTGe",
				Image: "mC-gyFEPMirpKUEF-9cUX",
				image: "mC-gyFEPMirpKUEF-9cUX",
				Footer: "_7c8971gyJI3QIAAJMZuxo",
				footer: "_7c8971gyJI3QIAAJMZuxo"
			}
		},
		"./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/opener/index.ts"),
				c = a("./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less"),
				s = a.n(c);
			const m = e => {
					const {
						faviconUrl: t,
						title: a
					} = e;
					return r.a.createElement("div", {
						className: s.a.TitleContent
					}, t ? r.a.createElement("img", {
						className: s.a.Favicon,
						src: t
					}) : null, r.a.createElement("div", {
						className: s.a.Title
					}, a))
				},
				o = e => {
					const {
						title: t,
						link: a,
						faviconUrl: n
					} = e;
					return r.a.createElement("div", {
						className: s.a.HeaderContent
					}, r.a.createElement(m, {
						title: t,
						faviconUrl: n
					}), r.a.createElement("span", {
						className: s.a.Link
					}, a))
				},
				d = e => {
					const {
						name: t,
						link: a,
						faviconUrl: n
					} = e;
					return r.a.createElement("div", {
						className: s.a.Header
					}, r.a.createElement(o, {
						title: t,
						link: a,
						faviconUrl: n
					}))
				},
				E = e => {
					const {
						thumbnailUrl: t,
						title: a
					} = e;
					return r.a.createElement("div", {
						className: s.a.ContentContainer
					}, r.a.createElement(_, {
						url: t,
						title: a
					}))
				},
				v = e => {
					const {
						url: t
					} = e;
					return r.a.createElement("div", {
						className: s.a.ImageContainer
					}, r.a.createElement("img", {
						className: s.a.Image,
						src: t
					}))
				},
				_ = e => {
					const {
						url: t,
						title: a
					} = e;
					return r.a.createElement("div", {
						className: s.a.Content
					}, t ? r.a.createElement(v, {
						url: t
					}) : null, r.a.createElement("div", {
						className: s.a.Title
					}, a))
				},
				k = e => {
					const {
						providerDisplay: t
					} = e;
					return r.a.createElement("div", {
						className: s.a.Footer,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: s.a.ProviderDisplay
					}, t))
				},
				u = e => {
					const {
						darkBackground: t,
						name: a = "",
						href: n = "",
						providerDisplay: c = "",
						thumbnailUrl: m = "",
						title: o = "",
						faviconUrl: v = ""
					} = e;
					return r.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(l.f)(t, "_blank")
							})(e, n)
						},
						className: Object(i.a)(s.a.ExternalLinkUnit, {
							[s.a.dark]: t
						})
					}, r.a.createElement(d, {
						name: a,
						link: n,
						faviconUrl: v
					}), m ? null : r.a.createElement("div", {
						className: s.a.Delimiter
					}), r.a.createElement(E, {
						thumbnailUrl: m,
						title: o,
						darkBackground: t
					}), r.a.createElement(k, {
						providerDisplay: c
					}))
				};
			t.default = e => r.a.createElement("div", {
				className: s.a.RichUnitWrapper
			}, r.a.createElement(u, e))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ExternalLinkUnit.3379045f035b84db7de2.js.map