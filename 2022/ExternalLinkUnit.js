// https://www.redditstatic.com/desktop2x/ExternalLinkUnit.153ced6ab890735e0557.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				c = a("./src/chat/helpers/linkParser/index.ts"),
				s = a("./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less"),
				m = a.n(s);
			const o = e => {
					const {
						faviconUrl: t,
						title: a
					} = e;
					return r.a.createElement("div", {
						className: m.a.TitleContent
					}, t ? r.a.createElement("img", {
						className: m.a.Favicon,
						src: t
					}) : null, r.a.createElement("div", {
						className: m.a.Title
					}, a))
				},
				d = e => {
					const {
						title: t,
						link: a,
						faviconUrl: n
					} = e;
					return r.a.createElement("div", {
						className: m.a.HeaderContent
					}, r.a.createElement(o, {
						title: t,
						faviconUrl: n
					}), r.a.createElement("span", {
						className: m.a.Link
					}, a))
				},
				E = e => {
					const {
						name: t,
						link: a,
						faviconUrl: n
					} = e;
					return r.a.createElement("div", {
						className: m.a.Header
					}, r.a.createElement(d, {
						title: t,
						link: a,
						faviconUrl: n
					}))
				},
				v = e => {
					const {
						thumbnailUrl: t,
						title: a
					} = e;
					return r.a.createElement("div", {
						className: m.a.ContentContainer
					}, r.a.createElement(k, {
						url: t,
						title: a
					}))
				},
				_ = e => {
					const {
						url: t
					} = e;
					return r.a.createElement("div", {
						className: m.a.ImageContainer
					}, r.a.createElement("img", {
						className: m.a.Image,
						src: t
					}))
				},
				k = e => {
					const {
						url: t,
						title: a
					} = e;
					return r.a.createElement("div", {
						className: m.a.Content
					}, t ? r.a.createElement(_, {
						url: t
					}) : null, r.a.createElement("div", {
						className: m.a.Title
					}, a))
				},
				u = e => {
					const {
						providerDisplay: t
					} = e;
					return r.a.createElement("div", {
						className: m.a.Footer,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: m.a.ProviderDisplay
					}, t))
				},
				C = e => {
					const {
						darkBackground: t,
						name: a = "",
						href: n = "",
						providerDisplay: s = "",
						thumbnailUrl: o = "",
						title: d = "",
						faviconUrl: _ = ""
					} = e;
					return r.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(l.e)(Object(c.c)(t), "_blank")
							})(e, n)
						},
						className: Object(i.a)(m.a.ExternalLinkUnit, {
							[m.a.dark]: t
						})
					}, r.a.createElement(E, {
						name: a,
						link: n,
						faviconUrl: _
					}), o ? null : r.a.createElement("div", {
						className: m.a.Delimiter
					}), r.a.createElement(v, {
						thumbnailUrl: o,
						title: d,
						darkBackground: t
					}), r.a.createElement(u, {
						providerDisplay: s
					}))
				};
			t.default = e => r.a.createElement("div", {
				className: m.a.RichUnitWrapper
			}, r.a.createElement(C, e))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ExternalLinkUnit.153ced6ab890735e0557.js.map