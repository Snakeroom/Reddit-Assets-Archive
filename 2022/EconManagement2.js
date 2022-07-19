// https://www.redditstatic.com/desktop2x/EconManagement2.70b1676466f67fa5561e.js
// Retrieved at 7/19/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
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
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/icons/svgs/Search/index.tsx"),
				c = t("./src/reddit/controls/SearchBar/index.m.less"),
				i = t.n(c);
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
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less": function(e, a, t) {
			e.exports = {
				profile: "_1rM5svrNp7Agn4Ymy77Pti",
				userOverview: "_3sF4itWYKet4hcMAXSOWGf",
				actionButton: "_16CDh24Kw3KEl2-zologPc"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less": function(e, a, t) {
			e.exports = {
				actionButton: "_2aE7AuFRXc_XH5y45K73ev"
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
				r = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				l = t("./src/reddit/actions/economics/econManagement/index.ts"),
				c = t("./src/reddit/controls/SearchBar/index.tsx"),
				i = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(i);
			const u = () => {
				const [e, a] = Object(n.useState)(""), t = Object(s.d)();
				return r.a.createElement(c.a, {
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
			var m = t("./src/reddit/selectors/econManagement.ts"),
				d = t("./src/reddit/controls/Button/index.tsx"),
				E = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				b = t.n(E);
			const {
				fbt: p
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var v;
			! function(e) {
				e.GIVE_PREMIUM = "Give premium", e.REMOVE_PREMIUM = "Remove premium", e.CANCEL_SUBSCRIPTION = "Cancel recurring", e.ISSUE_REFUND = "Cancel payment", e.TRANSFER_SUBSCRIPTION = "Transfer"
			}(v || (v = {}));
			const _ = e => {
				const [a, t] = Object(n.useState)(), [c, i] = Object(n.useState)(), o = Object(s.d)(), u = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => r.a.createElement("p", {
					key: a
				}, r.a.createElement("strong", null, a, ": "), r.a.createElement("span", null, e[a] + "")));
				return r.a.createElement("div", {
					className: b.a.profile
				}, r.a.createElement("div", {
					className: b.a.userOverview
				}, r.a.createElement("h4", null, r.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && r.a.createElement("p", null, e.email), r.a.createElement("p", null, e.id)), r.a.createElement("div", {
					className: b.a.userOverview
				}, u), r.a.createElement("div", {
					className: b.a.userOverview
				}, r.a.createElement("table", null, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("input", {
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
				})), r.a.createElement("td", null, r.a.createElement(d.t, {
					className: b.a.actionButton,
					priority: d.c.Primary,
					disabled: !a || a < 1
				}, p._("Give Coins", null, {
					hk: "2DtgNR"
				}))), r.a.createElement("td", null, r.a.createElement(d.f, {
					className: b.a.actionButton,
					disabled: !a || a < 1
				}, p._("Remove Coins", null, {
					hk: "24ePW3"
				})))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("input", {
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
				})), r.a.createElement("td", null, r.a.createElement(d.t, {
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
				}))), r.a.createElement("td", null, r.a.createElement(d.f, {
					className: b.a.actionButton,
					onClick: a => {
						confirm(`Remove premium from ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.REMOVE_PREMIUM))
					}
				}, p._("Remove Premium", null, {
					hk: "2uqn0o"
				}))))))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var g = t("./src/lib/classNames/index.ts"),
				h = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				S = t.n(h);
			const {
				fbt: R
			} = t("./node_modules/fbt/lib/FbtPublic.js"), M = e => {
				const a = Object(s.d)();
				return r.a.createElement("tr", null, C.map(a => r.a.createElement("td", {
					key: a
				}, e.subscription[a].value)), r.a.createElement("td", null, r.a.createElement("button", {
					className: S.a.actionButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(l.a)(`Order:${n}`, v.CANCEL_SUBSCRIPTION))
					}
				}, R._("Cancel Subscription", null, {
					hk: "3pBm2E"
				})), r.a.createElement("button", {
					className: S.a.actionButton,
					onClick: t => {
						const n = prompt("Tranfer to user id");
						n && a(Object(l.a)(`User:${e.userId}`, v.TRANSFER_SUBSCRIPTION, {
							RecipientUserId: n
						}))
					}
				}, R._("Transfer Subscription", null, {
					hk: "23Kf33"
				}))))
			};
			var x = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less"),
				N = t.n(x);
			const {
				fbt: f
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = ["grace_period", "paid_status", "started", "state", "subscription_data", "subscription_id", "valid_until", "will_renew"], T = r.a.createElement("thead", {
				className: N.a.tableHeader
			}, r.a.createElement("tr", null, C.map(e => r.a.createElement("th", {
				key: e
			}, e)), r.a.createElement("th", null, f._("actions", null, {
				hk: "1bCoG9"
			})))), I = e => r.a.createElement("table", {
				className: N.a.table
			}, T, r.a.createElement("tbody", null, e.subscriptions.map(a => r.a.createElement(M, {
				subscription: a,
				key: a.subscription_id.value,
				userId: e.userId
			}))));
			var O, P = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				y = t.n(P);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(O || (O = {}));
			const j = e => {
				const [a, t] = Object(n.useState)(O.ORDERS), s = Object.values(O).map(e => r.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(g.a)(y.a.tab, {
						[y.a.selectedTab]: a === e
					})
				}, e));
				return r.a.createElement("div", {
					className: y.a.panel
				}, r.a.createElement("nav", null, s), r.a.createElement("div", {
					className: y.a.tableContainer
				}, (a => {
					switch (a) {
						case O.SUBSCRIPTIONS:
							return r.a.createElement(I, e);
						default:
							return null
					}
				})(a)))
			};
			var k = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				A = t.n(k);
			const B = () => {
				const e = Object(s.e)(m.b),
					a = e && (e => {
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
					})(e.details);
				return r.a.createElement("div", null, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(_, a), r.a.createElement("div", {
					className: A.a.moreDetailsSection
				}, r.a.createElement(j, {
					subscriptions: e.details.subscriptions.value,
					userId: a.id
				}))))
			};
			a.default = () => r.a.createElement("div", {
				className: o.a.container
			}, r.a.createElement("div", {
				className: o.a.searchContainer
			}, r.a.createElement(u, null)), r.a.createElement(B, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.70b1676466f67fa5561e.js.map