// https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.82f97e43ce5cbe583001.js
// Retrieved at 3/28/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"], {
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/contexts/Tooltip.ts"),
				S = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				_ = n.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "view--layout--FUE",
				E = "LayoutSwitch--picker",
				x = Object(l.a)(S.a),
				v = {
					[h.d.Card]: function(e) {
						return r.a.createElement(g.a, O({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return r.a.createElement(g.a, O({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return r.a.createElement(g.a, O({}, e, {
							name: "view_compact"
						}))
					}
				},
				T = {
					[h.d.Card]: () => a.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => a.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => a.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[h.d.Search]: () => a.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				I = Object(b.u)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(k.b)(E),
					postLayout: b.R,
					redditStyle: b.D
				}),
				j = Object(o.b)(D, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: E
					}))
				}));
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: a,
							subredditId: s
						} = this.props;
						t ? t(e) : (n(e, s), a(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.ab)(t),
							subreddit: Object(C.ib)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: a,
							postLayout: s
						} = this.props, o = n || h.e[s], i = e === o, l = v[e], d = T[e];
						return r.a.createElement(f.b, O({}, t, {
							className: Object(c.a)(_.a.LayoutItem, {
								[_.a.selected]: i,
								[_.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: _.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: _.a.LayoutItemTextClassName
						}), r.a.createElement(l, {
							className: _.a.LayoutIcon,
							onClick: i ? void 0 : a,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(x, O({}, e, {
							className: _.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: _.a.DropdownRow,
							rowIconClassName: _.a.DropdownRowIcon,
							rowSelectedClassName: _.a.DropdownRowSelected,
							tooltipId: E
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: a
					} = this.props, s = t || h.e[a];
					return r.a.createElement("div", {
						className: Object(c.a)(_.a.Container, e),
						id: N
					}, r.a.createElement("div", {
						className: _.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: E,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), r.a.createElement(w.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = I(j(Object(m.c)(Object(d.a)(L))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				h = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				w = n("./node_modules/reselect/es/index.js"),
				S = n("./src/reddit/actions/tooltip.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/higherOrderComponents/asTooltip.tsx"),
				C = n("./src/reddit/constants/history.ts"),
				k = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Dropdown/Row.tsx"),
				N = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/helpers/trackers/navigation.ts"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				T = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				A = n.n(L),
				P = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const M = "ListingSort--SortPicker",
				B = Object(g.a)(P.a.wrapped(_.a, "Dropdown", A.a)),
				W = P.a.wrapped(j.a, "ListingSortIcon", A.a),
				G = (P.a.wrapped(x.b, "DropdownTriangle", A.a), P.a.div("Title", A.a)),
				H = P.a.wrapped(e => s.a.createElement(O.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", A.a),
				F = ({
					disabled: e,
					...t
				}) => s.a.createElement("div", R({}, t, {
					className: Object(o.a)(A.a.SortWrapper, t.className, {
						[A.a.isDisabled]: e
					})
				})),
				U = P.a.div("DropdownRowDisabled", A.a),
				K = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				z = Object(w.c)({
					isAwardListingExperimentEnabled: T.a,
					isBestSortPopularEnabled: v.a,
					user: D.k,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || M)(e),
					isPopularPage: d.F
				}),
				Y = Object(r.b)(z, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(S.h)({
						tooltipId: t || M
					}))
				}));
			var V = P.a.wrapped(K(Y(Object(c.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(G, null, f.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(F, {
					disabled: e.disabled
				}, e.children || s.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(k.a)(e.sort),
					id: e.dropdownId || M,
					showDropdownTriangle: !0
				}, s.a.createElement(W, {
					sort: e.sort
				}))), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(B, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || M
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(U, null, f.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, a, s) => {
					const r = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (e && (n || a) || t && a) && r.unshift(h.W.BEST), t && s && r.splice(3, 0, h.W.AWARDED), r
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(m.a)(e.baseUrl, {
							sort: t
						}) : Object(N.a)(e.baseUrl, `${t}/`),
						a = n.split("?")[0],
						r = e.isProfilePage ? n.replace(a + "?", "") : void 0;
					return s.a.createElement(O.b, {
						className: Object(o.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(k.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(E.b)(t))
						},
						href: {
							pathname: a,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: r
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(W, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", A.a),
				J = n("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = q[e];
					return t && t() || ""
				},
				q = {
					[h.ec.AllStates]: () => f.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[h.ec.Alaska]: () => f.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.ec.Alabama]: () => f.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.ec.Arkansas]: () => f.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.ec.Arizona]: () => f.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.ec.California]: () => f.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.ec.Colorado]: () => f.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.ec.Connecticut]: () => f.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.ec.DistrictOfColumbia]: () => f.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.ec.Delaware]: () => f.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.ec.Florida]: () => f.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.ec.Georgia]: () => f.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.ec.Hawaii]: () => f.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.ec.Iowa]: () => f.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.ec.Idaho]: () => f.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.ec.Illinois]: () => f.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.ec.Indiana]: () => f.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.ec.Kansas]: () => f.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.ec.Kentucky]: () => f.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.ec.Louisiana]: () => f.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.ec.Massachusetts]: () => f.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.ec.Maryland]: () => f.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.ec.Maine]: () => f.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.ec.Michigan]: () => f.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.ec.Minnesota]: () => f.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.ec.Missouri]: () => f.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.ec.Mississippi]: () => f.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.ec.Montana]: () => f.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.ec.NorthCarolina]: () => f.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.ec.NorthDakota]: () => f.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.ec.Nebraska]: () => f.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.ec.NewHampshire]: () => f.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.ec.NewJersey]: () => f.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.ec.NewMexico]: () => f.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.ec.Nevada]: () => f.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.ec.NewYork]: () => f.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.ec.Ohio]: () => f.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.ec.Oklahoma]: () => f.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.ec.Oregon]: () => f.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.ec.Pennsylvania]: () => f.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.ec.RhodeIsland]: () => f.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.ec.SouthCarolina]: () => f.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.ec.SouthDakota]: () => f.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.ec.Tennessee]: () => f.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.ec.Texas]: () => f.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.ec.Utah]: () => f.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.ec.Virginia]: () => f.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.ec.Vermont]: () => f.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.ec.Washington]: () => f.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.ec.Wisconsin]: () => f.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.ec.WestVirginia]: () => f.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.ec.Wyoming]: () => f.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = P.a.wrapped(_.a, "_Dropdown", Q.a),
				te = Object(g.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === h.A.UnitedStates
				},
				ae = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return h.ec.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = se(e),
						n = ae(e);
					return ne(e) ? `${t}_${n}` : t
				},
				oe = Object(d.u)(),
				ie = Object(w.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				le = Object(r.b)(ie, e => ({
					onOpenDropdown: () => e(Object(S.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(l.w)(h.A.UnitedStates + "_" + n))
					}
				}));
			var ce = P.a.wrapped(oe(le(e => {
				const t = `${e.baseUrl}?${J.i}=${h.A.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(H, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.ec).map(n => {
					const a = h.ec[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.ec.AllStates ? t : `${t}_${e}`)(a), re(a))
					}, s.a.createElement(O.b, {
						className: Object(o.a)(e.rowClassName, e.sort === a ? e.rowSelectedClassName : void 0),
						displayText: Z(a),
						isSelected: e.sort === a
					}))
				}))))
			})), "Component", Q.a);
			const de = {
				[h.A.Everywhere]: () => f.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.A.UnitedStates]: () => f.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.A.Argentina]: () => f.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.A.Australia]: () => f.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.A.Bulgaria]: () => f.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.A.Canada]: () => f.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.A.Chile]: () => f.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.A.Colombia]: () => f.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.A.Croatia]: () => f.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.A.CzechRepublic]: () => f.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.A.Finland]: () => f.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.A.France]: () => f.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.A.Germany]: () => f.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.A.Greece]: () => f.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.A.Hungary]: () => f.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.A.Iceland]: () => f.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.A.India]: () => f.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.A.Ireland]: () => f.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.A.Italy]: () => f.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.A.Japan]: () => f.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.A.Malaysia]: () => f.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.A.Mexico]: () => f.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.A.NewZealand]: () => f.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.A.Philippines]: () => f.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.A.Poland]: () => f.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.A.Portugal]: () => f.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.A.PuertoRico]: () => f.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.A.Romania]: () => f.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.A.Serbia]: () => f.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.A.Singapore]: () => f.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.A.Spain]: () => f.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.A.Sweden]: () => f.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.A.Taiwan]: () => f.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.A.Thailand]: () => f.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.A.Turkey]: () => f.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.A.UnitedKingdom]: () => f.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				pe = n.n(ue);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const he = "CountrySort--CountrySortPicker",
				be = Object(d.u)(),
				we = Object(w.c)({
					dropdownIsOpen: Object(I.b)(he)
				});
			var Se = be(Object(r.b)(we, e => ({
					onCloseDropdown: t => e(Object(S.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(S.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t, {
							[C.b.FeedLoadReason]: C.a.GeoModeChange
						})), e(Object(l.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = ae(e.sort),
						a = `${e.baseUrl}?${J.i}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(o.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(he) : e.onOpenDropdown(he)
					}, s.a.createElement(F, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.A.Everywhere]())(),
						id: he,
						showDropdownTriangle: !0
					})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: he
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.A).map(n => {
						const r = h.A[n];
						return s.a.createElement("div", {
							key: r,
							onClick: () => e.onClickLink(`${a}${re(r)}`, r)
						}, s.a.createElement(O.b, {
							className: Object(o.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
							displayText: de[r](),
							isSelected: t === r
						}))
					})))), t === h.A.UnitedStates && s.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				fe = n("./node_modules/path-browserify/index.js"),
				ge = n.n(fe),
				Ce = n("./src/reddit/components/TimeSort/index.m.less"),
				ke = n.n(Ce);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const _e = Object(g.a)(_.a),
				Oe = P.a.div("ListingSortContainer", ke.a),
				Ne = Object(d.u)(),
				Ee = Object(w.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var xe = Ne(Object(r.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(S.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => s.a.createElement(Oe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(k.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(_e, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.hc.HOUR, h.hc.DAY, h.hc.WEEK, h.hc.MONTH, h.hc.YEAR, h.hc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = ge.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						a = Object(m.a)(n, {
							[J.C]: t
						}),
						r = a.split("?")[0],
						i = `${a.replace(r+"?","")}`;
					return s.a.createElement(O.b, {
						className: Object(o.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(k.b)(t),
						href: {
							pathname: r,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(E.d)(t))
						}
					})
				}))))))),
				ve = n("./src/reddit/constants/listings.ts"),
				Te = n("./src/reddit/controls/Button/index.tsx"),
				Ie = n("./src/reddit/icons/fonts/index.tsx"),
				De = n("./src/reddit/selectors/meta.ts"),
				je = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = n.n(je);

			function Ae() {
				return (Ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = new Set([h.W.CONTROVERSIAL, h.W.TOP]),
				Re = new Set([h.W.CONTROVERSIAL, h.W.RISING]),
				Me = new Set([h.W.CONTROVERSIAL]),
				Be = "ListingSort--Overflow",
				We = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ge = Object(w.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, v.a, D.k, d.F, T.a, De.i, (e, t, n, a, s, r, o) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: o
					};
					const i = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (t && (a || n) || s && n) && i.unshift(h.W.BEST), s && r && i.splice(3, 0, h.W.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: o
					}
				});
			class He extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: a
						} = this.props, r = a ? Object(m.a)(n, {
							sort: e
						}) : Object(N.a)(n, `${e}/`), i = r.split("?")[0], l = a ? r.replace(i + "?", "") : void 0;
						return s.a.createElement(Te.t, {
							className: Object(o.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: Te.b.InternalLink,
							priority: Te.c.Plain,
							Icon: n => s.a.createElement(W, Ae({}, n, {
								className: Object(o.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(k.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[C.b.FeedLoadReason]: C.a.SortChange
								},
								search: l
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: a,
							sort: r
						} = this.props, o = a && !!n && e === h.W.HOT && r === h.W.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), o && s.a.createElement(Se, {
							baseUrl: ve.c[ve.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: a
					} = this.props;
					return !a.startsWith("en") && (n ? e === h.W.AWARDED && (t === h.W.HOT || t === h.W.TOP) : e === h.W.BEST && t === h.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([h.W.TOP, h.W.NEW]);
					return Me.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: a,
						sortOptions: r,
						timeSort: i
					} = this.props, l = !t && Pe.has(a), c = Re.has(a), d = r.filter(e => !this.isOverflowSort(e)), u = r.filter(e => this.isOverflowSort(e) && e !== a);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(V, Ae({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(o.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(o.a)(Le.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(a), l && s.a.createElement(xe, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: a,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || h.ic,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(V, Ae({}, this.props, {
						className: Object(o.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Be,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Be
					}, s.a.createElement(Ie.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Fe = We(Object(r.b)(Ge)(Object(c.c)(He))),
				Ue = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ke = n.n(Ue);
			const ze = Object(d.u)({
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ye = Object(r.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, a) => {
						if (t) {
							const s = Object(i.c)({
								sort: n,
								timeSort: a
							});
							e(Object(l.J)(t, s))
						}
					}
				}));
			class Ve extends s.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: a = !1,
						isProfilePage: r,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(o.a)(Ke.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(Fe, {
						baseUrl: e,
						disabled: a,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !r && s.a.createElement(p.a, {
						className: Ke.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = ze(Ye(Object(c.c)(Ve)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
			const d = {
				[o.W.BEST]: "best",
				[o.W.HOT]: "hot",
				[o.W.NEW]: "new",
				[o.W.CONTROVERSIAL]: "controversial",
				[o.W.TOP]: "top",
				[o.W.RISING]: "rising",
				[o.W.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return d[n] ? s.a.createElement(i.a, {
					name: d[n],
					isFilled: t,
					className: Object(r.a)(e, c.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
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
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				r = n.n(s);
			t.a = a.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				w = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				S = n("./src/reddit/selectors/meta.ts"),
				f = n("./src/reddit/components/SidebarFooter/index.m.less"),
				g = n.n(f);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = l.a.a("Link", g.a), y = Object(o.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: w.a,
				countryCode: S.b
			}), _ = Object(r.b)(y), O = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			});
			t.a = O(_(Object(c.c)(e => {
				const t = Object(r.f)().getState(),
					n = Object(b.a)(t, Object(i.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(d.a, {
					className: g.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: g.a.LinkContainer
				}, s.a.createElement("div", {
					className: g.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: g.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: g.a.Copyright
				}, C._("© {year} Reddit, Inc. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const a = t => {
					const a = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(k, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, a[t]) : null
				};
				return s.a.createElement(d.a, {
					className: g.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: g.a.LinkContainer
				}, s.a.createElement("div", {
					className: g.a.Column
				}, s.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(k, {
					href: "https://www.reddit.com/coins"
				}, C._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(k, {
					href: "https://www.reddit.com/premium"
				}, C._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(k, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, C._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(k, {
					href: `https://www.reddit.com${Object(m.a)()}`
				}, C._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(k, {
					href: "https://www.reddit.com/topics/a-1/"
				}, C._("Topics", null, {
					hk: "349RFt"
				}))), !!u.b[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: g.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: g.a.Column
				}, s.a.createElement(k, {
					href: "https://www.redditinc.com/"
				}, C._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/careers"
				}, C._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/press"
				}, C._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/advertising"
				}, C._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(k, {
					href: "http://www.redditblog.com/"
				}, C._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(k, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, C._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: g.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: g.a.Column
				}, a("en"), a("fr"), a("it")), s.a.createElement("div", {
					className: g.a.Column
				}, a("de"), a("es"))), s.a.createElement("div", {
					className: g.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				p = n.n(u);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = ({
					className: e,
					isOverlay: t,
					style: n
				}) => i.a.createElement("div", {
					className: Object(a.a)(e, p.a.container),
					style: n
				}, i.a.createElement(d.l, {
					className: p.a.button,
					onClick: () => h(t)
				}, m._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				w = n("./src/reddit/components/SidebarFooter/index.tsx"),
				S = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				C = n.n(g),
				k = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = l.e[1] + 24,
				O = S.f + 8,
				N = O + 152 + 16,
				E = N + _ + 8,
				x = k.a.div("Container", C.a),
				v = k.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => i.a.createElement(b, y({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?O:8}px)`
					}
				}, n)), "BackToTop", C.a),
				T = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: s
				}) => i.a.createElement("div", {
					className: Object(a.a)(t, {
						[C.a.StickyStyles]: s && !n,
						[C.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class I extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > E,
						shouldFooterSticky: this.windowHeight > N
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, l.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: a,
							className: s,
							hideFooter: r,
							pageLayer: o
						}
					} = this, l = this.state.isAdSticky && !(!t && !a);
					return i.a.createElement(x, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(T, {
						isFakeOverlay: n,
						isSticky: l
					}, t, a, !r && i.a.createElement(w.a, null)), !this.props.hideBackToTop && i.a.createElement(v, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const D = Object(f.u)();
			t.a = D(I)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				w = n("./src/reddit/selectors/structuredStyles.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = C(e);
					return Object(f.f)(t)
				},
				_ = e => {
					const t = k(e);
					return Object(f.f)(t)
				};
			var O = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				N = n.n(O);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(u.u)(), v = Object(r.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						a = t.redditStyle || Object(w.l)(e, {
							subredditId: n
						}),
						s = Object(S.cb)(e);
					return a || s
				},
				nigtmode: S.cb,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class T extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: a,
						headerButton: r,
						id: o,
						onClick: l,
						onHeaderClick: d,
						title: u,
						titleClassName: m,
						truncateThreshold: h
					} = this.props, b = n ? N.a.widgetContentOnly : N.a.widgetContent, w = !a && this.props.styles, S = w ? this.getWidgetBackgroundStyles() : {}, f = w ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(i.a)(t, N.a.widgetBackground, {
							[N.a.redditStyle]: a,
							[N.a.clickable]: !!l,
							[N.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": a,
						onClick: l,
						style: S
					}, u && s.a.createElement("div", {
						className: Object(i.a)(N.a.widgetHeader, {
							[N.a.clickable]: !!d
						}),
						id: o,
						style: f,
						onClick: d
					}, s.a.createElement("div", {
						className: Object(i.a)(N.a.widgetTitle, m)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), r), s.a.createElement("div", {
						className: Object(i.a)(b, {
							[N.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(p.r, {
						className: N.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = x(v(Object(l.a)(Object(d.c)(T))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return l
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const r = {
					[s.W.BEST]: () => a.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.W.HOT]: () => a.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.W.NEW]: () => a.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.W.CONTROVERSIAL]: () => a.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.W.RISING]: () => a.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.W.TOP]: () => a.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.W.AWARDED]: () => a.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[s.hc.HOUR]: () => a.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.hc.DAY]: () => a.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.hc.WEEK]: () => a.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.hc.MONTH]: () => a.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.hc.YEAR]: () => a.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.hc.ALL]: () => a.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/constants/location.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var a = n("./src/redditGQL/types.ts");
			const s = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				r = {
					[a.e.De]: s[a.e.De],
					[a.e.At]: s[a.e.At]
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = s.a.createContext({})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(l.a, w({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, w({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle,
					[b.a.modNotes]: t.isModNotesStyle
				});
				return o.a.createElement(S, w({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(r);
			t.a = a.a.wrapped(s.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === a.b.NO_ADS);
				return !n && !s
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(s);
			const o = ({
					isLoading: e
				}) => Object(a.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				i = e => Object(a.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var a, s, r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(a || (a = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const i = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: a.SEE_MORE,
					widget: Object(o.wb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				l = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: a.REREDDIT_PROMO,
					post: o.I(n, e),
					subreddit: o.ib(n),
					...t && {
						banner: {
							buttonText: t,
							id: a.REREDDIT_PROMO
						}
					},
					...o.o(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: r.c.VIEW,
					noun: a.TOPICS_WIDGET,
					...o.o(e)
				}),
				d = e => t => ({
					source: s.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: a.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", l({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.82f97e43ce5cbe583001.js.map