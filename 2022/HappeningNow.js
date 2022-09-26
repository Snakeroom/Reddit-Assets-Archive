// https://www.redditstatic.com/desktop2x/HappeningNow.380cdc00d1411c3bd222.js
// Retrieved at 9/26/2022, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HappeningNow"], {
		"./src/reddit/components/HappeningNow/EmptyState/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3GDYLZHJp1CkQvFPsQCbCE",
				img: "_32u4k6FHHzC4G2mmF-gRkr",
				textContainer: "_2jmarrTKX-C5CcS50-jRHU",
				headerText: "Gh10dctgZ5ORre_jETYUB",
				descriptionText: "_1hXv7xHnobKA672aE-iYmN",
				ctaText: "_6h9G4KWPSERhJS5B0sV9"
			}
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, a) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return o
			})), a.d(t, "a", (function() {
				return d
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				i = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/pages/ErrorPages/index.m.less"),
				c = a.n(l);
			const o = e => {
					let {
						message: t
					} = e;
					return s.a.createElement("div", {
						className: c.a.container
					}, s.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), s.a.createElement(i.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return s.a.createElement("div", {
						className: c.a.container
					}, s.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), s.a.createElement(i.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/HappeningNow/index.m.less": function(e, t, a) {
			e.exports = {
				main: "_1s0yf8yaKs3Bm_FnVQLBhW",
				container: "pNm6yMSKQZScSZjTA1OG",
				content: "_3ihSslAiQM4Ly7oq-AhJ-s",
				emptyState: "_3FIewnpSP6gczGsKc99-nD"
			}
		},
		"./src/reddit/pages/HappeningNow/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n, r = a("./node_modules/react/index.js"),
				s = a.n(r),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/config.ts"),
				c = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/controls/Button/index.tsx");
			! function(e) {
				e.All = "all", e.Chat = "chat", e.Talk = "talk"
			}(n || (n = {}));
			var m = a("./src/reddit/components/HappeningNow/EmptyState/index.m.less"),
				p = a.n(m);
			var u = e => {
					const t = n.All,
						a = Object(r.useMemo)(() => (e => {
							switch (e) {
								case n.Chat:
									return {
										headerText: c.fbt._("There aren't any chats happening now", null, {
											hk: "3nrAYl"
										}), descriptionText: c.fbt._("Everyone is quiet right now, how about starting your own chat", null, {
											hk: "1IxXa7"
										}), ctaText: c.fbt._("Start a Chat", null, {
											hk: "BMlPp"
										})
									};
								case n.Talk:
									return {
										headerText: c.fbt._("There aren't any talks happening now", null, {
											hk: "1U7KsT"
										}), descriptionText: c.fbt._("Everyone is quiet right now, how about starting your own talk", null, {
											hk: "21DkH7"
										}), ctaText: c.fbt._("Start a Talk", null, {
											hk: "3dlnGh"
										})
									};
								case n.All:
								default:
									return {
										headerText: c.fbt._("There aren't any live conversations happening now", null, {
											hk: "2ML98x"
										}), descriptionText: c.fbt._("Check back in later, or start your own", null, {
											hk: "2FOpxu"
										}), ctaText: c.fbt._("Start a live chat", null, {
											hk: "22xdVy"
										})
									}
							}
						})(t), [t]);
					return s.a.createElement("div", {
						className: Object(o.a)(p.a.container, e.className)
					}, s.a.createElement("img", {
						className: p.a.img,
						src: `${l.a.assetPath}/img/happeningNow/empty-state-snoo.png`,
						alt: c.fbt._("Snoo with live chat icon", null, {
							hk: "4kxcZJ"
						})
					}), s.a.createElement("div", {
						className: p.a.textContainer
					}, s.a.createElement("p", {
						className: p.a.headerText
					}, a.headerText), s.a.createElement("p", {
						className: p.a.descriptionText
					}, a.descriptionText)), s.a.createElement(d.t, {
						className: p.a.ctaText,
						kind: d.b.InternalLink,
						to: "/submit"
					}, a.ctaText))
				},
				h = a("./src/reddit/pages/ErrorPages/index.tsx"),
				x = a("./src/reddit/selectors/experiments/happeningNow.ts"),
				_ = a("./src/reddit/pages/HappeningNow/index.m.less"),
				g = a.n(_);
			t.default = e => {
				return Object(i.e)(x.a) ? s.a.createElement("div", {
					className: g.a.main
				}, s.a.createElement("div", {
					className: g.a.container
				}, s.a.createElement("div", {
					className: g.a.content
				}, s.a.createElement(u, {
					className: g.a.emptyState
				})))) : s.a.createElement(h.b, null)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HappeningNow.380cdc00d1411c3bd222.js.map