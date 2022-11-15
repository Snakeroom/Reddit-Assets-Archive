// https://www.redditstatic.com/desktop2x/EconManagement2.7639fadaf2dbd3cde55f.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				l = t("./src/lib/classNames/index.ts"),
				s = t("./src/reddit/icons/svgs/Search/index.tsx"),
				i = t("./src/reddit/controls/SearchBar/index.m.less"),
				c = t.n(i);
			a.a = e => r.a.createElement("label", {
				className: Object(l.a)(c.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				className: Object(l.a)(c.a.search, {
					[c.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(l.a)(c.a.searchIconContainer, {
					[c.a.mClickable]: !!e.onSearch,
					[c.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, r.a.createElement(s.a, null)))
		},
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
				r = t.n(n),
				l = t("./node_modules/react-redux/es/index.js"),
				s = t("./src/reddit/actions/economics/econManagement/index.ts"),
				i = t("./src/reddit/controls/SearchBar/index.tsx"),
				c = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(c);
			const d = () => {
				const [e, a] = Object(n.useState)(""), t = Object(l.d)();
				return r.a.createElement(i.a, {
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
			var u = t("./src/reddit/selectors/econManagement.ts"),
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
			const g = ["goldSubscriptionId", "isPremium", "premiumExpiration"],
				h = e => {
					let {
						userData: a,
						redditorInfo: t
					} = e;
					var i;
					const [c, o] = Object(n.useState)(), [d, u] = Object(n.useState)(), p = Object(l.d)();
					return r.a.createElement("div", {
						className: v.a.profile
					}, r.a.createElement("div", {
						className: v.a.userOverview
					}, (null == t ? void 0 : t.snoovatarIcon) && r.a.createElement("img", {
						className: v.a.avatar,
						src: t.snoovatarIcon.url,
						alt: ""
					}), r.a.createElement("div", null, r.a.createElement("h4", null, r.a.createElement("a", {
						href: `/user/${a.username}`
					}, a.username), " ", r.a.createElement("span", null, "(", a.id, ")")), a.email && r.a.createElement("p", null, a.email), (null == t ? void 0 : t.karma) && r.a.createElement("p", null, b._("{karma points} karma", [b._param("karma points", Object(m.b)(t.karma.total))], {
						hk: "2Ao8vj"
					})), (null === (i = null == t ? void 0 : t.profile) || void 0 === i ? void 0 : i.isNsfw) && r.a.createElement("p", null, b._("NSFW", null, {
						hk: "GPjpc"
					})))), r.a.createElement("div", null, g.map(e => r.a.createElement("p", {
						key: e
					}, r.a.createElement("strong", null, e, ": "), r.a.createElement("span", null, String(a[e]))))), r.a.createElement("div", null, r.a.createElement("table", null, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("input", {
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
					})), r.a.createElement("td", null, r.a.createElement(E.t, {
						onClick: e => {
							c && confirm(`Give ${c} coins to ${a.id}?`) && (p(Object(s.d)(a.id, c)), o(0))
						},
						className: v.a.actionButton,
						priority: E.c.Primary,
						disabled: !c || c < 1
					}, b._("Give Coins", null, {
						hk: "2DtgNR"
					}))), r.a.createElement("td", null, r.a.createElement(E.f, {
						onClick: e => {
							c && confirm(`Remove ${c} coins from ${a.id}?`) && (p(Object(s.e)(a.id, c)), o(0))
						},
						className: v.a.actionButton,
						disabled: !c || c < 1
					}, b._("Remove Coins", null, {
						hk: "24ePW3"
					})))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("input", {
						min: 0,
						type: "number",
						placeholder: b._("Days", null, {
							hk: "2NTZUs"
						}),
						value: d || "",
						className: v.a.coinsInput,
						onChange: e => {
							var a;
							return u(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
						}
					})), r.a.createElement("td", null, r.a.createElement(E.t, {
						className: v.a.actionButton,
						priority: E.c.Primary,
						disabled: !d || d < 1,
						onClick: e => {
							d && confirm(`Give ${d} day${d>1?"s":""} of premium to ${a.id}?`) && p(Object(s.a)(`User:${a.id}`, _.GIVE_PREMIUM, {
								Days: d
							}))
						}
					}, b._("Give Premium", null, {
						hk: "yy9AK"
					}))), r.a.createElement("td", null, r.a.createElement(E.f, {
						className: v.a.actionButton,
						onClick: e => {
							confirm(`Remove premium from ${a.id}?`) && p(Object(s.a)(`User:${a.id}`, _.REMOVE_PREMIUM))
						}
					}, b._("Remove Premium", null, {
						hk: "2uqn0o"
					}))))))))
				};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var S = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTableHeader/index.m.less"),
				M = t.n(S);
			const R = e => {
				let {
					headers: a
				} = e;
				return r.a.createElement("thead", {
					className: M.a.tableHeader
				}, r.a.createElement("tr", null, a.map(e => r.a.createElement("th", {
					key: e
				}, e))))
			};
			var f = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/EMSummaryPanel/index.m.less"),
				x = t.n(f);
			const N = e => {
				let {
					title: a,
					fields: t
				} = e;
				return r.a.createElement("div", {
					className: x.a.panel
				}, r.a.createElement("nav", {
					style: {
						fontWeight: "bold",
						padding: "0.7rem"
					}
				}, a), r.a.createElement("div", {
					className: x.a.tableContainer
				}, r.a.createElement("table", {
					className: x.a.table
				}, r.a.createElement(R, {
					headers: ["key", "value"]
				}), r.a.createElement("tbody", null, Object.entries(t).map(e => {
					let [a, t] = e;
					return r.a.createElement("tr", {
						key: a
					}, r.a.createElement("td", null, a), r.a.createElement("td", null, (e => "string" == typeof e ? e : JSON.stringify(e))(t)))
				})))))
			};
			var y = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/index.m.less"),
				I = t.n(y);
			const {
				fbt: C
			} = t("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				let {
					userData: a,
					activeSubscription: t
				} = e;
				return r.a.createElement("div", {
					className: I.a.panels
				}, r.a.createElement(N, {
					title: C._("User Data", null, {
						hk: "1K6WMK"
					}),
					fields: a
				}), t && r.a.createElement(N, {
					title: C._("Active Subscription", null, {
						hk: "3OiovM"
					}),
					fields: t
				}))
			};
			var T = t("./src/lib/classNames/index.ts"),
				P = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				k = t.n(P);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js"), A = e => {
				const a = Object(l.d)();
				return r.a.createElement("tr", {
					className: Object(T.a)({
						[k.a.activeRow]: "ACTIVE" === e.subscription.state
					})
				}, D.map(a => r.a.createElement("td", {
					key: a
				}, "string" == typeof e.subscription[a] ? e.subscription[a] : JSON.stringify(e.subscription[a]))), r.a.createElement("td", null, r.a.createElement("button", {
					className: k.a.actionButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(s.a)(`Order:${n}`, _.CANCEL_SUBSCRIPTION))
					}
				}, j._("Cancel Subscription", null, {
					hk: "3pBm2E"
				})), r.a.createElement("button", {
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
			var U = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/index.m.less"),
				B = t.n(U);
			const D = ["grace_period", "paid_status", "started", "state", "subscription_data", "subscription_id", "valid_until", "will_renew"],
				w = e => r.a.createElement("table", {
					className: B.a.table
				}, r.a.createElement(R, {
					headers: [...D, "actions"]
				}), r.a.createElement("tbody", null, e.subscriptions.map(a => r.a.createElement(A, {
					subscription: a,
					key: a.subscription_id,
					userId: e.userId
				}))));
			var F, K = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				V = t.n(K);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments"
			}(F || (F = {}));
			const L = e => {
				const [a, t] = Object(n.useState)(F.ORDERS), l = Object.values(F).map(e => r.a.createElement("button", {
					key: e,
					onClick: () => t(e),
					className: Object(T.a)(V.a.tab, {
						[V.a.selectedTab]: a === e
					})
				}, e));
				return r.a.createElement("div", {
					className: V.a.panel
				}, r.a.createElement("nav", null, l), r.a.createElement("div", {
					className: V.a.tableContainer
				}, (a => {
					switch (a) {
						case F.SUBSCRIPTIONS:
							return r.a.createElement(w, e);
						default:
							return null
					}
				})(a)))
			};
			var G = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				$ = t.n(G);
			const H = e => {
					var a, t, n, r, l, s, i, c;
					const o = e => e && new Date(e).valueOf() ? e : "-";
					return {
						state: null === (a = e.state) || void 0 === a ? void 0 : a.value,
						grace_period: null === (t = e.grace_period) || void 0 === t ? void 0 : t.value,
						paid_status: null === (n = e.paid_status) || void 0 === n ? void 0 : n.value,
						started: o(null === (r = e.started) || void 0 === r ? void 0 : r.value),
						subscription_data: null === (l = e.subscription_data) || void 0 === l ? void 0 : l.value,
						subscription_id: null === (s = e.subscription_id) || void 0 === s ? void 0 : s.value,
						valid_until: o(null === (i = e.valid_until) || void 0 === i ? void 0 : i.value),
						will_renew: null === (c = e.will_renew) || void 0 === c ? void 0 : c.value
					}
				},
				W = () => {
					const e = Object(l.e)(u.b),
						a = Object(l.e)(u.c),
						t = e && (e => {
							var a, t, n;
							const r = e.userData.value,
								l = e.thingState.value;
							return {
								createdAt: r.createdAt.value,
								email: null === (a = r.email) || void 0 === a ? void 0 : a.value,
								id: r.id.value,
								isDeleted: r.isDeleted.value,
								suspended: r.suspended.value,
								username: r.username.value,
								isEmployee: r.isEmployee.value,
								isPremium: l.isPremium.value,
								goldSubscriptionId: null === (t = l.goldSubscriptionId) || void 0 === t ? void 0 : t.value,
								premiumExpiration: null === (n = l.premiumExpirationThing) || void 0 === n ? void 0 : n.value
							}
						})(e.details),
						n = e && e.details.subscriptions.value.map(H),
						s = null == n ? void 0 : n.find(e => "ACTIVE" === e.state);
					return r.a.createElement("div", null, t && r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
						userData: t,
						redditorInfo: a
					}), r.a.createElement("div", {
						className: $.a.moreDetailsSection
					}, r.a.createElement(O, {
						userData: t,
						activeSubscription: s
					}), n && r.a.createElement(L, {
						subscriptions: n,
						userId: t.id
					}))))
				};
			a.default = () => r.a.createElement("div", {
				className: o.a.container
			}, r.a.createElement("div", {
				className: o.a.searchContainer
			}, r.a.createElement(d, null)), r.a.createElement(W, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.7639fadaf2dbd3cde55f.js.map