// https://www.redditstatic.com/desktop2x/BadgePickerModal.a3ae570a434bcfa4c261.js
// Retrieved at 4/13/2021, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePickerModal"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, a) {
				var s = r ? r.call(a, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var n = Object.keys(e),
					d = Object.keys(t);
				if (n.length !== d.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < n.length; c++) {
					var o = n[c];
					if (!i(o)) return !1;
					var l = e[o],
						u = t[o];
					if (!1 === (s = r ? r.call(a, l, u, o) : void 0) || void 0 === s && l !== u) return !1
				}
				return !0
			}
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
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/selectors/userFlair.ts"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/userFlair/index.ts"),
				p = r("./src/reddit/components/FlairSearch/index.tsx"),
				h = r("./src/reddit/constants/flair.ts"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/controls/CheckboxInput/index.tsx"),
				x = r("./src/reddit/helpers/flair.ts"),
				f = r("./src/reddit/icons/svgs/Tag/index.tsx"),
				v = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less"),
				E = r.n(y);
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class C extends s.a.Component {
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
					return s.a.createElement("div", {
						className: Object(l.a)(this.props.className, E.a.container)
					}, e ? this.renderTitle() : this.renderCannotSetFlair(), s.a.createElement("div", {
						className: E.a.content
					}, e && this.renderFlairSearch(), s.a.createElement("div", {
						className: E.a.controls
					}, this.renderToggleFlair(), s.a.createElement("div", {
						className: E.a.buttons
					}, e && this.renderFlairClear(), this.renderFlairApply()))))
				}
				renderTitle() {
					return s.a.createElement("div", {
						className: E.a.title
					}, k._("select flair", null, {
						hk: "2V1TGh"
					}))
				}
				renderCannotSetFlair() {
					return s.a.createElement("div", {
						className: E.a.cannotSet
					}, s.a.createElement(f.a, {
						className: E.a.tag
					}), s.a.createElement("div", {
						className: E.a.cannotSetTitle
					}, k._("unavailable", null, {
						hk: "4ph1Lx"
					})), s.a.createElement("div", {
						className: E.a.cannotSetText
					}, k._("This community does not allow you to select flair", null, {
						hk: "4qhrnl"
					})))
				}
				renderFlairSearch() {
					return s.a.createElement(p.a, {
						flair: this.state.previewFlair || null,
						flairTemplateType: v.d.UserFlair,
						className: E.a.flairSearch,
						subredditId: this.props.subredditId,
						templates: this.props.userFlairData.templates,
						templateIds: this.props.userFlairData.templateIds,
						onChange: this.handleSetPreviewFlair
					})
				}
				renderToggleFlair() {
					return s.a.createElement("div", {
						className: E.a.flairClear
					}, s.a.createElement(b.a, {
						"data-redditstyle": !0,
						name: "showFlair",
						onChange: this.handleToggleFlair,
						value: this.state.userAllowsFlair
					}, s.a.createElement("span", {
						className: E.a.flairClearText
					}, k._("Show my user flair on this community", null, {
						hk: "1BGCCB"
					}))))
				}
				renderFlairClear() {
					return s.a.createElement(g.o, {
						onClick: this.handleClearPreviewFlair
					}, k._("Clear flair", null, {
						hk: "4eVLMj"
					}))
				}
				renderFlairApply() {
					return s.a.createElement(g.i, {
						disabled: !!this.state.previewFlair && Object(x.g)(this.state.previewFlair).length > h.g,
						onClick: () => this.props.onApplyFlair(this.state.previewFlair, this.state.previewFlair ? this.state.previewFlair.templateId : void 0, this.state.userAllowsFlair)
					}, k._("Apply", null, {
						hk: "4xCiu1"
					}))
				}
			}
			const B = Object(d.c)({
				userFlairData: o.c,
				user: e => e.user.account
			});
			var N = Object(n.b)(B, e => ({
					onApplyFlair: (t, r, a, s, n) => {
						e(Object(m.f)(t, r, a, s, n)), e(Object(u.f)())
					}
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onApplyFlair: (a, s, n) => {
						t.onApplyFlair(a, s, n, e.user && e.user.displayText ? e.user.displayText : "", r.subredditId)
					}
				}))(C),
				w = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/bignumber.js/bignumber.js")),
				_ = r("./node_modules/shallowequal/index.js"),
				I = r.n(_);

			function j(e) {
				return e instanceof Set ? Array.from(e) : e
			}

			function O(e) {
				let t;
				return (...r) => {
					const a = e(...r);
					return I()(j(t), j(a)) || (t = a), t
				}
			}
			var F = r("./src/lib/prettyPrintNumber/index.ts"),
				M = r("./src/reddit/actions/product.ts"),
				S = r("./src/reddit/components/Governance/Token/index.tsx"),
				T = r("./src/reddit/models/Product/index.ts"),
				P = r("./src/reddit/selectors/gov.ts"),
				L = r("./src/reddit/models/Badge/index.ts"),
				A = r("./src/reddit/selectors/products.ts"),
				G = r("./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less"),
				D = r.n(G),
				q = r("./node_modules/fbt/lib/FbtPublic.js");

			function H(e) {
				return s.a.createElement("div", {
					className: D.a.name
				}, e.title)
			}

			function R(e) {
				const t = Object(L.d)(72, 72, e);
				return t.url ? s.a.createElement("img", {
					className: D.a.image,
					src: t.url2x,
					srcSet: `${t.url}, ${t.url2x} 2x`
				}) : s.a.createElement("div", {
					className: D.a.placeholderImage
				})
			}
			const U = Object(d.c)({
				alreadyOwned: A.b,
				product: (e, {
					productId: t
				}) => Object(A.a)(e, t),
				wallet: (e, {
					productId: t
				}) => {
					const r = Object(A.a)(e, t);
					if (r) {
						const t = r.subredditId;
						return Object(P.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var K = Object(n.b)(U, (e, {
					productId: t
				}) => ({
					onCheckout: () => e(Object(M.h)({
						productId: t
					}))
				}))((function(e) {
					if (!e.product) return null;
					const t = !e.product.quantityLeft || new w.BigNumber(e.product.quantityLeft).isZero(),
						r = !e.wallet || !e.product.price || new w.BigNumber(e.wallet.amount).isLessThan(new w.BigNumber(e.product.price)),
						a = t || r || e.alreadyOwned;
					return s.a.createElement("div", {
						className: Object(l.a)(D.a.container, e.className),
						title: e.product.description
					}, R(e.product), H(e.product), e.product.price && function(e, t, r, a) {
						if (!e.price) return null;
						return s.a.createElement(g.l, {
							"data-redditstyle": !0,
							disabled: t,
							onClick: () => a && a()
						}, r ? q.fbt._("owned", null, {
							hk: "2XP8Rw"
						}) : "0" === e.price ? q.fbt._("free", null, {
							hk: "2WANGH"
						}) : Object(F.a)(e.price))
					}(e.product, a, e.alreadyOwned, e.onCheckout), !e.product.price && (e.product, s.a.createElement("div", {
						className: D.a.achievement
					}, q.fbt._("Achievement", null, {
						hk: "1F0QuQ"
					}))), function(e) {
						if (!e.price) return s.a.createElement("div", {
							className: D.a.quantity
						}, "∞");
						return s.a.createElement("div", {
							className: D.a.quantity
						}, e.quantityLeft && e.quantityTotal ? q.fbt._("{numerator}/{denomenator} left", [q.fbt._param("numerator", Object(F.a)(e.quantityLeft)), q.fbt._param("denomenator", Object(F.a)(e.quantityTotal))], {
							hk: "3O7IMZ"
						}) : q.fbt._("sold out", null, {
							hk: "3HqXG5"
						}))
					}(e.product))
				})),
				Q = r("./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less"),
				Z = r.n(Q);

			function V(e) {
				return s.a.createElement("div", {
					className: Object(l.a)(Z.a.container, e.className)
				}, s.a.createElement("div", {
					className: Z.a.image
				}), s.a.createElement("div", {
					className: Z.a.name
				}), s.a.createElement("div", {
					className: Z.a.button
				}), s.a.createElement("div", {
					className: Z.a.quantity
				}))
			}
			var X = r("./src/reddit/components/Badges/PickerModal/Gallery/index.m.less"),
				W = r.n(X);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class J extends s.a.Component {
				componentDidMount() {
					this.props.productIds.length || this.props.onFetchProducts()
				}
				render() {
					return s.a.createElement("div", null, s.a.createElement("header", {
						className: W.a.header
					}, s.a.createElement("div", {
						className: W.a.title
					}, z._("get badge", null, {
						hk: "38nkHy"
					})), this.props.wallet && this.renderWallet(this.props.wallet, this.props.subredditId)), s.a.createElement("article", {
						className: W.a.badges
					}, this.props.productsPending ? Array.from({
						length: 5
					}).map((e, t) => s.a.createElement(V, {
						className: W.a.badge,
						key: t
					})) : this.props.productIds.map(e => s.a.createElement(K, {
						productId: e,
						className: W.a.badge,
						key: e
					}))))
				}
				renderWallet(e, t) {
					return s.a.createElement("div", {
						className: W.a.wallet
					}, s.a.createElement(S.a, {
						className: W.a.tokenSymbol,
						subredditId: t
					}), Object(F.a)(e.amount))
				}
			}
			const Y = Object(d.c)({
				productIds: O((e, {
					subredditId: t
				}) => {
					const r = e.subreddits.products[t] || {},
						a = e.products.models;
					return Object.keys(r).filter(e => !!a[e]).filter(e => a[e].type === T.a.Badge).sort((e, t) => {
						const r = a[e],
							s = a[t],
							n = new w.BigNumber(r.price || "0"),
							d = new w.BigNumber(s.price || "0");
						return n.isLessThan(d) ? -1 : n.isGreaterThan(d) ? 1 : r.title.localeCompare(s.title)
					})
				}),
				productsPending: (e, {
					subredditId: t
				}) => e.products.api.fetch.pending[t],
				wallet: P.g
			});
			var $, ee = Object(n.b)(Y, (e, {
					subredditId: t
				}) => ({
					onFetchProducts: () => e(Object(M.j)({
						subredditId: t
					}))
				}))(J),
				te = r("./src/reddit/icons/svgs/Badge/index.tsx"),
				re = r("./src/reddit/icons/svgs/Gallery/index.tsx"),
				ae = r("./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less"),
				se = r.n(ae);
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
					icon: re.a
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
				return s.a.createElement("div", {
					className: e.className
				}, s.a.createElement("div", {
					className: Object(l.a)(se.a.sectionTitle, se.a.sectionBadges)
				}, q.fbt._("badges", null, {
					hk: "33xQMz"
				})), t($.Gallery), t($.MyBadges), s.a.createElement("div", {
					className: Object(l.a)(se.a.sectionTitle, se.a.sectionFlairs)
				}, q.fbt._("flairs", null, {
					hk: "42LtF9"
				})), t($.Flairs))
			}
			const ie = (e, t) => r => {
				const a = ne[r];
				return s.a.createElement("div", {
					className: Object(l.a)(se.a.mode, {
						[se.a.modeSelected]: e === r
					}),
					onClick: () => t(r)
				}, s.a.createElement(a.icon, {
					className: se.a.icon
				}), a.str())
			};
			var ce = r("./src/reddit/actions/badge.ts"),
				oe = r("./src/higherOrderComponents/asTooltip.tsx"),
				le = r("./src/lib/timeUntil/index.ts"),
				ue = r("./src/reddit/constants/zIndex.ts"),
				me = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				pe = r("./src/reddit/icons/svgs/Clock/index.tsx"),
				he = r("./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less"),
				ge = r.n(he);
			class be extends s.a.Component {
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
					return this.props.badge ? s.a.createElement("div", {
						className: Object(l.a)(this.props.className, ge.a.container, {
							[ge.a.containerApplied]: !!this.props.isApplied,
							[ge.a.containerSelected]: !!this.props.isSelected
						}),
						onClick: this.props.onClick
					}, s.a.createElement(me.a, {
						className: ge.a.check
					}), s.a.createElement("div", {
						onMouseEnter: this.handleTooltipEnter,
						onMouseLeave: this.handleTooltipExit
					}, s.a.createElement("div", {
						id: `badgedesctooltip-${this.props.badge.id}`
					}, R(this.props.badge)), H(this.props.badge), s.a.createElement(xe, {
						isFixed: !0,
						badge: this.props.badge,
						isOpen: this.state.showTooltip,
						targetPosition: ["center", "bottom"],
						tooltipId: `badgedesctooltip-${this.props.badge.id}`,
						tooltipPosition: ["center", "top"]
					})), (e = this.props.badge, s.a.createElement("div", {
						className: ge.a.expiry
					}, s.a.createElement(pe.a, {
						className: ge.a.clock
					}), s.a.createElement("span", null, Object(le.a)(new Date(e.endsAt), !0))))) : null;
					var e
				}
			}
			const xe = Object(oe.a)((function({
				badge: e,
				style: t
			}) {
				return s.a.createElement("div", {
					className: ge.a.tooltip,
					style: {
						...t,
						zIndex: ue.h
					}
				}, s.a.createElement("div", {
					className: ge.a.tooltipBadgeName
				}, e.title), s.a.createElement("div", {
					className: ge.a.tooltipBadgeDesc
				}, e.description))
			}));
			const fe = Object(d.c)({
				badge: (e, {
					badgeId: t
				}) => e.badges.models[t]
			});
			var ve = Object(n.b)(fe)(be),
				ye = r("./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less"),
				Ee = r.n(ye);
			const {
				fbt: ke
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class Ce extends s.a.Component {
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
					return s.a.createElement("div", {
						className: Object(l.a)(this.props.className, Ee.a.container)
					}, this.renderTitle(), this.props.badgesPending ? this.renderPlaceholder() : this.props.badgeIds.length ? this.renderBadges() : this.renderNoBadges(), this.renderControls())
				}
				renderTitle() {
					return s.a.createElement("header", {
						className: Ee.a.title
					}, ke._("select badge", null, {
						hk: "3PfVt7"
					}))
				}
				renderPlaceholder() {
					return s.a.createElement("article", {
						className: Ee.a.badges
					}, Array.from({
						length: 5
					}).map((e, t) => s.a.createElement(V, {
						className: Ee.a.placeholder,
						key: t
					})))
				}
				renderBadges() {
					return s.a.createElement("article", {
						className: Ee.a.badges
					}, this.props.badgeIds.map(e => s.a.createElement("div", {
						className: Ee.a.badge,
						key: e
					}, s.a.createElement(ve, {
						badgeId: e,
						isApplied: this.props.appliedBadges.has(e),
						isSelected: this.state.selectedBadges.has(e),
						onClick: () => this.handleSelectBadge(e)
					}))))
				}
				renderNoBadges() {
					return s.a.createElement("div", {
						className: Ee.a.noBadges
					}, s.a.createElement(te.a, {
						className: Ee.a.noBadgesIcon
					}), s.a.createElement("div", {
						className: Ee.a.noBadgesTitle
					}, ke._("no badges", null, {
						hk: "6J0yS"
					})), s.a.createElement("div", {
						className: Ee.a.noBadgesText
					}, ke._("You don't have any badges yet. Get them from the Gallery.", null, {
						hk: "1ZYa4V"
					})), s.a.createElement(g.l, {
						onClick: this.props.onGotoGallery
					}, ke._("get badge", null, {
						hk: "A4fxk"
					})))
				}
				renderControls() {
					return s.a.createElement("div", {
						className: Ee.a.controls
					}, this.renderClear(), this.renderApply())
				}
				renderClear() {
					return s.a.createElement("div", {
						className: Ee.a.toggleContainer
					}, s.a.createElement(g.o, {
						disabled: 0 === this.state.selectedBadges.size || 0 === this.props.badgeIds.length,
						onClick: this.handleClearBadges
					}, ke._("clear selection", null, {
						hk: "UzL1B"
					})))
				}
				renderApply() {
					return s.a.createElement(g.i, {
						disabled: 0 === this.props.badgeIds.length || I()(Array.from(this.props.appliedBadges), Array.from(this.state.selectedBadges)),
						onClick: this.handleApplyBadges
					}, ke._("apply", null, {
						hk: "2vTZSt"
					}))
				}
			}
			const Be = Object(d.c)({
				appliedBadges: O((e, {
					subredditId: t
				}) => {
					const r = e.user.account;
					let a = [];
					if (r) {
						a = (e.users.appliedBadges[r.id] || {})[t] || []
					}
					return new Set(a)
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
			var Ne = Object(n.b)(Be, (e, {
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
				}))(Ce),
				we = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				_e = r("./src/reddit/components/Flair/index.tsx"),
				Ie = r("./src/reddit/hooks/useUserContext.ts"),
				je = r("./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less"),
				Oe = r.n(je);

			function Fe(e) {
				const {
					badgeIds: t = []
				} = e, r = Object(n.e)(e => e.badges.models), {
					currentUser: a
				} = Object(Ie.a)(), d = t.map(e => r[e]).filter(Boolean);
				return s.a.createElement("div", {
					className: e.className
				}, d.map(e => {
					const t = Object(L.d)(24, 24, e);
					return s.a.createElement("img", {
						key: e.id,
						className: Oe.a.badge,
						src: t.url2x,
						srcSet: `${t.url}, ${t.url2x} 2x`
					})
				}), s.a.createElement("span", null, a ? `u/${a.displayText}` : "u/username"), e.flair && s.a.createElement("span", {
					className: Oe.a.flair
				}, s.a.createElement(_e.b, {
					flair: e.flair
				})))
			}
			var Me = r("./src/reddit/components/Badges/PickerModal/Title/index.m.less"),
				Se = r.n(Me);
			var Te = function(e) {
					return s.a.createElement("div", {
						className: Object(l.a)(Se.a.container, e.className)
					}, s.a.createElement("div", {
						className: Se.a.title
					}, q.fbt._("Community Flairs & Badges", null, {
						hk: "1Yy8Ei"
					})), s.a.createElement("div", {
						className: Se.a.username
					}, s.a.createElement(Fe, {
						badgeIds: e.badgeIds,
						flair: e.flair
					})), s.a.createElement("div", {
						className: Se.a.close
					}, s.a.createElement(we.a, null)))
				},
				Pe = r("./src/reddit/components/Badges/PickerModal/index.m.less"),
				Le = r.n(Pe);

			function Ae(e) {
				return e.userFlairData && e.userFlairData.applied || void 0
			}
			class Ge extends s.a.Component {
				constructor(e) {
					super(e), this.handleModeChange = e => {
						this.setState((t, r) => ({
							currentMode: e,
							previewBadges: r.userBadgeIds,
							previewFlair: Ae(r)
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
					return s.a.createElement("div", {
						className: Le.a.container
					}, s.a.createElement("div", {
						className: Le.a.title
					}, this.props.subredditId && s.a.createElement(Te, {
						badgeIds: this.state.previewBadges,
						flair: this.state.previewFlair,
						subredditId: this.props.subredditId
					})), s.a.createElement("div", {
						className: Le.a.content
					}, s.a.createElement("div", {
						className: Le.a.modeSelectorContainer
					}, s.a.createElement(de, {
						className: Le.a.modeSelector,
						currentMode: this.state.currentMode,
						onSelectMode: this.handleModeChange
					})), s.a.createElement("div", {
						className: Le.a.modeSelectorContent
					}, this.renderMode())))
				}
				renderMode() {
					if (this.props.subredditId) switch (this.state.currentMode) {
						case $.Flairs:
							return s.a.createElement(N, {
								subredditId: this.props.subredditId,
								onFlairChange: this.handleFlairChange
							});
						case $.Gallery:
							return s.a.createElement(ee, {
								subredditId: this.props.subredditId
							});
						case $.MyBadges:
							return s.a.createElement(Ne, {
								subredditId: this.props.subredditId,
								onBadgesChange: this.handleBadgesChange,
								onGotoGallery: () => this.handleModeChange($.Gallery)
							})
					}
					return s.a.createElement("div", null)
				}
			}
			const De = Object(d.c)({
					subredditId: c.m,
					userBadgeIds: (e, {
						pageLayer: t
					}) => {
						const r = e.user.account,
							a = Object(c.m)(e, {
								pageLayer: t
							});
						if (r && a) {
							return (e.users.appliedBadges[r.id] || {})[a] || []
						}
					},
					userFlairData: (e, {
						pageLayer: t
					}) => {
						const r = Object(c.m)(e, {
							pageLayer: t
						});
						if (r) {
							return Object(o.c)(e, {
								subredditId: r
							})
						}
					}
				}),
				qe = Object(n.b)(De),
				He = Object(c.t)();
			t.default = Object(i.a)(He(qe(Ge)))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				o = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(o);
			t.a = Object(n.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(c.a, {
					className: Object(d.a)(l.a.closeIcon, e.className),
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
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(d.c)({
				tokenSymbol: o.o
			});
			t.a = Object(n.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = `${i.a.assetPath}/${t}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
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
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = r("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = r("./src/reddit/layout/row/Inline/index.tsx"),
				o = r("./src/reddit/controls/CheckboxInput/index.m.less"),
				l = r.n(o);
			t.a = e => s.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(n.a)(e.className, l.a.checkboxInput, e.disabled ? l.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, s.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? s.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : s.a.createElement(d.a, null), e.children)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "k", (function() {
				return o
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "m", (function() {
				return x
			}));
			var a, s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

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
			async function o(e, t, r) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(n.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(a || (a = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
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
				b = (e, t, r, a) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: a
				});
			async function x(e, t) {
				return await Object(n.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Badge/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 32 32"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M30 14C23.382 14 18 8.618 18 2C18 0.894 17.104 0 16 0C14.896 0 14 0.894 14 2C14 8.618 8.618 14 2 14C0.896 14 0 14.894 0 16C0 17.106 0.896 18 2 18C8.618 18 14 23.382 14 30C14 31.106 14.896 32 16 32C17.104 32 18 31.106 18 30C18 23.382 23.382 18 30 18C31.104 18 32 17.106 32 16C32 14.894 31.104 14 30 14"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var a;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return a
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "p", (function() {
				return B
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "j", (function() {
				return w
			}));
			var a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const n = [],
				d = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const r = E(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				o = (e, t) => {
					const r = v(e, t);
					if (r) return r.mainHeader
				},
				l = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				u = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : d
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const r = m(e, t),
						a = r && r.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				h = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				g = (e, t) => {
					const r = Object(a.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || n
				},
				b = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				f = (e, t) => {
					const r = B(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const r = y(e, t);
					return r && r.walletProvider
				},
				k = (e, t) => {
					const r = E(e, t),
						a = y(e, t);
					return r && r.provider || a && a.provider
				},
				C = (e, t) => {
					const r = k(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				B = (e, t) => {
					const r = E(e, t),
						a = k(e, t);
					if (r && !r.inTransition && a === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const n = r && r.extra && r.extra.contracts,
						d = n && n.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				N = (e, {
					subredditId: t
				}) => {
					const r = E(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				w = (e, t) => {
					const r = y(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === a.a.Badge) return r
				},
				n = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const a = r.subredditId,
							s = Object.keys(e.user.ownedBadges[a] || {}),
							n = e.badges.models,
							d = Date.now();
						let i = !1;
						return s.forEach(e => {
							const r = n[e];
							r && r.type === t && r.endsAt > d && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePickerModal.a3ae570a434bcfa4c261.js.map