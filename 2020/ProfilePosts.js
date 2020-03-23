// https://www.redditstatic.com/desktop2x/ProfilePosts.d5d4dbfe9c243e8e3a43.js
// Retrieved at 3/23/2020, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts"], {
		"./node_modules/lodash/flatMap.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				n = r("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(n(e, t), 1)
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, r) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, r) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/app/strings/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/components/PostList/Placeholder.tsx"),
				m = r("./src/reddit/constants/postLayout.ts"),
				u = r("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				p = r.n(u);
			const b = c.a.div("PrimaryText", p.a),
				x = c.a.wrapped(l.a, "BackgroundPlaceholder", p.a),
				g = c.a.div("Wrapper", p.a);
			var f = e => {
					let {
						children: t,
						className: r
					} = e;
					return n.a.createElement(g, {
						className: r
					}, n.a.createElement(x, {
						isLoading: !1,
						layout: m.g.Classic
					}), n.a.createElement(b, null, t))
				},
				h = r("./src/reddit/selectors/user.ts");
			const O = Object(a.c)({
				language: h.O
			});
			var y = Object(o.b)(O)(e => {
				let {
					className: t,
					language: r,
					profileName: s,
					timeSort: o = i.Rb.ALL
				} = e;
				return n.a.createElement(f, {
					className: t
				}, o === i.Rb.ALL ? Object(d.a)(r, "listings.noComments", {
					profileName: s
				}) : Object(d.a)(r, "listings.noRecentComments", {
					profileName: s
				}))
			});
			const w = Object(a.c)({
				language: h.O
			});
			var E = Object(o.b)(w)(e => {
					let {
						className: t,
						language: r,
						profileName: s,
						timeSort: o = i.Rb.ALL
					} = e;
					return n.a.createElement(f, {
						className: t
					}, o === i.Rb.ALL ? Object(d.a)(r, "listings.noPosts", {
						profileName: s
					}) : Object(d.a)(r, "listings.noRecentPosts", {
						profileName: s
					}))
				}),
				v = r("./src/reddit/components/Translated/index.tsx");
			var N = e => {
					let {
						className: t,
						verb: r
					} = e;
					return n.a.createElement(f, {
						className: t
					}, n.a.createElement(v.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: r
						}
					}))
				},
				S = r("./src/reddit/icons/svgs/Hide/index.tsx"),
				_ = r("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				C = r.n(_),
				j = () => n.a.createElement("div", {
					className: C.a.container
				}, n.a.createElement(S.a, {
					className: C.a.hideIcon
				}), n.a.createElement("h3", {
					className: C.a.title
				}, n.a.createElement(v.a, {
					msgId: "profile.forbidden.title"
				})), n.a.createElement("p", {
					className: C.a.subtitle
				}, n.a.createElement(v.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})));
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "a", (function() {
				return j
			}))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asTooltip.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/reddit/actions/preferences.ts"),
				m = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/constants/postLayout.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/contexts/Tooltip.ts"),
				g = r("./src/reddit/controls/Dropdown/index.tsx"),
				f = r("./src/reddit/controls/Dropdown/Row.tsx"),
				h = r("./src/reddit/i18n/utils.ts"),
				O = r("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				y = r("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				w = r("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				N = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				S = r.n(N);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				j = "LayoutSwitch--picker",
				L = Object(i.a)(g.a),
				P = {
					[p.d.Card]: w.a,
					[p.d.Classic]: O.a,
					[p.d.Compact]: y.a
				},
				I = {
					[p.d.Card]: Object(h.c)("card"),
					[p.d.Classic]: Object(h.c)("classic"),
					[p.d.Compact]: Object(h.c)("compact")
				},
				k = Object(b.t)(),
				T = Object(a.c)({
					dropdownIsOpen: Object(v.b)(j),
					postLayout: b.L,
					redditStyle: b.A
				}),
				A = Object(o.b)(T, e => ({
					onListingLayoutChange: (t, r) => e(Object(l.v)(t, r)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: j
					}))
				}));
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: r,
							sendEvent: s,
							subredditId: n
						} = this.props;
						t ? t(e) : (r(e, n), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(E.screen)(t),
							subreddit: Object(E.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: r,
							onLayoutClick: s,
							postLayout: o
						} = this.props, a = r || p.e[o], i = e === a, c = P[e];
						return n.a.createElement(f.b, _({}, t, {
							className: Object(d.a)(S.a.LayoutItem, {
								[S.a.selected]: i
							}),
							"data-layout": e,
							displayText: I[e],
							iconWrapperClassName: S.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: S.a.LayoutItemTextClassName
						}), n.a.createElement(c, {
							className: S.a.LayoutIcon,
							onClick: i ? void 0 : s
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(L, _({}, e, {
							className: S.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: S.a.DropdownRow,
							rowIconClassName: S.a.DropdownRowIcon,
							rowSelectedClassName: S.a.DropdownRowSelected,
							tooltipId: j
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: r,
						postLayout: s
					} = this.props, o = t || p.e[s];
					return n.a.createElement("div", {
						className: Object(d.a)(S.a.Container, e),
						id: C
					}, n.a.createElement("div", {
						className: S.a.DropdownContainer,
						onClick: r
					}, this.renderItem(o, {
						id: j,
						showDropdownTriangle: !0
					}), n.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = k(A(Object(u.c)(Object(c.a)(B))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.array.sort.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/listingSort/index.ts"),
				d = r("./src/reddit/actions/preferences.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/reselect/es/index.js")),
				b = r("./src/lib/addQueryParams/index.ts"),
				x = r("./src/lib/constants/index.ts"),
				g = r("./src/reddit/components/CountrySort/index.tsx"),
				f = r("./src/reddit/components/ListingSort/index.tsx"),
				h = r("./src/reddit/components/TimeSort/index.tsx"),
				O = r("./src/reddit/constants/listings.ts"),
				y = r("./src/reddit/constants/listingSorts.ts"),
				w = r("./src/reddit/controls/InternalLink/index.tsx"),
				E = r("./src/reddit/helpers/path/index.ts"),
				v = r("./src/reddit/helpers/trackers/navigation.ts"),
				N = r("./src/reddit/icons/fonts/Menu/index.tsx"),
				S = r("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				j = r.n(C);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = new Set([x.O.CONTROVERSIAL, x.O.TOP]),
				I = new Set([x.O.CONTROVERSIAL, x.O.RISING]),
				k = "ListingSort--Overflow",
				T = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				A = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, S.a, _.i, l.C, (e, t, r, s, n) => {
					if (e) return {
						isPopularPage: n,
						sortOptions: e
					};
					const o = [x.O.HOT, x.O.NEW, x.O.TOP, x.O.RISING];
					return (t && (s || r) || n && r) && o.unshift(x.O.BEST), {
						isPopularPage: n,
						sortOptions: o
					}
				});
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: r
						} = this.props;
						return r ? Object(b.a)(t, {
							sort: e
						}) : Object(E.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: r,
							isPopularPage: s,
							sort: o
						} = this.props, i = s && !!r && e === x.O.HOT && o === x.O.HOT;
						return n.a.createElement(n.a.Fragment, {
							key: e
						}, n.a.createElement(w.a, {
							className: Object(a.a)(j.a.SortLink, e === o && j.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(f.a, {
							className: j.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: j.a.SortLabel
						}, Object(y.a)(e))), i && n.a.createElement(g.a, {
							baseUrl: O.c[O.b.Popular],
							buttonClassName: j.a.DropdownButton,
							className: j.a.CountrySort,
							disabled: t,
							dropdownClassName: j.a.Dropdown,
							rowClassName: j.a.DropdownRow,
							rowSelectedClassName: j.a.DropdownRowSelected,
							wrapperClassName: j.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: r,
							stateSortClassName: j.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: r,
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, d = !t && P.has(s), c = I.has(s), l = o.filter(e => !I.has(e)), m = o.filter(e => I.has(e) && e !== s);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(f.d, L({}, this.props, {
						buttonClassName: j.a.DropdownButton,
						className: Object(a.a)(j.a.SortDropdown, e),
						rowClassName: j.a.DropdownRow,
						rowIconClassName: j.a.DropdownRowIcon,
						rowSelectedClassName: j.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(a.a)(j.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(s), d && n.a.createElement(h.a, {
						baseUrl: this.getSortUrl(s),
						buttonClassName: j.a.DropdownButton,
						className: j.a.TimeSort,
						dropdownClassName: j.a.Dropdown,
						listingSort: s,
						onChange: r,
						rowClassName: j.a.DropdownRow,
						rowSelectedClassName: j.a.DropdownRowSelected,
						timeSort: i || x.Sb,
						wrapperClassName: j.a.DropdownSortWrapper
					}), m.length > 0 && n.a.createElement(f.d, L({}, this.props, {
						className: Object(a.a)(j.a.SortOverflow, e),
						dropdownClassName: j.a.Dropdown,
						dropdownId: k,
						rowClassName: j.a.DropdownRow,
						rowIconClassName: j.a.DropdownRowIcon,
						rowSelectedClassName: j.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: j.a.SortOverflowButton,
						id: k
					}, n.a.createElement(N.a, null))))
				}
			}
			var R = T(Object(o.b)(A)(Object(c.c)(B))),
				D = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				F = r.n(D);
			const M = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				W = Object(o.b)(null, (e, t) => {
					let {
						subredditId: r
					} = t;
					return {
						updateSortPreference: (t, s) => {
							if (r) {
								const n = Object(i.c)({
									sort: t,
									timeSort: s
								});
								e(Object(d.G)(r, n))
							}
						}
					}
				});
			class H extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
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
						countrySort: r,
						disabled: s = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(F.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(R, {
						baseUrl: e,
						disabled: s,
						geopopularSort: r,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !o && n.a.createElement(u.a, {
						className: F.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = M(W(Object(c.c)(H)))
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/app/strings/index.ts"),
				l = r("./src/config.ts"),
				m = r("./src/higherOrderComponents/asTooltip.tsx"),
				u = r("./src/lib/classNames/index.ts"),
				p = r("./src/lib/constants/index.ts"),
				b = r("./src/reddit/actions/tooltip.ts"),
				x = r("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = r("./src/reddit/constants/componentSizes.ts"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/controls/Dropdown/index.tsx"),
				O = r("./src/reddit/controls/InternalLink/index.tsx"),
				y = r("./src/reddit/icons/fonts/Menu/index.tsx"),
				w = r("./src/reddit/models/Profile/index.ts"),
				E = r("./src/reddit/featureFlags/index.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/userPrefs.ts"),
				_ = r("./src/reddit/i18n/utils.ts"),
				C = r("./src/reddit/components/ProfileNavMenu/index.m.less"),
				j = r.n(C);
			const L = Object(f.t)({
					routeName: f.S,
					privateListingType: f.i
				}),
				P = Object(d.c)({
					isDropdownMenuOpen: e => Object(v.a)(e) === k,
					isOwnProfile: (e, t) => Object(N.J)(e, t.profileName),
					language: N.O,
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: S.b
				}),
				I = Object(m.a)(h.a),
				k = "profile-nav-menu-tooltip";
			t.a = L(Object(a.b)(P, e => ({
				toggleTooltip: t => e(Object(b.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: r,
					language: s,
					privateListingType: n,
					profileName: a,
					routeName: i,
					toggleTooltip: d,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: l
				} = e;
				return o.a.createElement("div", {
					className: j.a.container
				}, o.a.createElement(x.a, {
					bladeOpen: !1,
					offsetLeft: l ? g.u : 0,
					render: () => o.a.createElement(o.a.Fragment, null, B({
						language: s,
						profileName: a,
						isOwnProfile: r,
						routeName: i,
						privateListingType: n,
						isSnoovatar30Enabled: c
					}).map(e => o.a.createElement(T, e)), o.a.createElement("button", {
						className: Object(u.a)(j.a.mainLink, j.a.overflowMenuButton),
						id: k,
						onClick: () => d(k)
					}, o.a.createElement(y.a, null)), o.a.createElement(I, {
						className: j.a.dropdown,
						isOpen: t,
						tooltipId: k
					}, R({
						language: s,
						profileName: a,
						isOwnProfile: r,
						routeName: i,
						privateListingType: n
					}).map(e => o.a.createElement(A, e))))
				}))
			}));
			const T = e => {
					let {
						hideOnNarrow: t,
						isActive: r,
						text: s,
						url: n,
						internal: a
					} = e;
					return a ? o.a.createElement(O.a, {
						className: Object(u.a)(j.a.mainLink, {
							[j.a.hideOnNarrow]: !!t,
							[j.a.isActive]: r
						}),
						to: n
					}, s) : o.a.createElement("a", {
						className: Object(u.a)(j.a.mainLink, {
							[j.a.hideOnNarrow]: !!t,
							[j.a.isActive]: r
						}),
						href: n
					}, s)
				},
				A = e => {
					let {
						isActive: t,
						internal: r,
						key: s,
						url: n,
						showOnNarrow: a,
						text: d
					} = e;
					return r ? o.a.createElement(i.a, {
						className: Object(u.a)(j.a.dropdownLink, {
							[j.a.isActive]: t,
							[j.a.showOnNarrow]: !!a
						}),
						to: n,
						key: s,
						rel: "nofollow",
						role: "listitem"
					}, d) : o.a.createElement("a", {
						className: Object(u.a)(j.a.dropdownLink, {
							[j.a.showOnNarrow]: !!a
						}),
						href: n,
						key: s,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, d)
				},
				B = e => {
					let {
						language: t,
						profileName: r,
						isOwnProfile: n,
						routeName: o,
						privateListingType: a,
						isSnoovatar30Enabled: i
					} = e;
					const d = n ? [{
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Saved,
						key: "profile.saved",
						text: Object(c.a)(t, "profile.sections.saved"),
						url: "/user/".concat(r, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(r, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(r, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(r, "/downvoted/")
					}] : [];
					n ? (d.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(r, "/gilded/")
					}), d.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.GivenGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(r, "/gilded/given/")
					})) : d.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(r, "/gilded/")
					});
					const m = i ? [{
						internal: !0,
						isActive: o === p.Ab.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(_.c)("Snoobuilder"),
						url: "/user/".concat(r, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: o === p.Ab.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(c.a)(t, "profile.overview"),
						url: "/user/".concat(r, "/")
					}, {
						internal: !0,
						isActive: o === p.Ab.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(c.a)(t, "profile.posts"),
						url: "/user/".concat(r, "/posts/")
					}, {
						internal: !0,
						isActive: o === p.Ab.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(c.a)(t, "profile.comments"),
						url: "/user/".concat(r, "/comments/")
					}, ...m, ...d]
				},
				R = e => {
					let {
						language: t,
						profileName: r,
						isOwnProfile: n,
						routeName: o,
						privateListingType: a
					} = e;
					const i = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(r, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(r, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(r, "/downvoted/")
					}] : [];
					return n ? (i.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(r, "/gilded/")
					}), i.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Ab.PROFILE_PRIVATE && a === w.a.GivenGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(r, "/gilded/given/")
					}), i) : [...i, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(r, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/reddit/components/SidebarContainer/index.tsx"),
				i = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = r("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = r("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				u = r("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = r("./src/reddit/constants/posts.ts");
			const b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("reddit-components-ProfileIdCard").then(r.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				x = e => o.a.createElement(a.a, {
					className: e.className
				}, o.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), o.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), o.a.createElement(i.a, {
					profileName: e.profileName
				}), o.a.createElement(d.a, {
					profileName: e.profileName
				}), o.a.createElement(c.a, null, o.a.createElement(m.a, {
					profileName: e.profileName
				})), o.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			x.defaultProps = {
				isOverlay: !1
			}, t.a = x
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, r) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/take.js"),
				n = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/app/strings/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				m = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = r("./src/reddit/layout/row/Inline/index.tsx"),
				x = r("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = r.n(f),
				O = r("./src/lib/lessComponent.tsx");
			const y = 10,
				w = O.a.wrapped(u.n, "TertiaryButton", h.a);
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: r
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && r && r()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: r,
							onLoadMore: s,
							pending: n
						} = this.props, o = !e || t && s ? Object(c.a)(r, "sidebar.widgets.expandableList.viewMore") : Object(c.a)(r, "sidebar.widgets.expandableList.viewLess");
						return a.a.createElement(w, {
							onClick: this.onButtonClick
						}, n ? a.a.createElement(p.a, {
							sizePx: y
						}) : o)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: r,
						items: s,
						minimizedLength: o,
						renderItem: i,
						title: d
					} = this.props, {
						expanded: c
					} = this.state, l = s.length > o || t, u = (!l || c ? s : n()(s, o)).map(e => i({
						item: e
					}));
					return a.a.createElement(m.a, {
						className: e,
						headerButton: r,
						title: d
					}, u, a.a.createElement(b.a, null, a.a.createElement(x.a, null, l && this.renderToggleButton())))
				}
			}
			E.defaultProps = {
				minimizedLength: l.Fb
			};
			const v = Object(d.c)({
				language: g.O
			});
			t.a = Object(i.b)(v)(E)
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/app/strings/index.ts"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = r("./src/reddit/models/User/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/subscriptions.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				g = r.n(x);
			const f = Object(a.c)({
					currentUser: b.i,
					language: b.O,
					moderated: u.n,
					subscriptions: p.f,
					hasMoreModerated: u.d,
					loadMorePending: u.a
				}),
				h = Object(o.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, r) => Object.assign({}, r, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				O = e => {
					let {
						item: t
					} = e;
					return n.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = h(e => {
				const {
					currentUser: t,
					language: r,
					moderated: s,
					profileName: o,
					subscriptions: a,
					hasMoreModerated: d,
					onLoadMore: l,
					loadMorePending: u
				} = e;
				if (0 === s.length) return null;
				const p = t && Object(m.f)(t).toLowerCase() === o.toLowerCase() ? Object(i.a)(r, "profile.moderatedSubredditsYours") : Object(i.a)(r, "profile.moderatedSubreddits"),
					b = function(e, t, r) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: r,
							sendEvent: () => void 0
						}))
					}(s, new Set(a), r);
				return n.a.createElement(c.a, {
					className: g.a.container,
					title: p,
					items: b,
					renderItem: O,
					hasMoreItems: d,
					onLoadMore: l,
					pending: u
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, r) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = r("./src/reddit/i18n/components.tsx"),
				u = r("./src/reddit/i18n/utils.ts"),
				p = r("./src/reddit/selectors/profile.ts"),
				b = r("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				x = r.n(b);
			const g = Object(i.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				f = Object(o.b)(g, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.e)(t.profileName, !0))
				}), (e, t, r) => Object.assign({}, r, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				h = e => {
					let {
						item: t
					} = e;
					return n.a.createElement("div", {
						className: x.a.listItem,
						key: t.url
					}, n.a.createElement("img", {
						className: x.a.icon,
						src: t.icon
					}), n.a.createElement("div", {
						className: x.a.description
					}, n.a.createElement(a.a, {
						className: x.a.name,
						to: t.url
					}, t.displayText), n.a.createElement("div", {
						className: x.a.meta
					}, n.a.createElement(m.c, null, n.a.createElement(m.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", n.a.createElement(m.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: r,
					multireddits: s,
					onLoadMore: o,
					profileName: a
				} = e;
				return s && s.length ? n.a.createElement(l.a, null, n.a.createElement(c.a, {
					hasMoreItems: t,
					items: s,
					onLoadMore: o,
					pending: r,
					renderItem: h,
					title: Object(u.c)("Public custom feeds by u/".concat(Object(u.b)("username", a)))
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = r.n(s),
				o = r("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, r) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = r("./src/reddit/controls/OutboundLink/index.tsx"),
				c = r("./src/reddit/controls/Typography/index.tsx"),
				l = r("./src/reddit/i18n/utils.ts"),
				m = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = r("./node_modules/lodash/isEqual.js"),
				p = r.n(u);
			const b = Object(a.b)(a.d, p.a);
			var x = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				f = r.n(g),
				h = r("./src/lib/lessComponent.tsx");
			const O = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(x.r)(e, Object(x.m)(e, r))
				}
			}, b);
			t.a = Object(o.b)(O)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : n.a.createElement(i.a, {
					title: Object(l.c)("Trophy Case (".concat(Object(l.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: S
				})
			});
			const y = h.a.wrapped(m.a, "TrophyItem", f.a),
				w = h.a.div("TrophyIcon", f.a),
				E = h.a.h5("TrophyName", f.a),
				v = h.a.div("TrophyContent", f.a),
				N = h.a.wrapped(c.f, "Description", f.a);

			function S(e) {
				let {
					item: t
				} = e;
				const r = n.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return n.a.createElement(y, {
					key: t.id
				}, n.a.createElement(w, null, t.url ? n.a.createElement(d.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, r) : r), n.a.createElement(v, null, n.a.createElement(E, null, t.name), n.a.createElement(N, null, t.description)))
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(i),
				c = function(e, t) {
					var r = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
					}
					return r
				};
			const l = o.a.div("WidgetBackground", d.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, r = c(e, ["children"]);
					return n.a.createElement("div", r, n.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/app/strings/index.ts"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/prettyPrintNumber/index.ts"),
				m = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				p = r("./src/reddit/actions/subscription/index.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const x = Object(i.c)({
				language: b.O
			});
			var g = Object(o.b)(x, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				f = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				O = r("./src/reddit/controls/Button/index.tsx"),
				y = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				w = r("./src/reddit/i18n/utils.ts"),
				E = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				N = r("./src/reddit/models/Flair/index.ts"),
				S = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = r.n(_);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			r.d(t, "b", (function() {
				return L
			})), r.d(t, "a", (function() {
				return I
			}));
			const L = e => n.a.createElement(f.a, {
					className: Object(c.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, n.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? n.a.createElement(y.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : n.a.createElement(n.a.Fragment, null, e.isError ? n.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || Object(w.c)("Something went wrong.")) : n.a.createElement(n.a.Fragment, null, e.communities.map(t => n.a.createElement(I, j({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && n.a.createElement(O.n, {
					className: C.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(i.c)({
					hideNSFWPref: b.y,
					language: b.O
				}),
				I = Object(o.b)(P)(e => n.a.createElement("div", {
					className: C.a.communityItemContainer
				}, n.a.createElement(v.a, {
					widthRight: h.t
				}, n.a.createElement("div", {
					className: C.a.iconContainer
				}, e.communityIcon || e.iconUrl ? n.a.createElement("img", {
					className: C.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : n.a.createElement(E.a, {
					className: C.a.planetIcon,
					"data-redditstyle": !0
				})), n.a.createElement("div", {
					className: C.a.communityDescriptionContainer
				}, n.a.createElement(a.a, {
					className: C.a.communityName,
					to: Object(S.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(S.b)(e.name, e.type)), n.a.createElement("div", {
					className: C.a.communityInfoContainer
				}, !!e.subscribers && n.a.createElement("p", {
					className: C.a.subscriberCount
				}, Object(d.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && n.a.createElement(m.b, {
					flair: {
						type: N.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? n.a.createElement(y.a, {
					className: Object(c.a)(C.a.communityCta, C.a.smallLoadingIcon),
					sizePx: 12
				}) : n.a.createElement(O.n, {
					className: Object(c.a)(C.a.communityCta, {
						[C.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? n.a.createElement(g, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : n.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && n.a.createElement("p", {
					title: e.description,
					className: C.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/posts.ts"),
				n = r("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === s.a.PROFILE ? Object(n.c)(e) : Object(n.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, r) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, r) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/components/Widgets/Base/index.tsx"),
				l = r("./src/reddit/constants/posts.ts"),
				m = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = r("./src/reddit/i18n/components.tsx"),
				p = r("./src/reddit/models/ExternalAccount/index.ts"),
				b = r("./src/reddit/selectors/externalAccount.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/controls/OutboundLink/index.tsx"),
				f = r("./src/reddit/i18n/utils.ts"),
				h = r("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				O = r("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				w = r("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = r.n(w);
			var v = e => {
					const {
						account: t,
						clickEvent: r,
						provider: s
					} = e;
					let o, a = t.username,
						i = "";
					return s !== p.a.Twitter ? null : (o = n.a.createElement(O.a, {
						className: E.a.twitterLogo
					}), i = Object(f.c)("View on Twitter"), a = "@".concat(t.username), n.a.createElement(y.a, null, n.a.createElement("span", {
						className: E.a.icon
					}, o), n.a.createElement(g.a, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: r
					}, n.a.createElement("div", {
						className: E.a.linkTitle
					}, n.a.createElement("span", {
						className: E.a.name
					}, a), n.a.createElement(h.a, {
						className: E.a.linkIcon
					})), n.a.createElement("div", {
						className: E.a.linkDescription
					}, i))))
				},
				N = r("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				S = r.n(N);
			const _ = Object(a.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: r
						} = t;
						return r.type === l.a.PROFILE ? Object(b.c)(e, {
							profileName: r.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: r
						} = t;
						return r.type === l.a.PROFILE ? Object(x.cb)(e, {
							userName: r.name
						}) : null
					}
				}),
				C = Object(o.b)(_, e => ({
					trackTwitterAccountClicked: t => e((e, r) => m.k(r(), t))
				}), (e, t, r) => Object.assign({}, r, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(d.c)(C(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: r
				} = e;
				return r ? n.a.createElement(i.a, null, n.a.createElement(c.b, null, n.a.createElement(c.a, null, n.a.createElement(u.c, null, "Connected accounts")), r && n.a.createElement("div", {
					className: S.a.account
				}, n.a.createElement(v, {
					provider: p.a.Twitter,
					account: r,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, r) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = r.n(n);
			t.a = s.a.div("rightAligned", o.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, r) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(i);
			t.a = Object(o.a)(e => n.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
				}
				return r
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: r,
					heightLeft: s,
					widthLeft: o,
					gutter: i
				} = e, m = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return n.a.createElement("div", c({
					className: Object(a.a)(d.a.expandRightContainer, t)
				}, m), n.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: o,
						height: s,
						marginRight: i
					}
				}, Array.isArray(r) && r[0]), n.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(r) && r[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, r) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/pages/ErrorPages/index.m.less"),
				d = r.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(a.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(a.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/es6.regexp.match.js"), r("./node_modules/core-js/modules/es6.array.sort.js"), r("./node_modules/core-js/modules/es6.regexp.search.js");
			var s = r("./node_modules/lodash/fromPairs.js"),
				n = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/extractQueryParams/index.ts"),
				m = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/pages/profilePosts.ts"),
				p = r("./src/reddit/actions/pages/profileShared.ts"),
				b = r("./src/reddit/components/ContentGate/index.tsx"),
				x = r("./src/reddit/components/EmptyProfile/index.ts"),
				g = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = r("./src/reddit/components/JumpToContent/index.tsx"),
				h = r("./src/reddit/components/LayoutNavigation/index.tsx"),
				O = r("./src/reddit/components/ListingPostList/index.tsx"),
				y = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				w = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				E = r("./src/reddit/contexts/PageLayer/index.tsx"),
				v = r("./src/reddit/helpers/trackers/screenview.ts"),
				N = r("./src/reddit/layout/page/Listing/index.tsx"),
				S = r("./src/reddit/models/ContentGate.ts"),
				_ = r("./src/reddit/pages/ErrorPages/index.tsx"),
				C = r("./src/reddit/selectors/profile.ts"),
				j = r("./src/reddit/selectors/user.ts");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(E.t)(),
				I = Object(d.a)(E.B, j.T, (e, t) => {
					let {
						location: r
					} = t;
					return n()([...Object(l.a)(r.search)])
				}, E.L, (e, t) => {
					let {
						match: r
					} = t;
					return r.params.profileName
				}, (e, t) => {
					let {
						match: r
					} = t;
					return Object(C.j)(e, {
						profileName: r.params.profileName
					})
				}, j.G, (e, t) => {
					let {
						match: r
					} = t;
					return Object(j.f)(e, c.Tb + r.params.profileName)
				}, (e, t, r, s, n, o, a, i) => {
					const {
						sort: d,
						t: c
					} = Object(p.b)(r), l = Object(m.a)("u_".concat(n), d, r);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: s,
						listingKey: l,
						profileName: n,
						sort: d,
						timeSort: c
					}
				}),
				k = Object(i.b)(I, (e, t) => ({
					onLoadMore: () => e(u.g()),
					onLayoutChange: () => e(u.h(Object.assign({}, t.match, {
						queryParams: n()([...Object(l.a)(t.location.search)])
					})))
				}));
			class T extends a.a.Component {
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isLoggedIn: r,
						isOwnProfile: s,
						isProfileNSFW: n,
						listingKey: o,
						onLoadMore: i,
						onLayoutChange: d,
						pageLayer: l,
						profileName: m,
						sort: u,
						timeSort: p
					} = this.props;
					if (!l || !m) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return a.a.createElement(b.a, {
						contentGateType: e.profileDeleted ? S.a.ProfileDeleted : S.a.ProfileSuspended,
						profileName: m
					});
					if (403 === l.status) return a.a.createElement(_.a, null);
					if (404 === l.status) return a.a.createElement(b.a, {
						contentGateType: S.a.ProfileDoesNotExist,
						profileName: m
					});
					const E = m.toLowerCase(),
						C = "/user/".concat(m, "/posts/"),
						j = {
							listingKey: o,
							listingName: E
						};
					if (!t && n && !s) return a.a.createElement(b.a, {
						contentGateType: S.a.Nsfw,
						subredditName: m
					});
					const P = !r,
						I = {
							sort: u,
							baseUrl: C,
							sortOptions: c.sb,
							subredditId: this.props.subredditId,
							timeSort: p
						};
					return a.a.createElement(N.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(y.a, {
							profileName: m
						}), !P && a.a.createElement(h.a, I)),
						content: a.a.createElement(a.a.Fragment, null, P && a.a.createElement(g.a, I), a.a.createElement(f.a, null), a.a.createElement(O.a, {
							listingKey: o,
							listingName: E,
							listingViewed: (e, t) => Object(v.l)(o, u, t, e, p),
							noPostsComponent: () => a.a.createElement(x.c, {
								profileName: m,
								timeSort: p
							}),
							onLoadMore: i,
							onTryAgain: d,
							inSubredditOrProfile: !1
						})),
						sidebar: a.a.createElement(w.a, L({}, j, {
							profileName: m
						}))
					})
				}
			}
			t.default = P(k(T))
		}
	}
]);
//# sourceMappingURL=ProfilePosts.d5d4dbfe9c243e8e3a43.js.map