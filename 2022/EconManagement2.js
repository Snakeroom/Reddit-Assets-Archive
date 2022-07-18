// https://www.redditstatic.com/desktop2x/EconManagement2.4e8288c960d151b39886.js
// Retrieved at 7/18/2022, 1:20:06 PM by Reddit Dataminer v1.0.0
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
				s = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/icons/svgs/Search/index.tsx"),
				c = t("./src/reddit/controls/SearchBar/index.m.less"),
				i = t.n(c);
			a.a = e => s.a.createElement("div", {
				className: Object(r.a)(i.a.searchContainer, e.className)
			}, s.a.createElement("input", {
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
			}), s.a.createElement("div", {
				className: Object(r.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, s.a.createElement(l.a, null)))
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less": function(e, a, t) {
			e.exports = {
				profile: "_1rM5svrNp7Agn4Ymy77Pti",
				userOverview: "_3sF4itWYKet4hcMAXSOWGf",
				actionButton: "_16CDh24Kw3KEl2-zologPc"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less": function(e, a, t) {
			e.exports = {
				cancelButton: "_29ugRcRoiegbOrGe1lywiO"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less": function(e, a, t) {
			e.exports = {
				table: "_1AoV8bk7iscRTYDyjbtpTp",
				tableHeader: "_2_BVZxRC3qfQKVf77ijXe"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less": function(e, a, t) {
			e.exports = {
				panel: "_21352l_g53uxmxQxQW1sgf",
				tab: "_2R39Uly3qTTZFmZ5QZ6l0u",
				selectedTab: "_3r7w0gW8zielR-Bdf8RTwV",
				tableContainer: "_35SJXfr7sSxdG5ENsPnTXe"
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
				s = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				l = t("./src/reddit/actions/economics/econManagement/index.ts"),
				c = t("./src/reddit/controls/SearchBar/index.tsx"),
				i = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(i);
			const m = () => {
				const [e, a] = Object(n.useState)(""), t = Object(r.d)();
				return s.a.createElement(c.a, {
					className: o.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && t(Object(l.d)(e))
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e,
					placeholder: "Username or user id"
				})
			};
			var u = t("./src/reddit/selectors/econManagement.ts"),
				d = t("./src/reddit/controls/Button/index.tsx"),
				E = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				b = t.n(E);
			const {
				fbt: p
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var v;
			! function(e) {
				e.GIVE_PREMIUM = "Give premium", e.REMOVE_PREMIUM = "Remove premium", e.CANCEL_SUBSCRIPTION = "Cancel recurring", e.ISSUE_REFUND = "Cancel payment"
			}(v || (v = {}));
			const g = e => {
				const [a, t] = Object(n.useState)(), [c, i] = Object(n.useState)(), o = Object(r.d)(), m = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => s.a.createElement("p", {
					key: a
				}, s.a.createElement("strong", null, a, ": "), s.a.createElement("span", null, e[a] + "")));
				return s.a.createElement("div", {
					className: b.a.profile
				}, s.a.createElement("div", {
					className: b.a.userOverview
				}, s.a.createElement("h4", null, s.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && s.a.createElement("p", null, e.email), s.a.createElement("p", null, e.id)), s.a.createElement("div", {
					className: b.a.userOverview
				}, m), s.a.createElement("div", {
					className: b.a.userOverview
				}, s.a.createElement("table", null, s.a.createElement("tbody", null, s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("input", {
					min: 0,
					type: "number",
					value: a || "",
					onChange: e => {
						var a;
						return t(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					},
					placeholder: p._("Amount", null, {
						hk: "3qQoll"
					}),
					className: b.a.coinsInput
				})), s.a.createElement("td", null, s.a.createElement(d.t, {
					className: b.a.actionButton,
					priority: d.c.Primary,
					disabled: !a || a < 1
				}, p._("Give Coins", null, {
					hk: "2DtgNR"
				}))), s.a.createElement("td", null, s.a.createElement(d.f, {
					className: b.a.actionButton,
					disabled: !a || a < 1
				}, p._("Remove Coins", null, {
					hk: "24ePW3"
				})))), s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("input", {
					min: 0,
					type: "number",
					placeholder: p._("Days", null, {
						hk: "2NTZUs"
					}),
					value: c || "",
					className: b.a.coinsInput,
					onChange: e => {
						var a;
						return i(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					}
				})), s.a.createElement("td", null, s.a.createElement(d.t, {
					className: b.a.actionButton,
					priority: d.c.Primary,
					disabled: !c || c < 1,
					onClick: a => {
						c && confirm(`Give ${c} day${c>1?"s":""} of premium to ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.GIVE_PREMIUM, {
							Days: c
						}))
					}
				}, p._("Give Premium", null, {
					hk: "yy9AK"
				}))), s.a.createElement("td", null, s.a.createElement(d.f, {
					className: b.a.actionButton,
					onClick: a => {
						confirm(`Remove premium from ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.REMOVE_PREMIUM))
					}
				}, p._("Remove Premium", null, {
					hk: "2uqn0o"
				}))))))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var _ = t("./src/lib/classNames/index.ts"),
				h = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				M = t.n(h);
			const {
				fbt: S
			} = t("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				const a = Object(r.d)();
				return s.a.createElement("tr", null, C.map(a => s.a.createElement("td", {
					key: a
				}, e.subscription[a].value)), s.a.createElement("td", null, s.a.createElement("button", {
					className: M.a.cancelButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(l.a)(`Order:${n}`, v.CANCEL_SUBSCRIPTION))
					}
				}, S._("Cancel Subscription", null, {
					hk: "3pBm2E"
				}))))
			};
			var R = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less"),
				N = t.n(R);
			const {
				fbt: f
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = ["grace_period", "paid_status", "started", "state", "subscription_data", "subscription_id", "valid_until", "will_renew"], O = s.a.createElement("thead", {
				className: N.a.tableHeader
			}, s.a.createElement("tr", null, C.map(e => s.a.createElement("th", {
				key: e
			}, e)), s.a.createElement("th", null, f._("actions", null, {
				hk: "1bCoG9"
			})))), T = e => s.a.createElement("table", {
				className: N.a.table
			}, O, s.a.createElement("tbody", null, e.subscriptions.map(e => s.a.createElement(x, {
				subscription: e,
				key: e.subscription_id.value
			}))));
			var y, P = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				I = t.n(P);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(y || (y = {}));
			const j = e => {
				const [a, t] = Object(n.useState)(y.ORDERS), r = Object.values(y).map(e => s.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(_.a)(I.a.tab, {
						[I.a.selectedTab]: a === e
					})
				}, e));
				return s.a.createElement("div", {
					className: I.a.panel
				}, s.a.createElement("nav", null, r), s.a.createElement("div", {
					className: I.a.tableContainer
				}, (a => {
					switch (a) {
						case y.SUBSCRIPTIONS:
							return s.a.createElement(T, {
								subscriptions: e.subscriptions
							});
						default:
							return null
					}
				})(a)))
			};
			var k = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				A = t.n(k);
			const B = () => {
				const e = Object(r.e)(u.b);
				return s.a.createElement("div", null, e && s.a.createElement(s.a.Fragment, null, s.a.createElement(g, (e => {
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
				})(e.details)), s.a.createElement("div", {
					className: A.a.moreDetailsSection
				}, s.a.createElement(j, {
					subscriptions: e.details.subscriptions.value
				}))))
			};
			a.default = () => s.a.createElement("div", {
				className: o.a.container
			}, s.a.createElement("div", {
				className: o.a.searchContainer
			}, s.a.createElement(m, null)), s.a.createElement(B, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.4e8288c960d151b39886.js.map