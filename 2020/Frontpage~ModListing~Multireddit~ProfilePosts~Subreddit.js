// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.a9b3315035a4be911c28.js
// Retrieved at 3/2/2020, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				p = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				u = s("./src/lib/lessComponent.tsx"),
				g = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/app/strings/index.ts");
			const w = {
				[l.Nb.AllStates]: Object(O.d)("stateSorts.allStates"),
				[l.Nb.Alaska]: Object(O.d)("stateSorts.alaska"),
				[l.Nb.Alabama]: Object(O.d)("stateSorts.alabama"),
				[l.Nb.Arkansas]: Object(O.d)("stateSorts.arkansas"),
				[l.Nb.Arizona]: Object(O.d)("stateSorts.arizona"),
				[l.Nb.California]: Object(O.d)("stateSorts.california"),
				[l.Nb.Colorado]: Object(O.d)("stateSorts.colorado"),
				[l.Nb.Connecticut]: Object(O.d)("stateSorts.connecticut"),
				[l.Nb.DistrictOfColumbia]: Object(O.d)("stateSorts.districtOfColumbia"),
				[l.Nb.Delaware]: Object(O.d)("stateSorts.delaware"),
				[l.Nb.Florida]: Object(O.d)("stateSorts.florida"),
				[l.Nb.Georgia]: Object(O.d)("stateSorts.georgia"),
				[l.Nb.Hawaii]: Object(O.d)("stateSorts.hawaii"),
				[l.Nb.Iowa]: Object(O.d)("stateSorts.iowa"),
				[l.Nb.Idaho]: Object(O.d)("stateSorts.idaho"),
				[l.Nb.Illinois]: Object(O.d)("stateSorts.illinois"),
				[l.Nb.Indiana]: Object(O.d)("stateSorts.indiana"),
				[l.Nb.Kansas]: Object(O.d)("stateSorts.kansas"),
				[l.Nb.Kentucky]: Object(O.d)("stateSorts.kentucky"),
				[l.Nb.Louisiana]: Object(O.d)("stateSorts.louisiana"),
				[l.Nb.Massachusetts]: Object(O.d)("stateSorts.massachusetts"),
				[l.Nb.Maryland]: Object(O.d)("stateSorts.maryland"),
				[l.Nb.Maine]: Object(O.d)("stateSorts.maine"),
				[l.Nb.Michigan]: Object(O.d)("stateSorts.michigan"),
				[l.Nb.Minnesota]: Object(O.d)("stateSorts.minnesota"),
				[l.Nb.Missouri]: Object(O.d)("stateSorts.missouri"),
				[l.Nb.Mississippi]: Object(O.d)("stateSorts.mississippi"),
				[l.Nb.Montana]: Object(O.d)("stateSorts.montana"),
				[l.Nb.NorthCarolina]: Object(O.d)("stateSorts.northCarolina"),
				[l.Nb.NorthDakota]: Object(O.d)("stateSorts.northDakota"),
				[l.Nb.Nebraska]: Object(O.d)("stateSorts.nebraska"),
				[l.Nb.NewHampshire]: Object(O.d)("stateSorts.newHampshire"),
				[l.Nb.NewJersey]: Object(O.d)("stateSorts.newJersey"),
				[l.Nb.NewMexico]: Object(O.d)("stateSorts.newMexico"),
				[l.Nb.Nevada]: Object(O.d)("stateSorts.nevada"),
				[l.Nb.NewYork]: Object(O.d)("stateSorts.newYork"),
				[l.Nb.Ohio]: Object(O.d)("stateSorts.ohio"),
				[l.Nb.Oklahoma]: Object(O.d)("stateSorts.oklahoma"),
				[l.Nb.Oregon]: Object(O.d)("stateSorts.oregon"),
				[l.Nb.Pennsylvania]: Object(O.d)("stateSorts.pennsylvania"),
				[l.Nb.RhodeIsland]: Object(O.d)("stateSorts.rhodeIsland"),
				[l.Nb.SouthCarolina]: Object(O.d)("stateSorts.southCarolina"),
				[l.Nb.SouthDakota]: Object(O.d)("stateSorts.southDakota"),
				[l.Nb.Tennessee]: Object(O.d)("stateSorts.tennessee"),
				[l.Nb.Texas]: Object(O.d)("stateSorts.texas"),
				[l.Nb.Utah]: Object(O.d)("stateSorts.utah"),
				[l.Nb.Virginia]: Object(O.d)("stateSorts.virginia"),
				[l.Nb.Vermont]: Object(O.d)("stateSorts.vermont"),
				[l.Nb.Washington]: Object(O.d)("stateSorts.washington"),
				[l.Nb.Wisconsin]: Object(O.d)("stateSorts.wisconsin"),
				[l.Nb.WestVirginia]: Object(O.d)("stateSorts.westVirginia"),
				[l.Nb.Wyoming]: Object(O.d)("stateSorts.wyoming")
			};
			var x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Tooltip.ts"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				N = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/StateSort/index.m.less"),
				f = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = u.a.wrapped(h.a, "_Dropdown", f.a),
				E = Object(p.a)(_),
				L = e => {
					return e.indexOf("_") > 0 && T(e) === l.w.UnitedStates
				},
				k = e => {
					if (L(e)) {
						return e.split("_")[1]
					}
					return l.Nb.AllStates
				},
				T = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				P = e => {
					const t = T(e),
						s = k(e);
					return L(e) ? "".concat(t, "_").concat(s) : t
				},
				I = Object(x.t)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(y.b)("StateSort--StateSortPicker"),
					language: j.P
				}),
				M = Object(o.b)(D, e => ({
					onOpenDropdown: () => e(Object(c.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(r.b)(t)), e(Object(m.t)(l.w.UnitedStates + "_" + s))
					}
				}));
			var A = u.a.wrapped(I(M(e => {
					const t = "".concat(e.baseUrl, "?").concat(g.g, "=").concat(l.w.UnitedStates);
					return a.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, a.a.createElement(b.c, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, a.a.createElement(b.b, {
						className: e.buttonClassName,
						displayText: e.showStateAbbreviations && e.sort ? e.sort : w[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), a.a.createElement(S.a.Consumer, null, s => a.a.createElement(E, C({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(l.Nb).map(s => {
						const n = l.Nb[s];
						return a.a.createElement("div", {
							onClick: () => e.onClickLink((e => e === l.Nb.AllStates ? t : "".concat(t, "_").concat(e))(n), P(n))
						}, a.a.createElement(N.b, {
							className: Object(d.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
							displayText: w[n](e.language),
							isSelected: e.sort === n
						}))
					}))))
				})), "Component", f.a),
				B = s("./node_modules/fbt/lib/FbtPublic.js");
			const H = {
				[l.w.Everywhere]: () => B.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[l.w.UnitedStates]: () => B.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[l.w.Argentina]: () => B.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[l.w.Australia]: () => B.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[l.w.Bulgaria]: () => B.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[l.w.Canada]: () => B.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[l.w.Chile]: () => B.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[l.w.Colombia]: () => B.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[l.w.Croatia]: () => B.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[l.w.CzechRepublic]: () => B.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[l.w.Finland]: () => B.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[l.w.Greece]: () => B.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[l.w.Hungary]: () => B.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[l.w.Iceland]: () => B.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[l.w.India]: () => B.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[l.w.Ireland]: () => B.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[l.w.Japan]: () => B.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[l.w.Malaysia]: () => B.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[l.w.Mexico]: () => B.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[l.w.NewZealand]: () => B.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[l.w.Philippines]: () => B.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[l.w.Poland]: () => B.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[l.w.Portugal]: () => B.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[l.w.PuertoRico]: () => B.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[l.w.Romania]: () => B.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[l.w.Serbia]: () => B.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[l.w.Singapore]: () => B.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[l.w.Sweden]: () => B.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[l.w.Taiwan]: () => B.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[l.w.Thailand]: () => B.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[l.w.Turkey]: () => B.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[l.w.UnitedKingdom]: () => B.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var R = s("./src/reddit/components/CountrySort/index.m.less"),
				U = s.n(R);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = "CountrySort--CountrySortPicker",
				V = Object(x.t)(),
				Z = Object(i.c)({
					dropdownIsOpen: Object(y.b)(K),
					language: j.P
				}),
				q = Object(o.b)(Z, e => ({
					onCloseDropdown: t => e(Object(c.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(c.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(r.b)(t)), e(Object(m.t)(s))
					}
				}));
			t.a = V(q(e => {
				const t = T(e.sort),
					s = k(e.sort),
					n = "".concat(e.baseUrl, "?").concat(g.g, "=");
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(d.a)(U.a.countrySort, e.className),
					onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(K) : e.onOpenDropdown(K)
				}, a.a.createElement(b.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, a.a.createElement(b.b, {
					className: e.buttonClassName,
					displayText: (() => t in H ? H[t]() : H[l.w.Everywhere]())(),
					id: K,
					showDropdownTriangle: !0
				})), a.a.createElement(S.a.Consumer, null, s => a.a.createElement(E, W({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: K
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(l.w).map(s => {
					const o = l.w[s];
					return a.a.createElement("div", {
						key: o,
						onClick: () => e.onClickLink("".concat(n).concat(P(o)), o)
					}, a.a.createElement(N.b, {
						className: Object(d.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
						displayText: H[o](),
						isSelected: t === o
					}))
				})))), t === l.w.UnitedStates && a.a.createElement(A, {
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
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(b),
				u = s("./src/lib/lessComponent.tsx");
			const g = Object(m.t)(),
				O = Object(r.c)({
					layout: m.L
				}),
				w = Object(o.b)(O);
			class x extends a.a.Component {
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
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(p.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.m + c.q + c.r,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(p.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.g + c.q + c.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.r, "px) / 2);\n              }\n\n              .").concat(p.a.Component, ".").concat(p.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.g + c.q + c.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return a.a.createElement("div", {
						className: p.a.Container
					}, a.a.createElement("div", {
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
			t.a = g(w(u.a.wrapped(x, "Component", p.a)))
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
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				u = s.n(p),
				g = s("./src/lib/lessComponent.tsx");
			const O = g.a.div("BodyContainer", u.a),
				w = g.a.div("SidebarPlaceholder", u.a),
				x = g.a.div("InnerContainer", u.a),
				S = Object(r.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				h = Object(o.b)(S);
			class N extends a.a.Component {
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
							bodyScrollOffset: Object(c.c)(document.body)
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
						considerSidebar: o = !0,
						onFocus: r,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += i.u), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement(O, {
						onFocus: r,
						onBlur: c
					}, a.a.createElement(d.a, {
						fitPageToContent: !0
					}, a.a.createElement(x, {
						className: s
					}, a.a.createElement(b.a, {
						bladeOpen: e,
						considerSidebar: o,
						offsetLeft: l,
						render: this.props.render
					}))), o && a.a.createElement(w, null)))
				}
			}
			t.a = g.a.wrapped(h(N), "Component", u.a)
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
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/components/CountrySort/index.tsx"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				p = s("./src/reddit/components/TimeSort/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				x = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				S = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				N = s.n(h);
			const y = Object(O.t)({
					isProfilePage: O.G,
					pageLayer: e => e
				}),
				j = Object(r.c)({
					currentUser: S.i,
					language: S.P,
					isPopularListing: O.C,
					redditStyle: O.A
				}),
				v = Object(o.b)(j, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const a = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, a))
							}
						}
					}
				});
			t.a = y(v(Object(u.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, o = e.sort === i.O.TOP || e.sort === i.O.CONTROVERSIAL, r = s && e.countrySort && e.sort === i.O.HOT, c = e => {
					x.a.setState({
						isListingFocused: e
					})
				};
				return a.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => a.a.Children.toArray([n ? null : a.a.createElement(w.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : a.a.createElement("div", {
						className: N.a.separator
					}), a.a.createElement(b.d, {
						className: N.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && o && [a.a.createElement(p.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Rb
					})], r && a.a.createElement(m.a, {
						baseUrl: e.isPopularListing ? "/r/".concat(g.f, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => a.a.createElement("svg", {
					className: Object(o.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), a.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var b = e => a.a.createElement("svg", {
					className: Object(o.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				u = s.n(p);
			var g = e => a.a.createElement("svg", {
					className: Object(o.a)(u.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("title", null, "Hot"), a.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				O = s("./src/reddit/icons/svgs/New/index.m.less"),
				w = s.n(O);
			var x = e => a.a.createElement("svg", {
					className: Object(o.a)(w.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				S = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				h = s.n(S);
			var N = e => a.a.createElement("svg", {
					className: Object(o.a)(h.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = s("./src/reddit/icons/svgs/Top/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.m.less"),
				v = s.n(j);
			const f = {
				[r.O.BEST]: d,
				[r.O.HOT]: g,
				[r.O.NEW]: x,
				[r.O.CONTROVERSIAL]: b,
				[r.O.TOP]: y.a,
				[r.O.RISING]: N
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = f[s];
				return n ? a.a.createElement(n, {
					className: Object(o.a)(t, v.a.iconStyles)
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
				return P
			})), s.d(t, "b", (function() {
				return D
			})), s.d(t, "c", (function() {
				return M
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/listingSorts.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/i18n/components.tsx"),
				N = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				f = s("./src/reddit/components/ListingSort/index.m.less"),
				C = s.n(f),
				_ = s("./src/lib/lessComponent.tsx");

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
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const k = "ListingSort--SortPicker",
				T = Object(i.a)(_.a.wrapped(O.a, "Dropdown", C.a)),
				P = _.a.wrapped(v.a, "ListingSortIcon", C.a),
				I = (_.a.wrapped(N.b, "DropdownTriangle", C.a), _.a.div("Title", C.a)),
				D = _.a.wrapped(e => a.a.createElement(w.b, E({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", C.a),
				M = e => {
					var {
						disabled: t
					} = e, s = L(e, ["disabled"]);
					return a.a.createElement("div", E({}, s, {
						className: Object(d.a)(C.a.SortWrapper, s.className, {
							[C.a.isDisabled]: t
						})
					}))
				},
				A = _.a.div("DropdownRowDisabled", C.a),
				B = Object(u.t)({
					isFrontpage: u.y,
					isProfilePage: u.G,
					pageLayer: e => e
				}),
				H = Object(r.c)({
					user: j.i,
					dropdownIsOpen: (e, t) => Object(y.b)(t.dropdownId || k)(e),
					language: j.P
				}),
				R = Object(o.b)(H, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.h)({
							tooltipId: s || k
						}))
					}
				});
			t.d = _.a.wrapped(B(R(Object(b.b)(e => a.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && a.a.createElement(I, null, a.a.createElement(h.c, null, "Sort")), a.a.createElement(M, {
				disabled: e.disabled
			}, e.children || a.a.createElement(D, {
				className: e.buttonClassName,
				displayText: p.a[e.sort],
				id: e.dropdownId || k,
				showDropdownTriangle: !0
			}, a.a.createElement(P, {
				sort: e.sort
			}))), a.a.createElement(g.a.Consumer, null, t => a.a.createElement(T, E({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || k
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? a.a.createElement(A, null, a.a.createElement(h.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.O.HOT, l.O.NEW, l.O.TOP, l.O.RISING];
				return e && t && s.unshift(l.O.BEST), s
			})(e.isFrontpage, e.user)).map(t => a.a.createElement(w.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: p.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(S.a)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(x.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, a.a.createElement(P, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", C.a)
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(a);
			t.a = n.a.div("container", o.a)
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
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/ListingSort/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/constants/listingSorts.ts"),
				w = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Tooltip.ts"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				N = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/TimeSort/index.m.less"),
				C = s.n(f),
				_ = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = "TimeSort--SortPicker",
				k = Object(l.a)(h.a),
				T = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(x.G)(e) || (n = a.a.join(n, t)), Object(m.a)(n, {
						[w.t]: s
					})
				},
				P = _.a.div("ListingSortContainer", C.a),
				I = Object(x.t)(),
				D = Object(c.c)({
					dropdownIsOpen: Object(j.b)(L),
					language: v.P
				}),
				M = Object(i.b)(D, e => ({
					onOpenDropdown: () => e(Object(p.h)({
						tooltipId: L
					}))
				}));
			t.a = I(M(Object(g.b)(e => r.a.createElement(P, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, r.a.createElement(u.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, r.a.createElement(u.b, {
				className: e.buttonClassName,
				displayText: O.b[e.timeSort],
				id: L,
				showDropdownTriangle: !0
			})), r.a.createElement(S.a.Consumer, null, t => r.a.createElement(k, E({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: L
			}, t), [b.Qb.HOUR, b.Qb.DAY, b.Qb.WEEK, b.Qb.MONTH, b.Qb.YEAR, b.Qb.ALL].map(t => r.a.createElement(N.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: O.b[t],
				href: T(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.c)(t))
				}
			}))))))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/i18n/utils.ts");
			const o = {
					[n.O.BEST]: Object(a.c)("best"),
					[n.O.HOT]: Object(a.c)("hot"),
					[n.O.NEW]: Object(a.c)("new"),
					[n.O.CONTROVERSIAL]: Object(a.c)("controversial"),
					[n.O.RISING]: Object(a.c)("rising"),
					[n.O.TOP]: Object(a.c)("top")
				},
				r = {
					[n.Qb.HOUR]: Object(a.c)("Now"),
					[n.Qb.DAY]: Object(a.c)("Today"),
					[n.Qb.WEEK]: Object(a.c)("This week"),
					[n.Qb.MONTH]: Object(a.c)("This month"),
					[n.Qb.YEAR]: Object(a.c)("This year"),
					[n.Qb.ALL]: Object(a.c)("All time")
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = a.a.createContext({})
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				u = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				g = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				N = s.n(h);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const v = e => Object(c.a)(N.a.iconStyles, e.className, {
					[N.a.mDisabled]: e.disabled,
					[N.a.mRedditStyle]: e.redditStyle
				}),
				f = e => {
					var {
						isActive: t
					} = e, s = j(e, ["isActive"]);
					return a.a.createElement("button", y({
						className: Object(c.a)(N.a.layoutButton, {
							[N.a.mIsActive]: t
						})
					}, s))
				},
				C = Object(i.d)("listings.layoutSwitcher.label"),
				_ = Object(i.d)("listings.layoutSwitcher.card"),
				E = Object(i.d)("listings.layoutSwitcher.classic"),
				L = Object(i.d)("listings.layoutSwitcher.compact"),
				k = [{
					layout: b.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = j(e, ["className", "disabled", "redditStyle"]);
						return a.a.createElement(g.a, y({
							className: v({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: _
				}, {
					layout: b.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = j(e, ["className", "disabled", "redditStyle"]);
						return a.a.createElement(p.a, y({
							className: v({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: E
				}, {
					layout: b.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = j(e, ["className", "disabled", "redditStyle"]);
						return a.a.createElement(u.a, y({
							className: v({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: L
				}],
				T = Object(w.t)(),
				P = Object(r.c)({
					language: S.P,
					postLayout: w.L,
					redditStyle: w.A
				}),
				I = Object(o.b)(P, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = T(I(Object(O.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || b.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(c.a)(N.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: N.a.title
				}, C(e.language)), a.a.createElement("div", {
					className: N.a.iconContainer
				}, k.map(o => {
					const r = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(x.screen)(e),
								subreddit: Object(x.subreddit)(e)
							})))
						})(o.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + o.layout,
						l = o.layout === n;
					return a.a.createElement(f, {
						"aria-label": o.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: o.layout,
						onClick: r,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: r
					}, a.a.createElement(o.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), a.a.createElement(d.c, {
						className: N.a.tooltip,
						tooltipId: c,
						text: o.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
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
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
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
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		}
	}
]);
//# sourceMappingURL=Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.a9b3315035a4be911c28.js.map