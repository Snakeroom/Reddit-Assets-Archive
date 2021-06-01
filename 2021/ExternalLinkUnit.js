// https://www.redditstatic.com/desktop2x/ExternalLinkUnit.be09c59869925cb2cfee.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ExternalLinkUnit"], {
		"./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less": function(e, a, t) {
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
		"./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				l = t("./src/lib/classNames/index.ts"),
				i = t("./src/lib/lessComponent.tsx"),
				c = t("./src/lib/opener/index.ts"),
				s = t("./src/chat/components/Message/LinkedText.tsx"),
				m = t("./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less"),
				o = t.n(m);
			const d = i.a.div("ProviderDisplay", o.a),
				E = i.a.div("Delimiter", o.a),
				p = i.a.wrapped(s.a, "Link", o.a),
				v = i.a.img("Image", o.a),
				u = i.a.img("Favicon", o.a),
				_ = i.a.div("Title", o.a),
				k = i.a.wrapped(e => {
					const {
						className: a,
						faviconUrl: t,
						title: n
					} = e;
					return r.a.createElement("div", {
						className: a
					}, t ? r.a.createElement(u, {
						src: t
					}) : null, r.a.createElement(_, null, n))
				}, "TitleContent", o.a),
				C = i.a.wrapped(e => {
					const {
						className: a,
						title: t,
						link: n,
						faviconUrl: l
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(k, {
						title: t,
						faviconUrl: l
					}), r.a.createElement(p, {
						value: n
					}))
				}, "HeaderContent", o.a),
				U = i.a.wrapped(e => {
					const {
						className: a,
						name: t,
						link: n,
						faviconUrl: l
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(C, {
						title: t,
						link: n,
						faviconUrl: l
					}))
				}, "Header", o.a),
				x = i.a.wrapped(e => {
					const {
						className: a,
						thumbnailUrl: t,
						title: n
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(L, {
						url: t,
						title: n
					}))
				}, "ContentContainer", o.a),
				F = i.a.wrapped(e => {
					const {
						className: a,
						url: t
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(v, {
						src: t
					}))
				}, "ImageContainer", o.a),
				L = i.a.wrapped(e => {
					const {
						className: a,
						url: t,
						title: n
					} = e;
					return r.a.createElement("div", {
						className: a
					}, t ? r.a.createElement(F, {
						url: t
					}) : null, r.a.createElement(_, null, n))
				}, "Content", o.a),
				N = i.a.wrapped(e => {
					const {
						className: a,
						providerDisplay: t
					} = e;
					return r.a.createElement("div", {
						className: a,
						tabIndex: 0
					}, r.a.createElement(d, null, t))
				}, "Footer", o.a),
				g = i.a.wrapped(e => {
					const {
						className: a,
						darkBackground: t,
						name: n = "",
						href: i = "",
						providerDisplay: s = "",
						thumbnailUrl: m = "",
						title: d = "",
						faviconUrl: p = ""
					} = e;
					return r.a.createElement("button", {
						onClick: e => {
							((e, a) => {
								e.stopPropagation(), Object(c.d)(a, "_blank")
							})(e, i)
						},
						className: Object(l.a)(a, {
							[o.a.dark]: t
						})
					}, r.a.createElement(U, {
						name: n,
						link: i,
						faviconUrl: p
					}), m ? null : r.a.createElement(E, null), r.a.createElement(x, {
						thumbnailUrl: m,
						title: d,
						darkBackground: t
					}), r.a.createElement(N, {
						providerDisplay: s
					}))
				}, "ExternalLinkUnit", o.a);
			a.default = i.a.wrapped(e => {
				const {
					className: a
				} = e;
				return r.a.createElement("div", {
					className: a
				}, r.a.createElement(g, e), " ")
			}, "RichUnitWrapper", o.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ExternalLinkUnit.be09c59869925cb2cfee.js.map