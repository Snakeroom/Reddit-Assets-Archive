// https://www.redditstatic.com/desktop2x/EconManagement2.dba4f9d8692d73c73eae.js
// Retrieved at 7/5/2022, 2:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconManagement2"], {
		"./src/reddit/controls/SearchBar/index.m.less": function(e, a, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, a, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				r = n.n(t),
				s = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/Search/index.tsx"),
				c = n("./src/reddit/controls/SearchBar/index.m.less"),
				i = n.n(c);
			a.a = e => r.a.createElement("div", {
				className: Object(s.a)(i.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				className: Object(s.a)(i.a.search, {
					[i.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(s.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, r.a.createElement(l.a, null)))
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less": function(e, a, n) {
			e.exports = {
				profile: "_1rM5svrNp7Agn4Ymy77Pti",
				userOverview: "_3sF4itWYKet4hcMAXSOWGf",
				row: "_2cp_v4M7xWej47OtObRK8I"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less": function(e, a, n) {
			e.exports = {
				resultsContainer: "_3tCIpAJ8LhiwOYmM6IHm77"
			}
		},
		"./src/reddit/pages/EconManagement2/index.m.less": function(e, a, n) {
			e.exports = {
				container: "_1rVWHZMJ7WaUUW_ohqHk5F",
				searchContainer: "_3RbBkhd5fe6vUwr7MsYr78",
				searchBar: "_3_E8ERt-gZkEN9R-vzLd_Y"
			}
		},
		"./src/reddit/pages/EconManagement2/index.tsx": function(e, a, n) {
			"use strict";
			n.r(a);
			var t = n("./node_modules/react/index.js"),
				r = n.n(t),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/economics/econManagement/index.ts"),
				c = n("./src/reddit/controls/SearchBar/index.tsx"),
				i = n("./src/reddit/pages/EconManagement2/index.m.less"),
				o = n.n(i);
			const d = () => {
				const [e, a] = Object(t.useState)(""), n = Object(s.d)();
				return r.a.createElement(c.a, {
					className: o.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && n(Object(l.d)(e))
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e,
					placeholder: "Username or user id"
				})
			};
			var m = n("./src/reddit/selectors/econManagement.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				E = n.n(v);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				const [a, n] = Object(t.useState)(), [s, l] = Object(t.useState)(), c = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => r.a.createElement("p", {
					key: a
				}, r.a.createElement("strong", null, a, ": "), r.a.createElement("span", null, e[a] + "")));
				return r.a.createElement("div", {
					className: E.a.profile
				}, r.a.createElement("div", {
					className: E.a.userOverview
				}, r.a.createElement("h4", null, r.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && r.a.createElement("p", null, e.email), r.a.createElement("p", null, e.id)), r.a.createElement("div", {
					className: E.a.userOverview
				}, c), r.a.createElement("div", {
					className: E.a.userOverview
				}, r.a.createElement("div", {
					className: E.a.row
				}, r.a.createElement("input", {
					type: "number",
					value: a || "",
					onChange: e => {
						var a;
						return n(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					},
					placeholder: h._("Amount", null, {
						hk: "3qQoll"
					}),
					className: E.a.coinsInput
				}), r.a.createElement(u.t, {
					priority: u.c.Primary,
					disabled: !a
				}, h._("Give Coins", null, {
					hk: "2DtgNR"
				})), r.a.createElement(u.f, {
					disabled: !a
				}, h._("Remove Coins", null, {
					hk: "24ePW3"
				}))), r.a.createElement("div", {
					className: E.a.row
				}, r.a.createElement("input", {
					type: "number",
					placeholder: h._("Days", null, {
						hk: "2NTZUs"
					}),
					value: s || "",
					className: E.a.coinsInput,
					onChange: e => {
						var a;
						return l(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					}
				}), r.a.createElement(u.t, {
					priority: u.c.Primary,
					disabled: !s
				}, h._("Give Premium", null, {
					hk: "yy9AK"
				}))), r.a.createElement("div", {
					className: E.a.row
				}, r.a.createElement(u.f, null, h._("Cancel Subscription", null, {
					hk: "1myJLR"
				})))))
			};
			var g = n("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				_ = n.n(g);
			const x = () => {
				const e = Object(s.e)(m.b);
				return r.a.createElement("div", {
					className: _.a.resultsContainer
				}, e && r.a.createElement(p, (e => {
					const a = e.userData.value,
						n = e.thingState.value;
					return {
						createdAt: a.createdAt.value,
						email: a.email.value,
						id: a.id.value,
						isDeleted: a.isDeleted.value,
						suspended: a.suspended.value,
						username: a.username.value,
						isEmployee: a.isEmployee.value,
						isPremium: n.isPremium.value,
						goldSubscriptionId: n.goldSubscriptionId.value,
						premiumExpiration: n.premiumExpirationThing.value
					}
				})(e.details)))
			};
			a.default = () => r.a.createElement("div", {
				className: o.a.container
			}, r.a.createElement("div", {
				className: o.a.searchContainer
			}, r.a.createElement(d, null)), r.a.createElement(x, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.dba4f9d8692d73c73eae.js.map