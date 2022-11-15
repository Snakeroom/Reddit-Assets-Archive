// https://www.redditstatic.com/desktop2x/reddit-components-Governance-GasFeesEducationalModal.a850c3c86451478e85ff.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-GasFeesEducationalModal"], {
		"./src/reddit/components/Governance/GasFeesEducationalModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2WhMX1ijrqzA7x-spwJtM7",
				header: "NCK5k0MHHYP9HX753PC_",
				closeButton: "_2Bvh9drC6K5xMDXUA87C-G",
				logo: "_33-FR9s1dPEPBWpzjUcePI",
				body: "FMduNOSl6g5MKt9Zeaq-9",
				subheader: "_23S_iYSdqUV2X2oxhF3YFV",
				disclaimer: "hdqZH3u5a0i0uVWJy9J1-",
				steps: "_85I3hBe6IUJZ5htdxRCqH",
				stepCount: "_3M4Ya6Ovo2vcitS-ERs1wd",
				step: "_3PZwCFphRxW0Vx4RGFQhCg",
				learnMore: "RtBxs6LqskO5yTPTYzsGn",
				infoIcon: "_3A1AJlBmUXBEJCE52SL5lJ",
				button: "_2FGNLioTpel2n0_sCjs5GI"
			}
		},
		"./src/reddit/components/Governance/GasFeesEducationalModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/modal.ts");
			const i = e => {
				const t = e.getBoundingClientRect();
				return {
					top: t.top + t.height / 2 - 350 - 100,
					left: t.left + t.width / 2 - 250
				}
			};
			var d = a("./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.tsx"),
				m = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = a("./src/reddit/constants/modals.ts"),
				h = a("./src/reddit/controls/Button/index.tsx");
			var p = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "12",
					width: "47",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("clipPath", {
					id: "a"
				}, o.a.createElement("path", {
					d: "M0 0h47v12H0z"
				})), o.a.createElement("g", {
					clipPath: "url(#a)"
				}, o.a.createElement("path", {
					d: "M7.42 8.73H4.24V12h3.18z",
					fill: "#6cd0d9"
				}), o.a.createElement("path", {
					d: "M9.61 4.36H4.24v3.28h6.35V4.36z",
					fill: "#0ab5cc"
				}), o.a.createElement("path", {
					d: "M13.77 0H4.24v3.27h9.53z",
					fill: "#1297b2"
				}), o.a.createElement("path", {
					d: "M3.18 4.36H0v3.28h3.18z",
					fill: "#cc1423"
				}), o.a.createElement("g", {
					fill: "#000"
				}, o.a.createElement("path", {
					d: "M16.95 12h2.46V7.04h4.74V4.95h-4.74V2.1h5.25V0h-7.71zM25.88 2.1h3.56V12h2.44V2.1h3.57V0h-9.57zM39.34 0h-2.8l3.58 6-3.65 6h2.83l2.39-4.1h.09l2.39 4.1H47l-3.64-6 3.56-6h-2.78l-2.36 4.09h-.1z"
				})))),
				f = a("./src/reddit/icons/svgs/Info/index.tsx"),
				v = a("./src/reddit/selectors/activeModal.ts"),
				E = a("./src/reddit/components/Governance/GasFeesEducationalModal/index.m.less"),
				x = a.n(E);
			const b = [n.fbt._("You can purchase the necessary crypto for network fees via our third-party provider FTX.", null, {
				hk: "4y8hdR"
			}), n.fbt._("Make sure to wait until the purchase transaction is completed. It may take several minutes.", null, {
				hk: "1CvPX0"
			}), n.fbt._("Fees are calculated based on the network's congestion. The lower your transaction's priority in the network, the lower your fee will be. Right now the Vault selects the lowest fee possible to reduce your costs.", null, {
				hk: "3tgxHH"
			})];
			t.default = Object(c.a)(() => {
				const e = Object(r.d)(),
					{
						purchaseLink: t
					} = Object(r.e)(e => Object(v.a)(e)),
					[a, c] = Object(s.useState)(!1),
					E = () => e(Object(l.g)(u.a.CRYPTO_GAS_FEES_EDUCATION)),
					{
						openWindow: _,
						isWindowOpen: g
					} = (e => {
						let {
							onWindowClose: t
						} = e;
						const a = Object(s.useRef)(null),
							[n, o] = Object(s.useReducer)(() => !0, !1);
						return Object(s.useEffect)(() => {
							let e;
							return n && (e = setInterval(() => {
								var n;
								(null === (n = a.current) || void 0 === n ? void 0 : n.closed) && (t(), clearInterval(e))
							}, 500)), () => {
								clearInterval(e)
							}
						}, [t, n]), {
							openWindow: e => {
								let {
									event: t,
									popupLink: n
								} = e;
								const {
									top: s,
									left: r
								} = i(t.currentTarget);
								a.current = window.open(n, "_blank", `width=500,height=700,left=${r},top=${s}`), o()
							},
							isWindowOpen: n
						}
					})({
						onWindowClose: E
					});
				return a ? o.a.createElement(d.a, {
					onBack: () => c(!1)
				}) : o.a.createElement("div", {
					className: x.a.container
				}, o.a.createElement("div", {
					className: x.a.header
				}, o.a.createElement("button", {
					onClick: E,
					className: x.a.closeButton,
					"aria-label": n.fbt._("Close", null, {
						hk: "3Qarlp"
					})
				}, o.a.createElement(m.b, {
					className: x.a.closeIcon
				})), o.a.createElement("h2", null, n.fbt._("ETH cryptocurrency required for Network Fees", null, {
					hk: "2EqmI7"
				}))), o.a.createElement("div", {
					className: x.a.body
				}, o.a.createElement("h3", {
					className: x.a.subheader
				}, n.fbt._("Continue to", null, {
					hk: "2tMrbq"
				}), o.a.createElement(p, {
					className: x.a.logo
				})), o.a.createElement("p", {
					className: x.a.disclaimer
				}, n.fbt._("If you purchase funds on Web, the same funds can also be used in the mobile app.", null, {
					hk: "L8VK2"
				})), o.a.createElement("div", {
					className: x.a.steps
				}, b.map((e, t) => o.a.createElement("div", {
					className: x.a.step,
					key: t
				}, o.a.createElement("div", {
					className: x.a.stepCount
				}, o.a.createElement("span", null, t + 1)), o.a.createElement("p", null, e)))), o.a.createElement("p", {
					className: x.a.learnMore
				}, n.fbt._("Learn more about Network Fees", null, {
					hk: "1AA1xW"
				}), o.a.createElement(f.a, {
					className: x.a.infoIcon,
					onClick: () => c(!0)
				})), o.a.createElement(h.t, {
					className: x.a.button,
					priority: h.c.Secondary,
					onClick: e => _({
						event: e,
						popupLink: t
					}),
					disabled: !t || g
				}, n.fbt._("Continue to FTX", null, {
					hk: "32kphF"
				}))))
			})
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/icons/svgs/Close/index.tsx"),
				i = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = a.n(i);
			t.a = Object(o.b)(void 0, (e, t) => {
				let {
					afterClose: a
				} = t;
				return {
					onClose: () => {
						e(Object(c.f)()), a && a()
					}
				}
			})((function(e) {
				return s.a.createElement(l.a, {
					className: Object(r.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalFrame/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "_1RMgC_IsaX9SGzUjjbcGtj",
				container: "_2qX0yQN6WBIGErOoDNckNu",
				content: "_2UPXVFZgjdPRfntBixjPTw",
				header: "_2ioZ5yr0kYv0C_0Zduxz92",
				title: "pj4Qau60_BFcnyMJZEAf9"
			}
		},
		"./src/reddit/components/Governance/ModalFrame/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				c = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				l = a("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				i = a.n(l);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.container, e.className)
				}, s.a.createElement("header", {
					className: i.a.header
				}, s.a.createElement("div", {
					className: i.a.title
				}, e.onBack ? s.a.createElement(r.a, {
					className: i.a.closeIcon,
					onClick: e.onBack
				}) : s.a.createElement(c.a, {
					className: i.a.closeIcon
				}), s.a.createElement("div", null, e.title)), s.a.createElement("div", null, e.headerRight)), s.a.createElement("div", {
					className: i.a.content
				}, e.children))
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_7Ee25wJvkxZ_LHaSL7gm9",
				grid: "_1vDUEFG58WSS6oMh8CoEqu",
				imageWrapper: "_5p8jYt_vdSM5UN7GmQqnM",
				image: "vhoZGZePy-2FjE5gFC9wJ",
				wideImage: "KPGJUsm5G2rxPSvPVI_Gu",
				text: "oiclFwcdrYr1O8czq24s"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./src/config.ts"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				i = a("./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less"),
				d = a.n(i);
			const m = e => `${r.a.assetPath}/img/communityPoints/${e}.png`;

			function u(e) {
				return o.a.createElement(l.a, {
					className: e.className,
					title: n.fbt._("What is the network fee?", null, {
						hk: "4zafLX"
					}),
					onBack: e.onBack
				}, o.a.createElement("div", {
					className: d.a.grid
				}, o.a.createElement("div", {
					className: d.a.imageWrapper
				}, o.a.createElement("img", {
					className: d.a.image,
					src: m("network-fees-1")
				}), " "), o.a.createElement("div", {
					className: d.a.text
				}, n.fbt._("Network fees are required to conduct transactions on the blockchain (for example, when tipping Points).", null, {
					hk: "STIdJ"
				})), o.a.createElement("div", {
					className: d.a.imageWrapper
				}, o.a.createElement("img", {
					className: d.a.wideImage,
					src: m("network-fees-2")
				})), o.a.createElement("div", {
					className: d.a.text
				}, n.fbt._("Network fees go to the blockchain network to pay for transaction integrity and security. Reddit does not receive any of the fees.", null, {
					hk: "3o0Oqp"
				})), o.a.createElement("div", {
					className: d.a.imageWrapper
				}, o.a.createElement("img", {
					className: d.a.image,
					src: m("network-fees-3")
				})), o.a.createElement("div", {
					className: d.a.text
				}, n.fbt._("Network fees are paid in ETH, the native cryptocurrency of the main Ethereum network. You need ETH to tip Points.", null, {
					hk: "3yR0rI"
				})), o.a.createElement("div", {
					className: d.a.imageWrapper
				}, o.a.createElement("img", {
					className: d.a.wideImage,
					src: m("network-fees-4")
				})), o.a.createElement("div", {
					className: d.a.text
				}, n.fbt._("The exact fees depend on the state of the network at that time. The more people using it, the higher the fees. The Vault selects the lowest fee possible to reduce your costs.", null, {
					hk: "BPqiL"
				}))), o.a.createElement(c.a, {
					className: d.a.button,
					priority: c.c.Secondary,
					onClick: e.onBack
				}, n.fbt._("Continue", null, {
					hk: "WLaqI"
				})))
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-GasFeesEducationalModal.a850c3c86451478e85ff.js.map