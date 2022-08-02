// https://www.redditstatic.com/desktop2x/EconManagement2.7354a59618d6ec514a6e.js
// Retrieved at 8/2/2022, 2:40:05 PM by Reddit Dataminer v1.0.0
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
				i = t("./src/reddit/controls/SearchBar/index.m.less"),
				c = t.n(i);
			a.a = e => s.a.createElement("div", {
				className: Object(r.a)(c.a.searchContainer, e.className)
			}, s.a.createElement("input", {
				className: Object(r.a)(c.a.search, {
					[c.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), s.a.createElement("div", {
				className: Object(r.a)(c.a.searchIconContainer, {
					[c.a.mClickable]: !!e.onSearch,
					[c.a.mRightAligned]: e.rightAlignedIcon
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
				s = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				l = t("./src/reddit/actions/economics/econManagement/index.ts"),
				i = t("./src/reddit/controls/SearchBar/index.tsx"),
				c = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(c);
			const d = () => {
				const [e, a] = Object(n.useState)(""), t = Object(r.d)();
				return s.a.createElement(i.a, {
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
				m = t("./src/reddit/controls/Button/index.tsx"),
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
				const [a, t] = Object(n.useState)(), [i, c] = Object(n.useState)(), o = Object(r.d)(), d = ["goldSubscriptionId", "isPremium", "premiumExpiration"].map(a => s.a.createElement("p", {
					key: a
				}, s.a.createElement("strong", null, a, ": "), s.a.createElement("span", null, e[a] + "")));
				return s.a.createElement("div", {
					className: p.a.profile
				}, s.a.createElement("div", {
					className: p.a.userOverview
				}, s.a.createElement("h4", null, s.a.createElement("a", {
					href: `/user/${e.username}`
				}, e.username)), !!e.email && s.a.createElement("p", null, e.email), s.a.createElement("p", null, e.id)), s.a.createElement("div", {
					className: p.a.userOverview
				}, d), s.a.createElement("div", {
					className: p.a.userOverview
				}, s.a.createElement("table", null, s.a.createElement("tbody", null, s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("input", {
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
				})), s.a.createElement("td", null, s.a.createElement(m.t, {
					onClick: n => {
						a && confirm(`Give ${a} coins to ${e.id}?`) && (o(Object(l.d)(e.id, a)), t(0))
					},
					className: p.a.actionButton,
					priority: m.c.Primary,
					disabled: !a || a < 1
				}, b._("Give Coins", null, {
					hk: "2DtgNR"
				}))), s.a.createElement("td", null, s.a.createElement(m.f, {
					onClick: n => {
						a && confirm(`Remove ${a} coins from ${e.id}?`) && (o(Object(l.e)(e.id, a)), t(0))
					},
					className: p.a.actionButton,
					disabled: !a || a < 1
				}, b._("Remove Coins", null, {
					hk: "24ePW3"
				})))), s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("input", {
					min: 0,
					type: "number",
					placeholder: b._("Days", null, {
						hk: "2NTZUs"
					}),
					value: i || "",
					className: p.a.coinsInput,
					onChange: e => {
						var a;
						return c(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
					}
				})), s.a.createElement("td", null, s.a.createElement(m.t, {
					className: p.a.actionButton,
					priority: m.c.Primary,
					disabled: !i || i < 1,
					onClick: a => {
						i && confirm(`Give ${i} day${i>1?"s":""} of premium to ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.GIVE_PREMIUM, {
							Days: i
						}))
					}
				}, b._("Give Premium", null, {
					hk: "yy9AK"
				}))), s.a.createElement("td", null, s.a.createElement(m.f, {
					className: p.a.actionButton,
					onClick: a => {
						confirm(`Remove premium from ${e.id}?`) && o(Object(l.a)(`User:${e.id}`, v.REMOVE_PREMIUM))
					}
				}, b._("Remove Premium", null, {
					hk: "2uqn0o"
				}))))))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var _ = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTableHeader/index.m.less"),
				h = t.n(_);
			const S = e => {
				let {
					headers: a
				} = e;
				return s.a.createElement("thead", {
					className: h.a.tableHeader
				}, s.a.createElement("tr", null, a.map(e => s.a.createElement("th", {
					key: e
				}, e))))
			};
			var M = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/EMSummaryPanel/index.m.less"),
				R = t.n(M);
			const f = e => {
				let {
					title: a,
					fields: t
				} = e;
				return s.a.createElement("div", {
					className: R.a.panel
				}, s.a.createElement("nav", {
					style: {
						fontWeight: "bold",
						padding: "0.7rem"
					}
				}, a), s.a.createElement("div", {
					className: R.a.tableContainer
				}, s.a.createElement("table", {
					className: R.a.table
				}, s.a.createElement(S, {
					headers: ["key", "value"]
				}), s.a.createElement("tbody", null, Object.entries(t).map(e => {
					let [a, t] = e;
					return s.a.createElement("tr", {
						key: a
					}, s.a.createElement("td", null, a), s.a.createElement("td", null, (e => "string" == typeof e ? e : JSON.stringify(e))(t)))
				})))))
			};
			var x = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/index.m.less"),
				N = t.n(x);
			const {
				fbt: y
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = e => {
				let {
					userData: a,
					activeSubscription: t
				} = e;
				return s.a.createElement("div", {
					className: N.a.panels
				}, s.a.createElement(f, {
					title: y._("User Data", null, {
						hk: "1K6WMK"
					}),
					fields: a
				}), t && s.a.createElement(f, {
					title: y._("Active Subscription", null, {
						hk: "3OiovM"
					}),
					fields: t
				}))
			};
			var O = t("./src/lib/classNames/index.ts"),
				T = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				I = t.n(T);
			const {
				fbt: P
			} = t("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				const a = Object(r.d)();
				return s.a.createElement("tr", {
					className: Object(O.a)({
						[I.a.activeRow]: "ACTIVE" === e.subscription.state
					})
				}, U.map(a => s.a.createElement("td", {
					key: a
				}, "string" == typeof e.subscription[a] ? e.subscription[a] : JSON.stringify(e.subscription[a]))), s.a.createElement("td", null, s.a.createElement("button", {
					className: I.a.actionButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(l.a)(`Order:${n}`, v.CANCEL_SUBSCRIPTION))
					}
				}, P._("Cancel Subscription", null, {
					hk: "3pBm2E"
				})), s.a.createElement("button", {
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
			var j = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less"),
				A = t.n(j);
			const U = ["grace_period", "paid_status", "started", "state", "subscription_data", "subscription_id", "valid_until", "will_renew"],
				B = e => s.a.createElement("table", {
					className: A.a.table
				}, s.a.createElement(S, {
					headers: [...U, "actions"]
				}), s.a.createElement("tbody", null, e.subscriptions.map(a => s.a.createElement(k, {
					subscription: a,
					key: a.subscription_id,
					userId: e.userId
				}))));
			var w, D = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				F = t.n(D);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(w || (w = {}));
			const K = e => {
				const [a, t] = Object(n.useState)(w.ORDERS), r = Object.values(w).map(e => s.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(O.a)(F.a.tab, {
						[F.a.selectedTab]: a === e
					})
				}, e));
				return s.a.createElement("div", {
					className: F.a.panel
				}, s.a.createElement("nav", null, r), s.a.createElement("div", {
					className: F.a.tableContainer
				}, (a => {
					switch (a) {
						case w.SUBSCRIPTIONS:
							return s.a.createElement(B, e);
						default:
							return null
					}
				})(a)))
			};
			var V = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				L = t.n(V);
			const $ = e => {
					var a, t, n, s, r, l, i, c;
					const o = e => e && new Date(e).valueOf() ? e : "-";
					return {
						state: null === (a = e.state) || void 0 === a ? void 0 : a.value,
						grace_period: null === (t = e.grace_period) || void 0 === t ? void 0 : t.value,
						paid_status: null === (n = e.paid_status) || void 0 === n ? void 0 : n.value,
						started: o(null === (s = e.started) || void 0 === s ? void 0 : s.value),
						subscription_data: null === (r = e.subscription_data) || void 0 === r ? void 0 : r.value,
						subscription_id: null === (l = e.subscription_id) || void 0 === l ? void 0 : l.value,
						valid_until: o(null === (i = e.valid_until) || void 0 === i ? void 0 : i.value),
						will_renew: null === (c = e.will_renew) || void 0 === c ? void 0 : c.value
					}
				},
				G = () => {
					const e = Object(r.e)(u.b),
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
						t = e && e.details.subscriptions.value.map($),
						n = null == t ? void 0 : t.find(e => "ACTIVE" === e.state);
					return s.a.createElement("div", null, a && s.a.createElement(s.a.Fragment, null, s.a.createElement(g, a), s.a.createElement("div", {
						className: L.a.moreDetailsSection
					}, s.a.createElement(C, {
						userData: a,
						activeSubscription: n
					}), t && s.a.createElement(K, {
						subscriptions: t,
						userId: a.id
					}))))
				};
			a.default = () => s.a.createElement("div", {
				className: o.a.container
			}, s.a.createElement("div", {
				className: o.a.searchContainer
			}, s.a.createElement(d, null)), s.a.createElement(G, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.7354a59618d6ec514a6e.js.map