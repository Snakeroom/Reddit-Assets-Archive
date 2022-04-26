// https://www.redditstatic.com/desktop2x/GovernanceMainnetAnnouncementModal.57ffbac967cb510ab02c.js
// Retrieved at 4/26/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceMainnetAnnouncementModal"], {
		"./src/reddit/components/Governance/MainnetAnnouncementModal/index.m.less": function(e, n, t) {
			e.exports = {
				button: "P6dKOfva0-fnTfkks94qX",
				grid: "_3Fm4EGLukJY8K8iFJ8YaAd",
				image: "_8aRgFxhH3EC-RyHoBOOEq",
				sectionHead: "_27ze5qGLaBk_B9-LoDiFhy",
				text: "_2qH2Y444dCM0TLkkJlmdnE"
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
				d = t("./src/reddit/actions/modal.ts"),
				l = t("./src/reddit/constants/modals.ts"),
				m = t("./src/reddit/controls/Button/index.tsx"),
				u = t("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				x = t("./src/reddit/components/Governance/MainnetAnnouncementModal/index.m.less"),
				v = t.n(x);
			const f = "Copy here. Copy here. Copy here. Copy here. Copy here. Copy here. Copy here. Copy here.",
				E = e => `${r.a.assetPath}/img/communityPoints/${e}.png`;
			n.default = Object(i.a)((function() {
				const e = Object(o.d)();
				return c.a.createElement(u.a, {
					title: a.fbt._("Send Community Points outside Reddit", null, {
						hk: "IFcIu"
					})
				}, c.a.createElement("div", {
					className: v.a.grid
				}, c.a.createElement("img", {
					className: v.a.image,
					src: E("fees-1")
				}), c.a.createElement("div", {
					className: v.a.section
				}, c.a.createElement("div", {
					className: v.a.sectionHead
				}, a.fbt._("Points are Now on Main Net", null, {
					hk: "3oyLrn"
				})), c.a.createElement("div", {
					className: v.a.text
				}, f)), c.a.createElement("img", {
					className: v.a.image,
					src: E("fees-2")
				}), c.a.createElement("div", {
					className: v.a.section
				}, c.a.createElement("div", {
					className: v.a.sectionHead
				}, a.fbt._("Send Points Outside Reddit", null, {
					hk: "2SHUIW"
				})), c.a.createElement("div", {
					className: v.a.text
				}, f)), c.a.createElement("img", {
					className: v.a.image,
					src: E("fees-4")
				}), c.a.createElement("div", {
					className: v.a.section
				}, c.a.createElement("div", {
					className: v.a.sectionHead
				}, a.fbt._("Pay Network Fee for Transfer", null, {
					hk: "2EzYO"
				})), c.a.createElement("div", {
					className: v.a.text
				}, a.fbt._("You need to pay a network fee (gas) to place a transfer on the mainnet. A user identity verification may be required to buy crypto via our 3rd party provider.", null, {
					hk: "2A1VBk"
				})))), c.a.createElement(m.a, {
					className: v.a.button,
					priority: m.c.Secondary,
					onClick: () => e(Object(d.g)(l.a.GOVERNANCE_MAINNET_LAUNCH))
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
				d = t("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = t.n(d);
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
					className: Object(o.a)(l.a.closeIcon, e.className),
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
				return l
			}));
			var a = t("./node_modules/react/index.js"),
				s = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				r = t("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = t("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				d = t.n(i);

			function l(e) {
				return s.a.createElement("div", {
					className: Object(c.a)(d.a.container, e.className)
				}, s.a.createElement("header", {
					className: d.a.header
				}, s.a.createElement("div", {
					className: d.a.title
				}, e.onBack ? s.a.createElement(o.a, {
					className: d.a.closeIcon,
					onClick: e.onBack
				}) : s.a.createElement(r.a, {
					className: d.a.closeIcon
				}), s.a.createElement("div", null, e.title)), s.a.createElement("div", null, e.headerRight)), s.a.createElement("div", {
					className: d.a.content
				}, e.children))
			}
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, n, t) {
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
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceMainnetAnnouncementModal.57ffbac967cb510ab02c.js.map