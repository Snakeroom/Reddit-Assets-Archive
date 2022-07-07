// https://www.redditstatic.com/desktop2x/EconManagement2.2d18b64d43fc5bc8fdeb.js
// Retrieved at 7/7/2022, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconManagement2"], {
		"./src/reddit/controls/SearchBar/index.m.less": function(e, a, t) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				s = t("./src/reddit/icons/svgs/Search/index.tsx"),
				c = t("./src/reddit/controls/SearchBar/index.m.less"),
				i = t.n(c);
			a.a = e => l.a.createElement("div", {
				className: Object(r.a)(i.a.searchContainer, e.className)
			}, l.a.createElement("input", {
				className: Object(r.a)(i.a.search, {
					[i.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), l.a.createElement("div", {
				className: Object(r.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, l.a.createElement(s.a, null)))
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less": function(e, a, t) {
			e.exports = {
				profile: "_1rM5svrNp7Agn4Ymy77Pti",
				userOverview: "_3sF4itWYKet4hcMAXSOWGf",
				row: "_2cp_v4M7xWej47OtObRK8I"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less": function(e, a, t) {
			e.exports = {
				panel: "_21352l_g53uxmxQxQW1sgf",
				tab: "_2R39Uly3qTTZFmZ5QZ6l0u",
				selectedTab: "_3r7w0gW8zielR-Bdf8RTwV"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less": function(e, a, t) {
			e.exports = {
				moreDetailsSection: "T_ZNI6kVXFbDhEXsKVm90"
			}
		},
		"./src/reddit/pages/EconManagement2/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_1rVWHZMJ7WaUUW_ohqHk5F",
				searchContainer: "_3RbBkhd5fe6vUwr7MsYr78",
				searchBar: "_3_E8ERt-gZkEN9R-vzLd_Y"
			}
		},
		"./src/reddit/pages/EconManagement2/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				s = t("./src/reddit/actions/economics/econManagement/index.ts"),
				c = t("./src/reddit/controls/SearchBar/index.tsx"),
				i = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(i);
			const u = () => {
				const [e, a] = Object(n.useState)(""), t = Object(r.d)();
				return l.a.createElement(c.a, {
					className: o.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && t(Object(s.d)(e))
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e,
					placeholder: "Username or user id"
				})
			};
			var m = t("./src/reddit/selectors/econManagement.ts"),
				d = t("./src/reddit/controls/Button/index.tsx"),
				E = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				h = t.n(E);
			const {
				fbt: p
			} = t("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				const [a, t] = Object(n.useState)(), [r, s] = Object(n.useState)(), c = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => l.a.createElement("p", {
					key: a
				}, l.a.createElement("strong", null, a, ": "), l.a.createElement("span", null, e[a] + "")));
				return l.a.createElement("div", {
					className: h.a.profile
				}, l.a.createElement("div", {
					className: h.a.userOverview
				}, l.a.createElement("h4", null, l.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && l.a.createElement("p", null, e.email), l.a.createElement("p", null, e.id)), l.a.createElement("div", {
					className: h.a.userOverview
				}, c), l.a.createElement("div", {
					className: h.a.userOverview
				}, l.a.createElement("div", {
					className: h.a.row
				}, l.a.createElement("input", {
					type: "number",
					value: a || "",
					onChange: e => {
						var a;
						return t(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					},
					placeholder: p._("Amount", null, {
						hk: "3qQoll"
					}),
					className: h.a.coinsInput
				}), l.a.createElement(d.t, {
					priority: d.c.Primary,
					disabled: !a
				}, p._("Give Coins", null, {
					hk: "2DtgNR"
				})), l.a.createElement(d.f, {
					disabled: !a
				}, p._("Remove Coins", null, {
					hk: "24ePW3"
				}))), l.a.createElement("div", {
					className: h.a.row
				}, l.a.createElement("input", {
					type: "number",
					placeholder: p._("Days", null, {
						hk: "2NTZUs"
					}),
					value: r || "",
					className: h.a.coinsInput,
					onChange: e => {
						var a;
						return s(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					}
				}), l.a.createElement(d.t, {
					priority: d.c.Primary,
					disabled: !r
				}, p._("Give Premium", null, {
					hk: "yy9AK"
				}))), l.a.createElement("div", {
					className: h.a.row
				}, l.a.createElement(d.f, null, p._("Cancel Subscription", null, {
					hk: "1myJLR"
				})))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var b = t("./src/lib/classNames/index.ts");
			const {
				fbt: _
			} = t("./node_modules/fbt/lib/FbtPublic.js"), g = l.a.createElement("thead", null, l.a.createElement("tr", null, l.a.createElement("th", null, _._("grace_period", null, {
				hk: "25Ez2p"
			})), l.a.createElement("th", null, _._("paid_period", null, {
				hk: "3biVSJ"
			})), l.a.createElement("th", null, _._("started", null, {
				hk: "1Dcznw"
			})), l.a.createElement("th", null, _._("state", null, {
				hk: "4spQX8"
			})), l.a.createElement("th", null, _._("subscription_status", null, {
				hk: "3fQCya"
			})), l.a.createElement("th", null, _._("subscription_id", null, {
				hk: "He5mR"
			})), l.a.createElement("th", null, _._("valid_until", null, {
				hk: "3kBqUJ"
			})), l.a.createElement("th", null, _._("will_renew", null, {
				hk: "2afdap"
			})))), x = e => l.a.createElement("table", null, g, l.a.createElement("tbody", null, e.subscriptions.map(e => l.a.createElement("tr", {
				key: e.subscription_id.value
			}))));
			var S, N = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				R = t.n(N);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(S || (S = {}));
			const f = e => {
				const [a, t] = Object(n.useState)(S.ORDERS), r = Object.values(S).map(e => l.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(b.a)(R.a.tab, {
						[R.a.selectedTab]: a === e
					})
				}, e));
				return l.a.createElement("div", {
					className: R.a.panel
				}, l.a.createElement("nav", null, r), (a => {
					switch (a) {
						case S.SUBSCRIPTIONS:
							return l.a.createElement(x, {
								subscriptions: e.subscriptions
							});
						default:
							return null
					}
				})(a))
			};
			var M = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				y = t.n(M);
			const O = () => {
				const e = Object(r.e)(m.b);
				return l.a.createElement("div", null, e && l.a.createElement(l.a.Fragment, null, l.a.createElement(v, (e => {
					const a = e.userData.value,
						t = e.thingState.value;
					return {
						createdAt: a.createdAt.value,
						email: a.email.value,
						id: a.id.value,
						isDeleted: a.isDeleted.value,
						suspended: a.suspended.value,
						username: a.username.value,
						isEmployee: a.isEmployee.value,
						isPremium: t.isPremium.value,
						goldSubscriptionId: t.goldSubscriptionId.value,
						premiumExpiration: t.premiumExpirationThing.value
					}
				})(e.details)), l.a.createElement("div", {
					className: y.a.moreDetailsSection
				}, l.a.createElement(f, {
					subscriptions: e.details.subscriptions.value
				}))))
			};
			a.default = () => l.a.createElement("div", {
				className: o.a.container
			}, l.a.createElement("div", {
				className: o.a.searchContainer
			}, l.a.createElement(u, null)), l.a.createElement(O, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.2d18b64d43fc5bc8fdeb.js.map