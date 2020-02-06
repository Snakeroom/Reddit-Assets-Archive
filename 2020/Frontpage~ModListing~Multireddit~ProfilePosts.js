// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfilePosts.836d83cb7a697cfb7e69.js
// Retrieved at 2/6/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Multireddit~ProfilePosts"], {
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
				O = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/app/strings/index.ts");
			const x = {
				[l.Mb.AllStates]: Object(g.e)("stateSorts.allStates"),
				[l.Mb.Alaska]: Object(g.e)("stateSorts.alaska"),
				[l.Mb.Alabama]: Object(g.e)("stateSorts.alabama"),
				[l.Mb.Arkansas]: Object(g.e)("stateSorts.arkansas"),
				[l.Mb.Arizona]: Object(g.e)("stateSorts.arizona"),
				[l.Mb.California]: Object(g.e)("stateSorts.california"),
				[l.Mb.Colorado]: Object(g.e)("stateSorts.colorado"),
				[l.Mb.Connecticut]: Object(g.e)("stateSorts.connecticut"),
				[l.Mb.DistrictOfColumbia]: Object(g.e)("stateSorts.districtOfColumbia"),
				[l.Mb.Delaware]: Object(g.e)("stateSorts.delaware"),
				[l.Mb.Florida]: Object(g.e)("stateSorts.florida"),
				[l.Mb.Georgia]: Object(g.e)("stateSorts.georgia"),
				[l.Mb.Hawaii]: Object(g.e)("stateSorts.hawaii"),
				[l.Mb.Iowa]: Object(g.e)("stateSorts.iowa"),
				[l.Mb.Idaho]: Object(g.e)("stateSorts.idaho"),
				[l.Mb.Illinois]: Object(g.e)("stateSorts.illinois"),
				[l.Mb.Indiana]: Object(g.e)("stateSorts.indiana"),
				[l.Mb.Kansas]: Object(g.e)("stateSorts.kansas"),
				[l.Mb.Kentucky]: Object(g.e)("stateSorts.kentucky"),
				[l.Mb.Louisiana]: Object(g.e)("stateSorts.louisiana"),
				[l.Mb.Massachusetts]: Object(g.e)("stateSorts.massachusetts"),
				[l.Mb.Maryland]: Object(g.e)("stateSorts.maryland"),
				[l.Mb.Maine]: Object(g.e)("stateSorts.maine"),
				[l.Mb.Michigan]: Object(g.e)("stateSorts.michigan"),
				[l.Mb.Minnesota]: Object(g.e)("stateSorts.minnesota"),
				[l.Mb.Missouri]: Object(g.e)("stateSorts.missouri"),
				[l.Mb.Mississippi]: Object(g.e)("stateSorts.mississippi"),
				[l.Mb.Montana]: Object(g.e)("stateSorts.montana"),
				[l.Mb.NorthCarolina]: Object(g.e)("stateSorts.northCarolina"),
				[l.Mb.NorthDakota]: Object(g.e)("stateSorts.northDakota"),
				[l.Mb.Nebraska]: Object(g.e)("stateSorts.nebraska"),
				[l.Mb.NewHampshire]: Object(g.e)("stateSorts.newHampshire"),
				[l.Mb.NewJersey]: Object(g.e)("stateSorts.newJersey"),
				[l.Mb.NewMexico]: Object(g.e)("stateSorts.newMexico"),
				[l.Mb.Nevada]: Object(g.e)("stateSorts.nevada"),
				[l.Mb.NewYork]: Object(g.e)("stateSorts.newYork"),
				[l.Mb.Ohio]: Object(g.e)("stateSorts.ohio"),
				[l.Mb.Oklahoma]: Object(g.e)("stateSorts.oklahoma"),
				[l.Mb.Oregon]: Object(g.e)("stateSorts.oregon"),
				[l.Mb.Pennsylvania]: Object(g.e)("stateSorts.pennsylvania"),
				[l.Mb.RhodeIsland]: Object(g.e)("stateSorts.rhodeIsland"),
				[l.Mb.SouthCarolina]: Object(g.e)("stateSorts.southCarolina"),
				[l.Mb.SouthDakota]: Object(g.e)("stateSorts.southDakota"),
				[l.Mb.Tennessee]: Object(g.e)("stateSorts.tennessee"),
				[l.Mb.Texas]: Object(g.e)("stateSorts.texas"),
				[l.Mb.Utah]: Object(g.e)("stateSorts.utah"),
				[l.Mb.Virginia]: Object(g.e)("stateSorts.virginia"),
				[l.Mb.Vermont]: Object(g.e)("stateSorts.vermont"),
				[l.Mb.Washington]: Object(g.e)("stateSorts.washington"),
				[l.Mb.Wisconsin]: Object(g.e)("stateSorts.wisconsin"),
				[l.Mb.WestVirginia]: Object(g.e)("stateSorts.westVirginia"),
				[l.Mb.Wyoming]: Object(g.e)("stateSorts.wyoming")
			};
			var v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/contexts/Tooltip.ts"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/StateSort/index.m.less"),
				f = s.n(N);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = u.a.wrapped(S.a, "_Dropdown", f.a),
				L = Object(p.a)(E),
				_ = e => {
					return e.indexOf("_") > 0 && P(e) === l.v.UnitedStates
				},
				M = e => {
					if (_(e)) {
						return e.split("_")[1]
					}
					return l.Mb.AllStates
				},
				P = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				T = e => {
					const t = P(e),
						s = M(e);
					return _(e) ? "".concat(t, "_").concat(s) : t
				},
				I = Object(v.t)(),
				k = Object(i.c)({
					dropdownIsOpen: Object(y.b)("StateSort--StateSortPicker"),
					language: h.P
				}),
				D = Object(o.b)(k, e => ({
					onOpenDropdown: () => e(Object(c.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(r.b)(t)), e(Object(m.t)(l.v.UnitedStates + "_" + s))
					}
				}));
			var B = u.a.wrapped(I(D(e => {
					const t = "".concat(e.baseUrl, "?").concat(O.g, "=").concat(l.v.UnitedStates);
					return a.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, a.a.createElement(b.c, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, a.a.createElement(b.b, {
						className: e.buttonClassName,
						displayText: e.showStateAbbreviations && e.sort ? e.sort : x[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), a.a.createElement(j.a.Consumer, null, s => a.a.createElement(L, C({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(l.Mb).map(s => {
						const n = l.Mb[s];
						return a.a.createElement("div", {
							onClick: () => e.onClickLink((e => e === l.Mb.AllStates ? t : "".concat(t, "_").concat(e))(n), T(n))
						}, a.a.createElement(w.b, {
							className: Object(d.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
							displayText: x[n](e.language),
							isSelected: e.sort === n
						}))
					}))))
				})), "Component", f.a),
				A = s("./src/reddit/i18n/utils.ts");
			const H = {
				[l.v.Everywhere]: Object(A.c)("everywhere"),
				[l.v.UnitedStates]: Object(A.c)("united states"),
				[l.v.Argentina]: Object(A.c)("argentina"),
				[l.v.Australia]: Object(A.c)("australia"),
				[l.v.Bulgaria]: Object(A.c)("bulgaria"),
				[l.v.Canada]: Object(A.c)("canada"),
				[l.v.Chile]: Object(A.c)("chile"),
				[l.v.Colombia]: Object(A.c)("colombia"),
				[l.v.Croatia]: Object(A.c)("croatia"),
				[l.v.CzechRepublic]: Object(A.c)("czech republic"),
				[l.v.Finland]: Object(A.c)("finland"),
				[l.v.Greece]: Object(A.c)("greece"),
				[l.v.Hungary]: Object(A.c)("hungary"),
				[l.v.Iceland]: Object(A.c)("iceland"),
				[l.v.India]: Object(A.c)("india"),
				[l.v.Ireland]: Object(A.c)("ireland"),
				[l.v.Japan]: Object(A.c)("japan"),
				[l.v.Malaysia]: Object(A.c)("malaysia"),
				[l.v.Mexico]: Object(A.c)("mexico"),
				[l.v.NewZealand]: Object(A.c)("new zealand"),
				[l.v.Philippines]: Object(A.c)("philippines"),
				[l.v.Poland]: Object(A.c)("poland"),
				[l.v.Portugal]: Object(A.c)("portugal"),
				[l.v.PuertoRico]: Object(A.c)("puerto rico"),
				[l.v.Romania]: Object(A.c)("romania"),
				[l.v.Serbia]: Object(A.c)("serbia"),
				[l.v.Singapore]: Object(A.c)("singapore"),
				[l.v.Sweden]: Object(A.c)("sweden"),
				[l.v.Taiwan]: Object(A.c)("taiwan"),
				[l.v.Thailand]: Object(A.c)("thailand"),
				[l.v.Turkey]: Object(A.c)("turkey"),
				[l.v.UnitedKingdom]: Object(A.c)("united kingdom")
			};
			var R = s("./src/reddit/components/CountrySort/index.m.less"),
				U = s.n(R);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = "CountrySort--CountrySortPicker",
				W = Object(v.t)(),
				q = Object(i.c)({
					dropdownIsOpen: Object(y.b)(V),
					language: h.P
				}),
				Z = Object(o.b)(q, e => ({
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
			t.a = W(Z(e => {
				const t = P(e.sort),
					s = M(e.sort),
					n = "".concat(e.baseUrl, "?").concat(O.g, "=");
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(d.a)(U.a.countrySort, e.className),
					onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(V) : e.onOpenDropdown(V)
				}, a.a.createElement(b.c, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, a.a.createElement(b.b, {
					className: e.buttonClassName,
					displayText: (() => t in H ? H[t] : H[l.v.Everywhere])(),
					id: V,
					showDropdownTriangle: !0
				})), a.a.createElement(j.a.Consumer, null, s => a.a.createElement(L, K({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: V
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(l.v).map(s => {
					const o = l.v[s];
					return a.a.createElement("div", {
						key: o,
						onClick: () => e.onClickLink("".concat(n).concat(T(o)), o)
					}, a.a.createElement(w.b, {
						className: Object(d.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
						displayText: H[o],
						isSelected: t === o
					}))
				})))), t === l.v.UnitedStates && a.a.createElement(B, {
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
			const O = Object(m.t)(),
				g = Object(r.c)({
					layout: m.K
				}),
				x = Object(o.b)(g);
			class v extends a.a.Component {
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
			t.a = O(x(u.a.wrapped(v, "Component", p.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
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
				O = s("./src/lib/lessComponent.tsx");
			const g = O.a.div("BodyContainer", u.a),
				x = O.a.div("SidebarPlaceholder", u.a),
				v = O.a.div("InnerContainer", u.a),
				j = Object(r.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				S = Object(o.b)(j);
			class w extends a.a.Component {
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
					}, a.a.createElement(g, {
						onFocus: r,
						onBlur: c
					}, a.a.createElement(d.a, {
						fitPageToContent: !0
					}, a.a.createElement(v, {
						className: s
					}, a.a.createElement(b.a, {
						bladeOpen: e,
						considerSidebar: o,
						offsetLeft: l,
						render: this.props.render
					}))), o && a.a.createElement(x, null)))
				}
			}
			t.a = O.a.wrapped(S(w), "Component", u.a)
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
				O = s("./src/reddit/constants/page.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				v = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				j = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				w = s.n(S);
			const y = Object(g.t)({
					isProfilePage: g.G,
					pageLayer: e => e
				}),
				h = Object(r.c)({
					currentUser: j.i,
					language: j.P,
					isPopularListing: g.C,
					redditStyle: g.A
				}),
				N = Object(o.b)(h, (e, t) => {
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
			t.a = y(N(Object(u.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, o = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, r = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					v.a.setState({
						isListingFocused: e
					})
				};
				return a.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => a.a.Children.toArray([n ? null : a.a.createElement(x.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : a.a.createElement("div", {
						className: w.a.separator
					}), a.a.createElement(b.d, {
						className: w.a.listingSort,
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
						timeSort: e.timeSort || i.Qb
					})], r && a.a.createElement(m.a, {
						baseUrl: e.isPopularListing ? "/r/".concat(O.f, "/") : "",
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
			var O = e => a.a.createElement("svg", {
					className: Object(o.a)(u.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("title", null, "Hot"), a.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var v = e => a.a.createElement("svg", {
					className: Object(o.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				j = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				S = s.n(j);
			var w = e => a.a.createElement("svg", {
					className: Object(o.a)(S.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = s("./src/reddit/icons/svgs/Top/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.m.less"),
				N = s.n(h);
			const f = {
				[r.N.BEST]: d,
				[r.N.HOT]: O,
				[r.N.NEW]: v,
				[r.N.CONTROVERSIAL]: b,
				[r.N.TOP]: y.a,
				[r.N.RISING]: w
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = f[s];
				return n ? a.a.createElement(n, {
					className: Object(o.a)(t, N.a.iconStyles)
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
				return k
			})), s.d(t, "c", (function() {
				return D
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
				O = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/trackers/navigation.ts"),
				S = s("./src/reddit/i18n/components.tsx"),
				w = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				f = s("./src/reddit/components/ListingSort/index.m.less"),
				C = s.n(f),
				E = s("./src/lib/lessComponent.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const M = "ListingSort--SortPicker",
				P = Object(i.a)(E.a.wrapped(g.a, "Dropdown", C.a)),
				T = E.a.wrapped(N.a, "ListingSortIcon", C.a),
				I = (E.a.wrapped(w.b, "DropdownTriangle", C.a), E.a.div("Title", C.a)),
				k = E.a.wrapped(e => a.a.createElement(x.b, L({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", C.a),
				D = e => {
					var {
						disabled: t
					} = e, s = _(e, ["disabled"]);
					return a.a.createElement("div", L({}, s, {
						className: Object(d.a)(C.a.SortWrapper, s.className, {
							[C.a.isDisabled]: t
						})
					}))
				},
				B = E.a.div("DropdownRowDisabled", C.a),
				A = Object(u.t)({
					isFrontpage: u.y,
					isProfilePage: u.G,
					pageLayer: e => e
				}),
				H = Object(r.c)({
					user: h.i,
					dropdownIsOpen: (e, t) => Object(y.b)(t.dropdownId || M)(e),
					language: h.P
				}),
				R = Object(o.b)(H, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.h)({
							tooltipId: s || M
						}))
					}
				});
			t.d = E.a.wrapped(A(R(Object(b.b)(e => a.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && a.a.createElement(I, null, a.a.createElement(S.c, null, "Sort")), a.a.createElement(D, {
				disabled: e.disabled
			}, e.children || a.a.createElement(k, {
				className: e.buttonClassName,
				displayText: p.a[e.sort],
				id: e.dropdownId || M,
				showDropdownTriangle: !0
			}, a.a.createElement(T, {
				sort: e.sort
			}))), a.a.createElement(O.a.Consumer, null, t => a.a.createElement(P, L({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || M
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? a.a.createElement(B, null, a.a.createElement(S.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => a.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: p.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(j.a)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(v.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, a.a.createElement(T, {
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
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/contexts/Tooltip.ts"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/TimeSort/index.m.less"),
				C = s.n(f),
				E = s("./src/lib/lessComponent.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = "TimeSort--SortPicker",
				M = Object(l.a)(S.a),
				P = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(v.G)(e) || (n = a.a.join(n, t)), Object(m.a)(n, {
						[x.t]: s
					})
				},
				T = E.a.div("ListingSortContainer", C.a),
				I = Object(v.t)(),
				k = Object(c.c)({
					dropdownIsOpen: Object(h.b)(_),
					language: N.P
				}),
				D = Object(i.b)(k, e => ({
					onOpenDropdown: () => e(Object(p.h)({
						tooltipId: _
					}))
				}));
			t.a = I(D(Object(O.b)(e => r.a.createElement(T, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, r.a.createElement(u.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, r.a.createElement(u.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: _,
				showDropdownTriangle: !0
			})), r.a.createElement(j.a.Consumer, null, t => r.a.createElement(M, L({
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: _
			}, t), [b.Pb.HOUR, b.Pb.DAY, b.Pb.WEEK, b.Pb.MONTH, b.Pb.YEAR, b.Pb.ALL].map(t => r.a.createElement(w.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
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
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/i18n/utils.ts");
			const o = {
					[n.N.BEST]: Object(a.c)("best"),
					[n.N.HOT]: Object(a.c)("hot"),
					[n.N.NEW]: Object(a.c)("new"),
					[n.N.CONTROVERSIAL]: Object(a.c)("controversial"),
					[n.N.RISING]: Object(a.c)("rising"),
					[n.N.TOP]: Object(a.c)("top")
				},
				r = {
					[n.Pb.HOUR]: Object(a.c)("Now"),
					[n.Pb.DAY]: Object(a.c)("Today"),
					[n.Pb.WEEK]: Object(a.c)("This week"),
					[n.Pb.MONTH]: Object(a.c)("This month"),
					[n.Pb.YEAR]: Object(a.c)("This year"),
					[n.Pb.ALL]: Object(a.c)("All time")
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
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				w = s.n(S);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const N = e => Object(c.a)(w.a.iconStyles, e.className, {
					[w.a.mDisabled]: e.disabled,
					[w.a.mRedditStyle]: e.redditStyle
				}),
				f = e => {
					var {
						isActive: t
					} = e, s = h(e, ["isActive"]);
					return a.a.createElement("button", y({
						className: Object(c.a)(w.a.layoutButton, {
							[w.a.mIsActive]: t
						})
					}, s))
				},
				C = Object(i.e)("listings.layoutSwitcher.label"),
				E = Object(i.e)("listings.layoutSwitcher.card"),
				L = Object(i.e)("listings.layoutSwitcher.classic"),
				_ = Object(i.e)("listings.layoutSwitcher.compact"),
				M = [{
					layout: b.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = h(e, ["className", "disabled", "redditStyle"]);
						return a.a.createElement(O.a, y({
							className: N({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: E
				}, {
					layout: b.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = h(e, ["className", "disabled", "redditStyle"]);
						return a.a.createElement(p.a, y({
							className: N({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: L
				}, {
					layout: b.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = h(e, ["className", "disabled", "redditStyle"]);
						return a.a.createElement(u.a, y({
							className: N({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: _
				}],
				P = Object(x.t)(),
				T = Object(r.c)({
					language: j.P,
					postLayout: x.K,
					redditStyle: x.A
				}),
				I = Object(o.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = P(I(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || b.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(c.a)(w.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: w.a.title
				}, C(e.language)), a.a.createElement("div", {
					className: w.a.iconContainer
				}, M.map(o => {
					const r = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(v.screen)(e),
								subreddit: Object(v.subreddit)(e)
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
						className: w.a.tooltip,
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
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Frontpage~ModListing~Multireddit~ProfilePosts.836d83cb7a697cfb7e69.js.map