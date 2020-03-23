// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.a4aa29a7de2eeacfb28e.js
// Retrieved at 3/23/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
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
			const l = Object(r.c)({
				tokenSymbol: d.q
			});
			t.a = Object(o.b)(l)((function(e) {
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
				c = a("./node_modules/qrcode/lib/browser.js"),
				d = a.n(c),
				l = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class m extends s.a.Component {
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
					const e = await d.a.toDataURL(this.props.url, {
						color: {
							dark: Object(i.a)(this.props).button,
							light: Object(i.a)(this.props).body
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
					return e ? s.a.createElement("img", {
						src: e
					}) : null
				}
			}
			var u = Object(l.a)(m),
				p = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				b = a.n(p);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.a)((function(e) {
				const {
					amount: t,
					content: a,
					header: n,
					onClose: o,
					qrUrl: c,
					title: d
				} = e;
				return s.a.createElement("div", {
					className: b.a.container
				}, s.a.createElement("header", {
					className: b.a.header
				}, s.a.createElement("div", {
					className: b.a.title
				}, d), s.a.createElement(r.a, {
					className: b.a.closeButton,
					onClick: o
				})), s.a.createElement("div", {
					className: b.a.body
				}, s.a.createElement("section", {
					className: b.a.leftSection
				}, s.a.createElement("div", {
					className: b.a.sectionHeader
				}, n), s.a.createElement("div", {
					className: b.a.content
				}, a)), s.a.createElement("section", {
					className: b.a.rightSection
				}, s.a.createElement("div", {
					className: b.a.qrCode
				}, s.a.createElement(u, {
					url: c
				})), s.a.createElement("div", {
					className: b.a.amount
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
				l = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/components/Governance/Token/index.tsx"),
				m = a("./src/reddit/helpers/governance/tokens.ts"),
				u = a("./src/reddit/models/User/index.ts"),
				p = a("./src/reddit/selectors/economics.ts"),
				b = a("./src/reddit/selectors/gov.ts"),
				h = a("./src/reddit/selectors/user.ts"),
				x = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				_ = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				v = a("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.m.less"),
				E = a.n(v);
			const {
				fbt: N
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const j = Object(r.c)({
				claimablePoints: p.h,
				tokenDisplayConversion: b.o,
				tokenName: b.p,
				username: e => {
					const t = Object(h.i)(e);
					return t ? Object(u.f)(t) : ""
				}
			});
			t.default = Object(c.a)(Object(o.b)(j)((function(e) {
				const {
					claimablePoints: t,
					onClose: a,
					subredditId: n,
					tokenDisplayConversion: o,
					tokenName: r,
					username: c
				} = e;
				return s.a.createElement(x.a, {
					onClose: a,
					title: N._("Claim Your Points", null, {
						hk: "2j1Z6u"
					}),
					header: N._("Use mobile app to create a Reddit Wallet and claim your points", null, {
						hk: "4wEchv"
					}),
					content: s.a.createElement(s.a.Fragment, null, s.a.createElement(_.a, {
						index: "1"
					}, N._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), s.a.createElement(_.a, {
						index: "2"
					}, N._("Log in to your current Reddit account", null, {
						hk: "2eOEgM"
					})), s.a.createElement(_.a, {
						index: "3"
					}, N._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), s.a.createElement(_.a, {
						index: "4"
					}, N._("Or, open the Reddit app and tap your profile photo at the top. Then tap Wallet, and follow the instructions", null, {
						hk: "4e7EBq"
					}))),
					qrUrl: Object(d.a)("http://www.reddit.com/wallet/claim", {
						u: c,
						s: n
					}),
					amount: s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: E.a.rewardHeader
					}, N._("Your Reward", null, {
						hk: "JniAQ"
					})), s.a.createElement("div", {
						className: E.a.rewardAmount
					}, s.a.createElement("div", null, s.a.createElement(i.a, {
						className: E.a.tokenIcon,
						subredditId: n
					})), s.a.createElement("div", {
						className: E.a.rewardTotal
					}, Object(l.a)(Object(m.b)(t || "0", o)), " ", r)))
				})
			})))
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-TransactionModals-ClaimPointsModal.a4aa29a7de2eeacfb28e.js.map