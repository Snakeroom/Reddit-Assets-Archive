// https://www.redditstatic.com/desktop2x/EconManagement2.66c3bd41f3bc09f9c818.js
// Retrieved at 1/10/2023, 8:10:04 PM by Reddit Dataminer v1.0.0
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
			a.a = e => l.a.createElement("label", {
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
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, l.a.createElement(s.a, null)))
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
		"./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMVaults/index.m.less": function(e, a, t) {
			e.exports = {
				container: "kYfxVP4Y33EMbeu9bNtoi",
				count: "NryxRZu4hQsloO1ozrcbP",
				title: "_1WN0CT-5QIA1pHh4bope5M",
				section: "_3xEYwoLpDXPk52sZo13Ntk"
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
				c = t("./src/reddit/controls/SearchBar/index.tsx"),
				i = t("./src/reddit/pages/EconManagement2/index.m.less"),
				o = t.n(i);
			const d = () => {
				const [e, a] = Object(n.useState)(""), t = Object(r.d)();
				return l.a.createElement(c.a, {
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
				b = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMProfile/index.m.less"),
				p = t.n(b);
			const {
				fbt: v
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
					var c;
					const [i, o] = Object(n.useState)(), [d, u] = Object(n.useState)(), b = Object(r.d)();
					return l.a.createElement("div", {
						className: p.a.profile
					}, l.a.createElement("div", {
						className: p.a.userOverview
					}, (null == t ? void 0 : t.snoovatarIcon) && l.a.createElement("img", {
						className: p.a.avatar,
						src: t.snoovatarIcon.url,
						alt: ""
					}), l.a.createElement("div", null, l.a.createElement("h4", null, l.a.createElement("a", {
						href: `/user/${a.username}`
					}, a.username), " ", l.a.createElement("span", null, "(", a.id, ")")), a.email && l.a.createElement("p", null, a.email), (null == t ? void 0 : t.karma) && l.a.createElement("p", null, v._("{karma points} karma", [v._param("karma points", Object(m.b)(t.karma.total))], {
						hk: "2Ao8vj"
					})), (null === (c = null == t ? void 0 : t.profile) || void 0 === c ? void 0 : c.isNsfw) && l.a.createElement("p", null, v._("NSFW", null, {
						hk: "GPjpc"
					})))), l.a.createElement("div", null, g.map(e => l.a.createElement("p", {
						key: e
					}, l.a.createElement("strong", null, e, ": "), l.a.createElement("span", null, String(a[e]))))), l.a.createElement("div", null, l.a.createElement("table", null, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("td", null, l.a.createElement("input", {
						min: 0,
						type: "number",
						value: i || "",
						onChange: e => {
							var a;
							return o(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
						},
						placeholder: v._("Amount", null, {
							hk: "3qQoll"
						}),
						className: p.a.coinsInput
					})), l.a.createElement("td", null, l.a.createElement(E.t, {
						onClick: e => {
							i && confirm(`Give ${i} coins to ${a.id}?`) && (b(Object(s.d)(a.id, i)), o(0))
						},
						className: p.a.actionButton,
						priority: E.c.Primary,
						disabled: !i || i < 1
					}, v._("Give Coins", null, {
						hk: "2DtgNR"
					}))), l.a.createElement("td", null, l.a.createElement(E.f, {
						onClick: e => {
							i && confirm(`Remove ${i} coins from ${a.id}?`) && (b(Object(s.e)(a.id, i)), o(0))
						},
						className: p.a.actionButton,
						disabled: !i || i < 1
					}, v._("Remove Coins", null, {
						hk: "24ePW3"
					})))), l.a.createElement("tr", null, l.a.createElement("td", null, l.a.createElement("input", {
						min: 0,
						type: "number",
						placeholder: v._("Days", null, {
							hk: "2NTZUs"
						}),
						value: d || "",
						className: p.a.coinsInput,
						onChange: e => {
							var a;
							return u(parseInt(null === (a = null == e ? void 0 : e.target) || void 0 === a ? void 0 : a.value))
						}
					})), l.a.createElement("td", null, l.a.createElement(E.t, {
						className: p.a.actionButton,
						priority: E.c.Primary,
						disabled: !d || d < 1,
						onClick: e => {
							d && confirm(`Give ${d} day${d>1?"s":""} of premium to ${a.id}?`) && b(Object(s.a)(`User:${a.id}`, _.GIVE_PREMIUM, {
								Days: d
							}))
						}
					}, v._("Give Premium", null, {
						hk: "yy9AK"
					}))), l.a.createElement("td", null, l.a.createElement(E.f, {
						className: p.a.actionButton,
						onClick: e => {
							confirm(`Remove premium from ${a.id}?`) && b(Object(s.a)(`User:${a.id}`, _.REMOVE_PREMIUM))
						}
					}, v._("Remove Premium", null, {
						hk: "2uqn0o"
					}))))))))
				};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTableHeader/index.m.less"),
				M = t.n(f);
			const S = e => {
				let {
					headers: a
				} = e;
				return l.a.createElement("thead", {
					className: M.a.tableHeader
				}, l.a.createElement("tr", null, a.map(e => l.a.createElement("th", {
					key: e
				}, e))))
			};
			var x = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/EMSummaryPanel/index.m.less"),
				R = t.n(x);
			const N = e => {
				let {
					title: a,
					fields: t
				} = e;
				return l.a.createElement("div", {
					className: R.a.panel
				}, l.a.createElement("nav", {
					style: {
						fontWeight: "bold",
						padding: "0.7rem"
					}
				}, a), l.a.createElement("div", {
					className: R.a.tableContainer
				}, l.a.createElement("table", {
					className: R.a.table
				}, l.a.createElement(S, {
					headers: ["key", "value"]
				}), l.a.createElement("tbody", null, Object.entries(t).map(e => {
					let [a, t] = e;
					return l.a.createElement("tr", {
						key: a
					}, l.a.createElement("td", null, a), l.a.createElement("td", null, (e => "string" == typeof e ? e : JSON.stringify(e))(t)))
				})))))
			};
			var T = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMSummaryPanels/index.m.less"),
				k = t.n(T);
			const {
				fbt: y
			} = t("./node_modules/fbt/lib/FbtPublic.js"), I = e => {
				let {
					userData: a,
					activeSubscription: t
				} = e;
				return l.a.createElement("div", {
					className: k.a.panels
				}, l.a.createElement(N, {
					title: y._("User Data", null, {
						hk: "1K6WMK"
					}),
					fields: a
				}), t && l.a.createElement(N, {
					title: y._("Active Subscription", null, {
						hk: "3OiovM"
					}),
					fields: t
				}))
			};
			var O = t("./src/lib/classNames/index.ts"),
				C = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMSubscriptions/EMSubscriptionRow/index.m.less"),
				P = t.n(C);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js"), A = e => {
				const a = Object(r.d)();
				return l.a.createElement("tr", {
					className: Object(O.a)({
						[P.a.activeRow]: "ACTIVE" === e.subscription.state
					})
				}, D.map(a => l.a.createElement("td", {
					key: a
				}, "string" == typeof e.subscription[a] ? e.subscription[a] : JSON.stringify(e.subscription[a]))), l.a.createElement("td", null, l.a.createElement("button", {
					className: P.a.actionButton,
					onClick: t => {
						const n = e.subscription.subscription_id.value;
						confirm(`Cancel subscription ${n}?`) && a(Object(s.a)(`Order:${n}`, _.CANCEL_SUBSCRIPTION))
					}
				}, j._("Cancel Subscription", null, {
					hk: "3pBm2E"
				})), l.a.createElement("button", {
					className: P.a.actionButton,
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
				w = e => {
					let {
						subscriptions: a,
						userId: t
					} = e;
					return l.a.createElement("table", {
						className: B.a.table
					}, l.a.createElement(S, {
						headers: [...D, "actions"]
					}), l.a.createElement("tbody", null, a.map(e => l.a.createElement(A, {
						subscription: e,
						key: e.subscription_id,
						userId: t
					}))))
				};
			var V = t("./node_modules/fbt/lib/FbtPublic.js"),
				F = t("./src/lib/opener/index.ts"),
				K = t("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				L = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/EMVaults/index.m.less"),
				$ = t.n(L);
			const G = e => {
				let {
					vaults: a,
					userId: t
				} = e;
				const c = Object(r.d)(),
					[i, o] = Object(n.useState)(null),
					d = () => {
						o(null)
					};
				return l.a.createElement("div", {
					className: $.a.container
				}, l.a.createElement("div", {
					className: $.a.count
				}, l.a.createElement("h3", null, V.fbt._("# of Vaults: {Actual count of vaults}", [V.fbt._param("Actual count of vaults", a.length)], {
					hk: "Xj6O1"
				}))), function(e) {
					return e.sort((e, a) => {
						const t = new Date(e.createdAt);
						return new Date(a.createdAt).getTime() - t.getTime()
					})
				}(a).map(e => l.a.createElement(N, {
					key: e.address,
					title: l.a.createElement("div", {
						className: $.a.title
					}, l.a.createElement("h3", null, V.fbt._("{Vault address}", [V.fbt._param("Vault address", e.address)], {
						hk: "KfoRu"
					})), l.a.createElement("a", {
						href: `https://opensea.io/${e.address}?tab=collected&search[query]=reddit`,
						target: F.d.BLANK,
						rel: F.c
					}, V.fbt._("Opensea", null, {
						hk: "yGvTq"
					})), l.a.createElement("a", {
						href: `https://polygonscan.com/address/${e.address}`,
						target: F.d.BLANK,
						rel: F.c
					}, V.fbt._("Polyscan", null, {
						hk: "2FckKB"
					})), !e.hidden && l.a.createElement(E.f, {
						onClick: () => o(e)
					}, V.fbt._("Unlink", null, {
						hk: "13t1c4"
					}))),
					fields: e
				})), i && l.a.createElement(K.a, {
					actionText: V.fbt._("Unlink", null, {
						hk: "137gIo"
					}),
					modalText: V.fbt._("Unlink user's vault: {vault public address to be unlinked}", [V.fbt._param("vault public address to be unlinked", i.address)], {
						hk: "2MEIbi"
					}),
					onConfirm: () => (e => {
						c(Object(s.g)(e.network, t, e.address)), d()
					})(i),
					onCancel: d,
					toggleModal: d,
					withOverlay: !0
				}))
			};
			var H, W = t("./src/reddit/pages/EconManagement2/EMSearchResult/EMTransactionsTable/index.m.less"),
				X = t.n(W);
			! function(e) {
				e.ORDERS = "Orders", e.SUBSCRIPTIONS = "Subscriptions", e.PAYMENTS = "Payments", e.RECURRING_PAYMENTS = "Recurring Payments", e.VAULTS = "Vaults"
			}(H || (H = {}));
			const Y = e => {
				const {
					vaultInfo: a,
					userId: t
				} = e, [r, s] = Object(n.useState)(H.ORDERS), c = Object.values(H).map(e => l.a.createElement("button", {
					key: e,
					onClick: () => s(e),
					className: Object(O.a)(X.a.tab, {
						[X.a.selectedTab]: r === e
					})
				}, e));
				return l.a.createElement("div", {
					className: X.a.panel
				}, l.a.createElement("nav", null, c), l.a.createElement("div", {
					className: X.a.tableContainer
				}, (n => {
					switch (n) {
						case H.SUBSCRIPTIONS:
							return l.a.createElement(w, e);
						case H.VAULTS:
							return l.a.createElement(G, {
								vaults: a,
								userId: t
							});
						default:
							return null
					}
				})(r)))
			};
			var z = t("./src/reddit/pages/EconManagement2/EMSearchResult/index.m.less"),
				Z = t.n(z);
			const Q = e => {
					var a, t, n, l, r, s, c, i;
					const o = e => e && new Date(e).valueOf() ? e : "-";
					return {
						state: null === (a = e.state) || void 0 === a ? void 0 : a.value,
						grace_period: null === (t = e.grace_period) || void 0 === t ? void 0 : t.value,
						paid_status: null === (n = e.paid_status) || void 0 === n ? void 0 : n.value,
						started: o(null === (l = e.started) || void 0 === l ? void 0 : l.value),
						subscription_data: null === (r = e.subscription_data) || void 0 === r ? void 0 : r.value,
						subscription_id: null === (s = e.subscription_id) || void 0 === s ? void 0 : s.value,
						valid_until: o(null === (c = e.valid_until) || void 0 === c ? void 0 : c.value),
						will_renew: null === (i = e.will_renew) || void 0 === i ? void 0 : i.value
					}
				},
				q = () => {
					const e = Object(r.e)(u.b),
						a = Object(r.e)(u.c),
						t = Object(r.e)(u.d),
						n = e && (e => {
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
						s = e ? e.details.subscriptions.value.map(Q) : [],
						c = null == s ? void 0 : s.find(e => "ACTIVE" === e.state);
					return l.a.createElement("div", null, n && l.a.createElement(l.a.Fragment, null, l.a.createElement(h, {
						userData: n,
						redditorInfo: a
					}), l.a.createElement("div", {
						className: Z.a.moreDetailsSection
					}, l.a.createElement(I, {
						userData: n,
						activeSubscription: c
					}), (s || t) && l.a.createElement(Y, {
						subscriptions: s,
						vaultInfo: t,
						userId: n.id
					}))))
				};
			a.default = () => l.a.createElement("div", {
				className: o.a.container
			}, l.a.createElement("div", {
				className: o.a.searchContainer
			}, l.a.createElement(d, null)), l.a.createElement(q, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.66c3bd41f3bc09f9c818.js.map