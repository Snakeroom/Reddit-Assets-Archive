// https://www.redditstatic.com/desktop2x/reddit-components-Governance-ClaimPointsModal.fcdfb8f9d055a966fcad.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-ClaimPointsModal"], {
		"./src/reddit/components/Governance/ClaimPointsModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_16gHJPREHPXQiK0LR570kY",
				header: "_8WAxnkGJdKWSehXAUkKjm",
				title: "_3DQpAVH_V-rHiR58QUJj92",
				closeButton: "_3BRvu_dJqtyRheAiJr3S5y",
				body: "M6ipOdG4-rlPduAOzQiD6",
				content: "_2rtQ5xiPqQXd_apd8-h9VJ",
				sectionHeader: "_3ZaFnzfaO5CWm99jpGitBx",
				instructions: "_1jkX1ze8OgMjnQWOPvwWjC",
				bullet: "_10ffeTwcx5R6fMdRzvYxf_",
				circle: "j9c5MGzQRw9wjdHZxMgkL",
				rightSection: "_2rYO0EpzZ2TSNZoh93wGus",
				qrCode: "_2UDTCzSsiTx_M_ENTQ3ftk",
				reward: "tVzxjnnuu1-2wXPW6I31B",
				rewardHeader: "Acugw1wwd9fe7EEQTKCTQ",
				rewardAmount: "_1_Qh_g9El4RZVI8pGKHrrp",
				tokenIcon: "_1tMA--Jb-bdmEG1UG9VCEM",
				rewardTotal: "_6kAVypni2OZ4kibdt0wwI"
			}
		},
		"./src/reddit/components/Governance/ClaimPointsModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/components/Governance/Token/index.tsx"),
				l = a("./src/reddit/helpers/governance/tokens.ts"),
				m = a("./src/reddit/icons/svgs/Close/index.tsx"),
				u = a("./src/reddit/models/User/index.ts"),
				p = a("./src/reddit/selectors/economics.ts"),
				b = a("./src/reddit/selectors/gov.ts"),
				h = a("./src/reddit/selectors/user.ts"),
				_ = a("./node_modules/qrcode/lib/browser.js"),
				x = a.n(_),
				E = a("./src/lib/addQueryParams/index.ts"),
				w = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				v = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.username === this.props.username && e.subredditId === this.props.subredditId || this.updateDataURL()
				}
				async updateDataURL() {
					const e = Object(E.a)("http://www.reddit.com/wallet/claim", {
							u: this.props.username,
							s: this.props.subredditId
						}),
						t = await x.a.toDataURL(e, {
							color: {
								dark: Object(v.a)(this.props).button,
								light: Object(v.a)(this.props).body
							},
							margin: 0,
							width: 176
						});
					this.setState({
						dataURL: t
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
			var k = Object(w.a)(j),
				N = a("./src/reddit/components/Governance/ClaimPointsModal/index.m.less"),
				O = a.n(N);
			const {
				fbt: C
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function f(e) {
				return s.a.createElement("div", {
					className: O.a.bullet
				}, s.a.createElement("div", {
					className: O.a.circle
				}, e.index), e.children)
			}
			class R extends s.a.Component {
				render() {
					const {
						claimablePoints: e,
						onClose: t,
						subredditId: a,
						tokenDisplayConversion: n,
						tokenName: r,
						username: o
					} = this.props;
					return s.a.createElement("div", {
						className: O.a.container
					}, s.a.createElement("header", {
						className: O.a.header
					}, s.a.createElement("div", {
						className: O.a.title
					}, C._("Claim Your Points", null, {
						hk: "6dHXS"
					})), s.a.createElement(m.a, {
						className: O.a.closeButton,
						onClick: t
					})), s.a.createElement("div", {
						className: O.a.body
					}, s.a.createElement("div", {
						className: O.a.content
					}, s.a.createElement("div", {
						className: O.a.sectionHeader
					}, C._("Use mobile app to create a Reddit Wallet and claim your points", null, {
						hk: "1bNzDJ"
					})), s.a.createElement("div", {
						className: O.a.instructions
					}, s.a.createElement(f, {
						index: "1"
					}, C._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), s.a.createElement(f, {
						index: "2"
					}, C._("Log in to your current Reddit account", null, {
						hk: "2eOEgM"
					})), s.a.createElement(f, {
						index: "3"
					}, C._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), s.a.createElement(f, {
						index: "4"
					}, C._("Or, open the Reddit app and tap your profile photo at the top. Then tap Wallet, and follow the instructions", null, {
						hk: "4e7EBq"
					})))), s.a.createElement("div", {
						className: O.a.rightSection
					}, s.a.createElement("div", {
						className: O.a.qrCode
					}, s.a.createElement(k, {
						username: o,
						subredditId: a
					})), s.a.createElement("div", {
						className: O.a.reward
					}, s.a.createElement("div", {
						className: O.a.rewardHeader
					}, C._("Your Reward", null, {
						hk: "JniAQ"
					})), s.a.createElement("div", {
						className: O.a.rewardAmount
					}, s.a.createElement("div", null, s.a.createElement(i.a, {
						className: O.a.tokenIcon,
						subredditId: a
					})), s.a.createElement("div", {
						className: O.a.rewardTotal
					}, Object(c.a)(Object(l.b)(e || "0", n)), " ", r))))))
				}
			}
			const g = Object(o.c)({
				claimablePoints: p.h,
				tokenDisplayConversion: b.o,
				tokenName: b.p,
				username: e => {
					const t = Object(h.i)(e);
					return t ? Object(u.f)(t) : ""
				}
			});
			t.default = Object(d.a)(Object(r.b)(g)(R))
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				d = a("./src/config.ts"),
				c = a("./src/reddit/selectors/gov.ts");
			const i = Object(o.c)({
				tokenSymbol: c.q
			});
			t.a = Object(r.b)(i)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-ClaimPointsModal.fcdfb8f9d055a966fcad.js.map