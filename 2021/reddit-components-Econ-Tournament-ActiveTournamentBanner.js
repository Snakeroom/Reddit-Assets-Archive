// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Tournament-ActiveTournamentBanner.cec42ea560f0969f7468.js
// Retrieved at 4/22/2021, 8:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Tournament-ActiveTournamentBanner"], {
		"./src/reddit/components/Econ/Tournament/ActiveTournamentBanner/index.m.less": function(e, t, a) {
			e.exports = {
				card: "J6eFUyt7VkLA8vXvrgcnp",
				titleWrapper: "_2rXlBUKyIXAW6ITTPlPF6S",
				title: "n84xRj6EGgIewIGsP4T2Q",
				liveIcon: "_3Q9gaSxtN-RMYXcK3uBzaY",
				description: "mpiGVabMNR_e5hxAjj_g",
				promoWrapper: "_2f10eqL6Eju5kDiSt0pcuX",
				promo: "_2vBVj1NZkguTiAPPHpTnZy",
				promoButton: "w2PGBBUlOFkwfCQEL6Oo3",
				classic: "_2kr6AG2NBKlJmp6WCXEzvu",
				header: "lVQm2WjTZAHFKHTPIO1Rl",
				compact: "_29uJazgpWqnlRieu2lOVfZ",
				nightMode: "_1Bg0vmwTf-TXziZqp36s36"
			}
		},
		"./src/reddit/components/Econ/Tournament/ActiveTournamentBanner/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/config.ts"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/constants/postLayout.ts"),
				l = a("./src/reddit/controls/Button/index.tsx"),
				m = a("./src/reddit/controls/InternalLink/index.tsx"),
				d = a("./src/reddit/selectors/user.ts"),
				p = a("./src/reddit/components/Econ/Tournament/ActiveTournamentBanner/index.m.less"),
				u = a.n(p);
			const {
				fbt: _
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				className: e,
				layout: t,
				url: a
			}) => {
				const n = Object(s.e)(e => Object(d.V)(e)),
					p = t === i.g.Classic || t === i.g.Compact;
				return r.a.createElement(E, {
					smallFormat: p,
					url: a
				}, r.a.createElement("div", {
					className: Object(o.a)(e, {
						[u.a.card]: !p,
						[u.a.classic]: t === i.g.Classic,
						[u.a.compact]: t === i.g.Compact
					})
				}, r.a.createElement("div", {
					className: u.a.header
				}, r.a.createElement("div", {
					className: u.a.titleWrapper
				}, r.a.createElement("h2", {
					className: u.a.title
				}, _._("Oscars 2021", null, {
					hk: "JME6P"
				})), r.a.createElement("span", {
					className: u.a.liveIcon
				}, _._("Live", null, {
					hk: "1o89m4"
				}))), r.a.createElement("h4", {
					className: u.a.description
				}, _._("Predictions Tournament", null, {
					hk: "4bTRJ0"
				}))), r.a.createElement(m.a, {
					className: Object(o.a)(u.a.promoWrapper, {
						[u.a.nightMode]: n
					}),
					to: `${a}predictions/`
				}, r.a.createElement("img", {
					className: u.a.promo,
					src: `${c.a.assetPath}/img/econ/predictions/promos/live-predictions.gif`
				})), r.a.createElement(l.q, {
					className: u.a.promoButton,
					kind: l.a.ExternalLink,
					href: "/r/movies/predictions/"
				}, "Play")))
			};
			const E = ({
				smallFormat: e,
				url: t,
				children: a
			}) => e ? r.a.createElement(m.a, {
				to: `${t}predictions/`
			}, a) : r.a.createElement(r.a.Fragment, null, a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Tournament-ActiveTournamentBanner.cec42ea560f0969f7468.js.map