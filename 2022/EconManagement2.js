// https://www.redditstatic.com/desktop2x/EconManagement2.01e0bd8c7b7ed1a9e03c.js
// Retrieved at 11/3/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconManagement2"], {
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less": function(e, a, t) {
			e.exports = {
				profile: "_1rM5svrNp7Agn4Ymy77Pti",
				userOverview: "_3sF4itWYKet4hcMAXSOWGf",
				avatar: "_1vrFzhmv-V_Hv4Hf0L6-S6",
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
				l = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				s = t("./src/reddit/actions/economics/econManagement/index.ts"),
				i = t("./src/reddit/controls/SearchBar/index.tsx"),
				c = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(c);
			const u = () => {
				const [e, a] = Object(n.useState)(""), t = Object(r.d)();
				return l.a.createElement(i.a, {
					className: o.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && t(Object(s.f)(e))
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e,
					placeholder: "Username or user id"
				})
			};
			var d = t("./src/reddit/selectors/econManagement.ts"),
				m = t("./src/lib/prettyPrintNumber/index.ts"),
				E = t("./src/reddit/controls/Button/index.tsx"),
				p = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				v = t.n(p);
			const {
				fbt: b
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var _;
			! function(e) {
				e.GIVE_PREMIUM = "Give premium", e.REMOVE_PREMIUM = "Remove premium", e.CANCEL_SUBSCRIPTION = "Cancel recurring", e.ISSUE_REFUND = "Cancel payment", e.TRANSFER_SUBSCRIPTION = "Transfer"
			}(_ || (_ = {}));
			const M = ["goldSubscriptionId", "isPremium", "premiumExpiration"],
				S = e => {
					let {
						userData: a,
						redditorInfo: t
					} = e;
					var i;
					const [c, o] = Object(n.useState)(), [u, d] = Object(n.useState)(), p = Object(r.d)();
					return l.a.createElement("div", {
						className: v.a.profile
					}, l.a.createElement("div", {
						className: v.a.userOverview
					}, (null == t ? void 0 : t.snoovatarIcon) && l.a.createElement("img", {
						className: v.a.avatar,
						src: t.snoovatarIcon.url,
						alt: ""
					}), l.a.createElement("div", null, l.a.createElement("h4", null, l.a.createElement("a", {
						href: `/user/${a.username}`
					}, a.username), " ", l.a.createElement("span", null, "(", a.id, ")")), a.email && l.a.createElement("p", null, a.email), (null == t ? void 0 : t.karma) && l.a.createElement("p", null, b._("{karma points} karma", [b._param("karma points", Object(m.b)(t.karma.total))], {
						hk: "2Ao8vj"
					})), (null === (i = null == t ? void 0 : t.profile) || void 0 === i ? void 0 : i.isNsfw) && l.a.createElement("p", null, b._("NSFW", null, {
						hk: "GPjpc"
					})))), l.a.createElement("div", null, M.map(e => l.a.createElement("p", {
						key: e
					}, l.a.createElement("strong", null, e, ": "), l.a.createElement("span", null, String(a[e]))))), l.a.createElement("div", null, l.a.createElement("table", null, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("td", null, l.a.createElement("input", {
						min: 0,
						type: "number",
						value: c || "",
						onChange: e => {
							var a;
							return o(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
						},
						placeholder: b._("Amount", null, {
							hk: "3qQoll"
						}),
						className: v.a.coinsInput
					})), l.a.createElement("td", null, l.a.createElement(E.t, {
						onClick: e => {
							c && confirm(`Give ${c} coins to ${a.id}?`) && (p(Object(s.d)(a.id, c)), o(0))
						},
						className: v.a.actionButton,
						priority: E.c.Primary,
						disabled: !c || c < 1
					}, b._("Give Coins", null, {
						hk: "2DtgNR"
					}))), l.a.createElement("td", null, l.a.createElement(E.f, {
						onClick: e => {
							c && confirm(`Remove ${c} coins from ${a.id}?`) && (p(Object(s.e)(a.id, c)), o(0))
						},
						className: v.a.actionButton,
						disabled: !c || c < 1
					}, b._("Remove Coins", null, {
						hk: "24ePW3"
					})))), l.a.createElement("tr", null, l.a.createElement("td", null, l.a.createElement("input", {
						min: 0,
						type: "number",
						placeholder: b._("Days", null, {
							hk: "2NTZUs"
						}),
						value: u || "",
						className: v.a.coinsInput,
						onChange: e => {
							var a;
							return d(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
						}
					})), l.a.createElement("td", null, l.a.createElement(E.t, {
						className: v.a.actionButton,
						priority: E.c.Primary,
						disabled: !u || u < 1,
						onClick: e => {
							u && confirm(`Give ${u} day${u>1?"s":""} of premium to ${a.id}?`) && p(Object(s.a)(`User:${a.id}`, _.GIVE_PREMIUM, {
								Days: u
							}))
						}
					}, b._("Give Premium", null, {
						hk: "yy9AK"
					}))), l.a.createElement("td", null, l.a.createElement(E.f, {
						className: v.a.actionButton,
						onClick: e => {
							confirm(`Remove premium from ${a.id}?`) && p(Object(s.a)(`User:${a.id}`, _.REMOVE_PREMIUM))
						}
					}, b._("Remove Premium", null, {
						hk: "2uqn0o"
					}))))))))
				};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var g = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTableHeader/index.m.less"),
				R = t.n(g);
			const f = e => {
				let {
					headers: a
				} = e;
				return l.a.createElement("thead", {
					className: R.a.tableHeader
				}, l.a.createElement("tr", null, a.map(e => l.a.createElement("th", {
					key: e
				}, e))))
			};
			var h = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/EMSummaryPanel/index.m.less"),
				N = t.n(h);
			const x = e => {
				let {
					title: a,
					fields: t
				} = e;
				return l.a.createElement("div", {
					className: N.a.panel
				}, l.a.createElement("nav", {
					style: {
						fontWeight: "bold",
						padding: "0.7rem"
					}
				}, a), l.a.createElement("div", {
					className: N.a.tableContainer
				}, l.a.createElement("table", {
					className: N.a.table
				}, l.a.createElement(f, {
					headers: ["key", "value"]
				}), l.a.createElement("tbody", null, Object.entries(t).map(e => {
					let [a, t] = e;
					return l.a.createElement("tr", {
						key: a
					}, l.a.createElement("td", null, a), l.a.createElement("td", null, (e => "string" == typeof e ? e : JSON.stringify(e))(t)))
				})))))
			};
			var O = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/index.m.less"),
				y = t.n(O);
			const {
				fbt: T
			} = t("./node_modules/fbt/lib/FbtPublic.js"), I = e => {
				let {
					userData: a,
					activeSubscription: t
				} = e;
				return l.a.createElement("div", {
					className: y.a.panels
				}, l.a.createElement(x, {
					title: T._("User Data", null, {
						hk: "1K6WMK"
					}),
					fields: a
				}), t && l.a.createElement(x, {
					title: T._("Active Subscription", null, {
						hk: "3OiovM"
					}),
					fields: t
				}))
			};
			var C = t("./src/lib/classNames/index.ts"),
				P = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				k = t.n(P);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js"), U = e => {
				const a = Object(r.d)();
				return l.a.createElement("tr", {
					className: Object(C.a)({
						[k.a.activeRow]: "ACTIVE" === e.subscription.state
					})
				}, A.map(a => l.a.createElement("td", {
					key: a
				}, "string" == typeof e.subscription[a] ? e.subscription[a] : JSON.stringify(e.subscription[a]))), l.a.createElement("td", null, l.a.createElement("button", {
					className: k.a.actionButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(s.a)(`Order:${n}`, _.CANCEL_SUBSCRIPTION))
					}
				}, j._("Cancel Subscription", null, {
					hk: "3pBm2E"
				})), l.a.createElement("button", {
					className: k.a.actionButton,
					onClick: t => {
						const n = prompt("Tranfer to user id");
						n && a(Object(s.a)(`User:${e.userId}`, _.TRANSFER_SUBSCRIPTION, {
							RecipientUserId: n
						}))
					}
				}, j._("Transfer Subscription", null, {
					hk: "23Kf33"
				}))))
			};
			var D = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less"),
				w = t.n(D);
			const A = ["grace_period", "paid_status", "started", "state", "subscription_data", "subscription_id", "valid_until", "will_renew"],
				B = e => l.a.createElement("table", {
					className: w.a.table
				}, l.a.createElement(f, {
					headers: [...A, "actions"]
				}), l.a.createElement("tbody", null, e.subscriptions.map(a => l.a.createElement(U, {
					subscription: a,
					key: a.subscription_id,
					userId: e.userId
				}))));
			var F, V = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				$ = t.n(V);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(F || (F = {}));
			const G = e => {
				const [a, t] = Object(n.useState)(F.ORDERS), r = Object.values(F).map(e => l.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(C.a)($.a.tab, {
						[$.a.selectedTab]: a === e
					})
				}, e));
				return l.a.createElement("div", {
					className: $.a.panel
				}, l.a.createElement("nav", null, r), l.a.createElement("div", {
					className: $.a.tableContainer
				}, (a => {
					switch (a) {
						case F.SUBSCRIPTIONS:
							return l.a.createElement(B, e);
						default:
							return null
					}
				})(a)))
			};
			var K = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				W = t.n(K);
			const H = e => {
					var a, t, n, l, r, s, i, c;
					const o = e => e && new Date(e).valueOf() ? e : "-";
					return {
						state: null === (a = e.state) || void 0 === a ? void 0 : a.value,
						grace_period: null === (t = e.grace_period) || void 0 === t ? void 0 : t.value,
						paid_status: null === (n = e.paid_status) || void 0 === n ? void 0 : n.value,
						started: o(null === (l = e.started) || void 0 === l ? void 0 : l.value),
						subscription_data: null === (r = e.subscription_data) || void 0 === r ? void 0 : r.value,
						subscription_id: null === (s = e.subscription_id) || void 0 === s ? void 0 : s.value,
						valid_until: o(null === (i = e.valid_until) || void 0 === i ? void 0 : i.value),
						will_renew: null === (c = e.will_renew) || void 0 === c ? void 0 : c.value
					}
				},
				L = () => {
					const e = Object(r.e)(d.b),
						a = Object(r.e)(d.c),
						t = e && (e => {
							var a, t, n;
							const l = e.userData.value,
								r = e.thingState.value;
							return {
								createdAt: l.createdAt.value,
								email: null === (a = l.email) || void 0 === a ? void 0 : a.value,
								id: l.id.value,
								isDeleted: l.isDeleted.value,
								suspended: l.suspended.value,
								username: l.username.value,
								isEmployee: l.isEmployee.value,
								isPremium: r.isPremium.value,
								goldSubscriptionId: null === (t = r.goldSubscriptionId) || void 0 === t ? void 0 : t.value,
								premiumExpiration: null === (n = r.premiumExpirationThing) || void 0 === n ? void 0 : n.value
							}
						})(e.details),
						n = e && e.details.subscriptions.value.map(H),
						s = null == n ? void 0 : n.find(e => "ACTIVE" === e.state);
					return l.a.createElement("div", null, t && l.a.createElement(l.a.Fragment, null, l.a.createElement(S, {
						userData: t,
						redditorInfo: a
					}), l.a.createElement("div", {
						className: W.a.moreDetailsSection
					}, l.a.createElement(I, {
						userData: t,
						activeSubscription: s
					}), n && l.a.createElement(G, {
						subscriptions: n,
						userId: t.id
					}))))
				};
			a.default = () => l.a.createElement("div", {
				className: o.a.container
			}, l.a.createElement("div", {
				className: o.a.searchContainer
			}, l.a.createElement(u, null)), l.a.createElement(L, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.01e0bd8c7b7ed1a9e03c.js.map