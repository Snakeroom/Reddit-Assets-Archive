// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.e574cddf8bc00cf7fb48.js
// Retrieved at 4/2/2020, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
				d = a("./src/reddit/selectors/gov.ts");
			const i = Object(r.c)({
				tokenSymbol: d.q
			});
			t.a = Object(o.b)(i)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				r = a.n(o);
			const c = e => s.a.createElement("div", {
				className: r.a.bullet
			}, s.a.createElement("div", {
				className: r.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/qrcode/lib/browser.js"),
				s = a.n(n),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				c = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class i extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await s.a.toDataURL(this.props.url, {
						color: {
							dark: this.props.color || Object(d.a)(this.props).button,
							light: Object(d.a)(this.props).body
						},
						margin: 0,
						width: 176
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e ? r.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(c.a)(i)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "zf2hn2CERT9hR1pMinJ8F",
				header: "_3Qbr92L8VyuinXjEu3tL3Z",
				title: "_3bzQcWx2T0t87zOlgxrRKU",
				closeButton: "_22lrdZNOZAr7T7zmwmjUvJ",
				body: "_3Gcx8rw4-_lVDd-C1xmCEi",
				leftSection: "_3YqVpshpU6XQk203i6QdDy",
				sectionHeader: "_1ubUpPIvDdZW-u31PFTQzQ",
				content: "_1vBcEJHUketYOZJIkZpJEH",
				bullet: "_1NkUPpb7srAhbim5_nyFUH",
				circle: "_3dmqOAtE4YgxGinHtv6QZs",
				rightSection: "_2KqtJ5hLjiAZnv3xLL4_M6",
				qrCode: "_14NzP1hK14fTKLhwIn2aDG",
				amount: "yAJDmHckBS4VSNkr7oGi4"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/icons/svgs/Close/index.tsx"),
				c = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				d = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				i = a.n(d);
			const {
				fbt: l
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.a)((function(e) {
				const {
					amount: t,
					content: a,
					header: n,
					onClose: o,
					qrUrl: d,
					title: l
				} = e;
				return s.a.createElement("div", {
					className: i.a.container
				}, s.a.createElement("header", {
					className: i.a.header
				}, s.a.createElement("div", {
					className: i.a.title
				}, l), s.a.createElement(r.a, {
					className: i.a.closeButton,
					onClick: o
				})), s.a.createElement("div", {
					className: i.a.body
				}, s.a.createElement("section", {
					className: i.a.leftSection
				}, s.a.createElement("div", {
					className: i.a.sectionHeader
				}, n), s.a.createElement("div", {
					className: i.a.content
				}, a)), s.a.createElement("section", {
					className: i.a.rightSection
				}, s.a.createElement("div", {
					className: i.a.qrCode
				}, s.a.createElement(c.a, {
					url: d
				})), s.a.createElement("div", {
					className: i.a.amount
				}, t))))
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.m.less": function(e, t, a) {
			e.exports = {
				rewardHeader: "_1G2tc9zzZoWyPlmgbfEbNd",
				rewardAmount: "_1iauUKWv86BGc1Ur7VZkL2",
				tokenIcon: "_2-m4V7jUjzyAqG3Oltl12R",
				rewardTotal: "_7M2lpeEwSt_0bvlNYJYVi"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/lib/addQueryParams/index.ts"),
				i = a("./src/lib/prettyPrintNumber/index.ts"),
				l = a("./src/reddit/components/Governance/Token/index.tsx"),
				m = a("./src/reddit/helpers/governance/tokens.ts"),
				u = a("./src/reddit/selectors/economics.ts"),
				p = a("./src/reddit/selectors/gov.ts"),
				b = a("./src/reddit/selectors/user.ts"),
				h = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				x = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				_ = a("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.m.less"),
				v = a.n(_);
			const {
				fbt: E
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const M = Object(r.c)({
				claimablePoints: u.i,
				tokenDisplayConversion: p.o,
				tokenName: p.p,
				userId: e => {
					const t = Object(b.i)(e);
					return t ? t.id : ""
				}
			});
			t.default = Object(c.a)(Object(o.b)(M)((function(e) {
				const {
					claimablePoints: t,
					onClose: a,
					subredditId: n,
					tokenDisplayConversion: o,
					tokenName: r,
					userId: c
				} = e;
				return s.a.createElement(h.a, {
					onClose: a,
					title: E._("Claim Your Points", null, {
						hk: "2j1Z6u"
					}),
					header: E._("Use mobile app to create a Reddit Wallet and claim your points", null, {
						hk: "4wEchv"
					}),
					content: s.a.createElement(s.a.Fragment, null, s.a.createElement(x.a, {
						index: "1"
					}, E._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), s.a.createElement(x.a, {
						index: "2"
					}, E._("Log in to your current Reddit account", null, {
						hk: "2eOEgM"
					})), s.a.createElement(x.a, {
						index: "3"
					}, E._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), s.a.createElement(x.a, {
						index: "4"
					}, E._("Or, open the Reddit app and tap your profile photo at the top. Then tap Wallet, and follow the instructions", null, {
						hk: "4e7EBq"
					}))),
					qrUrl: Object(d.a)("http://www.reddit.com/wallet/claim", {
						u: c,
						s: n
					}),
					amount: s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: v.a.rewardHeader
					}, E._("Your Reward", null, {
						hk: "JniAQ"
					})), s.a.createElement("div", {
						className: v.a.rewardAmount
					}, s.a.createElement("div", null, s.a.createElement(l.a, {
						className: v.a.tokenIcon,
						subredditId: n
					})), s.a.createElement("div", {
						className: v.a.rewardTotal
					}, Object(i.a)(Object(m.b)(t || "0", o)), " ", r)))
				})
			})))
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-TransactionModals-ClaimPointsModal.e574cddf8bc00cf7fb48.js.map