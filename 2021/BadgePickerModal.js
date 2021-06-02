// https://www.redditstatic.com/desktop2x/BadgePickerModal.4ce2117fb2fa8abbffeb.js
// Retrieved at 6/2/2021, 4:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePickerModal"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, s) {
				var a = r ? r.call(s, e, t) : void 0;
				if (void 0 !== a) return !!a;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var n = Object.keys(e),
					i = Object.keys(t);
				if (n.length !== i.length) return !1;
				for (var d = Object.prototype.hasOwnProperty.bind(t), c = 0; c < n.length; c++) {
					var l = n[c];
					if (!d(l)) return !1;
					var o = e[l],
						u = t[l];
					if (!1 === (a = r ? r.call(s, o, u, l) : void 0) || void 0 === a && o !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less": function(e, t, r) {
			e.exports = {
				achievement: "_2teo4B5cvMC9gCexXL023-",
				container: "ffO2daKmFqL6XoJenb_b4",
				image: "_1z9ciVFJZhI5lESYppFwgD",
				name: "_3biEkBMwTQHbwDJi3d508t",
				placeholderImage: "_-0Lu9uXl1dI9VGpRC42Ot",
				quantity: "_3OsrRFIuHtNhsQc6EnOJeG"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_22K_cEawZFVyXozKefY9Q2",
				container: "_1WOAtIXU7od6X10eLdQ-z",
				image: "_2j6QHC92qIWURiqybF6d1L",
				name: "_1cISY8N0wMy0SMN1t9lR",
				quantity: "t9ewTsRORnqyjeMdVnB2u"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/index.m.less": function(e, t, r) {
			e.exports = {
				badge: "-axJD7sUIDZgAoFrqBQkt",
				badges: "_2Qd_WqJc07D_xIoiya4gE2",
				header: "_3ot9ZauItjqbMkGMlRLQwb",
				title: "_1qJg8Zcnzbgl5hGOa9kA7e",
				tokenSymbol: "TT_W6J-moP9U4O8PJSPSt",
				wallet: "_35n4VXwWnTy0OAN5ZYXgLK"
			}
		},
		"./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_24Q3sCX1KZeNfgEGgP9KOu",
				mode: "_1UEUn-yp7eWSIRC-CSwlZ9",
				modeSelected: "_3hZ2WSJeqOZv97H9kHbjWb",
				sectionTitle: "_2LOmyLKfLyYDu3KUrriaiH",
				sectionBadges: "_18CQnhpa-2B_V8isaHQX_A",
				sectionFlairs: "_157PleoR7BzTsKN0Gf21P-"
			}
		},
		"./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Badges/PickerModal/Title/index.m.less": function(e, t, r) {
			e.exports = {
				section: "_3j7rgXy42JVuXmhtLx70mp",
				container: "_2O-xGFYlCYuPdlc37MX93W",
				close: "_2yElCHQx-dDhEihABSFMK8",
				title: "_3NUIIkbwfIKO64WXlcQxiO",
				username: "_1zT2BsOkVjNuzM01T-CTKN"
			}
		},
		"./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				badge: "_3B0ZXB6DhzfKHhz0hJ9kOH",
				flair: "_36Uutu3vGe0q7PkwR1w2q8"
			}
		},
		"./src/reddit/components/Badges/PickerModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1YzhagIr7KJIcCFQDXGEvV",
				title: "_1xE_e4zE5xj9PtMrbg3dRj",
				content: "_2vnumn6dV52UDQSMlkardc",
				modeSelectorContainer: "_2tvHZKsit2TXswHdgZcltI",
				modeSelectorContent: "_1kHCUK25emceKS0MyK_qGH"
			}
		},
		"./src/reddit/components/Badges/PickerModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/selectors/userFlair.ts"),
				o = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/userFlair/index.ts"),
				p = r("./src/reddit/components/FlairSearch/index.tsx"),
				h = r("./src/reddit/constants/flair.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/controls/CheckboxInput/index.tsx"),
				v = r("./src/reddit/helpers/flair.ts"),
				f = r("./src/reddit/icons/svgs/Tag/index.tsx"),
				x = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less"),
				C = r.n(y);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class k extends a.a.Component {
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
					return a.a.createElement("div", {
						className: Object(o.a)(this.props.className, C.a.container)
					}, e ? this.renderTitle() : this.renderCannotSetFlair(), a.a.createElement("div", {
						className: C.a.content
					}, e && this.renderFlairSearch(), a.a.createElement("div", {
						className: C.a.controls
					}, this.renderToggleFlair(), a.a.createElement("div", {
						className: C.a.buttons
					}, e && this.renderFlairClear(), this.renderFlairApply()))))
				}
				renderTitle() {
					return a.a.createElement("div", {
						className: C.a.title
					}, E._("select flair", null, {
						hk: "2V1TGh"
					}))
				}
				renderCannotSetFlair() {
					return a.a.createElement("div", {
						className: C.a.cannotSet
					}, a.a.createElement(f.a, {
						className: C.a.tag
					}), a.a.createElement("div", {
						className: C.a.cannotSetTitle
					}, E._("unavailable", null, {
						hk: "4ph1Lx"
					})), a.a.createElement("div", {
						className: C.a.cannotSetText
					}, E._("This community does not allow you to select flair", null, {
						hk: "4qhrnl"
					})))
				}
				renderFlairSearch() {
					return a.a.createElement(p.a, {
						flair: this.state.previewFlair || null,
						flairTemplateType: x.d.UserFlair,
						className: C.a.flairSearch,
						subredditId: this.props.subredditId,
						templates: this.props.userFlairData.templates,
						templateIds: this.props.userFlairData.templateIds,
						onChange: this.handleSetPreviewFlair
					})
				}
				renderToggleFlair() {
					return a.a.createElement("div", {
						className: C.a.flairClear
					}, a.a.createElement(g.a, {
						"data-redditstyle": !0,
						name: "showFlair",
						onChange: this.handleToggleFlair,
						value: this.state.userAllowsFlair
					}, a.a.createElement("span", {
						className: C.a.flairClearText
					}, E._("Show my user flair on this community", null, {
						hk: "1BGCCB"
					}))))
				}
				renderFlairClear() {
					return a.a.createElement(b.o, {
						onClick: this.handleClearPreviewFlair
					}, E._("Clear flair", null, {
						hk: "4eVLMj"
					}))
				}
				renderFlairApply() {
					return a.a.createElement(b.i, {
						disabled: !!this.state.previewFlair && Object(v.g)(this.state.previewFlair).length > h.g,
						onClick: () => this.props.onApplyFlair(this.state.previewFlair, this.state.previewFlair ? this.state.previewFlair.templateId : void 0, this.state.userAllowsFlair)
					}, E._("Apply", null, {
						hk: "4xCiu1"
					}))
				}
			}
			const _ = Object(i.c)({
				userFlairData: l.c,
				user: e => e.user.account
			});
			var N = Object(n.b)(_, e => ({
					onApplyFlair: (t, r, s, a, n) => {
						e(Object(m.f)(t, r, s, a, n)), e(Object(u.f)())
					}
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onApplyFlair: (s, a, n) => {
						t.onApplyFlair(s, a, n, e.user && e.user.displayText ? e.user.displayText : "", r.subredditId)
					}
				}))(k),
				w = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/bignumber.js/bignumber.js")),
				B = r("./node_modules/shallowequal/index.js"),
				j = r.n(B);

			function I(e) {
				return e instanceof Set ? Array.from(e) : e
			}

			function O(e) {
				let t;
				return (...r) => {
					const s = e(...r);
					return j()(I(t), I(s)) || (t = s), t
				}
			}
			var M = r("./src/lib/prettyPrintNumber/index.ts"),
				F = r("./src/reddit/actions/product.ts"),
				P = r("./src/reddit/components/Governance/Token/index.tsx"),
				T = r("./src/reddit/models/Product/index.ts"),
				S = r("./src/reddit/selectors/gov.ts"),
				A = r("./src/reddit/models/Badge/index.ts"),
				L = r("./src/reddit/selectors/products.ts"),
				G = r("./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less"),
				H = r.n(G),
				D = r("./node_modules/fbt/lib/FbtPublic.js");

			function R(e) {
				return a.a.createElement("div", {
					className: H.a.name
				}, e.title)
			}

			function q(e) {
				const t = Object(A.d)(72, 72, e);
				return t.url ? a.a.createElement("img", {
					className: H.a.image,
					src: t.url2x,
					srcSet: `${t.url}, ${t.url2x} 2x`
				}) : a.a.createElement("div", {
					className: H.a.placeholderImage
				})
			}
			const V = Object(i.c)({
				alreadyOwned: L.b,
				product: (e, {
					productId: t
				}) => Object(L.a)(e, t),
				wallet: (e, {
					productId: t
				}) => {
					const r = Object(L.a)(e, t);
					if (r) {
						const t = r.subredditId;
						return Object(S.d)(e, {
							subredditId: t
						})
					}
				}
			});
			var Z = Object(n.b)(V, (e, {
					productId: t
				}) => ({
					onCheckout: () => e(Object(F.h)({
						productId: t
					}))
				}))((function(e) {
					if (!e.product) return null;
					const t = !e.product.quantityLeft || new w.BigNumber(e.product.quantityLeft).isZero(),
						r = !e.wallet || !e.product.price || new w.BigNumber(e.wallet.amount).isLessThan(new w.BigNumber(e.product.price)),
						s = t || r || e.alreadyOwned;
					return a.a.createElement("div", {
						className: Object(o.a)(H.a.container, e.className),
						title: e.product.description
					}, q(e.product), R(e.product), e.product.price && function(e, t, r, s) {
						if (!e.price) return null;
						return a.a.createElement(b.l, {
							"data-redditstyle": !0,
							disabled: t,
							onClick: () => s && s()
						}, r ? D.fbt._("owned", null, {
							hk: "2XP8Rw"
						}) : "0" === e.price ? D.fbt._("free", null, {
							hk: "2WANGH"
						}) : Object(M.a)(e.price))
					}(e.product, s, e.alreadyOwned, e.onCheckout), !e.product.price && (e.product, a.a.createElement("div", {
						className: H.a.achievement
					}, D.fbt._("Achievement", null, {
						hk: "1F0QuQ"
					}))), function(e) {
						if (!e.price) return a.a.createElement("div", {
							className: H.a.quantity
						}, "∞");
						return a.a.createElement("div", {
							className: H.a.quantity
						}, e.quantityLeft && e.quantityTotal ? D.fbt._("{numerator}/{denomenator} left", [D.fbt._param("numerator", Object(M.a)(e.quantityLeft)), D.fbt._param("denomenator", Object(M.a)(e.quantityTotal))], {
							hk: "3O7IMZ"
						}) : D.fbt._("sold out", null, {
							hk: "3HqXG5"
						}))
					}(e.product))
				})),
				K = r("./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less"),
				U = r.n(K);

			function Q(e) {
				return a.a.createElement("div", {
					className: Object(o.a)(U.a.container, e.className)
				}, a.a.createElement("div", {
					className: U.a.image
				}), a.a.createElement("div", {
					className: U.a.name
				}), a.a.createElement("div", {
					className: U.a.button
				}), a.a.createElement("div", {
					className: U.a.quantity
				}))
			}
			var X = r("./src/reddit/components/Badges/PickerModal/Gallery/index.m.less"),
				z = r.n(X);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class J extends a.a.Component {
				componentDidMount() {
					this.props.productIds.length || this.props.onFetchProducts()
				}
				render() {
					return a.a.createElement("div", null, a.a.createElement("header", {
						className: z.a.header
					}, a.a.createElement("div", {
						className: z.a.title
					}, W._("get badge", null, {
						hk: "38nkHy"
					})), this.props.wallet && this.renderWallet(this.props.wallet, this.props.subredditId)), a.a.createElement("article", {
						className: z.a.badges
					}, this.props.productsPending ? Array.from({
						length: 5
					}).map((e, t) => a.a.createElement(Q, {
						className: z.a.badge,
						key: t
					})) : this.props.productIds.map(e => a.a.createElement(Z, {
						productId: e,
						className: z.a.badge,
						key: e
					}))))
				}
				renderWallet(e, t) {
					return a.a.createElement("div", {
						className: z.a.wallet
					}, a.a.createElement(P.a, {
						className: z.a.tokenSymbol,
						subredditId: t
					}), Object(M.a)(e.amount))
				}
			}
			const Y = Object(i.c)({
				productIds: O((e, {
					subredditId: t
				}) => {
					const r = e.subreddits.products[t] || {},
						s = e.products.models;
					return Object.keys(r).filter(e => !!s[e]).filter(e => s[e].type === T.a.Badge).sort((e, t) => {
						const r = s[e],
							a = s[t],
							n = new w.BigNumber(r.price || "0"),
							i = new w.BigNumber(a.price || "0");
						return n.isLessThan(i) ? -1 : n.isGreaterThan(i) ? 1 : r.title.localeCompare(a.title)
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
					onFetchProducts: () => e(Object(F.j)({
						subredditId: t
					}))
				}))(J),
				te = r("./src/reddit/icons/svgs/Badge/index.tsx"),
				re = r("./src/reddit/icons/svgs/Gallery/index.tsx"),
				se = r("./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less"),
				ae = r.n(se);
			! function(e) {
				e[e.Flairs = 0] = "Flairs", e[e.Gallery = 1] = "Gallery", e[e.MyBadges = 2] = "MyBadges"
			}($ || ($ = {}));
			const ne = {
				[$.Flairs]: {
					str: () => D.fbt._("flairs", null, {
						hk: "1vWhvU"
					}),
					icon: f.a
				},
				[$.Gallery]: {
					str: () => D.fbt._("gallery", null, {
						hk: "33pd5W"
					}),
					icon: re.a
				},
				[$.MyBadges]: {
					str: () => D.fbt._("my badges", null, {
						hk: "2xKTOy"
					}),
					icon: te.a
				}
			};

			function ie(e) {
				const t = de(e.currentMode, e.onSelectMode);
				return a.a.createElement("div", {
					className: e.className
				}, a.a.createElement("div", {
					className: Object(o.a)(ae.a.sectionTitle, ae.a.sectionBadges)
				}, D.fbt._("badges", null, {
					hk: "33xQMz"
				})), t($.Gallery), t($.MyBadges), a.a.createElement("div", {
					className: Object(o.a)(ae.a.sectionTitle, ae.a.sectionFlairs)
				}, D.fbt._("flairs", null, {
					hk: "42LtF9"
				})), t($.Flairs))
			}
			const de = (e, t) => r => {
				const s = ne[r];
				return a.a.createElement("div", {
					className: Object(o.a)(ae.a.mode, {
						[ae.a.modeSelected]: e === r
					}),
					onClick: () => t(r)
				}, a.a.createElement(s.icon, {
					className: ae.a.icon
				}), s.str())
			};
			var ce = r("./src/reddit/actions/badge.ts"),
				le = r("./src/higherOrderComponents/asTooltip.tsx"),
				oe = r("./src/lib/timeUntil/index.ts"),
				ue = r("./src/reddit/constants/zIndex.ts"),
				me = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				pe = r("./src/reddit/icons/svgs/Clock/index.tsx"),
				he = r("./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less"),
				be = r.n(he);
			class ge extends a.a.Component {
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
					return this.props.badge ? a.a.createElement("div", {
						className: Object(o.a)(this.props.className, be.a.container, {
							[be.a.containerApplied]: !!this.props.isApplied,
							[be.a.containerSelected]: !!this.props.isSelected
						}),
						onClick: this.props.onClick
					}, a.a.createElement(me.a, {
						className: be.a.check
					}), a.a.createElement("div", {
						onMouseEnter: this.handleTooltipEnter,
						onMouseLeave: this.handleTooltipExit
					}, a.a.createElement("div", {
						id: `badgedesctooltip-${this.props.badge.id}`
					}, q(this.props.badge)), R(this.props.badge), a.a.createElement(ve, {
						isFixed: !0,
						badge: this.props.badge,
						isOpen: this.state.showTooltip,
						targetPosition: ["center", "bottom"],
						tooltipId: `badgedesctooltip-${this.props.badge.id}`,
						tooltipPosition: ["center", "top"]
					})), (e = this.props.badge, a.a.createElement("div", {
						className: be.a.expiry
					}, a.a.createElement(pe.a, {
						className: be.a.clock
					}), a.a.createElement("span", null, Object(oe.a)(new Date(e.endsAt), !0))))) : null;
					var e
				}
			}
			const ve = Object(le.a)((function({
				badge: e,
				style: t
			}) {
				return a.a.createElement("div", {
					className: be.a.tooltip,
					style: {
						...t,
						zIndex: ue.h
					}
				}, a.a.createElement("div", {
					className: be.a.tooltipBadgeName
				}, e.title), a.a.createElement("div", {
					className: be.a.tooltipBadgeDesc
				}, e.description))
			}));
			const fe = Object(i.c)({
				badge: (e, {
					badgeId: t
				}) => e.badges.models[t]
			});
			var xe = Object(n.b)(fe)(ge),
				ye = r("./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less"),
				Ce = r.n(ye);
			const {
				fbt: Ee
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class ke extends a.a.Component {
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
					return a.a.createElement("div", {
						className: Object(o.a)(this.props.className, Ce.a.container)
					}, this.renderTitle(), this.props.badgesPending ? this.renderPlaceholder() : this.props.badgeIds.length ? this.renderBadges() : this.renderNoBadges(), this.renderControls())
				}
				renderTitle() {
					return a.a.createElement("header", {
						className: Ce.a.title
					}, Ee._("select badge", null, {
						hk: "3PfVt7"
					}))
				}
				renderPlaceholder() {
					return a.a.createElement("article", {
						className: Ce.a.badges
					}, Array.from({
						length: 5
					}).map((e, t) => a.a.createElement(Q, {
						className: Ce.a.placeholder,
						key: t
					})))
				}
				renderBadges() {
					return a.a.createElement("article", {
						className: Ce.a.badges
					}, this.props.badgeIds.map(e => a.a.createElement("div", {
						className: Ce.a.badge,
						key: e
					}, a.a.createElement(xe, {
						badgeId: e,
						isApplied: this.props.appliedBadges.has(e),
						isSelected: this.state.selectedBadges.has(e),
						onClick: () => this.handleSelectBadge(e)
					}))))
				}
				renderNoBadges() {
					return a.a.createElement("div", {
						className: Ce.a.noBadges
					}, a.a.createElement(te.a, {
						className: Ce.a.noBadgesIcon
					}), a.a.createElement("div", {
						className: Ce.a.noBadgesTitle
					}, Ee._("no badges", null, {
						hk: "6J0yS"
					})), a.a.createElement("div", {
						className: Ce.a.noBadgesText
					}, Ee._("You don't have any badges yet. Get them from the Gallery.", null, {
						hk: "1ZYa4V"
					})), a.a.createElement(b.l, {
						onClick: this.props.onGotoGallery
					}, Ee._("get badge", null, {
						hk: "A4fxk"
					})))
				}
				renderControls() {
					return a.a.createElement("div", {
						className: Ce.a.controls
					}, this.renderClear(), this.renderApply())
				}
				renderClear() {
					return a.a.createElement("div", {
						className: Ce.a.toggleContainer
					}, a.a.createElement(b.o, {
						disabled: 0 === this.state.selectedBadges.size || 0 === this.props.badgeIds.length,
						onClick: this.handleClearBadges
					}, Ee._("clear selection", null, {
						hk: "UzL1B"
					})))
				}
				renderApply() {
					return a.a.createElement(b.i, {
						disabled: 0 === this.props.badgeIds.length || j()(Array.from(this.props.appliedBadges), Array.from(this.state.selectedBadges)),
						onClick: this.handleApplyBadges
					}, Ee._("apply", null, {
						hk: "2vTZSt"
					}))
				}
			}
			const _e = Object(i.c)({
				appliedBadges: O((e, {
					subredditId: t
				}) => {
					const r = e.user.account;
					let s = [];
					if (r) {
						s = (e.users.appliedBadges[r.id] || {})[t] || []
					}
					return new Set(s)
				}),
				badgeIds: O((e, {
					subredditId: t
				}) => Object.keys(e.user.ownedBadges[t] || {}).filter(t => {
					const r = e.badges.models[t];
					return r && r.endsAt > Date.now()
				})),
				badgesPending: (e, {
					subredditId: t
				}) => !!e.badges.api.user.pending[t]
			});
			var Ne = Object(n.b)(_e, (e, {
					subredditId: t
				}) => ({
					onApplyBadges: r => {
						e(Object(ce.k)({
							badgeIds: r,
							subredditId: t
						})), e(Object(u.f)())
					},
					onFetchBadges: () => e(Object(ce.m)({
						subredditId: t
					}))
				}))(ke),
				we = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				Be = r("./src/reddit/components/Flair/index.tsx"),
				je = r("./src/reddit/hooks/useUserContext.ts"),
				Ie = r("./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less"),
				Oe = r.n(Ie);

			function Me(e) {
				const {
					badgeIds: t = []
				} = e, r = Object(n.e)(e => e.badges.models), {
					currentUser: s
				} = Object(je.a)(), i = t.map(e => r[e]).filter(Boolean);
				return a.a.createElement("div", {
					className: e.className
				}, i.map(e => {
					const t = Object(A.d)(24, 24, e);
					return a.a.createElement("img", {
						key: e.id,
						className: Oe.a.badge,
						src: t.url2x,
						srcSet: `${t.url}, ${t.url2x} 2x`
					})
				}), a.a.createElement("span", null, s ? `u/${s.displayText}` : "u/username"), e.flair && a.a.createElement("span", {
					className: Oe.a.flair
				}, a.a.createElement(Be.b, {
					flair: e.flair
				})))
			}
			var Fe = r("./src/reddit/components/Badges/PickerModal/Title/index.m.less"),
				Pe = r.n(Fe);
			var Te = function(e) {
					return a.a.createElement("div", {
						className: Object(o.a)(Pe.a.container, e.className)
					}, a.a.createElement("div", {
						className: Pe.a.title
					}, D.fbt._("Community Flairs & Badges", null, {
						hk: "1Yy8Ei"
					})), a.a.createElement("div", {
						className: Pe.a.username
					}, a.a.createElement(Me, {
						badgeIds: e.badgeIds,
						flair: e.flair
					})), a.a.createElement("div", {
						className: Pe.a.close
					}, a.a.createElement(we.a, null)))
				},
				Se = r("./src/reddit/components/Badges/PickerModal/index.m.less"),
				Ae = r.n(Se);

			function Le(e) {
				return e.userFlairData && e.userFlairData.applied || void 0
			}
			class Ge extends a.a.Component {
				constructor(e) {
					super(e), this.handleModeChange = e => {
						this.setState((t, r) => ({
							currentMode: e,
							previewBadges: r.userBadgeIds,
							previewFlair: Le(r)
						}))
					}, this.handleFlairChange = e => this.setState({
						previewFlair: e
					}), this.handleBadgesChange = e => this.setState({
						previewBadges: e
					}), this.state = {
						currentMode: $.MyBadges,
						previewBadges: e.userBadgeIds,
						previewFlair: Le(e)
					}
				}
				render() {
					return a.a.createElement("div", {
						className: Ae.a.container
					}, a.a.createElement("div", {
						className: Ae.a.title
					}, this.props.subredditId && a.a.createElement(Te, {
						badgeIds: this.state.previewBadges,
						flair: this.state.previewFlair,
						subredditId: this.props.subredditId
					})), a.a.createElement("div", {
						className: Ae.a.content
					}, a.a.createElement("div", {
						className: Ae.a.modeSelectorContainer
					}, a.a.createElement(ie, {
						className: Ae.a.modeSelector,
						currentMode: this.state.currentMode,
						onSelectMode: this.handleModeChange
					})), a.a.createElement("div", {
						className: Ae.a.modeSelectorContent
					}, this.renderMode())))
				}
				renderMode() {
					if (this.props.subredditId) switch (this.state.currentMode) {
						case $.Flairs:
							return a.a.createElement(N, {
								subredditId: this.props.subredditId,
								onFlairChange: this.handleFlairChange
							});
						case $.Gallery:
							return a.a.createElement(ee, {
								subredditId: this.props.subredditId
							});
						case $.MyBadges:
							return a.a.createElement(Ne, {
								subredditId: this.props.subredditId,
								onBadgesChange: this.handleBadgesChange,
								onGotoGallery: () => this.handleModeChange($.Gallery)
							})
					}
					return a.a.createElement("div", null)
				}
			}
			const He = Object(i.c)({
					subredditId: c.m,
					userBadgeIds: (e, {
						pageLayer: t
					}) => {
						const r = e.user.account,
							s = Object(c.m)(e, {
								pageLayer: t
							});
						if (r && s) {
							return (e.users.appliedBadges[r.id] || {})[s] || []
						}
					},
					userFlairData: (e, {
						pageLayer: t
					}) => {
						const r = Object(c.m)(e, {
							pageLayer: t
						});
						if (r) {
							return Object(l.c)(e, {
								subredditId: r
							})
						}
					}
				}),
				De = Object(n.b)(He),
				Re = Object(c.t)();
			t.default = Object(d.a)(Re(De(Ge)))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				o = r.n(l);
			t.a = Object(n.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(d.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(c.a, {
					className: Object(i.a)(o.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/selectors/crypto/points.ts"),
				o = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(o);
			const m = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(n.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const s = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					n = `${d.a.assetPath}/${s}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, r) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				d = r("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/CheckboxInput/index.m.less"),
				o = r.n(l);
			t.a = e => a.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(n.a)(e.className, o.a.checkboxInput, e.disabled ? o.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, a.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? a.a.createElement(d.a, {
				className: o.a.checkboxSelected
			}) : a.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "k", (function() {
				return o
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "n", (function() {
				return f
			}));
			var s, a = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function d(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 29199749760514
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function l(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function o(e, t, r) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(n.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(n.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}));
			const p = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				h = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				g = e => ({
					type: "subscribe",
					subredditId: e
				}),
				v = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function f(e, t) {
				return await Object(n.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Badge/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 32 32"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M30 14C23.382 14 18 8.618 18 2C18 0.894 17.104 0 16 0C14.896 0 14 0.894 14 2C14 8.618 8.618 14 2 14C0.896 14 0 14.894 0 16C0 17.106 0.896 18 2 18C8.618 18 14 23.382 14 30C14 31.106 14.896 32 16 32C17.104 32 18 31.106 18 30C18 23.382 23.382 18 30 18C31.104 18 32 17.106 32 16C32 14.894 31.104 14 30 14"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, r) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Clock/index.m.less"),
				d = r.n(i);
			t.a = e => a.a.createElement("svg", {
				className: Object(n.a)(d.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function a(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				a = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				n = r("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var d = (e = i, t) => {
					switch (t.type) {
						case n.a: {
							const r = t.payload.claimPoints || {},
								s = Object.keys(r).reduce((t, s) => (t[s] = {
									...e[s],
									availableClaims: r[s]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (s[t] = s[t] || {
									availableClaims: []
								}, s[t].isClaiming = !0)
							}), s
						}
						case a.b:
						case a.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === a.b
								}
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/governance/constants.ts"),
				l = r("./src/reddit/endpoints/governance/crypto.ts");
			const o = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, r, s, a, n;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					d = null == i ? void 0 : i.contracts,
					c = null == d ? void 0 : d.unlocked,
					o = null !== (s = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== s ? s : e.provider,
					m = !!(null === (a = e.walletProvider) || void 0 === a ? void 0 : a.inTransition),
					p = !m && o === l.a.Stellar,
					h = p ? null == i ? void 0 : i.issuerAddress : null == c ? void 0 : c.address,
					b = p ? (null == i ? void 0 : i.decimals) || 7 : (null == c ? void 0 : c.decimals) || 0;
				return {
					blockchainProvider: o,
					contractAddress: h || "",
					contracts: d,
					decimals: b,
					displayConversion: "1" + "0".repeat(b),
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (n = e.extra) || void 0 === n ? void 0 : n.nomenclature,
					polls: e.polls,
					symbol: p ? (null == i ? void 0 : i.token) || "PHOTON" : (null == c ? void 0 : c.token) || ""
				}
			}
			var p = (e = o, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: r,
							meta: s
						} = t.payload;
						return {
							...e,
							[r]: m(s)
						}
					}
					default:
						return e
				}
			};
			const h = {};
			var b = (e = h, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: r,
							wallets: s
						} = t.payload, a = Object.keys(s).reduce((t, a) => {
							return {
								...t,
								[a]: {
									...e[a] || {},
									[r]: s[a]
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				claims: d,
				points: p,
				publicWallets: b
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: d.a
				}
			});
			const c = (e, t) => {
				var r, s, a;
				return t ? null === (a = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === a ? void 0 : a[t] : void 0
			};

			function l() {
				const e = Object(a.Z)(),
					t = Object(s.e)(t => Object(a.q)(t, {
						pageLayer: e
					})),
					r = Object(s.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const o = (e, t) => {
				var r;
				const s = null === (r = c(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return s === n.a.Ethereum || s === n.a.Rinkeby || s === n.a.EthTraderEthereum || s === n.a.EthTraderRinkeby || s === n.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				n = {},
				i = (e, t) => {
					const r = p(e, t);
					if (r) return r.mainHeader
				},
				d = (e, t) => {
					const r = p(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				c = (e, t) => {
					const r = p(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : n
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				o = (e, t) => {
					const r = l(e, t),
						s = r && r.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				u = (e, t) => {
					const r = l(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(s.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Product/index.ts");
			const a = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === s.a.Badge) return r
				},
				n = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const s = r.subredditId,
							a = Object.keys(e.user.ownedBadges[s] || {}),
							n = e.badges.models,
							i = Date.now();
						let d = !1;
						return a.forEach(e => {
							const r = n[e];
							r && r.type === t && r.endsAt > i && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePickerModal.4ce2117fb2fa8abbffeb.js.map