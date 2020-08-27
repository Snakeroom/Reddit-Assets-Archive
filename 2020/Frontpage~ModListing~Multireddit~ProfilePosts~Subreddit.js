// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.cf4c250fa757f26d6161.js
// Retrieved at 8/27/2020, 5:20:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"], {
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
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				g = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				N = n.n(C);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "view--layout--FUE",
				j = "LayoutSwitch--picker",
				P = Object(i.a)(f.a),
				E = {
					[m.d.Card]: _.a,
					[m.d.Classic]: O.a,
					[m.d.Compact]: g.a
				},
				L = {
					[m.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[m.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[m.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				D = Object(w.t)(),
				I = Object(l.c)({
					dropdownIsOpen: Object(k.b)(j),
					postLayout: w.N,
					redditStyle: w.A
				}),
				T = Object(r.b)(I, e => ({
					onListingLayoutChange: (t, n) => e(Object(p.x)(t, n)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: j
					}))
				}));
			class B extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: o
						} = this.props;
						t ? t(e) : (n(e, o), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(x.screen)(t),
							subreddit: Object(x.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: o
						} = this.props, r = n || m.e[o], l = e === r, i = E[e], d = L[e];
						return a.a.createElement(S.b, v({}, t, {
							className: Object(c.a)(N.a.LayoutItem, {
								[N.a.selected]: l
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: N.a.LayoutItemIconWrapper,
							isSelected: l,
							noHover: l,
							onClick: l ? void 0 : () => this.changeLayout(e),
							textClassName: N.a.LayoutItemTextClassName
						}), a.a.createElement(i, {
							className: N.a.LayoutIcon,
							onClick: l ? void 0 : s
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(P, v({}, e, {
							className: N.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: N.a.DropdownRow,
							rowIconClassName: N.a.DropdownRowIcon,
							rowSelectedClassName: N.a.DropdownRowSelected,
							tooltipId: j
						}), this.renderItem(m.d.Card), this.renderItem(m.d.Classic), this.renderItem(m.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, o = t || m.e[s];
					return a.a.createElement("div", {
						className: Object(c.a)(N.a.Container, e),
						id: y
					}, a.a.createElement("div", {
						className: N.a.DropdownContainer,
						onClick: n
					}, this.renderItem(o, {
						id: j,
						showDropdownTriangle: !0
					}), a.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = D(T(Object(b.c)(Object(d.a)(B))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
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
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/listingSort/index.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				m = n("./src/lib/addQueryParams/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				S = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				O = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/reddit/constants/listingSorts.ts"),
				_ = n("./src/reddit/contexts/Tooltip.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/helpers/trackers/navigation.ts"),
				v = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				D = n.n(L),
				I = n("./src/lib/lessComponent.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var B = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const H = "ListingSort--SortPicker",
				R = Object(O.a)(I.a.wrapped(x.a, "Dropdown", D.a)),
				U = I.a.wrapped(E.a, "ListingSortIcon", D.a),
				A = (I.a.wrapped(v.b, "DropdownTriangle", D.a), I.a.div("Title", D.a)),
				M = I.a.wrapped(e => o.a.createElement(k.b, T({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				W = e => {
					var {
						disabled: t
					} = e, n = B(e, ["disabled"]);
					return o.a.createElement("div", T({}, n, {
						className: Object(r.a)(D.a.SortWrapper, n.className, {
							[D.a.isDisabled]: t
						})
					}))
				},
				z = I.a.div("DropdownRowDisabled", D.a),
				Y = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				G = Object(b.c)({
					isBestSortPopularEnabled: y.a,
					user: P.i,
					dropdownIsOpen: (e, t) => Object(j.b)(t.dropdownId || H)(e),
					isPopularPage: d.C
				}),
				Z = Object(a.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: s
					} = t;
					return {
						onOpenDropdown: () => e(Object(f.h)({
							tooltipId: n || H
						}))
					}
				});
			var V = I.a.wrapped(Y(Z(Object(c.c)(e => o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && o.a.createElement(A, null, S.fbt._("Sort", null, {
					hk: "2BfINq"
				})), o.a.createElement(W, {
					disabled: e.disabled
				}, e.children || o.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(g.a)(e.sort),
					id: e.dropdownId || H,
					showDropdownTriangle: !0
				}, o.a.createElement(U, {
					sort: e.sort
				}))), o.a.createElement(_.a.Consumer, null, t => o.a.createElement(R, T({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || H
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? o.a.createElement(z, null, S.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s) => {
					const o = [w.O.HOT, w.O.NEW, w.O.TOP, w.O.RISING];
					return (e && (n || s) || t && s) && o.unshift(w.O.BEST), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled)).map(t => o.a.createElement(k.b, {
					className: Object(r.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(g.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(N.a)(t))
					},
					href: e.isProfilePage ? Object(m.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, "".concat(t, "/")),
					isSelected: e.sort === t,
					key: t
				}, o.a.createElement(U, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", D.a),
				F = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./src/reddit/constants/parameters.ts"));
			const K = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[w.Pb.AllStates]: () => S.fbt._("all states", null, {
						hk: "1s9O3L"
					}),
					[w.Pb.Alaska]: () => S.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[w.Pb.Alabama]: () => S.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[w.Pb.Arkansas]: () => S.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[w.Pb.Arizona]: () => S.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[w.Pb.California]: () => S.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[w.Pb.Colorado]: () => S.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[w.Pb.Connecticut]: () => S.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[w.Pb.DistrictOfColumbia]: () => S.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[w.Pb.Delaware]: () => S.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[w.Pb.Florida]: () => S.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[w.Pb.Georgia]: () => S.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[w.Pb.Hawaii]: () => S.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[w.Pb.Iowa]: () => S.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[w.Pb.Idaho]: () => S.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[w.Pb.Illinois]: () => S.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[w.Pb.Indiana]: () => S.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[w.Pb.Kansas]: () => S.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[w.Pb.Kentucky]: () => S.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[w.Pb.Louisiana]: () => S.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[w.Pb.Massachusetts]: () => S.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[w.Pb.Maryland]: () => S.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[w.Pb.Maine]: () => S.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[w.Pb.Michigan]: () => S.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[w.Pb.Minnesota]: () => S.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[w.Pb.Missouri]: () => S.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[w.Pb.Mississippi]: () => S.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[w.Pb.Montana]: () => S.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[w.Pb.NorthCarolina]: () => S.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[w.Pb.NorthDakota]: () => S.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[w.Pb.Nebraska]: () => S.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[w.Pb.NewHampshire]: () => S.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[w.Pb.NewJersey]: () => S.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[w.Pb.NewMexico]: () => S.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[w.Pb.Nevada]: () => S.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[w.Pb.NewYork]: () => S.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[w.Pb.Ohio]: () => S.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[w.Pb.Oklahoma]: () => S.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[w.Pb.Oregon]: () => S.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[w.Pb.Pennsylvania]: () => S.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[w.Pb.RhodeIsland]: () => S.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[w.Pb.SouthCarolina]: () => S.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[w.Pb.SouthDakota]: () => S.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[w.Pb.Tennessee]: () => S.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[w.Pb.Texas]: () => S.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[w.Pb.Utah]: () => S.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[w.Pb.Virginia]: () => S.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[w.Pb.Vermont]: () => S.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[w.Pb.Washington]: () => S.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[w.Pb.Wisconsin]: () => S.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[w.Pb.WestVirginia]: () => S.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[w.Pb.Wyoming]: () => S.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = n("./src/reddit/components/StateSort/index.m.less"),
				q = n.n(Q);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = I.a.wrapped(x.a, "_Dropdown", q.a),
				ee = Object(O.a)($),
				te = e => {
					return e.indexOf("_") > 0 && se(e) === w.w.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return w.Pb.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = se(e),
						n = ne(e);
					return te(e) ? "".concat(t, "_").concat(n) : t
				},
				ae = Object(d.t)(),
				re = Object(b.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker")
				}),
				le = Object(a.b)(re, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(i.u)(w.w.UnitedStates + "_" + n))
					}
				}));
			var ie = I.a.wrapped(ae(le(e => {
				const t = "".concat(e.baseUrl, "?").concat(F.h, "=").concat(w.w.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(M, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : K(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(_.a.Consumer, null, n => o.a.createElement(ee, X({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(w.Pb).map(n => {
					const s = w.Pb[n];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === w.Pb.AllStates ? t : "".concat(t, "_").concat(e))(s), oe(s))
					}, o.a.createElement(k.b, {
						className: Object(r.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: K(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", q.a);
			const ce = {
				[w.w.Everywhere]: () => S.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[w.w.UnitedStates]: () => S.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[w.w.Argentina]: () => S.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[w.w.Australia]: () => S.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[w.w.Bulgaria]: () => S.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[w.w.Canada]: () => S.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[w.w.Chile]: () => S.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[w.w.Colombia]: () => S.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[w.w.Croatia]: () => S.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[w.w.CzechRepublic]: () => S.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[w.w.Finland]: () => S.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[w.w.Greece]: () => S.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[w.w.Hungary]: () => S.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[w.w.Iceland]: () => S.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[w.w.India]: () => S.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[w.w.Ireland]: () => S.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[w.w.Japan]: () => S.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[w.w.Malaysia]: () => S.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[w.w.Mexico]: () => S.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[w.w.NewZealand]: () => S.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[w.w.Philippines]: () => S.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[w.w.Poland]: () => S.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[w.w.Portugal]: () => S.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[w.w.PuertoRico]: () => S.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[w.w.Romania]: () => S.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[w.w.Serbia]: () => S.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[w.w.Singapore]: () => S.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[w.w.Sweden]: () => S.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[w.w.Taiwan]: () => S.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[w.w.Thailand]: () => S.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[w.w.Turkey]: () => S.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[w.w.UnitedKingdom]: () => S.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var de = n("./src/reddit/components/CountrySort/index.m.less"),
				pe = n.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				me = Object(d.t)(),
				we = Object(b.c)({
					dropdownIsOpen: Object(j.b)(be)
				});
			var he = me(Object(a.b)(we, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(i.u)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = ne(e.sort),
						s = "".concat(e.baseUrl, "?").concat(F.h, "=");
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(r.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, o.a.createElement(W, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, o.a.createElement(M, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[w.w.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), o.a.createElement(_.a.Consumer, null, n => o.a.createElement(ee, ue({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(w.w).map(n => {
						const a = w.w[n];
						return o.a.createElement("div", {
							key: a,
							onClick: () => e.onClickLink("".concat(s).concat(oe(a)), a)
						}, o.a.createElement(k.b, {
							className: Object(r.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
							displayText: ce[a](),
							isSelected: t === a
						}))
					})))), t === w.w.UnitedStates && o.a.createElement(ie, {
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
				Se = n.n(fe),
				Oe = n("./src/reddit/components/TimeSort/index.m.less"),
				ge = n.n(Oe);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(O.a)(x.a),
				ke = (e, t, n) => {
					let s = e.url;
					return e.urlParams.sort || Object(d.G)(e) || (s = Se.a.join(s, t)), Object(m.a)(s, {
						[F.u]: n
					})
				},
				Ce = I.a.div("ListingSortContainer", ge.a),
				Ne = Object(d.t)(),
				ve = Object(b.c)({
					dropdownIsOpen: Object(j.b)("TimeSort--SortPicker")
				});
			var ye = Ne(Object(a.b)(ve, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => o.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: !1
				}, o.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(g.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(_.a.Consumer, null, t => o.a.createElement(xe, _e({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [w.Sb.HOUR, w.Sb.DAY, w.Sb.WEEK, w.Sb.MONTH, w.Sb.YEAR, w.Sb.ALL].map(t => o.a.createElement(k.b, {
					className: Object(r.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(g.b)(t),
					href: ke(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(N.c)(t))
					}
				})))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Pe = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				De = n.n(Le);

			function Ie() {
				return (Ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Te = new Set([w.O.CONTROVERSIAL, w.O.TOP]),
				Be = new Set([w.O.CONTROVERSIAL, w.O.RISING]),
				He = "ListingSort--Overflow",
				Re = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ue = Object(b.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, y.a, P.i, d.C, (e, t, n, s, o) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e
					};
					const a = [w.O.HOT, w.O.NEW, w.O.TOP, w.O.RISING];
					return (t && (s || n) || o && n) && a.unshift(w.O.BEST), {
						isPopularPage: o,
						sortOptions: a
					}
				});
			class Ae extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(N.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(m.a)(t, {
							sort: e
						}) : Object(C.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: a
						} = this.props, l = s && !!n && e === w.O.HOT && a === w.O.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, o.a.createElement(Pe.a, {
							className: Object(r.a)(De.a.SortLink, e === a && De.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, o.a.createElement(U, {
							className: De.a.SortIcon,
							sort: e
						}), o.a.createElement("div", {
							className: De.a.SortLabel
						}, Object(g.a)(e))), l && o.a.createElement(he, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: De.a.DropdownButton,
							className: De.a.CountrySort,
							disabled: t,
							dropdownClassName: De.a.Dropdown,
							rowClassName: De.a.DropdownRow,
							rowSelectedClassName: De.a.DropdownRowSelected,
							wrapperClassName: De.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: De.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: a,
						timeSort: l
					} = this.props, i = !t && Te.has(s), c = Be.has(s), d = a.filter(e => !Be.has(e)), p = a.filter(e => Be.has(e) && e !== s);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(V, Ie({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(r.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(r.a)(De.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(s), i && o.a.createElement(ye, {
						baseUrl: this.getSortUrl(s),
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: l || w.Tb,
						wrapperClassName: De.a.DropdownSortWrapper
					}), p.length > 0 && o.a.createElement(V, Ie({}, this.props, {
						className: Object(r.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: He,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: p
					}), o.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: He
					}, o.a.createElement(Ee.a, null))))
				}
			}
			var Me = Re(Object(a.b)(Ue)(Object(c.c)(Ae))),
				We = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ze = n.n(We);
			const Ye = Object(d.t)({
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				Ge = Object(a.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, s) => {
							if (n) {
								const o = Object(l.c)({
									sort: t,
									timeSort: s
								});
								e(Object(i.I)(n, o))
							}
						}
					}
				});
			class Ze extends o.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						p.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						p.a.setState({
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
						disabled: s = !1,
						isProfilePage: a,
						sort: l,
						sortOptions: i,
						subredditId: c,
						timeSort: d,
						updateSortPreference: p
					} = this.props;
					return o.a.createElement("div", {
						className: Object(r.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(Me, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: p,
						onTimeSortChange: this.updateTimeSort,
						sort: l,
						sortOptions: i,
						timeSort: d
					}), !a && o.a.createElement(u.a, {
						className: ze.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ye(Ge(Object(c.c)(Ze)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/icons/svgs/Best/index.m.less"),
				i = n.n(l);
			var c = e => o.a.createElement("svg", {
					className: Object(a.a)(i.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), o.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				d = n("./src/reddit/icons/svgs/Controversial/index.m.less"),
				p = n.n(d);
			var u = e => o.a.createElement("svg", {
					className: Object(a.a)(p.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				b = n("./src/reddit/icons/svgs/Hot/index.m.less"),
				m = n.n(b);
			var w = e => o.a.createElement("svg", {
					className: Object(a.a)(m.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				h = n("./src/reddit/icons/svgs/New/index.tsx"),
				f = n("./src/reddit/icons/svgs/Rising/index.m.less"),
				S = n.n(f);
			var O = e => o.a.createElement("svg", {
					className: Object(a.a)(S.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				g = n("./src/reddit/icons/svgs/Top/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.m.less"),
				x = n.n(_);
			const k = {
				[r.O.BEST]: c,
				[r.O.HOT]: w,
				[r.O.NEW]: h.a,
				[r.O.CONTROVERSIAL]: u,
				[r.O.TOP]: g.a,
				[r.O.RISING]: O
			};

			function C(e) {
				let {
					className: t,
					sort: n
				} = e;
				const s = k[n];
				return s ? o.a.createElement(s, {
					className: Object(a.a)(t, x.a.iconStyles)
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
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SidebarContainer/index.m.less"),
				a = n.n(o);
			t.a = s.a.div("container", a.a)
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
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const a = {
					[o.O.BEST]: () => s.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[o.O.HOT]: () => s.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[o.O.NEW]: () => s.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[o.O.CONTROVERSIAL]: () => s.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[o.O.RISING]: () => s.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[o.O.TOP]: () => s.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				r = e => {
					const t = a[e];
					return t && t() || ""
				},
				l = {
					[o.Sb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Sb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Sb.WEEK]: () => s.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[o.Sb.MONTH]: () => s.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[o.Sb.YEAR]: () => s.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[o.Sb.ALL]: () => s.fbt._("All time", null, {
						hk: "2cL1Yf"
					})
				},
				i = e => {
					const t = l[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext({})
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				l = n.n(r);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(a.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", l.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, n) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, n) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/New/index.m.less"),
				l = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Top/index.m.less"),
				l = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		}
	}
]);
//# sourceMappingURL=Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit.cf4c250fa757f26d6161.js.map