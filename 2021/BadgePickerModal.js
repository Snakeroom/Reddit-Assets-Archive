// https://www.redditstatic.com/desktop2x/BadgePickerModal.e0373845238d9640f647.js
// Retrieved at 5/11/2021, 6:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePickerModal"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, a) {
				var r = s ? s.call(a, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var n = Object.keys(e),
					d = Object.keys(t);
				if (n.length !== d.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < n.length; c++) {
					var l = n[c];
					if (!i(l)) return !1;
					var o = e[l],
						u = t[l];
					if (!1 === (r = s ? s.call(a, o, u, l) : void 0) || void 0 === r && o !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const a = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				r = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttons: "_1osT-qIK6HP34i2FDE4r9Y",
				cannotSet: "_1t-66lLQWZSpbs8vSx7d50",
				cannotSetText: "_1BRlddRQ5mdzkeZEvsMuUv",
				cannotSetTitle: "b5-63ZiT3hXEezP7ajSxB",
				container: "_1KCEPJL6T6M8MkFIZ2IXaH",
				content: "j3ekLhSOCPSUw0m8lhi8v",
				controls: "HUjHoRHUSx_xVDGOKdwcL",
				flairClear: "_8GKRqm36xetUMbQde7czX",
				flairClearText: "HeVvAcsEzE2xBaDrBMw5i",
				flairSearch: "_2aP4KcIWJL2WW5R3ZiYNMl",
				tag: "PxLWrxSyNovlx-fq0IML9",
				title: "DqqtIiCAUkHXthuQxb_8J"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less": function(e, t, s) {
			e.exports = {
				achievement: "_2teo4B5cvMC9gCexXL023-",
				container: "ffO2daKmFqL6XoJenb_b4",
				image: "_1z9ciVFJZhI5lESYppFwgD",
				name: "_3biEkBMwTQHbwDJi3d508t",
				placeholderImage: "_-0Lu9uXl1dI9VGpRC42Ot",
				quantity: "_3OsrRFIuHtNhsQc6EnOJeG"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_22K_cEawZFVyXozKefY9Q2",
				container: "_1WOAtIXU7od6X10eLdQ-z",
				image: "_2j6QHC92qIWURiqybF6d1L",
				name: "_1cISY8N0wMy0SMN1t9lR",
				quantity: "t9ewTsRORnqyjeMdVnB2u"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "-axJD7sUIDZgAoFrqBQkt",
				badges: "_2Qd_WqJc07D_xIoiya4gE2",
				header: "_3ot9ZauItjqbMkGMlRLQwb",
				title: "_1qJg8Zcnzbgl5hGOa9kA7e",
				tokenSymbol: "TT_W6J-moP9U4O8PJSPSt",
				wallet: "_35n4VXwWnTy0OAN5ZYXgLK"
			}
		},
		"./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_24Q3sCX1KZeNfgEGgP9KOu",
				mode: "_1UEUn-yp7eWSIRC-CSwlZ9",
				modeSelected: "_3hZ2WSJeqOZv97H9kHbjWb",
				sectionTitle: "_2LOmyLKfLyYDu3KUrriaiH",
				sectionBadges: "_18CQnhpa-2B_V8isaHQX_A",
				sectionFlairs: "_157PleoR7BzTsKN0Gf21P-"
			}
		},
		"./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_22ikgjF9k7qmMdRB0mfQzd",
				containerApplied: "_3RzNICVNzxWHBPgkNKeA2p",
				check: "XA4x0laICuyVOB8S6VZLv",
				containerSelected: "_265mFfoOLnqVoBdOKEiPnN",
				clock: "_3FCiAY7TfEZ7kqjL-7S215",
				expiry: "rLanLgrEAEJb003jFaTPc",
				tooltip: "_3fi2IN6JRwMSxdgj0KHJiB",
				tooltipBadgeName: "_3PCWHOlyjmo32HJqVJOUX-",
				tooltipBadgeDesc: "_1FYrvn7rcatoBLYwbLticW"
			}
		},
		"./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_3PIR0aQH3xM3W0KsuDiZL1",
				badges: "_21vdkMSEcIv520ylED-PGx",
				container: "_23NseQNHuoOoizkCOtuBhQ",
				controls: "_11AtqV66GyDHgRK_6FN9hI",
				noBadges: "_2P_RWAugX1ldXB_FQolbfe",
				noBadgesIcon: "E3QXj8AQeRKmp0AfTdH0O",
				noBadgesTitle: "_30DEp24gWRPoXXCUau2END",
				noBadgesText: "_3If1In3yliihCz0j0G9A9h",
				placeholder: "x1I1nTOyF51qtPvPI3qI7",
				title: "qgSyY7uMC1JQVQW848mVx"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Title/index.m.less": function(e, t, s) {
			e.exports = {
				section: "_3j7rgXy42JVuXmhtLx70mp",
				container: "_2O-xGFYlCYuPdlc37MX93W",
				close: "_2yElCHQx-dDhEihABSFMK8",
				title: "_3NUIIkbwfIKO64WXlcQxiO",
				username: "_1zT2BsOkVjNuzM01T-CTKN"
			}
		},
		"./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_3B0ZXB6DhzfKHhz0hJ9kOH",
				flair: "_36Uutu3vGe0q7PkwR1w2q8"
			}
		},
		"./src/reddit/components/Badges/PickerModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1YzhagIr7KJIcCFQDXGEvV",
				title: "_1xE_e4zE5xj9PtMrbg3dRj",
				content: "_2vnumn6dV52UDQSMlkardc",
				modeSelectorContainer: "_2tvHZKsit2TXswHdgZcltI",
				modeSelectorContent: "_1kHCUK25emceKS0MyK_qGH"
			}
		},
		"./src/reddit/components/Badges/PickerModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/userFlair.ts"),
				o = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/userFlair/index.ts"),
				p = s("./src/reddit/components/FlairSearch/index.tsx"),
				h = s("./src/reddit/constants/flair.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				v = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less"),
				E = s.n(y);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.handleClearPreviewFlair = () => {
						this.setState({
							previewFlair: void 0
						}), this.props.onFlairChange && this.props.onFlairChange(void 0)
					}, this.handleSetPreviewFlair = e => {
						this.setState({
							previewFlair: e
						}), this.props.onFlairChange && this.props.onFlairChange(e)
					}, this.handleToggleFlair = () => {
						this.setState(e => ({
							userAllowsFlair: !e.userAllowsFlair
						}))
					}, this.state = {
						previewFlair: e.userFlairData.applied ? e.userFlairData.applied : void 0,
						userAllowsFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				render() {
					const e = this.props.userFlairData.permissions.canUserChange;
					return r.a.createElement("div", {
						className: Object(o.a)(this.props.className, E.a.container)
					}, e ? this.renderTitle() : this.renderCannotSetFlair(), r.a.createElement("div", {
						className: E.a.content
					}, e && this.renderFlairSearch(), r.a.createElement("div", {
						className: E.a.controls
					}, this.renderToggleFlair(), r.a.createElement("div", {
						className: E.a.buttons
					}, e && this.renderFlairClear(), this.renderFlairApply()))))
				}
				renderTitle() {
					return r.a.createElement("div", {
						className: E.a.title
					}, C._("select flair", null, {
						hk: "2V1TGh"
					}))
				}
				renderCannotSetFlair() {
					return r.a.createElement("div", {
						className: E.a.cannotSet
					}, r.a.createElement(f.a, {
						className: E.a.tag
					}), r.a.createElement("div", {
						className: E.a.cannotSetTitle
					}, C._("unavailable", null, {
						hk: "4ph1Lx"
					})), r.a.createElement("div", {
						className: E.a.cannotSetText
					}, C._("This community does not allow you to select flair", null, {
						hk: "4qhrnl"
					})))
				}
				renderFlairSearch() {
					return r.a.createElement(p.a, {
						flair: this.state.previewFlair || null,
						flairTemplateType: x.d.UserFlair,
						className: E.a.flairSearch,
						subredditId: this.props.subredditId,
						templates: this.props.userFlairData.templates,
						templateIds: this.props.userFlairData.templateIds,
						onChange: this.handleSetPreviewFlair
					})
				}
				renderToggleFlair() {
					return r.a.createElement("div", {
						className: E.a.flairClear
					}, r.a.createElement(b.a, {
						"data-redditstyle": !0,
						name: "showFlair",
						onChange: this.handleToggleFlair,
						value: this.state.userAllowsFlair
					}, r.a.createElement("span", {
						className: E.a.flairClearText
					}, C._("Show my user flair on this community", null, {
						hk: "1BGCCB"
					}))))
				}
				renderFlairClear() {
					return r.a.createElement(g.o, {
						onClick: this.handleClearPreviewFlair
					}, C._("Clear flair", null, {
						hk: "4eVLMj"
					}))
				}
				renderFlairApply() {
					return r.a.createElement(g.i, {
						disabled: !!this.state.previewFlair && Object(v.g)(this.state.previewFlair).length > h.g,
						onClick: () => this.props.onApplyFlair(this.state.previewFlair, this.state.previewFlair ? this.state.previewFlair.templateId : void 0, this.state.userAllowsFlair)
					}, C._("Apply", null, {
						hk: "4xCiu1"
					}))
				}
			}
			const _ = Object(d.c)({
				userFlairData: l.c,
				user: e => e.user.account
			});
			var N = Object(n.b)(_, e => ({
					onApplyFlair: (t, s, a, r, n) => {
						e(Object(m.f)(t, s, a, r, n)), e(Object(u.f)())
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					onApplyFlair: (a, r, n) => {
						t.onApplyFlair(a, r, n, e.user && e.user.displayText ? e.user.displayText : "", s.subredditId)
					}
				}))(k),
				B = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/bignumber.js/bignumber.js")),
				w = s("./node_modules/shallowequal/index.js"),
				I = s.n(w);

			function j(e) {
				return e instanceof Set ? Array.from(e) : e
			}

			function O(e) {
				let t;
				return (...s) => {
					const a = e(...s);
					return I()(j(t), j(a)) || (t = a), t
				}
			}
			var F = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/actions/product.ts"),
				P = s("./src/reddit/components/Governance/Token/index.tsx"),
				T = s("./src/reddit/models/Product/index.ts"),
				S = s("./src/reddit/selectors/gov.ts"),
				L = s("./src/reddit/models/Badge/index.ts"),
				A = s("./src/reddit/selectors/products.ts"),
				G = s("./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less"),
				D = s.n(G),
				q = s("./node_modules/fbt/lib/FbtPublic.js");

			function H(e) {
				return r.a.createElement("div", {
					className: D.a.name
				}, e.title)
			}

			function R(e) {
				const t = Object(L.d)(72, 72, e);
				return t.url ? r.a.createElement("img", {
					className: D.a.image,
					src: t.url2x,
					srcSet: `${t.url}, ${t.url2x} 2x`
				}) : r.a.createElement("div", {
					className: D.a.placeholderImage
				})
			}
			const K = Object(d.c)({
				alreadyOwned: A.b,
				product: (e, {
					productId: t
				}) => Object(A.a)(e, t),
				wallet: (e, {
					productId: t
				}) => {
					const s = Object(A.a)(e, t);
					if (s) {
						const t = s.subredditId;
						return Object(S.d)(e, {
							subredditId: t
						})
					}
				}
			});
			var U = Object(n.b)(K, (e, {
					productId: t
				}) => ({
					onCheckout: () => e(Object(M.h)({
						productId: t
					}))
				}))((function(e) {
					if (!e.product) return null;
					const t = !e.product.quantityLeft || new B.BigNumber(e.product.quantityLeft).isZero(),
						s = !e.wallet || !e.product.price || new B.BigNumber(e.wallet.amount).isLessThan(new B.BigNumber(e.product.price)),
						a = t || s || e.alreadyOwned;
					return r.a.createElement("div", {
						className: Object(o.a)(D.a.container, e.className),
						title: e.product.description
					}, R(e.product), H(e.product), e.product.price && function(e, t, s, a) {
						if (!e.price) return null;
						return r.a.createElement(g.l, {
							"data-redditstyle": !0,
							disabled: t,
							onClick: () => a && a()
						}, s ? q.fbt._("owned", null, {
							hk: "2XP8Rw"
						}) : "0" === e.price ? q.fbt._("free", null, {
							hk: "2WANGH"
						}) : Object(F.a)(e.price))
					}(e.product, a, e.alreadyOwned, e.onCheckout), !e.product.price && (e.product, r.a.createElement("div", {
						className: D.a.achievement
					}, q.fbt._("Achievement", null, {
						hk: "1F0QuQ"
					}))), function(e) {
						if (!e.price) return r.a.createElement("div", {
							className: D.a.quantity
						}, "∞");
						return r.a.createElement("div", {
							className: D.a.quantity
						}, e.quantityLeft && e.quantityTotal ? q.fbt._("{numerator}/{denomenator} left", [q.fbt._param("numerator", Object(F.a)(e.quantityLeft)), q.fbt._param("denomenator", Object(F.a)(e.quantityTotal))], {
							hk: "3O7IMZ"
						}) : q.fbt._("sold out", null, {
							hk: "3HqXG5"
						}))
					}(e.product))
				})),
				Z = s("./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less"),
				Q = s.n(Z);

			function X(e) {
				return r.a.createElement("div", {
					className: Object(o.a)(Q.a.container, e.className)
				}, r.a.createElement("div", {
					className: Q.a.image
				}), r.a.createElement("div", {
					className: Q.a.name
				}), r.a.createElement("div", {
					className: Q.a.button
				}), r.a.createElement("div", {
					className: Q.a.quantity
				}))
			}
			var V = s("./src/reddit/components/Badges/PickerModal/Gallery/index.m.less"),
				z = s.n(V);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class J extends r.a.Component {
				componentDidMount() {
					this.props.productIds.length || this.props.onFetchProducts()
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement("header", {
						className: z.a.header
					}, r.a.createElement("div", {
						className: z.a.title
					}, W._("get badge", null, {
						hk: "38nkHy"
					})), this.props.wallet && this.renderWallet(this.props.wallet, this.props.subredditId)), r.a.createElement("article", {
						className: z.a.badges
					}, this.props.productsPending ? Array.from({
						length: 5
					}).map((e, t) => r.a.createElement(X, {
						className: z.a.badge,
						key: t
					})) : this.props.productIds.map(e => r.a.createElement(U, {
						productId: e,
						className: z.a.badge,
						key: e
					}))))
				}
				renderWallet(e, t) {
					return r.a.createElement("div", {
						className: z.a.wallet
					}, r.a.createElement(P.a, {
						className: z.a.tokenSymbol,
						subredditId: t
					}), Object(F.a)(e.amount))
				}
			}
			const Y = Object(d.c)({
				productIds: O((e, {
					subredditId: t
				}) => {
					const s = e.subreddits.products[t] || {},
						a = e.products.models;
					return Object.keys(s).filter(e => !!a[e]).filter(e => a[e].type === T.a.Badge).sort((e, t) => {
						const s = a[e],
							r = a[t],
							n = new B.BigNumber(s.price || "0"),
							d = new B.BigNumber(r.price || "0");
						return n.isLessThan(d) ? -1 : n.isGreaterThan(d) ? 1 : s.title.localeCompare(r.title)
					})
				}),
				productsPending: (e, {
					subredditId: t
				}) => e.products.api.fetch.pending[t],
				wallet: S.d
			});
			var $, ee = Object(n.b)(Y, (e, {
					subredditId: t
				}) => ({
					onFetchProducts: () => e(Object(M.j)({
						subredditId: t
					}))
				}))(J),
				te = s("./src/reddit/icons/svgs/Badge/index.tsx"),
				se = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				ae = s("./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less"),
				re = s.n(ae);
			! function(e) {
				e[e.Flairs = 0] = "Flairs", e[e.Gallery = 1] = "Gallery", e[e.MyBadges = 2] = "MyBadges"
			}($ || ($ = {}));
			const ne = {
				[$.Flairs]: {
					str: () => q.fbt._("flairs", null, {
						hk: "1vWhvU"
					}),
					icon: f.a
				},
				[$.Gallery]: {
					str: () => q.fbt._("gallery", null, {
						hk: "33pd5W"
					}),
					icon: se.a
				},
				[$.MyBadges]: {
					str: () => q.fbt._("my badges", null, {
						hk: "2xKTOy"
					}),
					icon: te.a
				}
			};

			function de(e) {
				const t = ie(e.currentMode, e.onSelectMode);
				return r.a.createElement("div", {
					className: e.className
				}, r.a.createElement("div", {
					className: Object(o.a)(re.a.sectionTitle, re.a.sectionBadges)
				}, q.fbt._("badges", null, {
					hk: "33xQMz"
				})), t($.Gallery), t($.MyBadges), r.a.createElement("div", {
					className: Object(o.a)(re.a.sectionTitle, re.a.sectionFlairs)
				}, q.fbt._("flairs", null, {
					hk: "42LtF9"
				})), t($.Flairs))
			}
			const ie = (e, t) => s => {
				const a = ne[s];
				return r.a.createElement("div", {
					className: Object(o.a)(re.a.mode, {
						[re.a.modeSelected]: e === s
					}),
					onClick: () => t(s)
				}, r.a.createElement(a.icon, {
					className: re.a.icon
				}), a.str())
			};
			var ce = s("./src/reddit/actions/badge.ts"),
				le = s("./src/higherOrderComponents/asTooltip.tsx"),
				oe = s("./src/lib/timeUntil/index.ts"),
				ue = s("./src/reddit/constants/zIndex.ts"),
				me = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				pe = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				he = s("./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less"),
				ge = s.n(he);
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showTooltip: !1
					}, this.tooltipTimeout = void 0, this.handleTooltipEnter = () => {
						this.tooltipTimeout = setTimeout(() => this.setState({
							showTooltip: !0
						}), 500)
					}, this.handleTooltipExit = () => {
						clearTimeout(this.tooltipTimeout), this.setState({
							showTooltip: !1
						})
					}
				}
				render() {
					return this.props.badge ? r.a.createElement("div", {
						className: Object(o.a)(this.props.className, ge.a.container, {
							[ge.a.containerApplied]: !!this.props.isApplied,
							[ge.a.containerSelected]: !!this.props.isSelected
						}),
						onClick: this.props.onClick
					}, r.a.createElement(me.a, {
						className: ge.a.check
					}), r.a.createElement("div", {
						onMouseEnter: this.handleTooltipEnter,
						onMouseLeave: this.handleTooltipExit
					}, r.a.createElement("div", {
						id: `badgedesctooltip-${this.props.badge.id}`
					}, R(this.props.badge)), H(this.props.badge), r.a.createElement(ve, {
						isFixed: !0,
						badge: this.props.badge,
						isOpen: this.state.showTooltip,
						targetPosition: ["center", "bottom"],
						tooltipId: `badgedesctooltip-${this.props.badge.id}`,
						tooltipPosition: ["center", "top"]
					})), (e = this.props.badge, r.a.createElement("div", {
						className: ge.a.expiry
					}, r.a.createElement(pe.a, {
						className: ge.a.clock
					}), r.a.createElement("span", null, Object(oe.a)(new Date(e.endsAt), !0))))) : null;
					var e
				}
			}
			const ve = Object(le.a)((function({
				badge: e,
				style: t
			}) {
				return r.a.createElement("div", {
					className: ge.a.tooltip,
					style: {
						...t,
						zIndex: ue.h
					}
				}, r.a.createElement("div", {
					className: ge.a.tooltipBadgeName
				}, e.title), r.a.createElement("div", {
					className: ge.a.tooltipBadgeDesc
				}, e.description))
			}));
			const fe = Object(d.c)({
				badge: (e, {
					badgeId: t
				}) => e.badges.models[t]
			});
			var xe = Object(n.b)(fe)(be),
				ye = s("./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less"),
				Ee = s.n(ye);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class ke extends r.a.Component {
				constructor(e) {
					super(e), this.handleSelectBadge = e => {
						this.setState({
							selectedBadges: new Set([e])
						}), this.props.onBadgesChange && this.props.onBadgesChange([e])
					}, this.handleClearBadges = () => {
						this.setState({
							selectedBadges: new Set([])
						}), this.props.onBadgesChange && this.props.onBadgesChange([])
					}, this.handleApplyBadges = () => {
						this.props.onApplyBadges(Array.from(this.state.selectedBadges))
					}, this.state = {
						selectedBadges: new Set(e.appliedBadges)
					}
				}
				componentDidMount() {
					this.props.badgeIds.length || this.props.onFetchBadges()
				}
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(this.props.className, Ee.a.container)
					}, this.renderTitle(), this.props.badgesPending ? this.renderPlaceholder() : this.props.badgeIds.length ? this.renderBadges() : this.renderNoBadges(), this.renderControls())
				}
				renderTitle() {
					return r.a.createElement("header", {
						className: Ee.a.title
					}, Ce._("select badge", null, {
						hk: "3PfVt7"
					}))
				}
				renderPlaceholder() {
					return r.a.createElement("article", {
						className: Ee.a.badges
					}, Array.from({
						length: 5
					}).map((e, t) => r.a.createElement(X, {
						className: Ee.a.placeholder,
						key: t
					})))
				}
				renderBadges() {
					return r.a.createElement("article", {
						className: Ee.a.badges
					}, this.props.badgeIds.map(e => r.a.createElement("div", {
						className: Ee.a.badge,
						key: e
					}, r.a.createElement(xe, {
						badgeId: e,
						isApplied: this.props.appliedBadges.has(e),
						isSelected: this.state.selectedBadges.has(e),
						onClick: () => this.handleSelectBadge(e)
					}))))
				}
				renderNoBadges() {
					return r.a.createElement("div", {
						className: Ee.a.noBadges
					}, r.a.createElement(te.a, {
						className: Ee.a.noBadgesIcon
					}), r.a.createElement("div", {
						className: Ee.a.noBadgesTitle
					}, Ce._("no badges", null, {
						hk: "6J0yS"
					})), r.a.createElement("div", {
						className: Ee.a.noBadgesText
					}, Ce._("You don't have any badges yet. Get them from the Gallery.", null, {
						hk: "1ZYa4V"
					})), r.a.createElement(g.l, {
						onClick: this.props.onGotoGallery
					}, Ce._("get badge", null, {
						hk: "A4fxk"
					})))
				}
				renderControls() {
					return r.a.createElement("div", {
						className: Ee.a.controls
					}, this.renderClear(), this.renderApply())
				}
				renderClear() {
					return r.a.createElement("div", {
						className: Ee.a.toggleContainer
					}, r.a.createElement(g.o, {
						disabled: 0 === this.state.selectedBadges.size || 0 === this.props.badgeIds.length,
						onClick: this.handleClearBadges
					}, Ce._("clear selection", null, {
						hk: "UzL1B"
					})))
				}
				renderApply() {
					return r.a.createElement(g.i, {
						disabled: 0 === this.props.badgeIds.length || I()(Array.from(this.props.appliedBadges), Array.from(this.state.selectedBadges)),
						onClick: this.handleApplyBadges
					}, Ce._("apply", null, {
						hk: "2vTZSt"
					}))
				}
			}
			const _e = Object(d.c)({
				appliedBadges: O((e, {
					subredditId: t
				}) => {
					const s = e.user.account;
					let a = [];
					if (s) {
						a = (e.users.appliedBadges[s.id] || {})[t] || []
					}
					return new Set(a)
				}),
				badgeIds: O((e, {
					subredditId: t
				}) => Object.keys(e.user.ownedBadges[t] || {}).filter(t => {
					const s = e.badges.models[t];
					return s && s.endsAt > Date.now()
				})),
				badgesPending: (e, {
					subredditId: t
				}) => !!e.badges.api.user.pending[t]
			});
			var Ne = Object(n.b)(_e, (e, {
					subredditId: t
				}) => ({
					onApplyBadges: s => {
						e(Object(ce.k)({
							badgeIds: s,
							subredditId: t
						})), e(Object(u.f)())
					},
					onFetchBadges: () => e(Object(ce.m)({
						subredditId: t
					}))
				}))(ke),
				Be = s("./src/reddit/components/Governance/ModalClose/index.tsx"),
				we = s("./src/reddit/components/Flair/index.tsx"),
				Ie = s("./src/reddit/hooks/useUserContext.ts"),
				je = s("./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less"),
				Oe = s.n(je);

			function Fe(e) {
				const {
					badgeIds: t = []
				} = e, s = Object(n.e)(e => e.badges.models), {
					currentUser: a
				} = Object(Ie.a)(), d = t.map(e => s[e]).filter(Boolean);
				return r.a.createElement("div", {
					className: e.className
				}, d.map(e => {
					const t = Object(L.d)(24, 24, e);
					return r.a.createElement("img", {
						key: e.id,
						className: Oe.a.badge,
						src: t.url2x,
						srcSet: `${t.url}, ${t.url2x} 2x`
					})
				}), r.a.createElement("span", null, a ? `u/${a.displayText}` : "u/username"), e.flair && r.a.createElement("span", {
					className: Oe.a.flair
				}, r.a.createElement(we.b, {
					flair: e.flair
				})))
			}
			var Me = s("./src/reddit/components/Badges/PickerModal/Title/index.m.less"),
				Pe = s.n(Me);
			var Te = function(e) {
					return r.a.createElement("div", {
						className: Object(o.a)(Pe.a.container, e.className)
					}, r.a.createElement("div", {
						className: Pe.a.title
					}, q.fbt._("Community Flairs & Badges", null, {
						hk: "1Yy8Ei"
					})), r.a.createElement("div", {
						className: Pe.a.username
					}, r.a.createElement(Fe, {
						badgeIds: e.badgeIds,
						flair: e.flair
					})), r.a.createElement("div", {
						className: Pe.a.close
					}, r.a.createElement(Be.a, null)))
				},
				Se = s("./src/reddit/components/Badges/PickerModal/index.m.less"),
				Le = s.n(Se);

			function Ae(e) {
				return e.userFlairData && e.userFlairData.applied || void 0
			}
			class Ge extends r.a.Component {
				constructor(e) {
					super(e), this.handleModeChange = e => {
						this.setState((t, s) => ({
							currentMode: e,
							previewBadges: s.userBadgeIds,
							previewFlair: Ae(s)
						}))
					}, this.handleFlairChange = e => this.setState({
						previewFlair: e
					}), this.handleBadgesChange = e => this.setState({
						previewBadges: e
					}), this.state = {
						currentMode: $.MyBadges,
						previewBadges: e.userBadgeIds,
						previewFlair: Ae(e)
					}
				}
				render() {
					return r.a.createElement("div", {
						className: Le.a.container
					}, r.a.createElement("div", {
						className: Le.a.title
					}, this.props.subredditId && r.a.createElement(Te, {
						badgeIds: this.state.previewBadges,
						flair: this.state.previewFlair,
						subredditId: this.props.subredditId
					})), r.a.createElement("div", {
						className: Le.a.content
					}, r.a.createElement("div", {
						className: Le.a.modeSelectorContainer
					}, r.a.createElement(de, {
						className: Le.a.modeSelector,
						currentMode: this.state.currentMode,
						onSelectMode: this.handleModeChange
					})), r.a.createElement("div", {
						className: Le.a.modeSelectorContent
					}, this.renderMode())))
				}
				renderMode() {
					if (this.props.subredditId) switch (this.state.currentMode) {
						case $.Flairs:
							return r.a.createElement(N, {
								subredditId: this.props.subredditId,
								onFlairChange: this.handleFlairChange
							});
						case $.Gallery:
							return r.a.createElement(ee, {
								subredditId: this.props.subredditId
							});
						case $.MyBadges:
							return r.a.createElement(Ne, {
								subredditId: this.props.subredditId,
								onBadgesChange: this.handleBadgesChange,
								onGotoGallery: () => this.handleModeChange($.Gallery)
							})
					}
					return r.a.createElement("div", null)
				}
			}
			const De = Object(d.c)({
					subredditId: c.m,
					userBadgeIds: (e, {
						pageLayer: t
					}) => {
						const s = e.user.account,
							a = Object(c.m)(e, {
								pageLayer: t
							});
						if (s && a) {
							return (e.users.appliedBadges[s.id] || {})[a] || []
						}
					},
					userFlairData: (e, {
						pageLayer: t
					}) => {
						const s = Object(c.m)(e, {
							pageLayer: t
						});
						if (s) {
							return Object(l.c)(e, {
								subredditId: s
							})
						}
					}
				}),
				qe = Object(n.b)(De),
				He = Object(c.t)();
			t.default = Object(i.a)(He(qe(Ge)))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, s) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./src/reddit/components/Governance/ModalClose/index.m.less"),
				o = s.n(l);
			t.a = Object(n.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return r.a.createElement(c.a, {
					className: Object(d.a)(o.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/crypto/points.ts"),
				o = s("./src/reddit/components/Governance/Token/index.m.less"),
				u = s.n(o);
			const m = Object(d.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(n.b)(m)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const a = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					n = `${i.a.assetPath}/${a}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/CheckboxInput/index.m.less"),
				o = s.n(l);
			t.a = e => r.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(n.a)(e.className, o.a.checkboxInput, e.disabled ? o.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, r.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? r.a.createElement(i.a, {
				className: o.a.checkboxSelected
			}) : r.a.createElement(d.a, null), e.children)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "l", (function() {
				return o
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "m", (function() {
				return v
			}));
			var a, r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case a.Ethereum:
					case a.EthTraderEthereum:
						return "Ethereum Main Network";
					case a.Rinkeby:
					case a.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case a.Ethereum:
					case a.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case a.Rinkeby:
					case a.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case a.Ethereum:
					case a.EthTraderEthereum:
						return "homestead";
					case a.Rinkeby:
					case a.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function l(e, t, s) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function o(e, t, s) {
				return await Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations`,
					data: s
				})
			}
			async function u(e, t, s) {
				return await Object(n.a)(e, {
					method: "delete",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations/${s}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(a || (a = {}));
			const m = (e, t, s) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: s
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				g = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, s, a) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: s,
					amount: a
				});
			async function v(e, t) {
				return await Object(n.a)(e, {
					method: "put",
					endpoint: `${r.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Badge/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 32 32"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M30 14C23.382 14 18 8.618 18 2C18 0.894 17.104 0 16 0C14.896 0 14 0.894 14 2C14 8.618 8.618 14 2 14C0.896 14 0 14.894 0 16C0 17.106 0.896 18 2 18C8.618 18 14 23.382 14 30C14 31.106 14.896 32 16 32C17.104 32 18 31.106 18 30C18 23.382 23.382 18 30 18C31.104 18 32 17.106 32 16C32 14.894 31.104 14 30 14"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var a;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return a
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/redux/es/redux.js"),
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/economics/claims/constants.ts")),
				n = s("./src/reddit/actions/economics/me/constants.ts");
			const d = {};
			var i = (e = d, t) => {
					switch (t.type) {
						case n.a: {
							const s = t.payload.claimPoints || {},
								a = Object.keys(s).reduce((t, a) => (t[a] = {
									...e[a],
									availableClaims: s[a]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var s;
								(null === (s = e[t]) || void 0 === s ? void 0 : s.isClaiming) && (a[t] = a[t] || {
									availableClaims: []
								}, a[t].isClaiming = !0)
							}), a
						}
						case r.b:
						case r.a:
							const {
								subredditId: s
							} = t.payload;
							return {
								...e, [s]: {
									...e[s],
									isClaiming: t.type === r.b
								}
							};
						default:
							return e
					}
				},
				c = s("./src/reddit/actions/governance/constants.ts"),
				l = s("./src/reddit/endpoints/governance/crypto.ts");
			const o = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, s, a, r, n;
				const d = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == d ? void 0 : d.contracts,
					c = null == i ? void 0 : i.unlocked,
					o = null !== (a = null === (s = e.walletProvider) || void 0 === s ? void 0 : s.provider) && void 0 !== a ? a : e.provider,
					m = !!(null === (r = e.walletProvider) || void 0 === r ? void 0 : r.inTransition),
					p = !m && o === l.a.Stellar,
					h = p ? null == d ? void 0 : d.issuerAddress : null == c ? void 0 : c.address,
					g = p ? (null == d ? void 0 : d.decimals) || 7 : (null == c ? void 0 : c.decimals) || 0;
				return {
					blockchainProvider: o,
					contractAddress: h || "",
					contracts: i,
					decimals: g,
					displayConversion: "1" + "0".repeat(g),
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (n = e.extra) || void 0 === n ? void 0 : n.nomenclature,
					polls: e.polls,
					symbol: p ? (null == d ? void 0 : d.token) || "PHOTON" : (null == c ? void 0 : c.token) || ""
				}
			}
			var p = (e = o, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: s,
							meta: a
						} = t.payload;
						return {
							...e,
							[s]: m(a)
						}
					}
					default:
						return e
				}
			};
			const h = {};
			var g = (e = h, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: s,
							wallets: a
						} = t.payload, r = Object.keys(a).reduce((t, r) => {
							return {
								...t,
								[r]: {
									...e[r] || {},
									[s]: a[r]
								}
							}
						}, {});
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(a.c)({
				claims: i,
				points: p,
				publicWallets: g
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/endpoints/governance/crypto.ts"),
				d = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/features/crypto/index.ts");
			Object(d.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var s, a, r;
				return t ? null === (r = null === (a = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === a ? void 0 : a.points) || void 0 === r ? void 0 : r[t] : void 0
			};

			function l() {
				const e = Object(r.Z)(),
					t = Object(a.e)(t => Object(r.q)(t, {
						pageLayer: e
					})),
					s = Object(a.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: s
				}
			}
			const o = (e, t) => {
				var s;
				const a = null === (s = c(e, t)) || void 0 === s ? void 0 : s.blockchainProvider;
				return a === n.a.Ethereum || a === n.a.Rinkeby || a === n.a.EthTraderEthereum || a === n.a.EthTraderRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "g", (function() {
				return o
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var a = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				n = {},
				d = (e, t) => {
					const s = p(e, t);
					if (s) return s.mainHeader
				},
				i = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				c = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : n
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				o = (e, t) => {
					const s = l(e, t),
						a = s && s.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				u = (e, t) => {
					const s = l(e, t);
					return s && s.amount || "0"
				},
				m = (e, t) => {
					const s = Object(a.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === a.a.Badge) return s
				},
				n = (e, {
					productId: t
				}) => {
					const s = e.products.models[t];
					if (s) {
						const a = s.subredditId,
							r = Object.keys(e.user.ownedBadges[a] || {}),
							n = e.badges.models,
							d = Date.now();
						let i = !1;
						return r.forEach(e => {
							const s = n[e];
							s && s.type === t && s.endsAt > d && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePickerModal.e0373845238d9640f647.js.map