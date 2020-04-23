// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.0baee6a3a247be515d14.js
// Retrieved at 4/23/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"], {
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CountrySort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				m = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				f = s("./node_modules/fbt/lib/FbtPublic.js");
			const g = e => {
					const t = N[e];
					return t && t() || ""
				},
				N = {
					[d.Nb.AllStates]: () => f.fbt._("all states", null, {
						hk: "1s9O3L"
					}),
					[d.Nb.Alaska]: () => f.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[d.Nb.Alabama]: () => f.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[d.Nb.Arkansas]: () => f.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[d.Nb.Arizona]: () => f.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[d.Nb.California]: () => f.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[d.Nb.Colorado]: () => f.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[d.Nb.Connecticut]: () => f.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[d.Nb.DistrictOfColumbia]: () => f.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[d.Nb.Delaware]: () => f.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[d.Nb.Florida]: () => f.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[d.Nb.Georgia]: () => f.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[d.Nb.Hawaii]: () => f.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[d.Nb.Iowa]: () => f.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[d.Nb.Idaho]: () => f.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[d.Nb.Illinois]: () => f.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[d.Nb.Indiana]: () => f.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[d.Nb.Kansas]: () => f.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[d.Nb.Kentucky]: () => f.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[d.Nb.Louisiana]: () => f.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[d.Nb.Massachusetts]: () => f.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[d.Nb.Maryland]: () => f.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[d.Nb.Maine]: () => f.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[d.Nb.Michigan]: () => f.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[d.Nb.Minnesota]: () => f.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[d.Nb.Missouri]: () => f.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[d.Nb.Mississippi]: () => f.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[d.Nb.Montana]: () => f.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[d.Nb.NorthCarolina]: () => f.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[d.Nb.NorthDakota]: () => f.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[d.Nb.Nebraska]: () => f.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[d.Nb.NewHampshire]: () => f.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[d.Nb.NewJersey]: () => f.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[d.Nb.NewMexico]: () => f.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[d.Nb.Nevada]: () => f.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[d.Nb.NewYork]: () => f.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[d.Nb.Ohio]: () => f.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[d.Nb.Oklahoma]: () => f.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[d.Nb.Oregon]: () => f.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[d.Nb.Pennsylvania]: () => f.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[d.Nb.RhodeIsland]: () => f.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[d.Nb.SouthCarolina]: () => f.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[d.Nb.SouthDakota]: () => f.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[d.Nb.Tennessee]: () => f.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[d.Nb.Texas]: () => f.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[d.Nb.Utah]: () => f.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[d.Nb.Virginia]: () => f.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[d.Nb.Vermont]: () => f.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[d.Nb.Washington]: () => f.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[d.Nb.Wisconsin]: () => f.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[d.Nb.WestVirginia]: () => f.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[d.Nb.Wyoming]: () => f.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/contexts/Tooltip.ts"),
				_ = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/StateSort/index.m.less"),
				O = s.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = p.a.wrapped(_.a, "_Dropdown", O.a),
				j = Object(m.a)(C),
				E = e => {
					return e.indexOf("_") > 0 && P(e) === d.v.UnitedStates
				},
				L = e => {
					if (E(e)) {
						return e.split("_")[1]
					}
					return d.Nb.AllStates
				},
				P = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				I = e => {
					const t = P(e),
						s = L(e);
					return E(e) ? "".concat(t, "_").concat(s) : t
				},
				T = Object(x.t)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(w.b)("StateSort--StateSortPicker")
				}),
				M = Object(a.b)(D, e => ({
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(r.b)(t)), e(Object(u.t)(d.v.UnitedStates + "_" + s))
					}
				}));
			var A = p.a.wrapped(T(M(e => {
				const t = "".concat(e.baseUrl, "?").concat(h.g, "=").concat(d.v.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(b.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(b.b, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : g(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(v.a.Consumer, null, s => o.a.createElement(j, k({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(d.Nb).map(s => {
					const n = d.Nb[s];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === d.Nb.AllStates ? t : "".concat(t, "_").concat(e))(n), I(n))
					}, o.a.createElement(y.b, {
						className: Object(c.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: g(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", O.a);
			const B = {
				[d.v.Everywhere]: () => f.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[d.v.UnitedStates]: () => f.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[d.v.Argentina]: () => f.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[d.v.Australia]: () => f.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[d.v.Bulgaria]: () => f.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[d.v.Canada]: () => f.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[d.v.Chile]: () => f.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[d.v.Colombia]: () => f.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[d.v.Croatia]: () => f.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[d.v.CzechRepublic]: () => f.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[d.v.Finland]: () => f.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[d.v.Greece]: () => f.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[d.v.Hungary]: () => f.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[d.v.Iceland]: () => f.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[d.v.India]: () => f.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[d.v.Ireland]: () => f.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[d.v.Japan]: () => f.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[d.v.Malaysia]: () => f.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[d.v.Mexico]: () => f.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[d.v.NewZealand]: () => f.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[d.v.Philippines]: () => f.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[d.v.Poland]: () => f.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[d.v.Portugal]: () => f.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[d.v.PuertoRico]: () => f.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[d.v.Romania]: () => f.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[d.v.Serbia]: () => f.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[d.v.Singapore]: () => f.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[d.v.Sweden]: () => f.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[d.v.Taiwan]: () => f.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[d.v.Thailand]: () => f.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[d.v.Turkey]: () => f.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[d.v.UnitedKingdom]: () => f.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CountrySort/index.m.less"),
				R = s.n(H);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = "CountrySort--CountrySortPicker",
				Q = Object(x.t)(),
				F = Object(i.c)({
					dropdownIsOpen: Object(w.b)(W),
					language: U.P
				}),
				Y = Object(a.b)(F, e => ({
					onCloseDropdown: t => e(Object(l.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(l.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(r.b)(t)), e(Object(u.t)(s))
					}
				}));
			t.a = Q(Y(e => {
				const t = P(e.sort),
					s = L(e.sort),
					n = "".concat(e.baseUrl, "?").concat(h.g, "=");
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(c.a)(R.a.countrySort, e.className),
					onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(W) : e.onOpenDropdown(W)
				}, o.a.createElement(b.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(b.b, {
					className: e.buttonClassName,
					displayText: (() => t in B ? B[t]() : B[d.v.Everywhere]())(),
					id: W,
					showDropdownTriangle: !0
				})), o.a.createElement(v.a.Consumer, null, s => o.a.createElement(j, K({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: W
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(d.v).map(s => {
					const a = d.v[s];
					return o.a.createElement("div", {
						key: a,
						onClick: () => e.onClickLink("".concat(n).concat(I(a)), a)
					}, o.a.createElement(y.b, {
						className: Object(c.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
						displayText: B[a](),
						isSelected: t === a
					}))
				})))), t === d.v.UnitedStates && o.a.createElement(A, {
					baseUrl: e.baseUrl,
					buttonClassName: e.buttonClassName,
					className: e.stateSortClassName,
					disabled: e.disabled,
					dropdownClassName: e.dropdownClassName,
					rowClassName: e.rowClassName,
					rowSelectedClassName: e.rowSelectedClassName,
					showStateAbbreviations: e.showStateAbbreviations,
					sort: s,
					wrapperClassName: e.wrapperClassName
				}))
			}))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				m = s.n(b),
				p = s("./src/lib/lessComponent.tsx");
			const h = Object(u.t)(),
				f = Object(r.c)({
					layout: u.M
				}),
				g = Object(a.b)(f);
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(m.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * l.m + l.q + l.r,
						t = d.a - e,
						s = l.g - t,
						n = d.a + s + (this.props.bladeOpen ? l.a : 0);
					return this.props.layout !== c.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(m.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(l.g + l.q + l.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(l.r, "px) / 2);\n              }\n\n              .").concat(m.a.Component, ".").concat(m.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(l.g + l.q + l.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, m.a.Component, {
						[m.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: m.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(g(p.a.wrapped(N, "Component", m.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				defaultLayout: "_3gXSYtUgFtDmPjSmbC1exY",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				l = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				c = s("./src/reddit/layout/page/Listing/Content.tsx"),
				d = s("./src/reddit/selectors/structuredStyles.ts"),
				u = s("./src/reddit/selectors/userPrefs.ts"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				m = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				p = s.n(m),
				h = s("./src/lib/lessComponent.tsx");
			const f = h.a.div("BodyContainer", p.a),
				g = h.a.div("SidebarPlaceholder", p.a),
				N = h.a.div("InnerContainer", p.a),
				x = Object(r.c)({
					bladeOpen: e => !!Object(d.j)(e),
					isSubscriptionsPinned: u.b
				}),
				v = Object(a.b)(x);
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(l.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: a = !0,
						onFocus: r,
						onBlur: l
					} = this.props;
					let d = 0;
					return n && !e && t && (d += i.u), 0 !== this.state.bodyScrollOffset && (d -= this.state.bodyScrollOffset), o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(f, {
						onFocus: r,
						onBlur: l
					}, o.a.createElement(c.a, {
						fitPageToContent: !0
					}, o.a.createElement(N, {
						className: s
					}, o.a.createElement(b.a, {
						bladeOpen: e,
						considerSidebar: a,
						offsetLeft: d,
						render: this.props.render
					}))), a && o.a.createElement(g, null)))
				}
			}
			t.a = h.a.wrapped(v(_), "Component", p.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				d = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/components/CountrySort/index.tsx"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				m = s("./src/reddit/components/TimeSort/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/page.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				N = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				_ = s.n(v);
			const y = Object(f.t)({
					isProfilePage: f.G,
					pageLayer: e => e
				}),
				w = Object(r.c)({
					currentUser: x.i,
					language: x.P,
					isPopularListing: f.C,
					redditStyle: f.A
				}),
				S = Object(a.b)(w, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const o = Object(l.c)({
									sort: t,
									timeSort: n
								});
								e(Object(d.G)(s, o))
							}
						}
					}
				});
			t.a = y(S(Object(p.c)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, a = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, r = s && e.countrySort && e.sort === i.N.HOT, l = e => {
					N.a.setState({
						isListingFocused: e
					})
				};
				return o.a.createElement(c.a, {
					className: e.className,
					onFocus: () => l(!0),
					onBlur: () => l(!1),
					render: s => o.a.Children.toArray([n ? null : o.a.createElement(g.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : o.a.createElement("div", {
						className: _.a.separator
					}), o.a.createElement(b.d, {
						className: _.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && a && [o.a.createElement(m.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Rb
					})], r && o.a.createElement(u.a, {
						baseUrl: e.isPopularListing ? "/r/".concat(h.f, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				l = s.n(i);
			var c = e => o.a.createElement("svg", {
					className: Object(a.a)(l.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), o.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				d = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				u = s.n(d);
			var b = e => o.a.createElement("svg", {
					className: Object(a.a)(u.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				m = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				p = s.n(m);
			var h = e => o.a.createElement("svg", {
					className: Object(a.a)(p.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				f = s("./src/reddit/icons/svgs/New/index.m.less"),
				g = s.n(f);
			var N = e => o.a.createElement("svg", {
					className: Object(a.a)(g.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				x = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				v = s.n(x);
			var _ = e => o.a.createElement("svg", {
					className: Object(a.a)(v.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = s("./src/reddit/icons/svgs/Top/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.m.less"),
				S = s.n(w);
			const O = {
				[r.N.BEST]: c,
				[r.N.HOT]: h,
				[r.N.NEW]: N,
				[r.N.CONTROVERSIAL]: b,
				[r.N.TOP]: y.a,
				[r.N.RISING]: _
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = O[s];
				return n ? o.a.createElement(n, {
					className: Object(a.a)(t, S.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return A
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/listingSorts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				N = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/trackers/navigation.ts"),
				_ = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				k = s("./src/reddit/components/ListingSort/index.m.less"),
				C = s.n(k),
				j = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var L = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const P = "ListingSort--SortPicker",
				I = Object(l.a)(j.a.wrapped(g.a, "Dropdown", C.a)),
				T = j.a.wrapped(O.a, "ListingSortIcon", C.a),
				D = (j.a.wrapped(_.b, "DropdownTriangle", C.a), j.a.div("Title", C.a)),
				M = j.a.wrapped(e => a.a.createElement(N.b, E({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", C.a),
				A = e => {
					var {
						disabled: t
					} = e, s = L(e, ["disabled"]);
					return a.a.createElement("div", E({}, s, {
						className: Object(d.a)(C.a.SortWrapper, s.className, {
							[C.a.isDisabled]: t
						})
					}))
				},
				B = j.a.div("DropdownRowDisabled", C.a),
				U = Object(h.t)({
					isFrontpage: h.y,
					isProfilePage: h.G,
					pageLayer: e => e
				}),
				H = Object(i.c)({
					isBestSortPopularEnabled: y.a,
					user: S.i,
					dropdownIsOpen: (e, t) => Object(w.b)(t.dropdownId || P)(e),
					language: S.P,
					isPopularPage: h.C
				}),
				R = Object(r.b)(H, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(b.h)({
							tooltipId: s || P
						}))
					}
				});
			t.d = j.a.wrapped(U(R(Object(m.c)(e => a.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && a.a.createElement(D, null, n.fbt._("Sort", null, {
				hk: "2BfINq"
			})), a.a.createElement(A, {
				disabled: e.disabled
			}, e.children || a.a.createElement(M, {
				className: e.buttonClassName,
				displayText: Object(p.a)(e.sort),
				id: e.dropdownId || P,
				showDropdownTriangle: !0
			}, a.a.createElement(T, {
				sort: e.sort
			}))), a.a.createElement(f.a.Consumer, null, t => a.a.createElement(I, E({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || P
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? a.a.createElement(B, null, n.fbt._("Coming soon", null, {
				hk: "taPqm"
			})) : (e.sortOptions || ((e, t, s, n) => {
				const o = [u.N.HOT, u.N.NEW, u.N.TOP, u.N.RISING];
				return (e && (s || n) || t && n) && o.unshift(u.N.BEST), o
			})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled)).map(t => a.a.createElement(N.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: Object(p.a)(t),
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(v.a)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(x.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, a.a.createElement(T, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", C.a)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				o = s.n(n),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				u = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/listingSorts.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/TimeSort/index.m.less"),
				k = s.n(O),
				C = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "TimeSort--SortPicker",
				L = Object(d.a)(v.a),
				P = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(N.G)(e) || (n = o.a.join(n, t)), Object(u.a)(n, {
						[g.t]: s
					})
				},
				I = C.a.div("ListingSortContainer", k.a),
				T = Object(N.t)(),
				D = Object(l.c)({
					dropdownIsOpen: Object(w.b)(E),
					language: S.P
				}),
				M = Object(i.b)(D, e => ({
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: E
					}))
				}));
			t.a = T(M(Object(h.c)(e => r.a.createElement(I, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, r.a.createElement(p.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, r.a.createElement(p.b, {
				className: e.buttonClassName,
				displayText: Object(f.b)(e.timeSort),
				id: E,
				showDropdownTriangle: !0
			})), r.a.createElement(x.a.Consumer, null, t => r.a.createElement(L, j({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: E
			}, t), [b.Qb.HOUR, b.Qb.DAY, b.Qb.WEEK, b.Qb.MONTH, b.Qb.YEAR, b.Qb.ALL].map(t => r.a.createElement(_.b, {
				className: Object(c.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: Object(f.b)(t),
				href: P(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.c)(t))
				}
			}))))))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const a = {
					[o.N.BEST]: () => n.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[o.N.HOT]: () => n.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[o.N.NEW]: () => n.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[o.N.CONTROVERSIAL]: () => n.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[o.N.RISING]: () => n.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[o.N.TOP]: () => n.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				r = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[o.Qb.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Qb.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Qb.WEEK]: () => n.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[o.Qb.MONTH]: () => n.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[o.Qb.YEAR]: () => n.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[o.Qb.ALL]: () => n.fbt._("All time", null, {
						hk: "2cL1Yf"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				p = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				v = s.n(x);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const w = e => Object(l.a)(v.a.iconStyles, e.className, {
					[v.a.mDisabled]: e.disabled,
					[v.a.mRedditStyle]: e.redditStyle
				}),
				S = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = y(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(p.a, _({
						className: w({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				O = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = y(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(m.a, _({
						className: w({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				k = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = y(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(h.a, _({
						className: w({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				C = e => {
					var {
						isActive: t
					} = e, s = y(e, ["isActive"]);
					return a.a.createElement("button", _({
						className: Object(l.a)(v.a.layoutButton, {
							[v.a.mIsActive]: t
						})
					}, s))
				},
				j = Object(g.t)(),
				E = Object(i.c)({
					postLayout: g.M,
					redditStyle: g.A
				}),
				L = Object(r.b)(E, e => ({
					onListingLayoutChange: (t, s) => e(Object(d.v)(t, s)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = j(L(Object(f.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || b.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(l.a)(v.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: v.a.title
				}, n.fbt._("View", null, {
					hk: "18a931"
				})), a.a.createElement("div", {
					className: v.a.iconContainer
				}, (() => [{
					layout: b.d.Card,
					Icon: k,
					text: n.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: b.d.Classic,
					Icon: O,
					text: n.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: b.d.Compact,
					Icon: S,
					text: n.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(n => {
					const r = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(N.screen)(e),
								subreddit: Object(N.subreddit)(e)
							})))
						})(n.layout),
						i = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + n.layout,
						d = n.layout === o;
					return a.a.createElement(C, {
						"aria-label": n.text,
						"aria-pressed": d,
						id: l,
						isActive: d,
						key: n.layout,
						onClick: r,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: r
					}, a.a.createElement(n.Icon, {
						disabled: !d,
						onClick: d ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), a.a.createElement(c.c, {
						tooltipId: l,
						text: n.text
					}))
				})))
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		}
	}
]);
//# sourceMappingURL=Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.0baee6a3a247be515d14.js.map