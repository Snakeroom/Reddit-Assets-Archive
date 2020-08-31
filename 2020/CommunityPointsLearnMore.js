// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.852790c063739f500181.js
// Retrieved at 8/31/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				r = a.n(c);
			const o = e => s.a.createElement("div", {
				className: r.a.bullet
			}, s.a.createElement("div", {
				className: r.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/qrcode/lib/browser.js"),
				s = a.n(n),
				c = a("./node_modules/react/index.js"),
				r = a.n(c),
				o = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends r.a.Component {
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
			t.a = Object(o.a)(l)
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
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/icons/svgs/Close/index.tsx"),
				o = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				i = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				l = a.n(i);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.a)((function(e) {
				const {
					amount: t,
					content: a,
					header: n,
					onClose: c,
					qrUrl: i,
					title: d
				} = e;
				return s.a.createElement("div", {
					className: l.a.container
				}, s.a.createElement("header", {
					className: l.a.header
				}, s.a.createElement("div", {
					className: l.a.title
				}, d), s.a.createElement(r.a, {
					className: l.a.closeButton,
					onClick: c
				})), s.a.createElement("div", {
					className: l.a.body
				}, s.a.createElement("section", {
					className: l.a.leftSection
				}, s.a.createElement("div", {
					className: l.a.sectionHeader
				}, n), s.a.createElement("div", {
					className: l.a.content
				}, a)), s.a.createElement("section", {
					className: l.a.rightSection
				}, s.a.createElement("div", {
					className: l.a.qrCode
				}, s.a.createElement(o.a, {
					url: i
				})), t && s.a.createElement("div", {
					className: l.a.amount
				}, t))))
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/lib/addQueryParams/index.ts"),
				l = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				m = a("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx");
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const b = Object(r.c)({
					userId: e => {
						const t = Object(l.i)(e);
						return t ? t.id : ""
					}
				}),
				p = Object(c.b)(b)((function(e) {
					const {
						onClose: t,
						userId: a
					} = e;
					return s.a.createElement(d.a, {
						onClose: t,
						title: u._("Create Your Vault on Your Smartphone", null, {
							hk: "247Dqn"
						}),
						header: u._("Use the mobile app to create a Vault", null, {
							hk: "4DKtAt"
						}),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
							index: "1"
						}, u._("Get the official Reddit app for iOS or Android", null, {
							hk: "420pUH"
						})), s.a.createElement(m.a, {
							index: "2"
						}, u._("Log in to your Reddit account", null, {
							hk: "3G7IZ2"
						})), s.a.createElement(m.a, {
							index: "3"
						}, u._("Open your Camera, scan the QR code & follow the URL", null, {
							hk: "FWSNM"
						})), s.a.createElement(m.a, {
							index: "4"
						}, u._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
							hk: "3C5vxO"
						}))),
						qrUrl: Object(i.a)("http://www.reddit.com/vault/", {
							u: a
						})
					})
				}));
			t.b = Object(o.a)(p)
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return c
			})), a.d(t, "e", (function() {
				return r
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "i", (function() {
				return i
			})), a.d(t, "g", (function() {
				return l
			})), a.d(t, "h", (function() {
				return d
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "a", (function() {
				return u
			})), a.d(t, "b", (function() {
				return b
			}));
			var n = a("./src/reddit/selectors/telemetry.ts");
			const s = e => t => Object.assign(Object.assign({}, Object(n.defaults)(t)), {
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(n.subreddit)(t)
				}),
				c = () => s("view"),
				r = () => s("tap"),
				o = () => s("dismiss"),
				i = () => e => Object.assign(Object.assign({}, Object(n.defaults)(e)), {
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				l = () => e => Object.assign(Object.assign({}, Object(n.defaults)(e)), {
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => Object.assign(Object.assign({}, Object(n.defaults)(t)), {
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				m = () => e => Object.assign(Object.assign({}, Object(n.defaults)(e)), {
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				u = e => t => Object.assign(Object.assign({}, Object(n.defaults)(t)), {
					source: "meta",
					action: "click",
					noun: "buy_membership_with_points",
					subreddit: Object(n.subreddit)(t),
					correlationId: e
				}),
				b = e => t => Object.assign(Object.assign({}, Object(n.defaults)(t)), {
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(n.subredditById)(t, e)
				})
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, a) {
			e.exports = {
				carousel: "_3vQyUlP9YLzmdL2rsquLS-",
				imageContainer: "_2fHEqYCy2KASrMaQgflk9d",
				image: "_3z5mBSNxkSLnbR6usgbqpT",
				before: "_2JttHHaD7zf0Mbh1a5nRuW",
				after: "_39ks1t7udSkwDSJapMxhoe",
				textContainer: "DCfzAVcgI71D_KyuFWTCt",
				text: "_7rNTYtq4K9spIZ7RPkHx0",
				slideTitle: "_30M0sUJwfP6X2VcrCV3b9D",
				hiddenText: "TE2V4h2gDawl2Jss4N8Z7",
				pager: "_3FdYuxiANbzVWGxeXemc_M",
				progressDot: "fm3copvWWgfUMqVsK6uEV",
				active: "_1sREUpzXrLYpeFbGcvHOKm",
				nextButton: "_2qRdqJkJATZDQvbXLgMgc-",
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3bNZiIgvIum_hDI1TilGTx",
				fadeIn: "_2rvIUweb3EMODFDlq9rJTQ",
				title: "_3I_d5VrdxOFUhdE6IPlPh4",
				section: "_2peLYUOiACmTnA7p9FZ1Jh",
				sectionTitle: "_3dYjAPTzN5JgDEEwT8qBfY",
				expando: "ePiUN_2LVWXFzF2ZhxZiV",
				expanded: "FRM4ER3bBCI1pEZUjCsxN",
				chevron: "ZvsIr_8zCOQls_vqYzb0J",
				text: "_2No-V3Gr33A6vWSzaDbfsA",
				header: "yzR3oAJYm5J94P7G3z0Eq",
				subSection: "GLHR2ijrSORN51Ysw-UiK",
				imageSection: "_3QpGuKfkNV6u59h-14CkFU"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2hno-FBggC-9UCyeqfnHlk",
				title: "zQi0l9mx781pHleYA-bKr",
				createVaultButton: "_2qGtuWXPK2hD1jKjCIqaIC",
				fadeIn: "DJ8a0-JdriWdgwui80YcV"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/config.ts"),
				o = a("./src/lib/getParsedUserAgent/index.ts"),
				i = a("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				l = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/helpers/trackers/communityPoints.ts"),
				m = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/selectors/economics.ts"),
				b = a("./src/lib/classNames/index.ts");
			var p = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 16 16",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
				})),
				x = a("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				g = a.n(x);

			function _(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return "".concat(r.a.assetPath, "/img/communityPoints/learnMore/slide").concat(e).concat(t ? "@2x" : "", ".png")
			}
			var h = function(e) {
					const [t, a] = Object(n.useState)(0), r = Object(c.d)(u.n), o = r && r.learnMore.pages || [], i = o.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), l = t => {
						a(t), t + 1 === o.length && e.onComplete()
					};
					return s.a.createElement("div", {
						className: g.a.carousel
					}, s.a.createElement("div", {
						className: g.a.imageContainer
					}, o.map((e, a) => s.a.createElement("img", {
						src: _(a),
						srcSet: "".concat(_(a, !1), ", ").concat(_(a), " 2x"),
						className: Object(b.a)(g.a.image, {
							[g.a.before]: a < t,
							[g.a.active]: a === t,
							[g.a.after]: a > t
						}),
						key: a
					}))), s.a.createElement("div", {
						className: g.a.textContainer
					}, s.a.createElement("div", {
						className: g.a.hiddenText
					}, s.a.createElement("div", {
						className: g.a.slideTitle
					}, o[0] && o[0].title), i), o.map((e, a) => s.a.createElement("div", {
						className: Object(b.a)(g.a.text, {
							[g.a.before]: a < t,
							[g.a.active]: a === t,
							[g.a.after]: a > t
						}),
						key: a
					}, s.a.createElement("div", {
						className: g.a.slideTitle
					}, e.title), e.body))), t < o.length - 1 && s.a.createElement("div", {
						className: g.a.pager
					}, o.map((e, a) => s.a.createElement("button", {
						key: a,
						onClick: () => l(a)
					}, s.a.createElement("div", {
						className: Object(b.a)(g.a.progressDot, {
							[g.a.active]: a === t
						})
					}))), s.a.createElement("button", {
						"aria-label": "Next",
						className: g.a.nextButton,
						onClick: () => l(t + 1)
					}, s.a.createElement(p, {
						className: g.a.arrowIcon
					}))))
				},
				f = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				v = a("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				E = a.n(v);

			function O(e) {
				const [t, a] = Object(n.useState)(!1), c = Object(m.a)();
				return s.a.createElement("div", {
					className: E.a.section
				}, s.a.createElement("div", {
					className: E.a.sectionTitle,
					onClick: () => {
						t || c(Object(d.h)(e.id)), a(!t)
					}
				}, e.title, s.a.createElement("button", {
					className: Object(b.a)(E.a.expando, {
						[E.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, s.a.createElement(f.a, {
					className: E.a.chevron
				}))), t && s.a.createElement("div", {
					className: E.a.text
				}, e.children))
			}

			function j(e) {
				const t = "".concat(r.a.assetPath, "/img/communityPoints/faq/").concat(e.id);
				return s.a.createElement("img", {
					src: t + ".png",
					srcSet: "".concat(t, ".png, ").concat(t, "@2x.png 2x")
				})
			}
			var C = function() {
					const e = Object(c.d)(u.n),
						t = Object(m.a)();
					Object(n.useEffect)(() => {
						t(Object(d.g)())
					}, [t]);
					const a = e && e.faq || [];
					return s.a.createElement("div", {
						className: E.a.container
					}, s.a.createElement("div", {
						className: E.a.title
					}, "Frequently Asked Questions"), a.map(e => e.pages.map(e => s.a.createElement(O, {
						id: e.analyticsPageName,
						title: e.title,
						key: e.analyticsPageName
					}, e.sections.map((e, t) => "text" in e ? s.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: e.text
						},
						className: E.a.subSection,
						key: t
					}) : "image" in e ? s.a.createElement("div", {
						className: E.a.imageSection,
						key: t
					}, s.a.createElement(j, {
						id: e.image
					})) : null)))))
				},
				N = a("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				M = a.n(N);
			const {
				fbt: T
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.default = function() {
				const [e, t] = Object(n.useState)(!1), [a, b] = Object(n.useState)(!1), p = Object(c.d)(o.e), x = Object(c.d)(u.n), g = Object(m.a)();
				Object(n.useEffect)(() => {
					g(Object(d.i)())
				}, [g]);
				const _ = x && x.learnMore.title;
				return s.a.createElement("div", {
					className: M.a.container
				}, s.a.createElement("div", {
					className: M.a.title
				}, _), s.a.createElement(h, {
					onComplete: () => t(!0)
				}), e && s.a.createElement(s.a.Fragment, null, s.a.createElement(l.f, {
					className: M.a.createVaultButton,
					onClick: () => {
						g(Object(d.c)()), p ? window.location.href = "".concat(r.a.redditUrl, "/vault/") : b(!0)
					}
				}, T._("Create My Vault", null, {
					hk: "3ZzMgD"
				})), s.a.createElement(C, null)), a && s.a.createElement(i.b, {
					onClose: () => b(!1)
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.852790c063739f500181.js.map