// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.c89a5e8c0c918e3256bb.js
// Retrieved at 3/18/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
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
				x = s("./node_modules/fbt/lib/FbtPublic.js");
			const f = e => {
					const t = g[e];
					return t && t() || ""
				},
				g = {
					[d.Pb.AllStates]: () => x.fbt._("all states", null, {
						hk: "1s9O3L"
					}),
					[d.Pb.Alaska]: () => x.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[d.Pb.Alabama]: () => x.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[d.Pb.Arkansas]: () => x.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[d.Pb.Arizona]: () => x.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[d.Pb.California]: () => x.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[d.Pb.Colorado]: () => x.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[d.Pb.Connecticut]: () => x.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[d.Pb.DistrictOfColumbia]: () => x.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[d.Pb.Delaware]: () => x.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[d.Pb.Florida]: () => x.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[d.Pb.Georgia]: () => x.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[d.Pb.Hawaii]: () => x.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[d.Pb.Iowa]: () => x.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[d.Pb.Idaho]: () => x.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[d.Pb.Illinois]: () => x.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[d.Pb.Indiana]: () => x.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[d.Pb.Kansas]: () => x.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[d.Pb.Kentucky]: () => x.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[d.Pb.Louisiana]: () => x.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[d.Pb.Massachusetts]: () => x.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[d.Pb.Maryland]: () => x.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[d.Pb.Maine]: () => x.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[d.Pb.Michigan]: () => x.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[d.Pb.Minnesota]: () => x.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[d.Pb.Missouri]: () => x.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[d.Pb.Mississippi]: () => x.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[d.Pb.Montana]: () => x.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[d.Pb.NorthCarolina]: () => x.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[d.Pb.NorthDakota]: () => x.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[d.Pb.Nebraska]: () => x.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[d.Pb.NewHampshire]: () => x.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[d.Pb.NewJersey]: () => x.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[d.Pb.NewMexico]: () => x.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[d.Pb.Nevada]: () => x.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[d.Pb.NewYork]: () => x.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[d.Pb.Ohio]: () => x.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[d.Pb.Oklahoma]: () => x.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[d.Pb.Oregon]: () => x.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[d.Pb.Pennsylvania]: () => x.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[d.Pb.RhodeIsland]: () => x.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[d.Pb.SouthCarolina]: () => x.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[d.Pb.SouthDakota]: () => x.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[d.Pb.Tennessee]: () => x.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[d.Pb.Texas]: () => x.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[d.Pb.Utah]: () => x.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[d.Pb.Virginia]: () => x.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[d.Pb.Vermont]: () => x.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[d.Pb.Washington]: () => x.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[d.Pb.Wisconsin]: () => x.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[d.Pb.WestVirginia]: () => x.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[d.Pb.Wyoming]: () => x.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var _ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/contexts/Tooltip.ts"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/StateSort/index.m.less"),
				k = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = p.a.wrapped(S.a, "_Dropdown", k.a),
				P = Object(m.a)(N),
				j = e => {
					return e.indexOf("_") > 0 && L(e) === d.x.UnitedStates
				},
				E = e => {
					if (j(e)) {
						return e.split("_")[1]
					}
					return d.Pb.AllStates
				},
				L = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				I = e => {
					const t = L(e),
						s = E(e);
					return j(e) ? "".concat(t, "_").concat(s) : t
				},
				T = Object(_.t)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(O.b)("StateSort--StateSortPicker")
				}),
				M = Object(a.b)(D, e => ({
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(r.b)(t)), e(Object(u.t)(d.x.UnitedStates + "_" + s))
					}
				}));
			var A = p.a.wrapped(T(M(e => {
				const t = "".concat(e.baseUrl, "?").concat(h.g, "=").concat(d.x.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(b.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(b.b, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : f(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, s => o.a.createElement(P, C({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(d.Pb).map(s => {
					const n = d.Pb[s];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === d.Pb.AllStates ? t : "".concat(t, "_").concat(e))(n), I(n))
					}, o.a.createElement(w.b, {
						className: Object(c.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: f(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", k.a);
			const B = {
				[d.x.Everywhere]: () => x.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[d.x.UnitedStates]: () => x.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[d.x.Argentina]: () => x.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[d.x.Australia]: () => x.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[d.x.Bulgaria]: () => x.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[d.x.Canada]: () => x.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[d.x.Chile]: () => x.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[d.x.Colombia]: () => x.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[d.x.Croatia]: () => x.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[d.x.CzechRepublic]: () => x.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[d.x.Finland]: () => x.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[d.x.Greece]: () => x.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[d.x.Hungary]: () => x.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[d.x.Iceland]: () => x.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[d.x.India]: () => x.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[d.x.Ireland]: () => x.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[d.x.Japan]: () => x.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[d.x.Malaysia]: () => x.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[d.x.Mexico]: () => x.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[d.x.NewZealand]: () => x.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[d.x.Philippines]: () => x.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[d.x.Poland]: () => x.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[d.x.Portugal]: () => x.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[d.x.PuertoRico]: () => x.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[d.x.Romania]: () => x.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[d.x.Serbia]: () => x.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[d.x.Singapore]: () => x.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[d.x.Sweden]: () => x.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[d.x.Taiwan]: () => x.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[d.x.Thailand]: () => x.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[d.x.Turkey]: () => x.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[d.x.UnitedKingdom]: () => x.fbt._("United Kingdom", null, {
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
				F = Object(_.t)(),
				Y = Object(i.c)({
					dropdownIsOpen: Object(O.b)(W),
					language: U.O
				}),
				q = Object(a.b)(Y, e => ({
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
			t.a = F(q(e => {
				const t = L(e.sort),
					s = E(e.sort),
					n = "".concat(e.baseUrl, "?").concat(h.g, "=");
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(c.a)(R.a.countrySort, e.className),
					onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(W) : e.onOpenDropdown(W)
				}, o.a.createElement(b.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(b.b, {
					className: e.buttonClassName,
					displayText: (() => t in B ? B[t]() : B[d.x.Everywhere]())(),
					id: W,
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, s => o.a.createElement(P, K({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: W
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(d.x).map(s => {
					const a = d.x[s];
					return o.a.createElement("div", {
						key: a,
						onClick: () => e.onClickLink("".concat(n).concat(I(a)), a)
					}, o.a.createElement(w.b, {
						className: Object(c.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
						displayText: B[a](),
						isSelected: t === a
					}))
				})))), t === d.x.UnitedStates && o.a.createElement(A, {
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
				x = Object(r.c)({
					layout: u.L
				}),
				f = Object(a.b)(x);
			class g extends o.a.Component {
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
			t.a = h(f(p.a.wrapped(g, "Component", m.a)))
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
			const x = h.a.div("BodyContainer", p.a),
				f = h.a.div("SidebarPlaceholder", p.a),
				g = h.a.div("InnerContainer", p.a),
				_ = Object(r.c)({
					bladeOpen: e => !!Object(d.j)(e),
					isSubscriptionsPinned: u.b
				}),
				y = Object(a.b)(_);
			class S extends o.a.Component {
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
					}, o.a.createElement(x, {
						onFocus: r,
						onBlur: l
					}, o.a.createElement(c.a, {
						fitPageToContent: !0
					}, o.a.createElement(g, {
						className: s
					}, o.a.createElement(b.a, {
						bladeOpen: e,
						considerSidebar: a,
						offsetLeft: d,
						render: this.props.render
					}))), a && o.a.createElement(f, null)))
				}
			}
			t.a = h.a.wrapped(y(S), "Component", p.a)
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
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				g = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				_ = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				S = s.n(y);
			const w = Object(x.t)({
					isProfilePage: x.G,
					pageLayer: e => e
				}),
				O = Object(r.c)({
					currentUser: _.i,
					language: _.O,
					isPopularListing: x.C,
					redditStyle: x.A
				}),
				v = Object(a.b)(O, (e, t) => {
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
			t.a = w(v(Object(p.c)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, a = e.sort === i.P.TOP || e.sort === i.P.CONTROVERSIAL, r = s && e.countrySort && e.sort === i.P.HOT, l = e => {
					g.a.setState({
						isListingFocused: e
					})
				};
				return o.a.createElement(c.a, {
					className: e.className,
					onFocus: () => l(!0),
					onBlur: () => l(!1),
					render: s => o.a.Children.toArray([n ? null : o.a.createElement(f.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : o.a.createElement("div", {
						className: S.a.separator
					}), o.a.createElement(b.d, {
						className: S.a.listingSort,
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
						timeSort: e.timeSort || i.Tb
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
				x = s("./src/reddit/icons/svgs/New/index.m.less"),
				f = s.n(x);
			var g = e => o.a.createElement("svg", {
					className: Object(a.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				_ = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				y = s.n(_);
			var S = e => o.a.createElement("svg", {
					className: Object(a.a)(y.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				w = s("./src/reddit/icons/svgs/Top/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.m.less"),
				v = s.n(O);
			const k = {
				[r.P.BEST]: c,
				[r.P.HOT]: h,
				[r.P.NEW]: g,
				[r.P.CONTROVERSIAL]: b,
				[r.P.TOP]: w.a,
				[r.P.RISING]: S
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = k[s];
				return n ? o.a.createElement(n, {
					className: Object(a.a)(t, v.a.iconStyles)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				l = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/listingSorts.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/helpers/trackers/navigation.ts"),
				y = s("./src/reddit/i18n/components.tsx"),
				S = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				w = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				C = s("./src/reddit/components/ListingSort/index.m.less"),
				N = s.n(C),
				P = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const L = "ListingSort--SortPicker",
				I = Object(i.a)(P.a.wrapped(x.a, "Dropdown", N.a)),
				T = P.a.wrapped(k.a, "ListingSortIcon", N.a),
				D = (P.a.wrapped(S.b, "DropdownTriangle", N.a), P.a.div("Title", N.a)),
				M = P.a.wrapped(e => o.a.createElement(f.b, j({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", N.a),
				A = e => {
					var {
						disabled: t
					} = e, s = E(e, ["disabled"]);
					return o.a.createElement("div", j({}, s, {
						className: Object(c.a)(N.a.SortWrapper, s.className, {
							[N.a.isDisabled]: t
						})
					}))
				},
				B = P.a.div("DropdownRowDisabled", N.a),
				U = Object(p.t)({
					isFrontpage: p.y,
					isProfilePage: p.G,
					pageLayer: e => e
				}),
				H = Object(r.c)({
					isBestSortPopularEnabled: w.a,
					user: v.i,
					dropdownIsOpen: (e, t) => Object(O.b)(t.dropdownId || L)(e),
					language: v.O,
					isPopularPage: p.C
				}),
				R = Object(a.b)(H, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(u.h)({
							tooltipId: s || L
						}))
					}
				});
			t.d = P.a.wrapped(U(R(Object(b.c)(e => o.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && o.a.createElement(D, null, o.a.createElement(y.c, null, "Sort")), o.a.createElement(A, {
				disabled: e.disabled
			}, e.children || o.a.createElement(M, {
				className: e.buttonClassName,
				displayText: Object(m.a)(e.sort),
				id: e.dropdownId || L,
				showDropdownTriangle: !0
			}, o.a.createElement(T, {
				sort: e.sort
			}))), o.a.createElement(h.a.Consumer, null, t => o.a.createElement(I, j({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || L
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? o.a.createElement(B, null, o.a.createElement(y.c, null, "Coming soon")) : (e.sortOptions || ((e, t, s, n) => {
				const o = [d.P.HOT, d.P.NEW, d.P.TOP, d.P.RISING];
				return (e && (s || n) || t && n) && o.unshift(d.P.BEST), o
			})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled)).map(t => o.a.createElement(f.b, {
				className: Object(c.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: Object(m.a)(t),
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(_.a)(t))
				},
				href: e.isProfilePage ? Object(l.a)(e.baseUrl, {
					sort: t
				}) : Object(g.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, o.a.createElement(T, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", N.a)
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
				x = s("./src/reddit/constants/listingSorts.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/helpers/trackers/navigation.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/TimeSort/index.m.less"),
				C = s.n(k),
				N = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "TimeSort--SortPicker",
				E = Object(d.a)(y.a),
				L = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(g.G)(e) || (n = o.a.join(n, t)), Object(u.a)(n, {
						[f.t]: s
					})
				},
				I = N.a.div("ListingSortContainer", C.a),
				T = Object(g.t)(),
				D = Object(l.c)({
					dropdownIsOpen: Object(O.b)(j),
					language: v.O
				}),
				M = Object(i.b)(D, e => ({
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: j
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
				displayText: Object(x.b)(e.timeSort),
				id: j,
				showDropdownTriangle: !0
			})), r.a.createElement(_.a.Consumer, null, t => r.a.createElement(E, P({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: j
			}, t), [b.Sb.HOUR, b.Sb.DAY, b.Sb.WEEK, b.Sb.MONTH, b.Sb.YEAR, b.Sb.ALL].map(t => r.a.createElement(S.b, {
				className: Object(c.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: Object(x.b)(t),
				href: L(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(w.c)(t))
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
					[o.P.BEST]: () => n.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[o.P.HOT]: () => n.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[o.P.NEW]: () => n.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[o.P.CONTROVERSIAL]: () => n.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[o.P.RISING]: () => n.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[o.P.TOP]: () => n.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				r = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[o.Sb.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Sb.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Sb.WEEK]: () => n.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[o.Sb.MONTH]: () => n.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[o.Sb.YEAR]: () => n.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[o.Sb.ALL]: () => n.fbt._("All time", null, {
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
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				y = s.n(_);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const O = e => Object(l.a)(y.a.iconStyles, e.className, {
					[y.a.mDisabled]: e.disabled,
					[y.a.mRedditStyle]: e.redditStyle
				}),
				v = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = w(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(p.a, S({
						className: O({
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
					} = e, o = w(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(m.a, S({
						className: O({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				C = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: n
					} = e, o = w(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(h.a, S({
						className: O({
							className: t,
							disabled: s,
							redditStyle: n
						})
					}, o))
				},
				N = e => {
					var {
						isActive: t
					} = e, s = w(e, ["isActive"]);
					return a.a.createElement("button", S({
						className: Object(l.a)(y.a.layoutButton, {
							[y.a.mIsActive]: t
						})
					}, s))
				},
				P = Object(f.t)(),
				j = Object(i.c)({
					postLayout: f.L,
					redditStyle: f.A
				}),
				E = Object(r.b)(j, e => ({
					onListingLayoutChange: (t, s) => e(Object(d.v)(t, s)),
					toggleTooltip: t => e(Object(u.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = P(E(Object(x.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || b.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(l.a)(y.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: y.a.title
				}, n.fbt._("View", null, {
					hk: "18a931"
				})), a.a.createElement("div", {
					className: y.a.iconContainer
				}, (() => [{
					layout: b.d.Card,
					Icon: C,
					text: n.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: b.d.Classic,
					Icon: k,
					text: n.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: b.d.Compact,
					Icon: v,
					text: n.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(n => {
					const r = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(g.screen)(e),
								subreddit: Object(g.subreddit)(e)
							})))
						})(n.layout),
						i = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + n.layout,
						d = n.layout === o;
					return a.a.createElement(N, {
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
//# sourceMappingURL=Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.c89a5e8c0c918e3256bb.js.map