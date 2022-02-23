// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.6f1d176ffed277c33103.js
// Retrieved at 2/23/2022, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_21z552gDZGIvH3ewNzPXWw",
				allItemsClaimed: "_28X5CGnlbD1rpnRMaJsUc2",
				isNotLarge: "_1YOB9GyYMcCe82cZEVbnF-",
				picturePlaceholder: "_1cgOf4pia-N6GXO3hCF4Cw",
				picture: "_3G7Z3fc_P9APszDIIU-DVV",
				content: "SRWJIsg0tR6P750ETdJxX",
				title: "_3HIlwwNgCIK08IKRUnuxH7",
				description: "_2gaSV92NoIXBPb2oTYoEnr",
				ctaButton: "_1GBzwGYQyfdH6Ejqj2eOvx"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "MarketplaceInFeedUnit", (function() {
				return x
			}));
			var n = a("./src/lib/classNames/index.ts"),
				c = a("./node_modules/react/index.js"),
				s = a.n(c),
				i = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				r = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/constants/postLayout.ts"),
				m = a("./src/reddit/controls/Button/index.tsx");
			var u = a("./src/reddit/hooks/usePreloadModal.ts"),
				_ = a("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				p = a("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				E = a.n(p);
			const {
				fbt: f
			} = a("./node_modules/fbt/lib/FbtPublic.js"), N = "https://www.redditstatic.com/crypto-assets/v2/marketplace/web", h = `${N}/feed_decoration_first_frame.png`, b = `${N}/feed_decoration.png`, x = ({
				height: e,
				layout: t
			}) => {
				const a = Object(i.e)(_.a),
					p = Object(i.e)(e => (null == a ? void 0 : a.id) ? Object(_.b)(e, a.id) : null),
					N = Object(i.d)(),
					[x, w] = Object(c.useState)(!1),
					O = "no_nfts_left" === p,
					g = x ? b : h,
					I = t === d.g.Large;
				if (function(e, t) {
						Object(c.useEffect)(() => {
							const a = new Image;
							a.onload = () => {
								t()
							}, a.src = e
						}, [e, t])
					}(b, () => {
						w(!0)
					}), Object(u.a)(l.a), !(null == a ? void 0 : a.id)) return null;
				return s.a.createElement("div", {
					onClick: () => {
						N(Object(o.h)(r.a.ECON_MARKETPLACE_CLAIM, {
							claimId: a.id
						}))
					},
					className: Object(n.a)(E.a.container, {
						[E.a.allItemsClaimed]: O,
						[E.a.isNotLarge]: !I
					}),
					style: {
						minHeight: `${e}px`,
						height: `${e}px`
					},
					"data-testid": "marketplace-claim-infeed-unit"
				}, s.a.createElement("div", {
					className: E.a.picturePlaceholder
				}, s.a.createElement("img", {
					className: E.a.picture,
					src: g,
					alt: f._("NFT artwork", null, {
						hk: "13Cmwy"
					})
				})), O ? s.a.createElement("div", {
					className: E.a.content
				}, s.a.createElement("h3", {
					className: E.a.title
				}, f._("All NFTS in this series were claimed", null, {
					hk: "2xP0zq"
				})), s.a.createElement("h4", {
					className: E.a.description
				}, f._("The time to claim your NFT expired and someone else claimed it. Be on the lookout for upcoming NFT drops!", null, {
					hk: "3zBLE1"
				}))) : s.a.createElement("div", {
					className: E.a.content
				}, s.a.createElement("h3", {
					className: E.a.title
				}, a.title), s.a.createElement("h4", {
					className: E.a.description
				}, a.description), s.a.createElement(m.t, {
					className: E.a.ctaButton
				}, a.buttonCtaText)))
			};
			t.default = x
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js");

			function c(e) {
				Object(n.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.6f1d176ffed277c33103.js.map