// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.ceb6c02984c91bdcaffb.js
// Retrieved at 4/28/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-SubscriptionModal"], {
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				r = n.n(o);
			const c = e => s.a.createElement("div", {
				className: r.a.bullet
			}, s.a.createElement("div", {
				className: r.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/qrcode/lib/browser.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class d extends r.a.Component {
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
							dark: this.props.color || Object(i.a)(this.props).button,
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
					return e ? r.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(c.a)(d)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				i = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.a)((function(e) {
				const {
					amount: t,
					content: n,
					header: a,
					onClose: o,
					qrUrl: i,
					title: l
				} = e;
				return s.a.createElement("div", {
					className: d.a.container
				}, s.a.createElement("header", {
					className: d.a.header
				}, s.a.createElement("div", {
					className: d.a.title
				}, l), s.a.createElement(r.a, {
					className: d.a.closeButton,
					onClick: o
				})), s.a.createElement("div", {
					className: d.a.body
				}, s.a.createElement("section", {
					className: d.a.leftSection
				}, s.a.createElement("div", {
					className: d.a.sectionHeader
				}, a), s.a.createElement("div", {
					className: d.a.content
				}, n)), s.a.createElement("section", {
					className: d.a.rightSection
				}, s.a.createElement("div", {
					className: d.a.qrCode
				}, s.a.createElement(c.a, {
					url: i
				})), t && s.a.createElement("div", {
					className: d.a.amount
				}, t))))
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "_1RePdl7LuJViX24r_h0COo",
				tokenIcon: "_1v9SDqyMxKa8FzuPNK_2pt",
				total: "_2_SIvxONp1RFtyO-bffkzI"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/gov.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				v = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				x = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.m.less"),
				f = n.n(x);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const O = Object(r.c)({
				subredditName: (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = Object(p.P)(e, {
						subredditId: n
					});
					return a && a.name || ""
				},
				tokenDisplayConversion: b.o,
				tokenName: b.p,
				userId: e => {
					const t = Object(_.i)(e);
					return t ? t.id : ""
				}
			});
			t.default = Object(o.b)(O)((function(e) {
				const {
					correlationId: t,
					onClose: n,
					price: o,
					subredditId: r,
					subredditName: b,
					tokenDisplayConversion: p,
					tokenName: _,
					userId: x
				} = e, O = Object(m.a)();
				return Object(a.useEffect)(() => {
					O(Object(u.a)(t))
				}, [t, O]), s.a.createElement(h.a, {
					onClose: n,
					title: j._("Continue in the Mobile App", null, {
						hk: "3seGfx"
					}),
					header: j._("Approve this transaction with Reddit Vault", null, {
						hk: "4dRYKa"
					}),
					content: s.a.createElement(s.a.Fragment, null, s.a.createElement(v.a, {
						index: "1"
					}, j._("Scan the QR code with your Camera app", null, {
						hk: "DeLcL"
					})), s.a.createElement(v.a, {
						index: "2"
					}, j._("Use that link to open your Vault in the Reddit app", null, {
						hk: "2KCtg7"
					})), s.a.createElement(v.a, {
						index: "3"
					}, j._("Approve the transaction to start your monthly membership subscription", null, {
						hk: "1XiP6x"
					}))),
					qrUrl: Object(c.a)("http://www.reddit.com/vault/subscribe", {
						u: x,
						s: r,
						sn: b
					}),
					amount: s.a.createElement("div", {
						className: f.a.amount
					}, s.a.createElement("div", null, s.a.createElement(d.a, {
						className: f.a.tokenIcon,
						subredditId: r
					})), s.a.createElement("div", {
						className: f.a.total
					}, j._("{price} /mo", [j._param("price", Object(i.a)(Object(l.b)(o, p)) + " " + _)], {
						hk: "2sgoC6"
					})))
				})
			}))
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var a = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => Object.assign({}, Object(a.defaults)(t), {
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(a.subreddit)(t)
				}),
				o = () => s("view"),
				r = () => s("tap"),
				c = () => s("dismiss"),
				i = () => e => Object.assign({}, Object(a.defaults)(e), {
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				d = () => e => Object.assign({}, Object(a.defaults)(e), {
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				l = e => t => Object.assign({}, Object(a.defaults)(t), {
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				u = () => e => Object.assign({}, Object(a.defaults)(e), {
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => Object.assign({}, Object(a.defaults)(t), {
					source: "meta",
					action: "click",
					noun: "buy_membership_with_points",
					subreddit: Object(a.subreddit)(t),
					correlationId: e
				}),
				b = e => t => Object.assign({}, Object(a.defaults)(t), {
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(a.subredditById)(t, e)
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = a.b
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-TransactionModals-SubscriptionModal.ceb6c02984c91bdcaffb.js.map