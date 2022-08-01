// https://www.redditstatic.com/desktop2x/EconManagement2.046840a0b70366cbeaae.js
// Retrieved at 8/1/2022, 2:50:05 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/EMSummaryPanel/index.m.less": function(e, a, t) {
			e.exports = {
				panel: "_19clOR18vyO2WpDzU3o_O0",
				table: "_15jJ-IaVJFlb8gCVMWX7NC"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/index.m.less": function(e, a, t) {
			e.exports = {
				panels: "_3CXvIH_Brp3x9PITGMikZd"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTableHeader/index.m.less": function(e, a, t) {
			e.exports = {
				tableHeader: "_2z8Z1VryxIuKR9Ikm4sTS_"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less": function(e, a, t) {
			e.exports = {
				actionButton: "_2aE7AuFRXc_XH5y45K73ev",
				activeRow: "_37QhhUTlJy0-s7zcZYGr2n"
			}
		},
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less": function(e, a, t) {
			e.exports = {
				table: "_1AoV8bk7iscRTYDyjbtpTp"
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
			const m = () => {
				const [e, a] = Object(n.useState)(""), t = Object(s.d)();
				return r.a.createElement(c.a, {
					className: o.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && t(Object(l.f)(e))
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
				p = t.n(E);
			const {
				fbt: b
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var v;
			! function(e) {
				e.GIVE_PREMIUM = "Give premium", e.REMOVE_PREMIUM = "Remove premium", e.CANCEL_SUBSCRIPTION = "Cancel recurring", e.ISSUE_REFUND = "Cancel payment", e.TRANSFER_SUBSCRIPTION = "Transfer"
			}(v || (v = {}));
			const g = e => {
				const [a, t] = Object(n.useState)(), [c, i] = Object(n.useState)(), o = Object(s.d)(), m = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => r.a.createElement("p", {
					key: a
				}, r.a.createElement("strong", null, a, ": "), r.a.createElement("span", null, e[a] + "")));
				return r.a.createElement("div", {
					className: p.a.profile
				}, r.a.createElement("div", {
					className: p.a.userOverview
				}, r.a.createElement("h4", null, r.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && r.a.createElement("p", null, e.email), r.a.createElement("p", null, e.id)), r.a.createElement("div", {
					className: p.a.userOverview
				}, m), r.a.createElement("div", {
					className: p.a.userOverview
				}, r.a.createElement("table", null, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("input", {
					min: 0,
					type: "number",
					value: a || "",
					onChange: e => {
						var a;
						return t(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					},
					placeholder: b._("Amount", null, {
						hk: "3qQoll"
					}),
					className: p.a.coinsInput
				})), r.a.createElement("td", null, r.a.createElement(d.t, {
					onClick: n => {
						a && confirm(`Give ${a} coins to ${e.id}?`) && (o(Object(l.d)(e.id, a)), t(0))
					},
					className: p.a.actionButton,
					priority: d.c.Primary,
					disabled: !a || a < 1
				}, b._("Give Coins", null, {
					hk: "2DtgNR"
				}))), r.a.createElement("td", null, r.a.createElement(d.f, {
					onClick: n => {
						a && confirm(`Remove ${a} coins from ${e.id}?`) && (o(Object(l.e)(e.id, a)), t(0))
					},
					className: p.a.actionButton,
					disabled: !a || a < 1
				}, b._("Remove Coins", null, {
					hk: "24ePW3"
				})))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("input", {
					min: 0,
					type: "number",
					placeholder: b._("Days", null, {
						hk: "2NTZUs"
					}),
					value: c || "",
					className: p.a.coinsInput,
					onChange: e => {
						var a;
						return i(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					}
				})), r.a.createElement("td", null, r.a.createElement(d.t, {
					className: p.a.actionButton,
					priority: d.c.Primary,
					disabled: !c || c < 1,
					onClick: a => {
						c && confirm(`Give ${c} day${c>1?"s":""} of premium to ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.GIVE_PREMIUM, {
							Days: c
						}))
					}
				}, b._("Give Premium", null, {
					hk: "yy9AK"
				}))), r.a.createElement("td", null, r.a.createElement(d.f, {
					className: p.a.actionButton,
					onClick: a => {
						confirm(`Remove premium from ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.REMOVE_PREMIUM))
					}
				}, b._("Remove Premium", null, {
					hk: "2uqn0o"
				}))))))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var h = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTableHeader/index.m.less"),
				S = t.n(h);
			const M = e => {
				let {
					headers: a
				} = e;
				return r.a.createElement("thead", {
					className: S.a.tableHeader
				}, r.a.createElement("tr", null, a.map(e => r.a.createElement("th", {
					key: e
				}, e))))
			};
			var _ = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/EMSummaryPanel/index.m.less"),
				R = t.n(_);
			const x = e => {
				let {
					title: a,
					fields: t
				} = e;
				return r.a.createElement("div", {
					className: R.a.panel
				}, r.a.createElement("nav", {
					style: {
						fontWeight: "bold",
						padding: "0.7rem"
					}
				}, a), r.a.createElement("div", {
					className: R.a.tableContainer
				}, r.a.createElement("table", {
					className: R.a.table
				}, r.a.createElement(M, {
					headers: ["key", "value"]
				}), r.a.createElement("tbody", null, Object.entries(t).map(e => {
					let [a, t] = e;
					return r.a.createElement("tr", {
						key: a
					}, r.a.createElement("td", null, a), r.a.createElement("td", null, "object" == typeof t ? JSON.stringify(t) : t))
				})))))
			};
			var N = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/index.m.less"),
				f = t.n(N);
			const {
				fbt: y
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = e => {
				let {
					userData: a,
					activeSubscription: t
				} = e;
				return r.a.createElement("div", {
					className: f.a.panels
				}, r.a.createElement(x, {
					title: y._("User Data", null, {
						hk: "1K6WMK"
					}),
					fields: a
				}), t && r.a.createElement(x, {
					title: y._("Active Subscription", null, {
						hk: "3OiovM"
					}),
					fields: JSON.parse(t.source)
				}))
			};
			var T = t("./src/lib/classNames/index.ts"),
				O = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				I = t.n(O);
			const {
				fbt: P
			} = t("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				const a = Object(s.d)();
				return r.a.createElement("tr", {
					className: Object(T.a)({
						[I.a.activeRow]: U.some(a => "state" === a && "ACTIVE" === e.subscription[a].value)
					})
				}, U.map(a => r.a.createElement("td", {
					key: a
				}, e.subscription[a].value)), r.a.createElement("td", null, r.a.createElement("button", {
					className: I.a.actionButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(l.a)(`Order:${n}`, v.CANCEL_SUBSCRIPTION))
					}
				}, P._("Cancel Subscription", null, {
					hk: "3pBm2E"
				})), r.a.createElement("button", {
					className: I.a.actionButton,
					onClick: t => {
						const n = prompt("Tranfer to user id");
						n && a(Object(l.a)(`User:${e.userId}`, v.TRANSFER_SUBSCRIPTION, {
							RecipientUserId: n
						}))
					}
				}, P._("Transfer Subscription", null, {
					hk: "23Kf33"
				}))))
			};
			var k = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less"),
				A = t.n(k);
			const U = ["grace_period", "paid_status", "started", "state", "subscription_data", "subscription_id", "valid_until", "will_renew"],
				B = e => r.a.createElement("table", {
					className: A.a.table
				}, r.a.createElement(M, {
					headers: [...U, "actions"]
				}), r.a.createElement("tbody", null, e.subscriptions.map(a => r.a.createElement(j, {
					subscription: a,
					key: a.subscription_id.value,
					userId: e.userId
				}))));
			var D, w = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				F = t.n(w);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(D || (D = {}));
			const K = e => {
				const [a, t] = Object(n.useState)(D.ORDERS), s = Object.values(D).map(e => r.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(T.a)(F.a.tab, {
						[F.a.selectedTab]: a === e
					})
				}, e));
				return r.a.createElement("div", {
					className: F.a.panel
				}, r.a.createElement("nav", null, s), r.a.createElement("div", {
					className: F.a.tableContainer
				}, (a => {
					switch (a) {
						case D.SUBSCRIPTIONS:
							return r.a.createElement(B, e);
						default:
							return null
					}
				})(a)))
			};
			var V = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				L = t.n(V);
			const $ = () => {
				const e = Object(s.e)(u.b),
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
					})(e.details),
					t = e && e.details.subscriptions.value,
					n = null == t ? void 0 : t.find(e => "ACTIVE" === e.state.value);
				return r.a.createElement("div", null, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(g, a), r.a.createElement("div", {
					className: L.a.moreDetailsSection
				}, r.a.createElement(C, {
					userData: a,
					activeSubscription: n
				}), t && r.a.createElement(K, {
					subscriptions: t,
					userId: a.id
				}))))
			};
			a.default = () => r.a.createElement("div", {
				className: o.a.container
			}, r.a.createElement("div", {
				className: o.a.searchContainer
			}, r.a.createElement(m, null)), r.a.createElement($, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.046840a0b70366cbeaae.js.map