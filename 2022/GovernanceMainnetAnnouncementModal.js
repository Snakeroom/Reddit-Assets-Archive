// https://www.redditstatic.com/desktop2x/GovernanceMainnetAnnouncementModal.3aa8de868b512c9df2ae.js
// Retrieved at 9/29/2022, 4:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceMainnetAnnouncementModal"], {
		"./src/reddit/components/Governance/MainnetAnnouncementModal/index.m.less": function(e, n, t) {
			e.exports = {
				grid: "_3Fm4EGLukJY8K8iFJ8YaAd",
				image: "_8aRgFxhH3EC-RyHoBOOEq",
				wideImage: "_2o7zupK1z2p-WQ2ooPne4H",
				sectionHead: "_27ze5qGLaBk_B9-LoDiFhy",
				text: "_2qH2Y444dCM0TLkkJlmdnE",
				button: "P6dKOfva0-fnTfkks94qX"
			}
		},
		"./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var a = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				c = t.n(s),
				o = t("./node_modules/react-redux/es/index.js"),
				r = t("./src/config.ts"),
				i = t("./src/higherOrderComponents/asModal/index.tsx"),
				l = t("./src/reddit/actions/modal.ts"),
				d = t("./src/reddit/constants/modals.ts"),
				m = t("./src/reddit/controls/Button/index.tsx"),
				u = t("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				v = t("./src/reddit/components/Governance/MainnetAnnouncementModal/index.m.less"),
				x = t.n(v);
			const h = e => `${r.a.assetPath}/img/communityPoints/${e}.png`;
			n.default = Object(i.a)((function() {
				const e = Object(o.d)();
				return c.a.createElement(u.a, {
					title: a.fbt._("Community Points are now on Mainnet", null, {
						hk: "476od9"
					})
				}, c.a.createElement("div", {
					className: x.a.grid
				}, c.a.createElement("img", {
					className: x.a.image,
					src: h("mainnet-announcement-1")
				}), c.a.createElement("div", {
					className: x.a.section
				}, c.a.createElement("div", {
					className: x.a.sectionHead
				}, a.fbt._("Mainnet means real blockchain", null, {
					hk: "1vjB0J"
				})), c.a.createElement("div", {
					className: x.a.text
				}, a.fbt._("Points are now linked to the main Ethereum network. This makes them more secure and useful, but also means network fees have to be paid.", null, {
					hk: "4a44qF"
				}))), c.a.createElement("img", {
					className: x.a.image,
					src: h("mainnet-announcement-2")
				}), c.a.createElement("div", {
					className: x.a.section
				}, c.a.createElement("div", {
					className: x.a.sectionHead
				}, a.fbt._("Earn and Spend Points like you do now", null, {
					hk: "2eNmKO"
				})), c.a.createElement("div", {
					className: x.a.text
				}, a.fbt._("You can earn Points and spend them on premium features like Special Memberships. Reddit pays network fees for these transactions.", null, {
					hk: "33wZY3"
				}))), c.a.createElement("img", {
					className: x.a.wideImage,
					src: h("network-fees-4")
				}), c.a.createElement("div", {
					className: x.a.section
				}, c.a.createElement("div", {
					className: x.a.sectionHead
				}, a.fbt._("Tips require network fees", null, {
					hk: "4kwupF"
				})), c.a.createElement("div", {
					className: x.a.text
				}, a.fbt._("Tipping Points on mainnet requires fees to the blockchain network. You can purchase the necessary crypto to pay these fees via FTX through the community sidecard.", null, {
					hk: "4vaHIQ"
				})))), c.a.createElement(m.a, {
					className: x.a.button,
					priority: m.c.Secondary,
					onClick: () => e(Object(l.g)(d.a.GOVERNANCE_MAINNET_LAUNCH))
				}, a.fbt._("Continue", null, {
					hk: "WLaqI"
				})))
			}))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, n, t) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, n, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				s = t.n(a),
				c = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/actions/modal.ts"),
				i = t("./src/reddit/icons/svgs/Close/index.tsx"),
				l = t("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = t.n(l);
			n.a = Object(c.b)(void 0, (e, n) => {
				let {
					afterClose: t
				} = n;
				return {
					onClose: () => {
						e(Object(r.f)()), t && t()
					}
				}
			})((function(e) {
				return s.a.createElement(i.a, {
					className: Object(o.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalFrame/index.m.less": function(e, n, t) {
			e.exports = {
				closeIcon: "_1RMgC_IsaX9SGzUjjbcGtj",
				container: "_2qX0yQN6WBIGErOoDNckNu",
				content: "_2UPXVFZgjdPRfntBixjPTw",
				header: "_2ioZ5yr0kYv0C_0Zduxz92",
				title: "pj4Qau60_BFcnyMJZEAf9"
			}
		},
		"./src/reddit/components/Governance/ModalFrame/index.tsx": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return d
			}));
			var a = t("./node_modules/react/index.js"),
				s = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				r = t("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = t("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				l = t.n(i);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(c.a)(l.a.container, e.className)
				}, s.a.createElement("header", {
					className: l.a.header
				}, s.a.createElement("div", {
					className: l.a.title
				}, e.onBack ? s.a.createElement(o.a, {
					className: l.a.closeIcon,
					onClick: e.onBack
				}) : s.a.createElement(r.a, {
					className: l.a.closeIcon
				}), s.a.createElement("div", null, e.title)), s.a.createElement("div", null, e.headerRight)), s.a.createElement("div", {
					className: l.a.content
				}, e.children))
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, n, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				s = t.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			n.a = e => s.a.createElement("svg", c({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceMainnetAnnouncementModal.3aa8de868b512c9df2ae.js.map