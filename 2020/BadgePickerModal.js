// https://www.redditstatic.com/desktop2x/BadgePickerModal.b773d1991683a459ad9c.js
// Retrieved at 4/29/2020, 7:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePickerModal"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, a, s) {
				var r = a ? a.call(s, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var n = Object.keys(e),
					d = Object.keys(t);
				if (n.length !== d.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), l = 0; l < n.length; l++) {
					var c = n[l];
					if (!i(c)) return !1;
					var o = e[c],
						u = t[c];
					if (!1 === (r = a ? a.call(s, o, u, c) : void 0) || void 0 === r && o !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less": function(e, t, a) {
			e.exports = {
				achievement: "_2teo4B5cvMC9gCexXL023-",
				container: "ffO2daKmFqL6XoJenb_b4",
				image: "_1z9ciVFJZhI5lESYppFwgD",
				name: "_3biEkBMwTQHbwDJi3d508t",
				placeholderImage: "_-0Lu9uXl1dI9VGpRC42Ot",
				quantity: "_3OsrRFIuHtNhsQc6EnOJeG"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_22K_cEawZFVyXozKefY9Q2",
				container: "_1WOAtIXU7od6X10eLdQ-z",
				image: "_2j6QHC92qIWURiqybF6d1L",
				name: "_1cISY8N0wMy0SMN1t9lR",
				quantity: "t9ewTsRORnqyjeMdVnB2u"
			}
		},
		"./src/reddit/components/Badges/PickerModal/Gallery/index.m.less": function(e, t, a) {
			e.exports = {
				badge: "-axJD7sUIDZgAoFrqBQkt",
				badges: "_2Qd_WqJc07D_xIoiya4gE2",
				header: "_3ot9ZauItjqbMkGMlRLQwb",
				title: "_1qJg8Zcnzbgl5hGOa9kA7e",
				tokenSymbol: "TT_W6J-moP9U4O8PJSPSt",
				wallet: "_35n4VXwWnTy0OAN5ZYXgLK"
			}
		},
		"./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_24Q3sCX1KZeNfgEGgP9KOu",
				mode: "_1UEUn-yp7eWSIRC-CSwlZ9",
				modeSelected: "_3hZ2WSJeqOZv97H9kHbjWb",
				sectionTitle: "_2LOmyLKfLyYDu3KUrriaiH",
				sectionBadges: "_18CQnhpa-2B_V8isaHQX_A",
				sectionFlairs: "_157PleoR7BzTsKN0Gf21P-"
			}
		},
		"./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Badges/PickerModal/Title/index.m.less": function(e, t, a) {
			e.exports = {
				section: "_3j7rgXy42JVuXmhtLx70mp",
				container: "_2O-xGFYlCYuPdlc37MX93W",
				close: "_2yElCHQx-dDhEihABSFMK8",
				title: "_3NUIIkbwfIKO64WXlcQxiO",
				username: "_1zT2BsOkVjNuzM01T-CTKN"
			}
		},
		"./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less": function(e, t, a) {
			e.exports = {
				badge: "_3B0ZXB6DhzfKHhz0hJ9kOH",
				flair: "_36Uutu3vGe0q7PkwR1w2q8"
			}
		},
		"./src/reddit/components/Badges/PickerModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1YzhagIr7KJIcCFQDXGEvV",
				title: "_1xE_e4zE5xj9PtMrbg3dRj",
				content: "_2vnumn6dV52UDQSMlkardc",
				modeSelectorContainer: "_2tvHZKsit2TXswHdgZcltI",
				modeSelectorContent: "_1kHCUK25emceKS0MyK_qGH"
			}
		},
		"./src/reddit/components/Badges/PickerModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/contexts/PageLayer/index.tsx"),
				c = a("./src/reddit/selectors/userFlair.ts"),
				o = a("./src/lib/classNames/index.ts"),
				u = a("./src/reddit/actions/modal.ts"),
				m = a("./src/reddit/actions/userFlair.ts"),
				p = a("./src/reddit/components/FlairSearch/index.tsx"),
				g = a("./src/reddit/constants/flair.ts"),
				h = a("./src/reddit/controls/Button/index.tsx"),
				b = a("./src/reddit/controls/CheckboxInput/index.tsx"),
				x = a("./src/reddit/helpers/flair.ts"),
				v = a("./src/reddit/icons/svgs/Tag/index.tsx"),
				f = a("./src/reddit/models/Flair/index.ts"),
				C = a("./src/reddit/components/Badges/PickerModal/FlairPicker/index.m.less"),
				y = a.n(C);
			const {
				fbt: E
			} = a("./node_modules/fbt/lib/FbtPublic.js");
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
						className: Object(o.a)(this.props.className, y.a.container)
					}, e ? this.renderTitle() : this.renderCannotSetFlair(), r.a.createElement("div", {
						className: y.a.content
					}, e && this.renderFlairSearch(), r.a.createElement("div", {
						className: y.a.controls
					}, this.renderToggleFlair(), r.a.createElement("div", {
						className: y.a.buttons
					}, e && this.renderFlairClear(), this.renderFlairApply()))))
				}
				renderTitle() {
					return r.a.createElement("div", {
						className: y.a.title
					}, E._("select flair", null, {
						hk: "2V1TGh"
					}))
				}
				renderCannotSetFlair() {
					return r.a.createElement("div", {
						className: y.a.cannotSet
					}, r.a.createElement(v.a, {
						className: y.a.tag
					}), r.a.createElement("div", {
						className: y.a.cannotSetTitle
					}, E._("unavailable", null, {
						hk: "4ph1Lx"
					})), r.a.createElement("div", {
						className: y.a.cannotSetText
					}, E._("This community does not allow you to select flair", null, {
						hk: "4qhrnl"
					})))
				}
				renderFlairSearch() {
					return r.a.createElement(p.a, {
						flair: this.state.previewFlair || null,
						flairTemplateType: f.d.UserFlair,
						className: y.a.flairSearch,
						subredditId: this.props.subredditId,
						templates: this.props.userFlairData.templates,
						templateIds: this.props.userFlairData.templateIds,
						onChange: this.handleSetPreviewFlair
					})
				}
				renderToggleFlair() {
					return r.a.createElement("div", {
						className: y.a.flairClear
					}, r.a.createElement(b.a, {
						"data-redditstyle": !0,
						name: "showFlair",
						onChange: this.handleToggleFlair,
						value: this.state.userAllowsFlair
					}, r.a.createElement("span", {
						className: y.a.flairClearText
					}, E._("Show my user flair on this community", null, {
						hk: "1BGCCB"
					}))))
				}
				renderFlairClear() {
					return r.a.createElement(h.n, {
						onClick: this.handleClearPreviewFlair
					}, E._("Clear flair", null, {
						hk: "4eVLMj"
					}))
				}
				renderFlairApply() {
					return r.a.createElement(h.f, {
						disabled: !!this.state.previewFlair && Object(x.g)(this.state.previewFlair).length > g.g,
						onClick: () => this.props.onApplyFlair(this.state.previewFlair, this.state.previewFlair ? this.state.previewFlair.templateId : void 0, this.state.userAllowsFlair)
					}, E._("Apply", null, {
						hk: "4xCiu1"
					}))
				}
			}
			const B = Object(d.c)({
				userFlairData: c.c,
				user: e => e.user.account
			});
			var N = Object(n.b)(B, e => ({
					onApplyFlair: (t, a, s, r, n) => {
						e(Object(m.o)(t, a, s, r, n)), e(Object(u.f)())
					}
				}), (e, t, a) => Object.assign({}, e, t, a, {
					onApplyFlair: (s, r, n) => {
						t.onApplyFlair(s, r, n, e.user && e.user.displayText ? e.user.displayText : "", a.subredditId)
					}
				}))(k),
				_ = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.array.sort.js"), a("./node_modules/bignumber.js/bignumber.js")),
				I = a("./node_modules/shallowequal/index.js"),
				w = a.n(I);

			function j(e) {
				return e instanceof Set ? Array.from(e) : e
			}

			function O(e) {
				let t;
				return function() {
					const a = e(...arguments);
					return w()(j(t), j(a)) || (t = a), t
				}
			}
			var F = a("./src/lib/prettyPrintNumber/index.ts"),
				M = a("./src/reddit/actions/product.ts"),
				S = a("./src/reddit/components/Governance/Token/index.tsx"),
				P = a("./src/reddit/models/Product/index.ts"),
				T = a("./src/reddit/selectors/gov.ts"),
				L = a("./src/reddit/models/Badge/index.ts"),
				A = a("./src/reddit/selectors/products.ts"),
				G = a("./src/reddit/components/Badges/PickerModal/Gallery/Badge/index.m.less"),
				H = a.n(G),
				q = a("./node_modules/fbt/lib/FbtPublic.js");

			function D(e) {
				return r.a.createElement("div", {
					className: H.a.name
				}, e.title)
			}

			function V(e) {
				const t = Object(L.b)(72, 72, e);
				return t.url ? r.a.createElement("img", {
					className: H.a.image,
					src: t.url2x,
					srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
				}) : r.a.createElement("div", {
					className: H.a.placeholderImage
				})
			}
			const Z = Object(d.c)({
				alreadyOwned: A.b,
				language: e => e.user.language,
				product: (e, t) => {
					let {
						productId: a
					} = t;
					return Object(A.a)(e, a)
				},
				wallet: (e, t) => {
					let {
						productId: a
					} = t;
					const s = Object(A.a)(e, a);
					if (s) {
						const t = s.subredditId;
						return Object(T.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var K = Object(n.b)(Z, (e, t) => {
					let {
						productId: a
					} = t;
					return {
						onCheckout: () => e(Object(M.h)({
							productId: a
						}))
					}
				})((function(e) {
					if (!e.product) return null;
					const t = !e.product.quantityLeft || new _.BigNumber(e.product.quantityLeft).isZero(),
						a = !e.wallet || !e.product.price || new _.BigNumber(e.wallet.amount).isLessThan(new _.BigNumber(e.product.price)),
						s = t || a || e.alreadyOwned;
					return r.a.createElement("div", {
						className: Object(o.a)(H.a.container, e.className),
						title: e.product.description
					}, V(e.product), D(e.product), e.product.price && function(e, t, a, s, n) {
						if (!e.price) return null;
						return r.a.createElement(h.i, {
							"data-redditstyle": !0,
							disabled: a,
							onClick: () => n && n()
						}, s ? q.fbt._("owned", null, {
							hk: "2XP8Rw"
						}) : "0" === e.price ? q.fbt._("free", null, {
							hk: "2WANGH"
						}) : Object(F.a)(e.price))
					}(e.product, e.language, s, e.alreadyOwned, e.onCheckout), !e.product.price && (e.product, e.language, r.a.createElement("div", {
						className: H.a.achievement
					}, q.fbt._("Achievement", null, {
						hk: "1F0QuQ"
					}))), function(e, t) {
						if (!e.price) return r.a.createElement("div", {
							className: H.a.quantity
						}, "∞");
						return r.a.createElement("div", {
							className: H.a.quantity
						}, e.quantityLeft && e.quantityTotal ? q.fbt._("{numerator}/{denomenator} left", [q.fbt._param("numerator", Object(F.a)(e.quantityLeft)), q.fbt._param("denomenator", Object(F.a)(e.quantityTotal))], {
							hk: "3O7IMZ"
						}) : q.fbt._("sold out", null, {
							hk: "3HqXG5"
						}))
					}(e.product, e.language))
				})),
				R = a("./src/reddit/components/Badges/PickerModal/Gallery/BadgePlaceholder/index.m.less"),
				U = a.n(R);

			function Q(e) {
				return r.a.createElement("div", {
					className: Object(o.a)(U.a.container, e.className)
				}, r.a.createElement("div", {
					className: U.a.image
				}), r.a.createElement("div", {
					className: U.a.name
				}), r.a.createElement("div", {
					className: U.a.button
				}), r.a.createElement("div", {
					className: U.a.quantity
				}))
			}
			var X = a("./src/reddit/components/Badges/PickerModal/Gallery/index.m.less"),
				W = a.n(X);
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class J extends r.a.Component {
				componentDidMount() {
					this.props.productIds.length || this.props.onFetchProducts()
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement("header", {
						className: W.a.header
					}, r.a.createElement("div", {
						className: W.a.title
					}, z._("get badge", null, {
						hk: "38nkHy"
					})), this.props.wallet && this.renderWallet(this.props.wallet, this.props.subredditId)), r.a.createElement("article", {
						className: W.a.badges
					}, this.props.productsPending ? Array.from({
						length: 5
					}).map((e, t) => r.a.createElement(Q, {
						className: W.a.badge,
						key: t
					})) : this.props.productIds.map(e => r.a.createElement(K, {
						productId: e,
						className: W.a.badge,
						key: e
					}))))
				}
				renderWallet(e, t) {
					return r.a.createElement("div", {
						className: W.a.wallet
					}, r.a.createElement(S.a, {
						className: W.a.tokenSymbol,
						subredditId: t
					}), Object(F.a)(e.amount))
				}
			}
			const Y = Object(d.c)({
				productIds: O((e, t) => {
					let {
						subredditId: a
					} = t;
					const s = e.subreddits.products[a] || {},
						r = e.products.models;
					return Object.keys(s).filter(e => !!r[e]).filter(e => r[e].type === P.a.Badge).sort((e, t) => {
						const a = r[e],
							s = r[t],
							n = new _.BigNumber(a.price || "0"),
							d = new _.BigNumber(s.price || "0");
						return n.isLessThan(d) ? -1 : n.isGreaterThan(d) ? 1 : a.title.localeCompare(s.title)
					})
				}),
				productsPending: (e, t) => {
					let {
						subredditId: a
					} = t;
					return e.products.api.fetch.pending[a]
				},
				wallet: T.g
			});
			var $, ee = Object(n.b)(Y, (e, t) => {
					let {
						subredditId: a
					} = t;
					return {
						onFetchProducts: () => e(Object(M.j)({
							subredditId: a
						}))
					}
				})(J),
				te = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 32 32"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					fill: "inherit",
					d: "M30 14C23.382 14 18 8.618 18 2C18 0.894 17.104 0 16 0C14.896 0 14 0.894 14 2C14 8.618 8.618 14 2 14C0.896 14 0 14.894 0 16C0 17.106 0.896 18 2 18C8.618 18 14 23.382 14 30C14 31.106 14.896 32 16 32C17.104 32 18 31.106 18 30C18 23.382 23.382 18 30 18C31.104 18 32 17.106 32 16C32 14.894 31.104 14 30 14"
				}))),
				ae = a("./src/reddit/icons/svgs/Gallery/index.tsx"),
				se = a("./src/reddit/components/Badges/PickerModal/ModeSelector/index.m.less"),
				re = a.n(se);
			! function(e) {
				e[e.Flairs = 0] = "Flairs", e[e.Gallery = 1] = "Gallery", e[e.MyBadges = 2] = "MyBadges"
			}($ || ($ = {}));
			const ne = {
				[$.Flairs]: {
					str: () => q.fbt._("flairs", null, {
						hk: "1vWhvU"
					}),
					icon: v.a
				},
				[$.Gallery]: {
					str: () => q.fbt._("gallery", null, {
						hk: "33pd5W"
					}),
					icon: ae.a
				},
				[$.MyBadges]: {
					str: () => q.fbt._("my badges", null, {
						hk: "2xKTOy"
					}),
					icon: te
				}
			};
			const de = (e, t) => a => {
					const s = ne[a];
					return r.a.createElement("div", {
						className: Object(o.a)(re.a.mode, {
							[re.a.modeSelected]: e === a
						}),
						onClick: () => t(a)
					}, r.a.createElement(s.icon, {
						className: re.a.icon
					}), s.str())
				},
				ie = Object(d.c)({
					language: e => e.user.language
				});
			var le = Object(n.b)(ie)((function(e) {
					const t = de(e.currentMode, e.onSelectMode);
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
				})),
				ce = a("./src/reddit/actions/badge.ts"),
				oe = a("./src/higherOrderComponents/asTooltip.tsx"),
				ue = a("./src/lib/timeUntil/index.ts"),
				me = a("./src/reddit/constants/zIndex.ts"),
				pe = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				ge = a("./src/reddit/icons/svgs/Clock/index.tsx"),
				he = a("./src/reddit/components/Badges/PickerModal/MyBadges/Badge/index.m.less"),
				be = a.n(he);
			class xe extends r.a.Component {
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
						className: Object(o.a)(this.props.className, be.a.container, {
							[be.a.containerApplied]: !!this.props.isApplied,
							[be.a.containerSelected]: !!this.props.isSelected
						}),
						onClick: this.props.onClick
					}, r.a.createElement(pe.a, {
						className: be.a.check
					}), r.a.createElement("div", {
						onMouseEnter: this.handleTooltipEnter,
						onMouseLeave: this.handleTooltipExit
					}, r.a.createElement("div", {
						id: "badgedesctooltip-".concat(this.props.badge.id)
					}, V(this.props.badge)), D(this.props.badge), r.a.createElement(ve, {
						isFixed: !0,
						badge: this.props.badge,
						isOpen: this.state.showTooltip,
						targetPosition: ["center", "bottom"],
						tooltipId: "badgedesctooltip-".concat(this.props.badge.id),
						tooltipPosition: ["center", "top"]
					})), (e = this.props.badge, t = this.props.language, r.a.createElement("div", {
						className: be.a.expiry
					}, r.a.createElement(ge.a, {
						className: be.a.clock
					}), r.a.createElement("span", null, Object(ue.a)(t, new Date(e.endsAt), !0))))) : null;
					var e, t
				}
			}
			const ve = Object(oe.a)((function(e) {
				let {
					badge: t,
					style: a
				} = e;
				return r.a.createElement("div", {
					className: be.a.tooltip,
					style: Object.assign({}, a, {
						zIndex: me.h
					})
				}, r.a.createElement("div", {
					className: be.a.tooltipBadgeName
				}, t.title), r.a.createElement("div", {
					className: be.a.tooltipBadgeDesc
				}, t.description))
			}));
			const fe = Object(d.c)({
				badge: (e, t) => {
					let {
						badgeId: a
					} = t;
					return e.badges.models[a]
				},
				language: e => e.user.language
			});
			var Ce = Object(n.b)(fe)(xe),
				ye = a("./src/reddit/components/Badges/PickerModal/MyBadges/index.m.less"),
				Ee = a.n(ye);
			const {
				fbt: ke
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class Be extends r.a.Component {
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
					}, ke._("select badge", null, {
						hk: "3PfVt7"
					}))
				}
				renderPlaceholder() {
					return r.a.createElement("article", {
						className: Ee.a.badges
					}, Array.from({
						length: 5
					}).map((e, t) => r.a.createElement(Q, {
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
					}, r.a.createElement(Ce, {
						badgeId: e,
						isApplied: this.props.appliedBadges.has(e),
						isSelected: this.state.selectedBadges.has(e),
						onClick: () => this.handleSelectBadge(e)
					}))))
				}
				renderNoBadges() {
					return r.a.createElement("div", {
						className: Ee.a.noBadges
					}, r.a.createElement(te, {
						className: Ee.a.noBadgesIcon
					}), r.a.createElement("div", {
						className: Ee.a.noBadgesTitle
					}, ke._("no badges", null, {
						hk: "6J0yS"
					})), r.a.createElement("div", {
						className: Ee.a.noBadgesText
					}, ke._("You don't have any badges yet. Get them from the Gallery.", null, {
						hk: "1ZYa4V"
					})), r.a.createElement(h.i, {
						onClick: this.props.onGotoGallery
					}, ke._("get badge", null, {
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
					}, r.a.createElement(h.n, {
						disabled: 0 === this.state.selectedBadges.size || 0 === this.props.badgeIds.length,
						onClick: this.handleClearBadges
					}, ke._("clear selection", null, {
						hk: "UzL1B"
					})))
				}
				renderApply() {
					return r.a.createElement(h.f, {
						disabled: 0 === this.props.badgeIds.length || w()(Array.from(this.props.appliedBadges), Array.from(this.state.selectedBadges)),
						onClick: this.handleApplyBadges
					}, ke._("apply", null, {
						hk: "2vTZSt"
					}))
				}
			}
			const Ne = Object(d.c)({
				appliedBadges: O((e, t) => {
					let {
						subredditId: a
					} = t;
					const s = e.user.account;
					let r = [];
					if (s) {
						r = (e.users.appliedBadges[s.id] || {})[a] || []
					}
					return new Set(r)
				}),
				badgeIds: O((e, t) => {
					let {
						subredditId: a
					} = t;
					return Object.keys(e.user.ownedBadges[a] || {}).filter(t => {
						const a = e.badges.models[t];
						return a && a.endsAt > Date.now()
					})
				}),
				badgesPending: (e, t) => {
					let {
						subredditId: a
					} = t;
					return !!e.badges.api.user.pending[a]
				}
			});
			var _e = Object(n.b)(Ne, (e, t) => {
					let {
						subredditId: a
					} = t;
					return {
						onApplyBadges: t => {
							e(Object(ce.k)({
								badgeIds: t,
								subredditId: a
							})), e(Object(u.f)())
						},
						onFetchBadges: () => e(Object(ce.m)({
							subredditId: a
						}))
					}
				})(Be),
				Ie = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				we = a("./src/reddit/components/Flair/index.tsx"),
				je = a("./src/reddit/components/Badges/PickerModal/UserDisplay/index.m.less"),
				Oe = a.n(je);
			const Fe = Object(d.c)({
				badges: (e, t) => {
					let {
						badgeIds: a
					} = t;
					return a ? a.map(t => e.badges.models[t]).filter(Boolean) : []
				},
				user: e => e.user.account
			});
			var Me = Object(n.b)(Fe)((function(e) {
					return r.a.createElement("div", {
						className: e.className
					}, e.badges.map(e => {
						const t = Object(L.b)(24, 24, e);
						return r.a.createElement("img", {
							className: Oe.a.badge,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						})
					}), r.a.createElement("span", null, e.user ? "u/".concat(e.user.displayText) : "u/username"), e.flair && r.a.createElement("span", {
						className: Oe.a.flair
					}, r.a.createElement(we.b, {
						flair: e.flair
					})))
				})),
				Se = a("./src/reddit/components/Badges/PickerModal/Title/index.m.less"),
				Pe = a.n(Se);
			var Te = function(e) {
					return r.a.createElement("div", {
						className: Object(o.a)(Pe.a.container, e.className)
					}, r.a.createElement("div", {
						className: Pe.a.title
					}, q.fbt._("Community Flairs & Badges", null, {
						hk: "1Yy8Ei"
					})), r.a.createElement("div", {
						className: Pe.a.username
					}, r.a.createElement(Me, {
						badgeIds: e.badgeIds,
						flair: e.flair,
						subredditId: e.subredditId
					})), r.a.createElement("div", {
						className: Pe.a.close
					}, r.a.createElement(Ie.a, null)))
				},
				Le = a("./src/reddit/components/Badges/PickerModal/index.m.less"),
				Ae = a.n(Le);

			function Ge(e) {
				return e.userFlairData && e.userFlairData.applied || void 0
			}
			class He extends r.a.Component {
				constructor(e) {
					super(e), this.handleModeChange = e => {
						this.setState((t, a) => ({
							currentMode: e,
							previewBadges: a.userBadgeIds,
							previewFlair: Ge(a)
						}))
					}, this.handleFlairChange = e => this.setState({
						previewFlair: e
					}), this.handleBadgesChange = e => this.setState({
						previewBadges: e
					}), this.state = {
						currentMode: $.MyBadges,
						previewBadges: e.userBadgeIds,
						previewFlair: Ge(e)
					}
				}
				render() {
					return r.a.createElement("div", {
						className: Ae.a.container
					}, r.a.createElement("div", {
						className: Ae.a.title
					}, this.props.subredditId && r.a.createElement(Te, {
						badgeIds: this.state.previewBadges,
						flair: this.state.previewFlair,
						subredditId: this.props.subredditId
					})), r.a.createElement("div", {
						className: Ae.a.content
					}, r.a.createElement("div", {
						className: Ae.a.modeSelectorContainer
					}, r.a.createElement(le, {
						className: Ae.a.modeSelector,
						currentMode: this.state.currentMode,
						onSelectMode: this.handleModeChange
					})), r.a.createElement("div", {
						className: Ae.a.modeSelectorContent
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
							return r.a.createElement(_e, {
								subredditId: this.props.subredditId,
								onBadgesChange: this.handleBadgesChange,
								onGotoGallery: () => this.handleModeChange($.Gallery)
							})
					}
					return r.a.createElement("div", null)
				}
			}
			const qe = Object(d.c)({
					subredditId: l.m,
					userBadgeIds: (e, t) => {
						let {
							pageLayer: a
						} = t;
						const s = e.user.account,
							r = Object(l.m)(e, {
								pageLayer: a
							});
						if (s && r) {
							return (e.users.appliedBadges[s.id] || {})[r] || []
						}
					},
					userFlairData: (e, t) => {
						let {
							pageLayer: a
						} = t;
						const s = Object(l.m)(e, {
							pageLayer: a
						});
						if (s) {
							return Object(c.c)(e, {
								subredditId: s
							})
						}
					}
				}),
				De = Object(n.b)(qe),
				Ve = Object(l.t)();
			t.default = Object(i.a)(Ve(De(He)))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/icons/svgs/Close/index.tsx"),
				c = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				o = a.n(c);
			t.a = Object(n.b)(void 0, (e, t) => {
				let {
					afterClose: a
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), a && a()
					}
				}
			})((function(e) {
				return r.a.createElement(l.a, {
					className: Object(d.a)(o.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				i = a("./src/config.ts"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/selectors/gov.ts"),
				o = a("./src/reddit/components/Governance/Token/index.m.less"),
				u = a.n(o);
			const m = Object(d.c)({
				tokenSymbol: c.q
			});
			t.a = Object(n.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					a = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && a.endsWith(".svg")) {
					const t = "url(".concat(a, ") center/cover");
					return r.a.createElement("div", {
						className: Object(l.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, a) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = a("./src/reddit/layout/row/Inline/index.tsx"),
				c = a("./src/reddit/controls/CheckboxInput/index.m.less"),
				o = a.n(c);
			t.a = e => r.a.createElement(l.a, {
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
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "e", (function() {
				return l
			})), a.d(t, "b", (function() {
				return c
			}));
			var s, r = a("./src/config.ts"),
				n = a("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
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
			async function i(e, t, a) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: a
					}
				})
			}
			async function l(e, t, a) {
				return await Object(n.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: a
				})
			}
			async function c(e, t, a) {
				return await Object(n.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(a)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
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
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
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
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			const s = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return u
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "d", (function() {
				return p
			})), a.d(t, "e", (function() {
				return g
			})), a.d(t, "g", (function() {
				return h
			})), a.d(t, "h", (function() {
				return b
			})), a.d(t, "i", (function() {
				return x
			})), a.d(t, "j", (function() {
				return v
			})), a.d(t, "p", (function() {
				return f
			})), a.d(t, "q", (function() {
				return C
			})), a.d(t, "o", (function() {
				return y
			})), a.d(t, "l", (function() {
				return E
			})), a.d(t, "m", (function() {
				return k
			})), a.d(t, "s", (function() {
				return B
			})), a.d(t, "a", (function() {
				return N
			})), a.d(t, "f", (function() {
				return _
			})), a.d(t, "r", (function() {
				return I
			})), a.d(t, "n", (function() {
				return w
			})), a.d(t, "k", (function() {
				return j
			}));
			var s = a("./src/reddit/contexts/PageLayer/index.tsx"),
				r = a("./src/reddit/endpoints/governance/crypto.ts"),
				n = a("./src/reddit/featureFlags/index.ts"),
				d = a("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = a("./src/reddit/selectors/postCreations.ts");
			const l = [],
				c = {},
				o = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = B(e, {
						subredditId: a
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const a = E(e, t);
					if (a) return a.mainHeader
				},
				p = (e, t) => {
					const a = E(e, t);
					return a && a.mainHeader ? a.mainHeader.price : "0"
				},
				g = (e, t) => {
					const a = E(e, t);
					return a && a.mainHeader ? {
						owner: a.mainHeader.owner,
						ownerId: a.mainHeader.ownerId
					} : c
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const a = n.d.spPolls(e) || n.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return a && !e
					}
					return a
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const a = Object(s.m)(e, t);
					return a && e.subreddits.gov.releaseNotes[a] || l
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				C = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || o,
				y = (e, t) => {
					const a = I(e, t);
					return a && a.decimals ? "1" + "0".repeat(a.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				k = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				B = (e, t) => {
					const a = k(e, t);
					return a && a.walletProvider
				},
				N = (e, t) => {
					const a = B(e, t),
						s = k(e, t);
					return a && a.provider || s && s.provider
				},
				_ = (e, t) => {
					const a = N(e, t);
					return a === r.a.Ethereum || a === r.a.Rinkeby || a === r.a.EthTraderEthereum || a === r.a.EthTraderRinkeby
				},
				I = (e, t) => {
					const a = B(e, t),
						s = N(e, t);
					if (a && !a.inTransition && s === r.a.Stellar) return {
						address: a.extra && a.extra.issuerAddress || "",
						decimals: a.extra && a.extra.decimals || 7,
						symbol: a.extra && a.extra.token || "PHOTON"
					};
					const n = a && a.extra && a.extra.contracts,
						d = n && n.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				w = (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = B(e, {
						subredditId: a
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				j = (e, t) => {
					const a = k(e, t);
					return !!a && !!a.walletProvider && !a.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=BadgePickerModal.b773d1991683a459ad9c.js.map