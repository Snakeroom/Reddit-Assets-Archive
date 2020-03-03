// https://www.redditstatic.com/desktop2x/SpezModalLoader.c45aba88aad9485ab0df.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SpezModalLoader"], {
		"./src/reddit/components/SpezModal/index.m.less": function(e, t, o) {
			e.exports = {
				OutboundLink: "_31izTHZ0dyrJSrd0dBzi6_",
				outboundLink: "_31izTHZ0dyrJSrd0dBzi6_",
				active: "_3Q4Nt8OHH7iMnRZQSrcD7i",
				redditStyle: "_2cnt8khH3HDS_lbKCABbYs",
				SpezModalText: "lDzeklHiKvG1hmHArURwH",
				spezModalText: "lDzeklHiKvG1hmHArURwH",
				JustALink: "_1EUWs4nbtz6tKuSNZ7hn1w",
				justALink: "_1EUWs4nbtz6tKuSNZ7hn1w"
			}
		},
		"./src/reddit/components/SpezModal/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/react/index.js"),
				a = o.n(n),
				r = o("./src/config.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				s = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = o("./src/reddit/controls/TextButton/index.tsx"),
				c = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const u = e => e.preventDefault();
			var m = Object(l.a)(e => {
					const t = !!e.cancelActionText,
						o = !(!e.actionText || !e.onConfirm);
					return a.a.createElement(s.c, {
						style: e.style
					}, a.a.createElement(s.g, null, a.a.createElement(c.a, null, a.a.createElement(s.n, null, e.headerText), !e.hideCancel && a.a.createElement(i.a, {
						onClick: () => {
							e.trackCancel && e.trackCancel(), e.toggleModal()
						}
					}, a.a.createElement(s.b, null)))), a.a.createElement(s.j, null, e.modalBody()), (t || o) && a.a.createElement(s.e, null, t && a.a.createElement(s.a, {
						"data-redditstyle": !0,
						onMouseDown: u,
						onClick: () => {
							e.trackCancel && e.trackCancel(), e.toggleModal()
						}
					}, e.cancelActionText), o && a.a.createElement(s.r, {
						"data-redditstyle": !0,
						onMouseDown: u,
						onClick: t => {
							e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
						}
					}, e.actionText)))
				}),
				p = o("./src/reddit/constants/modals.ts"),
				x = o("./src/reddit/constants/spezModal.ts"),
				g = o("./src/reddit/controls/OutboundLink/index.tsx"),
				E = o("./src/reddit/components/SpezModal/index.m.less"),
				k = o.n(E);
			const y = {
					displayText: "REGISTER TO VOTE",
					url: x.a,
					outboundUrl: x.b,
					outboundUrlExpiration: x.c
				},
				_ = d.a.wrapped(g.a, "OutboundLink", k.a),
				b = d.a.p("SpezModalText", k.a),
				h = d.a.wrapped(g.a, "JustALink", k.a),
				C = () => a.a.createElement(b, null, "You upvote on Reddit, but are you registered to vote IRL? Learn about the voter registration process, how to check your registration, and more", a.a.createElement(h, {
					"data-redditstyle": !0,
					href: y.url,
					source: y,
					isSponsored: !1
				}, "here."), "Register now, so you’ll be VoteReady come election day this November.", a.a.createElement(_, {
					"data-redditstyle": !0,
					href: y.url,
					source: y,
					isSponsored: !1
				}, y.displayText));
			t.default = e => a.a.createElement(m, {
				headerText: "Happy National Voter Registration Day from Reddit!",
				modalBody: C,
				modalId: p.a.SPEZ_MODAL,
				toggleModal: e.toggleModal,
				withOverlay: e.withOverlay,
				style: {
					backgroundImage: "url(".concat("".concat(r.a.assetPath, "/img/uncle-sam-snoo.png"), ")"),
					backgroundRepeat: "no-repeat",
					backgroundPosition: "bottom 5px right 5px",
					paddingBottom: "66px",
					position: "relative"
				}
			})
		}
	}
]);
//# sourceMappingURL=SpezModalLoader.c45aba88aad9485ab0df.js.map