// https://www.redditstatic.com/desktop2x/EconManagement.be05c576e993d0450aa6.js
// Retrieved at 11/2/2022, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconManagement"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./src/lib/currency/cleanNumber/index.ts");

			function c(e, t) {
				const a = Object(n.a)(e),
					c = parseInt(a) / 100;
				return Math.floor(c) !== c || t ? c.toFixed(2) : String(c)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/pages/EconManagement/JsonEMEntityView.async.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "JsonEMEntityView",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => a.e("JsonEMEntityView").then(a.bind(null, "./src/reddit/pages/EconManagement/JsonEMEntityView.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/pages/EconManagement/JsonEMEntityView.tsx"
				}
			}, {
				ssr: !1
			})
		},
		"./src/reddit/pages/EconManagement/customViews/EmUserView.m.less": function(e, t, a) {
			e.exports = {
				customUserViewContainer: "_10ZSKm2z9ZVhCv9XWCTCo1"
			}
		},
		"./src/reddit/pages/EconManagement/index.m.less": function(e, t, a) {
			e.exports = {
				container: "XfQjrr0cSxQLuafxwIGR0",
				searchBar: "_28_JbegjLHliqynQFlAx9k",
				title: "YktkjMIOZlpiMZ9a2Jw7f",
				tab: "_2RRB_AJcgQBZqKBJWktYSP",
				tabActive: "xa77sM02-9d8RCDKd3NH5",
				activeSection: "_3E9JrmSH9QdCkgvTcyBHPe",
				entityView: "_1mykTnLc9fdzm_vycyqnjf",
				relatedData: "_155wUSn-WBawfH5ceW0Ams",
				relatedDataHeader: "_2xJnXiZqHs13N3-XcRr0tQ",
				defaultViewRowWrapper: "_2OiPREj8Z4eu6i4LfMRrak",
				actionContainer: "XjpoomFiVbxNpoRPLm124",
				buttonContainer: "_1dFIPFAA4FW-ddPLDlx2P6",
				actionButton: "_3ImJJ8zFmmJuebT1zOu1cz",
				topLevelEntity: "_3Ix2AB0_jCR6QScB8yTY91",
				defaultViewRow: "SRPnA9tSbxzJrkAxRatop",
				nestedEntityRow: "_1KezDfHce4LPbONpFzd4PJ",
				defaultViewKey: "_2ycbqSArSfqsMLhNbIAeTP",
				sourceDataHeader: "lk5Mo_xFaiKBEBz2tVX01",
				defaultViewValue: "_24tei-lzgVDlr4mOP6QX2k",
				actionParamsContainer: "gbQbBSuVXToYuUTHEp78p",
				actionParamsHeading: "_3pBcr5LEg_PEUenQIbZE7S",
				actionParamRow: "_8BDcs_HpsJ1YaMB2cDA_u",
				actionParamInput: "_2YysR1LnB3wtJDPtjfS_wP"
			}
		},
		"./src/reddit/pages/EconManagement/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/lib/classNames/index.ts"),
				c = a("./node_modules/react/index.js"),
				r = a.n(c),
				s = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/reddit/models/EconManagement/index.ts"),
				i = a("./src/reddit/actions/economics/econManagement/index.ts"),
				o = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/lodash/isArray.js")),
				m = a.n(o);
			var u = a("./src/lib/currency/centsToDollars/index.ts");
			const d = (e, t) => {
				return `${"USD"===t?Object(u.a)(String(e),!0):e} ${t}`
			};
			var E = a("./src/higherOrderComponents/asModal/index.tsx"),
				y = a("./src/lib/envConfigParsing/index.ts"),
				v = a("./src/reddit/controls/Button/index.tsx"),
				b = a("./src/reddit/selectors/econManagement.ts"),
				p = a("./src/reddit/pages/EconManagement/index.m.less"),
				N = a.n(p);
			const g = e => {
					let {
						entity: t
					} = e;
					const a = Object(s.d)(),
						n = Object(s.e)(e => Object(b.c)(e, t.typename)),
						[l, o] = Object(c.useState)(null);
					if (!n.length || !t.entityId) return null;
					const m = `${t.typename}:${t.entityId}`;
					return r.a.createElement("div", {
						className: N.a.actionContainer
					}, t.typename, " actions:", " ", r.a.createElement("div", {
						className: N.a.buttonContainer
					}, n.map(e => r.a.createElement(v.t, {
						key: e.name,
						className: N.a.actionButton,
						onClick: () => (e => {
							t.entityId && (e.params || a(Object(i.a)(m, e.name)), o({
								params: e.params,
								name: e.name
							}))
						})(e)
					}, e.name))), l && r.a.createElement(j, {
						entityId: m,
						actionName: l.name,
						params: l.params,
						onClose: () => o(null),
						onOverlayClick: () => o(null),
						withOverlay: !0,
						className: N.a.actionsModalBody,
						overlayClassName: N.a.actionsModalOverlay
					}))
				},
				w = {
					string: "",
					number: "",
					boolean: !1
				},
				j = Object(E.a)(e => {
					let {
						params: t,
						actionName: a,
						entityId: n,
						onClose: l
					} = e;
					const o = Object(s.d)(),
						[m, u] = Object(c.useState)(Object.fromEntries(t.map(e => {
							let {
								name: t,
								type: a
							} = e;
							return [t, w[a]]
						}))),
						[d, E] = Object(c.useState)(!1);
					return r.a.createElement("div", {
						className: N.a.actionParamsContainer
					}, r.a.createElement("h3", {
						className: N.a.actionParamsHeading
					}, a), t.map(e => r.a.createElement("div", {
						key: e.name,
						className: N.a.actionParamRow
					}, r.a.createElement("label", {
						htmlFor: e.name
					}, e.name), "string" === e.type && r.a.createElement("input", {
						className: N.a.actionParamInput,
						id: e.name,
						type: "text",
						value: m[e.name] || "",
						onChange: t => ((e, t) => {
							u({
								...m,
								[e.name]: t
							})
						})(e, t.target.value)
					}), "number" === e.type && r.a.createElement("input", {
						className: N.a.actionParamInput,
						id: e.name,
						type: "string",
						value: m[e.name] || "",
						onChange: t => ((e, t) => {
							const a = Object(y.c)(t) || void 0;
							u({
								...m,
								[e.name]: a
							})
						})(e, t.target.value)
					}), "boolean" === e.type && r.a.createElement("input", {
						className: N.a.actionParamInput,
						id: e.name,
						type: "checkbox",
						value: m[e.name] || !1,
						checked: m[e.name] || !1,
						onChange: t => ((e, t) => {
							u({
								...m,
								[e.name]: t
							})
						})(e, t.target.checked)
					}))), r.a.createElement(v.t, {
						className: N.a.actionButton,
						onClick: async () => {
							E(!0), await o(Object(i.a)(n, a, m)), E(!1), l()
						},
						disabled: d
					}, "Execute"))
				});
			var f = a("./src/reddit/pages/EconManagement/JsonEMEntityView.async.tsx"),
				O = a("./src/reddit/pages/EconManagement/customViews/EmUserView.m.less"),
				h = a.n(O);
			const _ = {
				Duration: e => {
					let {
						entity: t
					} = e;
					return r.a.createElement("span", null, t.value.amount.value, " ", t.value.unit.value)
				},
				MoneyAmount: e => {
					let {
						entity: t
					} = e;
					return r.a.createElement("span", null, d(t.value.value.value, t.value.currency.value))
				},
				SelectedPrice: e => {
					let {
						entity: t
					} = e;
					return r.a.createElement("span", null, d(t.value.price.value, t.value.currency.value), ". Product Count: ", t.value.products_count.value)
				},
				User: e => {
					let {
						entity: t
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(g, {
						entity: t
					})), r.a.createElement("div", {
						className: h.a.customUserViewContainer
					}, r.a.createElement("div", {
						className: Object(n.a)(N.a.defaultViewRow, N.a.nestedEntityRow)
					}, r.a.createElement("h3", {
						className: N.a.defaultViewKey
					}, "User Data:"), r.a.createElement("div", {
						className: N.a.defaultViewValue
					}, r.a.createElement(x, {
						entity: t.userData,
						isNested: !0
					}))), r.a.createElement("div", {
						className: Object(n.a)(N.a.defaultViewRow, N.a.nestedEntityRow)
					}, r.a.createElement("h3", {
						className: N.a.defaultViewKey
					}, "Subscriptions:"), r.a.createElement("div", {
						className: N.a.defaultViewValue
					}, r.a.createElement(x, {
						entity: t.subscriptions,
						isNested: !0
					}))), r.a.createElement("div", {
						className: Object(n.a)(N.a.defaultViewRow, N.a.nestedEntityRow)
					}, r.a.createElement("h3", {
						className: N.a.defaultViewKey
					}, "Thing State:"), r.a.createElement("div", {
						className: N.a.defaultViewValue
					}, r.a.createElement(x, {
						entity: t.thingState,
						isNested: !0
					})))), r.a.createElement("h3", {
						className: h.a.sourceDataHeader
					}, "Source Data:"), r.a.createElement(f.a, {
						entityData: t
					}))
				}
			};
			const x = e => {
					let {
						entity: t,
						isNested: a
					} = e;
					const c = function(e) {
						return _[e] || null
					}(t.typename);
					return c ? c({
						entity: t
					}) : Object(l.c)(t) ? r.a.createElement("div", {
						className: Object(n.a)(N.a.defaultViewRowWrapper, {
							[N.a.topLevelEntity]: !a
						})
					}, r.a.createElement(g, {
						entity: t
					}), Object.entries(t).map(e => {
						let [t, a] = e;
						if (void 0 === a || "string" == typeof a) return null;
						const c = "object" == typeof a.value;
						return r.a.createElement("div", {
							className: Object(n.a)(N.a.defaultViewRow, {
								[N.a.nestedEntityRow]: c
							}),
							key: t
						}, r.a.createElement("h3", {
							className: N.a.defaultViewKey,
							title: t
						}, t, ":"), r.a.createElement("div", {
							className: N.a.defaultViewValue
						}, r.a.createElement(x, {
							entity: a,
							isNested: !0
						})))
					}), !a && r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: N.a.sourceDataHeader
					}, "Source Data:"), r.a.createElement(f.a, {
						entityData: t
					}))) : "object" != typeof t.value ? r.a.createElement("span", null, String(t.value)) : m()(t.value) ? Object(l.b)(t.value) ? r.a.createElement("div", null, t.value.join(",")) : r.a.createElement(r.a.Fragment, null, t.value.map((e, t) => r.a.createElement(x, {
						key: t,
						entity: e,
						isNested: !0
					}))) : Object(l.c)(t.value) ? r.a.createElement(x, {
						entity: t.value,
						isNested: !0
					}) : r.a.createElement("div", null, "UNABLE TO RENDER ", t.typename)
				},
				V = e => {
					let {
						activeTab: t
					} = e;
					const a = Object(s.d)(),
						n = Object(s.e)(e => Object(b.d)(e, t)),
						l = void 0 === n,
						o = null === n;
					return Object(c.useEffect)(() => {
						l && a(Object(i.b)(t))
					}, [l, a, t]), r.a.createElement("section", {
						className: N.a.activeSection
					}, l && r.a.createElement("h3", null, "Loading ", t, "s ..."), o && r.a.createElement("h3", null, "No associated ", t, "s found :("), r.a.createElement("div", {
						className: N.a.topLevelEntity
					}, n && r.a.createElement(x, {
						entity: n
					})))
				};
			var S = a("./src/reddit/controls/SearchBar/index.tsx");
			const D = () => {
				const [e, t] = Object(c.useState)(""), a = Object(s.d)(), n = () => {
					a(Object(i.f)(e))
				};
				return r.a.createElement(S.a, {
					className: N.a.searchBar,
					onSearch: n,
					onKeyPress: e => {
						13 === e.charCode && n()
					},
					onTextChange: e => {
						t(e.currentTarget.value)
					},
					value: e
				})
			};
			t.default = () => {
				const e = Object(s.e)(b.b),
					t = Object(s.e)(b.a),
					a = ((e, t) => t === l.a.Loading ? "Loading..." : e ? `${e.type}: ${e.id}` : "Enter id or username in the field above")(e, t),
					i = Object(s.e)(b.e),
					[o, m] = Object(c.useState)(null);
				return Object(c.useEffect)(() => {
					e || m(null)
				}, [e]), r.a.createElement("div", {
					className: N.a.container
				}, r.a.createElement(D, null), r.a.createElement("h2", {
					className: N.a.title
				}, a), e && r.a.createElement("div", {
					className: N.a.rootEntityWrapper
				}, r.a.createElement(x, {
					entity: e.details
				})), !!i.length && r.a.createElement("div", {
					className: N.a.relatedData
				}, r.a.createElement("h3", {
					className: N.a.relatedDataHeader
				}, "Related Data:"), i.map(e => r.a.createElement("div", {
					key: e,
					className: Object(n.a)(N.a.tab, {
						[N.a.tabActive]: e === o
					}),
					onClick: () => {
						m(e)
					}
				}, e, "s")), o && r.a.createElement(V, {
					activeTab: o
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement.be05c576e993d0450aa6.js.map