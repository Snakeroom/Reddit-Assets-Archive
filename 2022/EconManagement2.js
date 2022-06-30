// https://www.redditstatic.com/desktop2x/EconManagement2.8d1ccd7bc064faadccf4.js
// Retrieved at 6/30/2022, 4:40:24 PM by Reddit Dataminer v1.0.0
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
			var r = n("./node_modules/react/index.js"),
				t = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Search/index.tsx"),
				i = n("./src/reddit/controls/SearchBar/index.m.less"),
				l = n.n(i);
			a.a = e => t.a.createElement("div", {
				className: Object(s.a)(l.a.searchContainer, e.className)
			}, t.a.createElement("input", {
				className: Object(s.a)(l.a.search, {
					[l.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), t.a.createElement("div", {
				className: Object(s.a)(l.a.searchIconContainer, {
					[l.a.mClickable]: !!e.onSearch,
					[l.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, t.a.createElement(c.a, null)))
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less": function(e, a, n) {
			e.exports = {
				profile: "_1rM5svrNp7Agn4Ymy77Pti",
				userOverview: "_3sF4itWYKet4hcMAXSOWGf"
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
			var r = n("./node_modules/react/index.js"),
				t = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/economics/econManagement/index.ts"),
				i = n("./src/reddit/controls/SearchBar/index.tsx"),
				l = n("./src/reddit/pages/EconManagement2/index.m.less"),
				o = n.n(l);
			const d = () => {
				const [e, a] = Object(r.useState)(""), n = Object(s.d)();
				return t.a.createElement(i.a, {
					className: o.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && n(Object(c.d)(e))
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e,
					placeholder: "Username or user id"
				})
			};
			var m = n("./src/reddit/selectors/econManagement.ts"),
				u = n("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				E = n.n(u);
			const g = e => {
				const a = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => t.a.createElement("p", {
					key: a
				}, t.a.createElement("strong", null, a, ": "), t.a.createElement("span", null, e[a] + "")));
				return t.a.createElement("div", {
					className: E.a.profile
				}, t.a.createElement("div", {
					className: E.a.userOverview
				}, t.a.createElement("h4", null, t.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && t.a.createElement("p", null, e.email), t.a.createElement("p", null, e.id)), t.a.createElement("div", {
					className: E.a.userOverview
				}, a), t.a.createElement("div", {
					className: E.a.userOverview
				}))
			};
			var h = n("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				v = n.n(h);
			const p = () => {
				const e = Object(s.e)(m.b);
				return t.a.createElement("div", {
					className: v.a.resultsContainer
				}, e && t.a.createElement(g, (e => {
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
			a.default = () => t.a.createElement("div", {
				className: o.a.container
			}, t.a.createElement("div", {
				className: o.a.searchContainer
			}, t.a.createElement(d, null)), t.a.createElement(p, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.8d1ccd7bc064faadccf4.js.map